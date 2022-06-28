//Pesquisar item
const inputCodigo = document.getElementById("input-codigo") /**.value */
const inputNome = document.getElementById("input-nome") /**.value */
const btnProcurarItem = document.querySelector(".btn-procurar-item")

//Preview
const nomePreview = document.querySelector(".nome-preview")
const valorPreview = document.querySelector(".valor-preview")
const imgPreview = document.querySelector(".img-preview")
const arrowLeft = document.querySelector(".preview-arrow-left")
const arrowRight = document.querySelector(".preview-arrow-right")

//Adicionar ao carrinho
const inputQuant = document.getElementById("input-quant")
const btnAdicionarItem = document.querySelector(".btn-adicionar-item")
const tabelaCarrinho = document.querySelector(".tabela-carrinho")

let nomeItem = " "
let valorItem = 0
let urlItem = ""
let iItem = ""
let carrinho = []

inputNome.onfocus = function () {
    inputCodigo.value = ""
}

inputCodigo.onfocus = function () {
    inputNome.value = ""
}

//          === === === FUNCOES === === ===
function procuraItemPorNome(nome) {
    console.log('procurando por nome')
    let item = listaItens.find(item => item.nome.toLowerCase().includes(nome.toLowerCase()))
    mostraItemPreview(item)
}

function procuraItemPorCodigo(codigo) {
    let item = listaItens.find(item => item.codigoItem == codigo)
    mostraItemPreview(item)
}

function mostraItemPreview(item) {
    if (item != undefined) {
        nomeItem = item.nome
        valorItem = item.valorKg
        urlItem = '<img src="' + item.url + '">'
    
    } else {
        nomeItem = "Não encontrado"
        valorItem = "Não encontrado"
        urlItem = '<img src="' + './img/erro.jpg' + '">'
    }
    nomePreview.innerHTML = nomeItem;
    valorPreview.innerHTML = valorItem;
    imgPreview.innerHTML = urlItem;
}

function trataCoisas(i) {
    

    //console.log(nomeItem, valorItem, urlItem);

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

btnAdicionarItem.onclick = function () {
    let quant = inputQuant.value
    let itemCarrinho = structuredClone(listaItens[iItem])
    carrinho.push(itemCarrinho)
    console.log(carrinho)
    adicionarLinhaTabela(quant, carrinho.length - 1,)
}

