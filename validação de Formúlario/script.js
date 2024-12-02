const form = document.getElementById('form')
const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmaSenha = document.getElementById('confirmaSenha')

/// mapeamento dos efeitos
const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const pagina = document.querySelector('.pagina')

if (form)
    form.addEventListener("submit", (evt) => {
        evt.preventDefault()

        if (validarInputs()) {
            let usuario = nome.value
            h1.style.display = 'none'
            container.style.display = 'none'
            pagina.style.display = 'block'
            alert('O usuário ' + usuario + ' foi cadastrado com sucesso')

            // LIMPAR OS INPUTS
            limparinputs()

        } else {
            alert('Preencha todo o campo!')
        }

    })

function validarInputs() {
    const nomeValor = nome.value
    const sobrenomeValor = sobrenome.value
    const emailValor = email.value
    const senhaValor = senha.value
    const confirmaSenhaValor = confirmaSenha.value

    let FormularioValidacoa = true

    if (nomeValor === "") {
        erro(nome, "O campo é obrigatório")
        FormularioValidacoa = false
    } else {
        sucesso(nome)
    }

    if (sobrenomeValor === "") {
        erro(sobrenome, "O campo é obrigatório")
        FormularioValidacoa = false
    } else {
        sucesso(sobrenome)
    }

    if (emailValor === "") {
        erro(email, "O campo é obrigatório")
        FormularioValidacoa = false
    } else if (!checkEmail(emailValor)) {
        erro(email, "Por favor, insira um email válido")
        FormularioValidacoa = false
    } else {
        sucesso(email)
    }

    if (senhaValor === "") {
        erro(senha, "O campo é obrigatório")
        FormularioValidacoa = false
    } else if (senhaValor.length < 6) {
        erro(senha, "A senha deve ter no mínimo 6 caracteres")
        FormularioValidacoa = false
    } else
        sucesso(senha)


    if (confirmaSenhaValor === "") {
        erro(confirmaSenha, "O campo é obrigatório")
        FormularioValidacoa = false
    } else if (confirmaSenhaValor !== senhaValor) {
        erro(confirmaSenha, "As senhas não são iguais")
        FormularioValidacoa = false
    } else
        sucesso(confirmaSenha)

    return FormularioValidacoa
}

// função para limpar os inputs e limpar a borda verde quando clicar em voltar!!!
function limparinputs() {
    nome.value = ""
    sobrenome.value = ""
    email.value = ""
    senha.value = ""
    confirmaSenha.value = ""

    nome.parentElement.classList.remove('sucesso')
    sobrenome.parentElement.classList.remove('sucesso')
    email.parentElement.classList.remove('sucesso')
    senha.parentElement.classList.remove('sucesso')
    confirmaSenha.parentElement.classList.remove('sucesso')

}



// funções dos efeitos do botão de voltar
const btn = document.getElementById("btn")

btn.onclick = () => {
    h1.style.display = 'block'
    container.style.display = 'block'
     pagina.style.display = 'none'
}





// funções do inputs
function erro(input, mensagem) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    formControl.className = "form-control erro"

    small.innerHTML = mensagem
}

function sucesso(input) {
    const formControl = input.parentElement

    formControl.className = "form-control sucesso"
}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
