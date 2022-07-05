const inputCadastroClienteNome = document.getElementById("cadastro-cliente-nome")
const inputCadastroClienteEndereco = document.getElementById("cadastro-cliente-endereco")
const inputCadastroClienteTelefone = document.getElementById("cadastro-cliente-telefone")
const btnCadastroCliente = document.querySelector(".btn-cadastro-cliente")



//salva os campos num novo objeto
btnCadastroCliente.onclick = function () {
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

    if (verificaInput(".cadastro-cliente-campo")) {
        return
    }
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

