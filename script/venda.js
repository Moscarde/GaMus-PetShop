//Dados cliente
const inputClienteNome = document.getElementById("cliente-nome")
const inputClienteEndereco = document.getElementById("cliente-endereco")
const inputClienteTelefone = document.getElementById("cliente-telefone")
const selectCliente = document.getElementById("select-cliente")

//Pesquisar item
const inputCodigo = document.getElementById("input-codigo") /**.value */
const inputNome = document.getElementById("input-nome") /**.value */
const btnProcurarItem = document.querySelector(".btn-procurar-item")
const selectCategoria = document.getElementById("select-categoria")
const checkCategoria = document.getElementById("check-categoria")

//Preview
const infoPreview = document.querySelector(".preview-info")
const imgPreview = document.querySelector(".preview-img")
const arrowLeft = document.querySelector(".preview-arrow-left")
const arrowRight = document.querySelector(".preview-arrow-right")

//Adicionar ao carrinho
const inputQuant = document.getElementById("input-quant")
const selectTipo = document.getElementById("select-tipo")
const btnAdicionarItem = document.querySelector(".btn-adicionar-item")
const valorTotalSomado = document.querySelector(".th-valor-somado")

//Tabela
const tabelaCarrinho = document.querySelector(".tabela-carrinho-linhas")


const btnFecharCarrinho = document.querySelector(".btn-fechar-carrinho")


let itemAtual = ''
let carrinho = []
let listaFiltrada = []


//=== === === FUNCOES === === ===
//          === === === Calculos e redundancias === === ===

//atualiza o campo de clientes cadastrados --chamado no carregamento e na mudanca de aba
const atualizaClientes = () => {
    selectCliente.innerHTML = '<option value="" disabled="" selected="">Clientes cadastrados...</option>'
    listaClientes.forEach((cliente, index) =>{
        selectCliente.innerHTML += `<option value="${index}">${cliente.codigo} - ${cliente.nome}</option>`
    })
}

//limpa o campo oposto
inputNome.onfocus = function () {
    inputCodigo.value = ""
}

inputCodigo.onfocus = function () {
    inputNome.value = ""
}

//filtra os itens pelo valor do select ao trocar itens -- chamada pelo arrowLeft e arrowRigth onclick
const checarLista = function () {
    if (checkCategoria.checked) {
        return listaFiltrada
    } else {
        return listaItens
    }
}

//tratamento de erro caso url == undefined -- chamada pelo mostraItemPreview
const verificaImgPreview = item => {
    if (item.url != undefined) {
        const url = `<img src="${item.url}" alt="Imagem do item ${item.nome}">`
        return url
    }
    else {
        const url = '<img src="' + './img/itens/erro-img-nao-encontrada.jpg' + '">'
        return url
    }
}

//gera o trecho html de acordo com os parametros do item -- chamada pelo mostraItemPreview
const geraCodigoPreview = item => {
    let htmlCode = ''
    if (item.constructor.name != 'Racao') {
        htmlCode = `<p><strong>Código:</strong> ${item.codigoItem}</p>
        <p><strong>Nome:</strong> ${item.nome}</p>
        <p><strong>Valor:</strong> ${item.valor}</p>
        <p><strong>Estoque:</strong> ${item.estoque}</p>`
    } else {
        htmlCode = `<p><strong>Código:</strong> ${item.codigoItem}</p>
        <p><strong>Nome:</strong> ${item.nome}</p>
        <p><strong>Valor Kg:</strong> ${item.valorKg}</p>
        <p><strong>Valor Saco:</strong> ${item.valorSaco}</p>
        <p><strong>Estoque:</strong> ${item.estoqueSaco} sacos -> ${item.estoqueKg} quilos</p>`

    }
    return htmlCode
}

//troca as opçoes do select de tipo do item  -- chamada pelo mostraItemPreview
const mudaSelectTipo = item => {
    let selectHTML = ''
    if (item.constructor.name == "Racao") {
        selectHTML = `<option value="kg">kg</option>
        <option value="saco">Saco</option>`
    }
    else {
        selectHTML = `<option value="unidade">unidade</option>`
    }
    selectTipo.innerHTML = selectHTML
}

//tratamento de acordo com o item e coloca dados gerados no html -- chamada pelo arrowLeft ArrowRigth e pesquisas nome e codigo
const mostraItemPreview = item => {
    let previewHTML = ''

    if (item != undefined) {
        previewHTML = geraCodigoPreview(item)
        previewUrlItem = verificaImgPreview(item)
    } else {
        previewHTML = `<p><strong>Código:</strong> Item não encontrado</p>
        <p><strong>Nome:</strong> Item não encontrado</p>
        <p><strong>Valor:</strong> Item não encontrado</p>
        <p><strong>Estoque:</strong> Item não encontrado</p>`
        previewUrlItem = '<img src="' + './itens/img/erro-item-nao-encontrado.jpg' + '">'
    }

    infoPreview.innerHTML = previewHTML;
    imgPreview.innerHTML = previewUrlItem;
    mudaSelectTipo(item)
}

//=== === === FUNCOES === === ===
//          === === === Main === === ===
const procuraItemPorNome = nome => {
    console.log('procurando por nome')
    itemAtual = listaItens.find(item => item.nome.toLowerCase().includes(nome.toLowerCase()))
    mostraItemPreview(itemAtual)
}

