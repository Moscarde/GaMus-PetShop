const navVendas = document.querySelector(".nav-vendas")
const navEstoque = document.querySelector(".nav-estoque")
const navCadastro = document.querySelector(".nav-cadastro")
const painelVendas = document.querySelector(".painel-vendas")
const painelEstoque = document.querySelector(".painel-estoque")
const painelCadastro = document.querySelector(".painel-cadastro")


painelList = [painelVendas, painelEstoque, painelCadastro]
navList = [navVendas, navEstoque, navCadastro]

function switchPainel(painel, nav) {
    //removendo classe de todos
    painelList.forEach(element => {
        element.classList.remove('painel-ativo')
    });
    navList.forEach(element => {
        element.classList.remove('nav-ativo')
    })

    //aplicando classe nos selecionados
    painel.classList.add('painel-ativo')
    nav.classList.add('nav-ativo')
    
}

navVendas.onclick = function () {
    switchPainel(painelVendas, this)
}
navEstoque.onclick = function () {
    switchPainel(painelEstoque, this)
}
navCadastro.onclick = function () {
    switchPainel(painelCadastro, this)
}


// tecla.classList.remove ('ativa')