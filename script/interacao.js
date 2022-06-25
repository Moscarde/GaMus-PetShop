
const btnProcurarItem = document.querySelector(".btn-procurar-item")
const btnAdicionarItem = document.querySelector(".btn-adicionar-item")
const nomePreview = document.querySelector(".nome-preview")
const valorPreview = document.querySelector(".valor-preview")
const imgPreview = document.querySelector(".img-preview")
const inputCodigo = document.getElementById("input-codigo") /**.value */
const inputQuant = document.getElementById("input-quant")
const tabelaCarrinho = document.querySelector(".tabela-carrinho")

let nomeItem = " "
let valorItem = 0
let urlItem = ""
let iItem = ""

btnProcurarItem.onclick = function () {
    iItem = inputCodigo.value - 1
    trataCoisas(iItem)
    nomePreview.innerHTML = nomeItem;
    valorPreview.innerHTML = valorItem;
    imgPreview.innerHTML = urlItem;

}


function trataCoisas(i) {
    nomeItem = listaItens[i].nome
    valorItem = listaItens[i].valorKg
    urlItem = '<img src="' + listaItens[i].url + '">'

    //console.log(nomeItem, valorItem, urlItem);

}

let carrinho = []
btnAdicionarItem.onclick = function () {
    let quant = inputQuant.value
    let itemCarrinho = structuredClone(listaItens[iItem])
    carrinho.push(itemCarrinho)
    console.log(carrinho)
    adicionarLinhaTabela(quant, carrinho.length-1, )
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