//Pesquisar item
const inputCodigo = document.getElementById("input-codigo") /**.value */
const inputNome = document.getElementById("input-nome") /**.value */
const btnProcurarItem = document.querySelector(".btn-procurar-item")
const selectCategoria = document.getElementById("select-categoria")
const checkCategoria = document.getElementById("check-categoria")

//Preview
const codigoPreview = document.querySelector(".codigo-preview")
const nomePreview = document.querySelector(".nome-preview")
const valorPreview = document.querySelector(".valor-preview")
const estoquePreview = document.querySelector(".estoque-preview")
const imgPreview = document.querySelector(".img-preview")
const arrowLeft = document.querySelector(".preview-arrow-left")
const arrowRight = document.querySelector(".preview-arrow-right")

//Adicionar ao carrinho
const inputQuant = document.getElementById("input-quant")
const btnAdicionarItem = document.querySelector(".btn-adicionar-item")
const tabelaCarrinho = document.querySelector(".tabela-carrinho")

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

function calculaTipo(item) {
    let estoque = ''
    if (item.constructor.name == "Racao") {
        estoque = `${item.estoqueSaco} sacos -> ${item.estoqueSaco * 15} quilos`
        return [item.valorKg, estoque] 
    } else {
        estoque = item.estoque + ' un.'
        return [item.valor, estoque] 
    }
}

//          === === === Main === === ===
function procuraItemPorNome(nome) {
    console.log('procurando por nome')
    itemAtual = listaItens.find(item => item.nome.toLowerCase().includes(nome.toLowerCase()))
    mostraItemPreview(itemAtual)
}

function procuraItemPorCodigo(codigo) {
    itemAtual = listaItens.find(item => item.codigoItem == codigo)
    mostraItemPreview(itemAtual)
}

function mostraItemPreview(item) {
    let previewCodigoItem = ''
    let previewNomeItem = ''
    let previewValorItem = ''
    let previewEstoqueItem = ''
    let previewUrlItem = ''

    if (item != undefined) {
        previewCodigoItem = item.codigoItem
        previewNomeItem = item.nome
        previewValorItem = calculaTipo(item)[0]
        previewEstoqueItem = calculaTipo(item)[1]
        previewUrlItem = verificaImgPreview(item)
    } else {
        previewCodigoItem = "Não encontrado"
        previewNomeItem = "Não encontrado"
        previewValorItem = "Não encontrado"
        previewEstoqueItem = "Não encontrado"
        previewUrlItem = '<img src="' + './img/erro-item-nao-encontrado.jpg' + '">'
    }
    codigoPreview.innerHTML = previewCodigoItem
    nomePreview.innerHTML = previewNomeItem;
    valorPreview.innerHTML = previewValorItem;
    estoquePreview.innerHTML = previewEstoqueItem;
    imgPreview.innerHTML = previewUrlItem;
}

function adicionarLinhaTabela(quant, index) {
    let estrutura = `
    <tr>
        <td>${carrinho[index].codigoItem}</td>
        <td>${carrinho[index].nome}</td>
        <td>${quant}</td>
        <td class="valor-item">${carrinho[index].valorKg}</td>
    </tr>
    `
    tabelaCarrinho.innerHTML += estrutura
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
        console.log('retornou a 0');
    }
    mostraItemPreview(itemAtual)
}


arrowLeft.onclick = function () {
    let listaAtual = checarLista()
    itemAtual = listaAtual[listaAtual.indexOf(itemAtual) - 1]
    if (itemAtual === undefined) {
        itemAtual = listaItens[listaItens.length -1]
        console.log('retornou ao max');
    }
    mostraItemPreview(itemAtual)
}


btnAdicionarItem.onclick = function () {
    listaItens[0].vendaAGranel(10)
    return
    let quant = inputQuant.value
    let itemCarrinho = structuredClone(listaItens[iItem])
    carrinho.push(itemCarrinho)
    console.log(carrinho)
    adicionarLinhaTabela(quant, carrinho.length - 1,)
}

window.onload = function () {
    const listaCategorias = ["Acessórios", "Brinquedos", "Rações"]
    const listaCategoriasDB = ["Acessorio", "Brinquedo", "Racao"]
    listaCategorias.forEach((item, index) => {
        selectCategoria.innerHTML += `<option value="${listaCategoriasDB[index]}">${item}</option>`
    });

}