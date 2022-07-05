//navegacao e visual
const selectCategoriaCadastro = document.getElementById("select-categoria-cadastro")
const cadastroRacao = document.querySelector(".categoria-racao")
const cadastroBrinquedo = document.querySelector(".categoria-brinquedo")
const cadastroAcessorio = document.querySelector(".categoria-acessorio")
const btnCadastroList = document.querySelectorAll(".btn-cadastro")

//inputs Brinquedo
const cadastroBrinquedoNome = document.getElementById("cadastro-brinquedo-nome")
const cadastroBrinquedoEspecie = document.getElementById("cadastro-brinquedo-especie")
const cadastroBrinquedoQuantidade = document.getElementById("cadastro-brinquedo-quantidade")
const cadastroBrinquedoValor = document.getElementById("cadastro-brinquedo-valor")

//inputs Acessorio
const cadastroAcessorioNome = document.getElementById("cadastro-acessorio-nome")
const cadastroAcessorioEspecie = document.getElementById("cadastro-acessorio-especie")
const cadastroAcessorioQuantidade = document.getElementById("cadastro-acessorio-quantidade")
const cadastroAcessorioValor = document.getElementById("cadastro-acessorio-valor")

//inputs Racao
const cadastroRacaoNome = document.getElementById("cadastro-racao-nome")
const cadastroRacaoEspecie = document.getElementById("cadastro-racao-especie")
const cadastroRacaoSabor = document.getElementById("cadastro-racao-sabor")
const cadastroRacaoPesoSaco = document.getElementById("cadastro-racao-peso-saco")
const cadastroRacaoQuantidade = document.getElementById("cadastro-racao-quantidade")
const cadastroRacaoValorSaco = document.getElementById("cadastro-racao-valor-saco")
const cadastroRacaoValorKg = document.getElementById("cadastro-racao-valor-kg")

//=== === === FUNCOES === === ===

//faz o cadastro de um novo item no banco de dados
const cadastrarNovoItem = (categoria) => {
    const verificaInput = campo => {
        let inputs = document.querySelector(campo).getElementsByTagName("input")
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == "") {
                alert("Todos os campos precisam ser preenchidos!")
                return true
            } else {
                return false
            }
        }
    }

    if (categoria == "Racao") {
        if (verificaInput(".cadastro-racao")) {
            return
        }
        const nome = cadastroRacaoNome.value
        const especie = cadastroRacaoEspecie.value
        const sabor = cadastroRacaoSabor.value
        const pesoSaco = cadastroRacaoPesoSaco.value
        const quantidade = cadastroRacaoQuantidade.value
        const valorSaco = cadastroRacaoValorSaco.value
        //nome, especie, sabor, pesoSaco, valorkg, valor saco, estoque saco, url img
        const novoItem = new Racao(nome, especie, sabor, pesoSaco, Number(valorSaco), quantidade, "./img/itens/img-item-cadastrado.jpg")
        listaItens.push(novoItem)
        alert(`Item "${nome}" foi cadastrado com sucesso!`)
    }
    else if (categoria == "Brinquedo") {
        if (verificaInput(".cadastro-brinquedo")) {
            return
        }
        const nome = cadastroBrinquedoNome.value
        const especie = cadastroBrinquedoEspecie.value
        const quantidade = cadastroBrinquedoQuantidade.value
        const valor = cadastroBrinquedoValor.value
        const novoItem = new Brinquedo(nome, especie, Number(valor), quantidade, "./img/itens/img-item-cadastrado.jpg")
        listaItens.push(novoItem)
        alert(`Item "${nome}" foi cadastrado com sucesso!`)

    }
    else if (categoria == "Acessorio") { 
        if (verificaInput(".cadastro-acessorio")) {
            return
        }
        const nome = cadastroAcessorioNome.value
        const especie = cadastroAcessorioEspecie.value
        const quantidade = cadastroAcessorioQuantidade.value
        const valor = cadastroAcessorioValor.value
        const novoItem = new Acessorio(nome, especie, Number(valor), quantidade, "./img/itens/img-item-cadastrado.jpg")
        listaItens.push(novoItem)
        alert(`Item "${nome}" foi cadastrado com sucesso!`)
    }
    
}

//limpa todos os inputs do cadastro após clique no botao
const limpaInputs = () => {
    const inputList = document.querySelector(".cadastro").querySelectorAll("input")
    inputList.forEach(input => {
        input.value=""
    });
}



//=== === === ONCLICK === === ===

//altera entre os formularios das categorias
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

//chama a funcao de cadastro e limpa inputs
btnCadastroList.forEach( btn => {
    btn.onclick = function () {
        cadastrarNovoItem(selectCategoriaCadastro.value)
        limpaInputs()
    }
})

