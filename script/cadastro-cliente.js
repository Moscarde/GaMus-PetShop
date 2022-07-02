const inputCadastroClienteNome = document.getElementById("cadastro-cliente-nome")
const inputCadastroClienteEndereco = document.getElementById("cadastro-cliente-endereco")
const inputCadastroClienteTelefone = document.getElementById("cadastro-cliente-telefone")
const btnCadastroCliente = document.querySelector(".btn-cadastro-cliente")


//salva os campos num novo objeto
btnCadastroCliente.onclick = function () {
    const nome = inputCadastroClienteNome.value
    const endereco = inputCadastroClienteEndereco.value
    const telefone = inputCadastroClienteTelefone.value
    const novoCliente = new Cliente(nome, endereco, telefone)

    listaClientes.push(novoCliente)
    alert(`Cliente "${nome}" foi cadastrado com sucesso!`)

    inputCadastroClienteNome.value = ""
    inputCadastroClienteEndereco.value = ""
    inputCadastroClienteTelefone.value = ""
}