const procuraItemPorCodigo = codigo => {
    itemAtual = listaItens.find(item => item.codigoItem == codigo)
    mostraItemPreview(itemAtual)
}

//recebe um item e adiona na tabela do carrinho -- chamado pelo adicionaItemCarrinho
const adicionaLinhaTabela = (novoItem, tipo) => {
    let estrutura = `
    <tr>
        <td>${novoItem.codigoItem}</td>
        <td>${novoItem.nome}</td>
        <td>${novoItem.quantidadeVenda}</td>
        <td>${tipo}</td>
        <td class="valor-item">${novoItem.valorVenda.toFixed(2)}</td>
    </tr>
    `
    tabelaCarrinho.innerHTML += estrutura
    
    //somando valores
    valorTotalSomado.innerHTML = ""
    const valorItemLista = document.querySelectorAll(".valor-item")
    let valorTotalCarrinho = 0
    valorItemLista.forEach(valor => {
        valorTotalCarrinho += Number(valor.innerHTML)
    });
    valorTotalSomado.innerHTML = valorTotalCarrinho.toFixed(2)
}

//checa estoque, adiciona o item no array carrinho e chama adicionaLinhaTabela
const adicionaItemCarrinho = (item, quant, tipo) => {
    let itemCarrinho = structuredClone(item)
    itemCarrinho.calculaVenda = item.calculaVenda

    if (!item.checaEstoque(quant, tipo)) {
        alert('Estoque insuficiente')
        return
    }
    itemCarrinho.calculaVenda(quant, tipo)
    carrinho.push(itemCarrinho)
    adicionaLinhaTabela(itemCarrinho, tipo)
}


//=== === === ONCLICK === === ===

//verifica inputs e chama procuraItemPor Nome || Codigo
btnProcurarItem.onclick = function () {
    if (inputCodigo.value == "") {
        //procurando por nome
        let nome = inputNome.value
        procuraItemPorNome(nome)
    }
    else if (inputNome.value == "") {
        //procurando por codigo
        let codigo = inputCodigo.value
        procuraItemPorCodigo(codigo)
    }
}

//procura item quando alterar o campo
inputCodigo.onkeyup = function () {
    const codigo = inputCodigo.value
    procuraItemPorCodigo(codigo)
}

//procura item quando alterar o campo
inputNome.onkeyup = function () {
    const nome = inputNome.value
    procuraItemPorNome(nome)
}

//filtra categoria
checkCategoria.onchange = function () {
    if (checkCategoria.checked) {
        mostraItemPreview(listaFiltrada[0])
    } else {
        mostraItemPreview(listaItens[0])
    }
}

//filtra categoria
selectCategoria.onchange = function () {
    listaFiltrada = listaItens.filter(obj => obj.categoria === selectCategoria.value)
    if (checkCategoria.checked) {
        mostraItemPreview(listaFiltrada[0])
    }
}

//item anterior e Proximo item
arrowRight.onclick = function () {
    let listaAtual = checarLista()
    itemAtual = listaAtual[listaAtual.indexOf(itemAtual) + 1]
    if (itemAtual === undefined) {
        itemAtual = listaAtual[0]
    }
    mostraItemPreview(itemAtual)
}
//item anterior e Proximo item
arrowLeft.onclick = function () {
    let listaAtual = checarLista()
    itemAtual = listaAtual[listaAtual.indexOf(itemAtual) - 1]
    if (itemAtual === undefined) {
        itemAtual = listaItens[listaItens.length - 1]
    }
    mostraItemPreview(itemAtual)
}

//coleta dados dos inputs e adiciona ao carrinho e atualiza preview
btnAdicionarItem.onclick = function () {
    let quantidade = inputQuant.value
    let tipo = selectTipo.value
    if (itemAtual === '') {
        alert('Item invalido')
        return
    }
    if (quantidade <= 0) {
        alert('Quantidade invalida')
        return
    }
    adicionaItemCarrinho(itemAtual, quantidade, tipo)
    mostraItemPreview(itemAtual)
}

//impressao
function imprimir() {
    var mywindow = window.open('', 'PRINT', 'height=920,width=1180');
    let html = `
    <html>
        <head>
            <link rel="stylesheet" href="./css/reset.css" />
            <link rel="stylesheet" href="./css/print.css" />
            <title>${document.title}  </title>
        </head>
        <body>
            <main>
                <h2 class="titulo">Dados Cliente</h2>
                <b>Nome: </b>${inputClienteNome.value}
                </br>
                <b>Endereço: </b>${inputClienteEndereco.value}
                </br>
                <b>Telefone: </b>${inputClienteTelefone.value}
                </br>
                </br>

                ${(document.querySelector(".carrinho").innerHTML)}
            </main>
        </body>
    </html>
            `
    mywindow.document.write(html)

    mywindow.document.close(); // necessary for IE >= 10
    // mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    // mywindow.close();

    return true;
    
}
btnFecharCarrinho.onclick = function () {
    console.log(carrinho);
    imprimir()
}



window.onload = atualizaClientes() 

selectCliente.onchange = function () {
    let index = selectCliente.value
    inputClienteNome.value = listaClientes[index].nome
    inputClienteEndereco.value = listaClientes[index].endereco
    inputClienteTelefone.value = listaClientes[index].telefone
}

//testes
// adicionaItemCarrinho(listaItens[2], 5, "kg")
// adicionaItemCarrinho(listaItens[4], 2, "saco")
// adicionaItemCarrinho(listaItens[6], 2, "kg")

