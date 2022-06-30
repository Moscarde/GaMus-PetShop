//Pesquisar item
const inputCodigo = document.getElementById("input-codigo") /**.value */
const inputNome = document.getElementById("input-nome") /**.value */
const btnProcurarItem = document.querySelector(".btn-procurar-item")
const selectCategoria = document.getElementById("select-categoria")
const checkCategoria = document.getElementById("check-categoria")

//Preview
const infoPreview = document.querySelector(".info-preview")
const imgPreview = document.querySelector(".img-preview")
const arrowLeft = document.querySelector(".preview-arrow-left")
const arrowRight = document.querySelector(".preview-arrow-right")

//Adicionar ao carrinho
const inputQuant = document.getElementById("input-quant")
const selectTipo = document.getElementById("select-tipo")
const btnAdicionarItem = document.querySelector(".btn-adicionar-item")
const tabelaCarrinho = document.querySelector(".tabela-carrinho-linhas")
const tabelaEstoque = document.querySelector(".tabela-estoque-linhas")

const btnFecharCarrinho = document.querySelector(".btn-fechar-carrinho")

let itemAtual = ''
let carrinho = []
let listaFiltrada = []



//          === === === FUNCOES === === ===

//          === === === Calculos e redundancias === === ===

inputNome.onfocus = function () {
    inputCodigo.value = ""
}

inputCodigo.onfocus = function () {
    inputNome.value = ""
}

const checarLista = function () {
    if (checkCategoria.checked) {
        return listaFiltrada
    } else {
        return listaItens
    }
}
const verificaImgPreview = item => {
    if (item.url != undefined) {
        const url = '<img src="' + item.url + '">'
        return url
    }
    else {
        const url = '<img src="' + './img/erro-img-nao-encontrada.jpg' + '">'
        return url
    }
}

const geraCodigoCategoria = item =>{
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

const mostraItemPreview = item => {
    let previewHTML = ''

    if (item != undefined) {
        previewHTML = geraCodigoCategoria(item)
        previewUrlItem = verificaImgPreview(item)
    } else {
        previewHTML = `<p><strong>Código:</strong> Item não encontrado</p>
        <p><strong>Nome:</strong> Item não encontrado</p>
        <p><strong>Valor:</strong> Item não encontrado</p>
        <p><strong>Estoque:</strong> Item não encontrado</p>`
        previewUrlItem = '<img src="' + './img/erro-item-nao-encontrado.jpg' + '">'
    }
    
    infoPreview.innerHTML = previewHTML;
    imgPreview.innerHTML = previewUrlItem;
    mudaSelectTipo(item)
}

const adicionaLinhaTabela = (novoItem, tipo) => {
    let estrutura = `
    <tr>
        <td>${novoItem.codigoItem}</td>
        <td>${novoItem.nome}</td>
        <td>${novoItem.quantidadeVenda}</td>
        <td>${tipo}</td>
        <td class="valor-item">${novoItem.valorVenda}</td>
    </tr>
    `
    tabelaCarrinho.innerHTML += estrutura
}

const adicionaCarrinho = (item, quant, tipo) => {
    let itemCarrinho = structuredClone(item)
    itemCarrinho.calculaVenda = item.calculaVenda

    if (!item.checaEstoque(quant, tipo)) {
        console.log('Estoque insuficiente')
        return
    }
    itemCarrinho.calculaVenda(quant, tipo)
    carrinho.push(itemCarrinho)
    adicionaLinhaTabela(itemCarrinho, tipo)
}

const atualizaEstoque = () => {
    console.log('kk');
    listaItens.forEach(item => {
        let estrutura = `
    <tr>
        <td>${item.codigoItem}</td>
        <td>${item.nome}</td>
        <td>${item.quantidadeVenda}</td>
        <td>kkkkkkkkkk</td>
        <td class="valor-item">${item.valorVenda}</td>
    </tr>
    `
    tabelaEstoque.innerHTML += estrutura
    })
}


//          === === === ONCLICK === === ===
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
inputCodigo.onkeyup = function () {
    const codigo = inputCodigo.value
    procuraItemPorCodigo(codigo)
}
inputNome.onkeyup = function () {
    const nome = inputNome.value
    procuraItemPorNome(nome)
}
checkCategoria.onchange = function () {
    if (checkCategoria.checked) {
        mostraItemPreview(listaFiltrada[0])
    } else {
        mostraItemPreview(listaItens[0])
    }
}
selectCategoria.onchange = function () {
    listaFiltrada = listaItens.filter(obj => obj.categoria === selectCategoria.value)
    if (checkCategoria.checked) {
        mostraItemPreview(listaFiltrada[0])
    }
}

//  Item anterior e Proximo item
arrowRight.onclick = function () {
    let listaAtual = checarLista()
    itemAtual = listaAtual[listaAtual.indexOf(itemAtual) + 1]
    if (itemAtual === undefined) {
        itemAtual = listaAtual[0]
    }
    mostraItemPreview(itemAtual)
}

arrowLeft.onclick = function () {
    let listaAtual = checarLista()
    itemAtual = listaAtual[listaAtual.indexOf(itemAtual) - 1]
    if (itemAtual === undefined) {
        itemAtual = listaItens[listaItens.length -1]
    }
    mostraItemPreview(itemAtual)
}

btnAdicionarItem.onclick = function () {
    let quantidade = inputQuant.value
    let tipo = selectTipo.value
    adicionaCarrinho(itemAtual, quantidade, tipo)
    mostraItemPreview(itemAtual)
}

btnFecharCarrinho.onclick = function () {
    console.log(carrinho);
}
window.onload = function () {
    const listaCategorias = ["Acessórios", "Brinquedos", "Rações"]
    const listaCategoriasDB = ["Acessorio", "Brinquedo", "Racao"]
    listaCategorias.forEach((item, index) => {
        selectCategoria.innerHTML += `<option value="${listaCategoriasDB[index]}">${item}</option>`
    });

}