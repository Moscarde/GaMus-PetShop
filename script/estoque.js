const tabelaEstoqueRacao = document.querySelector(".tabela-racao-linhas")
const tabelaEstoqueBrinquedo = document.querySelector(".tabela-brinquedo-linhas")
const tabelaEstoqueAcessorio = document.querySelector(".tabela-acessorio-linhas")

//atualizaEstoque está sendo chamada no index.js
//atualiza o estoque toda vez que for aberto a aba
const atualizaEstoque = () => {
    tabelaEstoqueRacao.innerHTML = ""
    tabelaEstoqueBrinquedo.innerHTML = ""
    tabelaEstoqueAcessorio.innerHTML = ""

    listaItens.forEach(item => {
        if (item.constructor.name == "Racao") {
            // <!--codigo especie nome pesosaco estoquesaco valorsaco valorkg -->
            let estrutura = ` 
                <tr>
                    <td>${item.codigoItem}</td>
                    <td>${item.especie}</td>
                    <td>${item.nome}</td>
                    <td>${item.pesoSaco} kg</td>
                    <td>${item.estoqueSaco}</td>
                    <td>${item.valorSaco}</td>
                    <td>${item.valorKg}</td>
                </tr>
                `
            tabelaEstoqueRacao.innerHTML += estrutura
        }
        else if (item.constructor.name == "Brinquedo") {
            let estrutura = ` 
                <tr>
                    <td>${item.codigoItem}</td>
                    <td>${item.nome}</td>
                    <td>${item.estoque}</td>
                    <td>${item.valor}</td>
                </tr>
                `
            tabelaEstoqueBrinquedo.innerHTML += estrutura
        }
        else if (item.constructor.name == "Acessorio") {
            let estrutura = ` 
                <tr>
                    <td>${item.codigoItem}</td>
                    <td>${item.nome}</td>
                    <td>${item.estoque}</td>
                    <td>${item.valor}</td>
                </tr>
                `
            tabelaEstoqueAcessorio.innerHTML += estrutura
        }
    }
    )
    
}