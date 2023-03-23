const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNome = e.target.querySelector('#nome');
    const inputEmail = e.target.querySelector('#email');
    const inputOkemail = e.target.querySelector('#Confirmação_de_Email');
    const inputSenha = e.target.querySelector('#senha');
    const inputOksenha = e.target.querySelector('#Confirmação_de_Senha');

    const nome = String(inputNome.value);
    const email = String(inputEmail.value);
    const Confirmação_de_Email = String(inputOkemail.value);
    const senha = String(inputSenha.value);
    const Confirmação_de_Senha = String(inputOksenha.value);

    validacao(nome, 'nome')
    validacao(email, 'email')
    validacao(senha, 'senha')

    const validacaoEmail = Confirmação_de_Email == false ? alertaNAN('Confirmação_de_Email') : valoresIguais(email, Confirmação_de_Email, 'Confirmação_de_Email');
    const validacaoSenha = Confirmação_de_Senha == false ? alertaNAN('Confirmação_de_Senha') : valoresIguais(senha, Confirmação_de_Senha, 'Confirmação_de_Senha');

    if (validacaoEmail && validacaoSenha == true) {
        alert('obrigado por se cadastrar')
        window.location.href = '../../index.html';
    }

});

function validacao(input, localizacao) {
    if (!input) {
        alertaNAN(localizacao);
    } else {
        alertaOK(localizacao);
    }
}

function valoresIguais(local1, local2, local) {
    let saoIguais = local1 == local2 ? true : false;
    if (saoIguais) {
        alertaOK(local)
    } else {
        alertaNAN(local)
    }
    return saoIguais
}

function alertaNAN(local) {
    document.getElementsByName(local)[0].placeholder = 'Insira ' + local;
    document.getElementById(local).style.border = "solid";
    document.getElementById(local).style.borderColor = "Red";
    document.getElementById(local).style.borderWidth = "1px";
    return false

}

function alertaOK(local) {
    document.getElementById(local).style.border = "solid";
    document.getElementById(local).style.borderColor = "rgba(0, 255, 110)";
    document.getElementById(local).style.borderWidth = "1px";
    return true
}