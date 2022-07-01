const selectCategoriaCadastro = document.getElementById("select-categoria-cadastro")
const cadastroRacao = document.querySelector(".categoria-racao")
const cadastroBrinquedo = document.querySelector(".categoria-brinquedo")
const cadastroAcessorio = document.querySelector(".categoria-acessorio")
const btnCadastro = document.querySelectorAll(".btn-cadastro")
//inputs
const cadastroBrinquedoNome = document.getElementById("cadastro-brinquedo-nome")
const cadastroBrinquedoEspecie = document.getElementById("cadastro-brinquedo-especie")
const cadastroBrinquedoQuantidade = document.getElementById("cadastro-brinquedo-quantidade")
const cadastroBrinquedoValor = document.getElementById("cadastro-brinquedo-valor")

const cadastrarNovoItem = (categoria) => {
    if (categoria == "Racao") {
        console.log('cadastrar racao');
    }
    else if (categoria == "Brinquedo") {
        const nome = cadastroBrinquedoNome.value
        const especie = cadastroBrinquedoEspecie.value
        const quantidade = cadastroBrinquedoQuantidade.value
        const valor = cadastroBrinquedoValor.value
        const novoItem = new Brinquedo(nome, especie, valor, quantidade)
        listaItens.push(novoItem)
        console.log(listaItens);

    }
    else if (categoria == "Acessorio") {
        console.log('cadastrar racao');
    }
    
}



selectCategoriaCadastro.onchange = function () {
    let categoria = selectCategoriaCadastro.value

    cadastroRacao.classList.remove("visible") 
    cadastroBrinquedo.classList.remove("visible")
    cadastroAcessorio.classList.remove("visible")

    if (categoria == "Racao") {
        cadastroRacao.classList.add("visible")
    }
    else if (categoria == "Brinquedo") {
        cadastroBrinquedo.classList.add("visible")
    }
    else if (categoria == "Acessorio") {
        cadastroAcessorio.classList.add("visible")
    }
}

btnCadastro.forEach( btn => {
    btn.onclick = function () {
        cadastrarNovoItem(selectCategoriaCadastro.value)
    }
})

