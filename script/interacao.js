
const btnProcurarItem = document.querySelector(".btn-procurar-item") 
const btnAdicionarItem = document.querySelector(".btn-adicionar-item") 
const nomePreview = document.querySelector(".nome-preview") 
const valorPreview = document.querySelector(".valor-preview")
const imgPreview = document.querySelector(".img-preview")
const inputCodigo = document.getElementById("input-codigo") /**.value */


let nomeItem = " "
let valorItem = 0
let urlItem = ""


btnProcurarItem.onclick = function () {
    let iItem = inputCodigo.value
    trataCoisas(iItem)
    nomePreview.innerHTML = nomeItem;
    valorPreview.innerHTML = valorItem;
    imgPreview.innerHTML = urlItem;

}

function trataCoisas(i) {
    nomeItem = listaItens[i].nome
    valorItem = listaItens[i].valorKg
    urlItem = '<img src="' + listaItens[i].url + '">'
    
    console.log(nomeItem, valorItem, urlItem);

}