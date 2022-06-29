let codigoItem = 0
class Item {
    constructor(nome, url) {
        this.nome = nome;
        this.codigoItem = ++codigoItem; //incrementação do código a cada novo Item
        this.url = url
    }
}

class Racao extends Item {
    constructor(nome, especie, valorKg, valorSaco, estoqueSaco, url) {
        super(nome, url)
        this.especie = especie;
        this.valorKg = valorKg;
        this.valorSaco = valorSaco;
        this.estoqueKg = estoqueSaco * 15
        this.estoqueSaco = this.estoqueKg / 15;
        this.categoria = this.constructor.name
    }
    vendaAGranel(quant) {
        this.estoqueKg -= quant
        this.estoqueSaco = Math.round(this.estoqueKg / 15)
    }

}
class Brinquedo extends Item {
    constructor(nome, especie, valor, estoque, url) {
        super(nome)
        this.especie = especie;
        this.valor = valor;
        this.estoque = estoque;
        this.categoria = this.constructor.name
    }
}
class Acessorio extends Item {
    constructor(nome, especie, valor, estoque, url) {
        super(nome)
        this.especie = especie;
        this.valor = valor;
        this.estoque = estoque;
        this.categoria = this.constructor.name
    }
}


//          ---Objetos---

const racaoFoster = new Racao("Ração Foster", "Cachorros", 8, 55, 10, "./img/racaofoster.png") //ração
const racaoPedigree = new Racao("Ração Pedigree", "Cachorros", 10, 60, 10, "./img/racaopedigree.png")
const racaoGolden = new Racao("Ração Golden", "Gatos", 16, 65, 15, "./img/racaogolden.png")
const ratinhoBorracha = new Brinquedo("Ratinho de borracha", "Gatos", 5, 30) //brinquedo
const ossoBorracha = new Brinquedo("Osso de borracha", "Cachorros", 8, 20)
const coleiraCachorro = new Acessorio("Coleira de cachorros", "Cachorros", 15, 10) //acessorios
const coleiraGato = new Acessorio("Coleira de gatos", "Gatos", 7, 10)

const listaItens = [racaoFoster, racaoPedigree, racaoGolden, ratinhoBorracha, ossoBorracha, coleiraCachorro, coleiraGato] //lista com todos os objetos

//console.log(listaItens[0].constructor.name)
console.log(listaItens);

// console.log(listaItens[0].nome.includes('Foster'))
//          ---Interação---
