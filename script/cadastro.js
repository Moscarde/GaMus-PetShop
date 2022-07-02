const selectCategoriaCadastro = document.getElementById("select-categoria-cadastro")
const cadastroRacao = document.querySelector(".categoria-racao")
const cadastroBrinquedo = document.querySelector(".categoria-brinquedo")
const cadastroAcessorio = document.querySelector(".categoria-acessorio")
const btnCadastro = document.querySelectorAll(".btn-cadastro")
//inputs Brinquedo
const cadastroBrinquedoNome = document.getElementById("cadastro-brinquedo-nome")
const cadastroBrinquedoEspecie = document.getElementById("cadastro-brinquedo-especie")
const cadastroBrinquedoQuantidade = document.getElementById("cadastro-brinquedo-quantidade")
const cadastroBrinquedoValor = document.getElementById("cadastro-brinquedo-valor")
//inputs Brinquedo
const cadastroAcessorioNome = document.getElementById("cadastro-acessorio-nome")
const cadastroAcessorioEspecie = document.getElementById("cadastro-acessorio-especie")
const cadastroAcessorioQuantidade = document.getElementById("cadastro-acessorio-quantidade")
const cadastroAcessorioValor = document.getElementById("cadastro-acessorio-valor")
//inputs Brinquedo
const cadastroRacaoNome = document.getElementById("cadastro-racao-nome")
const cadastroRacaoEspecie = document.getElementById("cadastro-racao-especie")
const cadastroRacaoSabor = document.getElementById("cadastro-racao-sabor")
const cadastroRacaoPesoSaco = document.getElementById("cadastro-racao-peso-saco")
const cadastroRacaoQuantidade = document.getElementById("cadastro-racao-quantidade")
const cadastroRacaoValorSaco = document.getElementById("cadastro-racao-valor-saco")
const cadastroRacaoValorKg = document.getElementById("cadastro-racao-valor-kg")

const cadastrarNovoItem = (categoria) => {
    if (categoria == "Racao") {
        const nome = cadastroRacaoNome.value
        const especie = cadastroRacaoEspecie.value
        const sabor = cadastroRacaoSabor.value
        const pesoSaco = cadastroRacaoPesoSaco.value
        const quantidade = cadastroRacaoQuantidade.value
        const valorSaco = cadastroRacaoValorSaco.value
        const valorKg = cadastroRacaoValorKg.value
        //nome, especie, sabor, pesoSaco, valorkg, valor saco, estoque saco, url img
        const novoItem = new Racao(nome, especie, sabor, pesoSaco, valorKg, valorSaco, quantidade, "./img/itens/img-item-cadastrado.jpg")
    }
    else if (categoria == "Brinquedo") {
        const nome = cadastroBrinquedoNome.value
        const especie = cadastroBrinquedoEspecie.value
        const quantidade = cadastroBrinquedoQuantidade.value
        const valor = cadastroBrinquedoValor.value
        const novoItem = new Brinquedo(nome, especie, valor, quantidade, "./img/itens/img-item-cadastrado.jpg")
        listaItens.push(novoItem)
        alert(`Item "${nome}" foi cadastrado com sucesso!`)

    }
    else if (categoria == "Acessorio") { //tem especie ****************************
        const nome = cadastroAcessorioNome.value
        const especie = cadastroAcessorioEspecie.value
        const quantidade = cadastroAcessorioQuantidade.value
        const valor = cadastroAcessorioValor.value
        const novoItem = new Acessorio(nome, especie, valor, quantidade, "./img/itens/img-item-cadastrado.jpg")
        listaItens.push(novoItem)
        alert(`Item "${nome}" foi cadastrado com sucesso!`)
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
const limpaInputs = () => {
    const inputList = document.querySelector(".cadastro").querySelectorAll("input")
    inputList.forEach(input => {
        input.value=""
    });
}

btnCadastro.forEach( btn => {
    btn.onclick = function () {
        cadastrarNovoItem(selectCategoriaCadastro.value)
        limpaInputs()
    }
})

