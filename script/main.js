let codigoItem = 0
class Item {
    constructor(nome, url) {
        this.nome = nome;
        this.codigoItem = ++codigoItem; //incrementação do código a cada novo Item
        this.url = url
    }
}

class Racao extends Item {
    constructor(nome, especie, sabor, pesoSaco, valorKg, valorSaco,  estoqueSaco, url) {
        super(nome, url)
        this.especie = especie;
        this.sabor = sabor;
        this.pesoSaco = pesoSaco
        this.valorKg = valorKg;
        this.valorSaco = valorSaco;
        this.estoqueKg = estoqueSaco * pesoSaco;
        this.estoqueSaco = estoqueSaco;
        this.categoria = this.constructor.name
    }
    checaEstoque(quant, tipo) {
        if (tipo === 'kg') {
            if (this.estoqueKg >= quant) {
                this.estoqueKg -= quant
                this.estoqueSaco = Math.floor(this.estoqueKg / this.pesoSaco)
                return true
            } else {
                return false
            }
        }
        else if (tipo === 'saco') {
            if (this.estoqueSaco >= quant) {
                this.estoqueSaco -= quant
                this.estoqueSaco = Math.round(this.estoqueKg / 15)
                return true
            } else {
                return false
            }
        }
    }
    calculaVenda(quant, tipo) {
        if (tipo === 'kg') {
            this.valorVenda = quant * this.valorKg
        }
        else if (tipo === 'saco') {
            this.valorVenda = quant * this.valorSaco
        }
        this.quantidadeVenda = quant
    }

}
class Brinquedo extends Item {
    constructor(nome, especie, valor, estoque, url) {
        super(nome, url)
        this.especie = especie;
        this.valor = valor;
        this.estoque = estoque;
        this.categoria = this.constructor.name
    }
    calculaVenda(quant, _) {
        this.quantidadeVenda = quant
        this.valorVenda = quant * this.valor
    }
    checaEstoque(quant, _) {
        if (this.estoque >= quant) {
            this.estoque -= quant
            return true
        } else {
            return false
        }
    }
}
class Acessorio extends Item {
    constructor(nome, especie, valor, estoque, url) {
        super(nome, url)
        this.especie = especie;
        this.valor = valor;
        this.estoque = estoque;
        this.categoria = this.constructor.name
    }
    calculaVenda(quant, _) {
        this.quantidadeVenda = quant
        this.valorVenda = quant * this.valor
    }
    checaEstoque(quant, _) {
        if (this.estoque >= quant) {
            this.estoque -= quant
            return true
        } else {
            return false
        }
    }
}


//          ---Objetos---
//nome, especie, sabor, pesoSaco, valorkg, valor saco, estoque saco, url img
//racao cahorros 
const RCNutrilusProAdultos = new Racao("Ração Nutrilus Pro - Adultos - 15kg", "Cachorros", "Frango e Carne", 15, 8, 125, 15, "./img/itens/cachorro-nutrilus-pro-adultos.jpg")
const RCMagnusAdultos = new Racao("Ração Magnus - Adultos - 25kg", "Cachorros", "Carne", 25, 8, 200, 10, "./img/itens/cachorro-magnus-adultos.jpg")
const RCGranPlusAdultos = new Racao("Ração GranPlus - Adultos - 20kg", "Cachorros", "Frango", 20, 10, 200, 10, "./img/itens/cachorro-granplus-adultos.jpg")
const RCGranPlusFilhotes = new Racao("Ração GranPlus - Filhotes - 20kg", "Cachorros", "Carne e Arroz", 20, 10, 213, 10, "./img/itens/cachorro-granplus-filhotes.jpg")
const RCSpecialDogAdultos = new Racao("Ração Special Dog - Adultos - 20kg", "Cachorros", "Carne", 20, 10, 164, 10, "./img/itens/cachorro-special-dog-adultos.jpg")
//racao gatos
const RGNutrilusProAdultosCastrados = new Racao("Ração Nutrilus Pro - Adultos Castrados - 10kg", "Gatos", "Salmão", 10, 16, 138, 20, "./img/itens/gato-nutrilus-pro-adultos-castrados.jpg")
const RGNutrilusProAdultos = new Racao("Ração Nutrilus Pro - Adultos - 10kg", "Gatos", "Carne", 10, 16, 128, 20, "./img/itens/gato-nutrilus-pro-adultos.jpg")
const RGPremierPetFilhotes = new Racao("Ração PremierPet Golden - Filhotes - 10kg", "Gatos", "Frango", 10, 16, 142, 20, "./img/itens/gato-premierpet-filhotes.jpg")
const RGPremierPetAdultosCastrados = new Racao("Ração PremierPet Golden - Adultos Castrados - 10kg", "Gatos", "Carne", 10, 16, 142, 20, "./img/itens/gato-premierpet-adultos-castrados.jpg")
const RGGranPlusAdultosCastrados = new Racao("Ração GranPlus - Adultos Castrados - 10kg", "Gatos", "Salmão e Arroz", 10, 16, 142, 20, "./img/itens/gato-granplus-adultos-castrados.jpg")

//brinquedos
const BBolinha = new Brinquedo("Bolinha de borracha vermelha", "Cachorros", 5, 20, "./img/itens/brinquedo-bolinha.jpg")
const BFrango = new Brinquedo("Frango gritador", "Cachorros", 10, 15, "./img/itens/brinquedo-frango.jpg")
const BMacaco = new Brinquedo("Macaco de pelucia", "Cachorros", 20, 10, "./img/itens/brinquedo-macaco-pelucia.jpg")
const BOsso = new Brinquedo("Osso de plastico vermelho", "Cachorros", 8, 20, "./img/itens/brinquedo-osso-plastico.jpg")
const BBolinhaPena = new Brinquedo("Bolinha de plastico com penas", "Gatos", 5, 20, "./img/itens/brinquedo-bolinha-pena.jpg")
const BRatinhoACorda = new Brinquedo("Ratinho à corda", "Gatos", 10, 20, "./img/itens/brinquedo-ratinho-a-corda.jpg")

//acessorios
const ACaminhaAzul = new Acessorio("Caminha azul para médio porte", "Cachorros e Gatos", 50, 5, "./img/itens/acessorio-caminha-azul.jpg")
const ACaminhaRosa = new Acessorio("Caminha rosa para pequeno porte", "Cachorros e Gatos", 40, 5, "./img/itens/acessorio-caminha-rosa.jpg")
const ACasinha = new Acessorio("Casinha de madeira para médio porte", "Cachorros e Gatos", 150, 5, "./img/itens/acessorio-casinha.jpg")

//lista com todos os objetos
const listaItens = [RCNutrilusProAdultos, RCMagnusAdultos, RCGranPlusAdultos, RCGranPlusFilhotes, RCSpecialDogAdultos, RGNutrilusProAdultosCastrados, RGNutrilusProAdultos, RGPremierPetFilhotes, RGPremierPetAdultosCastrados, RGGranPlusAdultosCastrados, BBolinha, BFrango, BMacaco, BOsso, BBolinhaPena, BRatinhoACorda, ACaminhaAzul, ACaminhaRosa, ACasinha]

//testes
//console.log(listaItens[0].constructor.name)
console.log(listaItens);

// console.log(listaItens[0].nome.includes('Foster'))
//          ---Interação---
