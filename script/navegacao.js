const navVendas = document.getElementById("nav-vendas")
const navEstoque = document.getElementById("nav-estoque")
const navCadastro = document.getElementById("nav-cadastro")
const navCadastroCliente = document.getElementById("nav-cadastro-cliente")
const painelVendas = document.querySelector(".painel-vendas")
const painelEstoque = document.querySelector(".painel-estoque")
const painelCadastro = document.querySelector(".painel-cadastro")
const painelCadastroCliente = document.querySelector(".painel-cadastro-cliente")


painelList = [painelVendas, painelEstoque, painelCadastro, painelCadastroCliente]
navList = [navVendas, navEstoque, navCadastro, navCadastroCliente]

//troca o painel e o visual da aba
function switchPainel(painel, nav) {
    //removendo classe de todos
    painelList.forEach(element => {
        element.classList.remove('visible')
    });
    navList.forEach(element => {
        element.classList.remove('nav-ativo')
    })

    //aplicando classe nos selecionados
    painel.classList.add('visible')
    nav.classList.add('nav-ativo')
    
}

navVendas.onclick = function () {
    switchPainel(painelVendas, this)
    atualizaClientes()
}
navEstoque.onclick = function () {
    switchPainel(painelEstoque, this)
    atualizaEstoque()
}
navCadastro.onclick = function () {
    switchPainel(painelCadastro, this)
}
navCadastroCliente.onclick = function () {
    switchPainel(painelCadastroCliente, this)
}


// tecla.classList.remove ('ativa')