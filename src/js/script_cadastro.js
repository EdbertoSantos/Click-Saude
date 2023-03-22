/*
<a href="../../index.html" id="enviar">
*/

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

    validacao(nome,'nome')
    validacao(email,'email')
    validacao(senha,'senha')

    if (!Confirmação_de_Email) {
        alertaNAN('Confirmação_de_Email');
    } else {
        senhasIguais(email, Confirmação_de_Email, 'Confirmação_de_Email');
    }

    if (!Confirmação_de_Senha) {
        alertaNAN('Confirmação_de_Senha');
    } else {
        senhasIguais(senha, Confirmação_de_Senha, 'Confirmação_de_Senha');
    }

});

function validacao(input,localizacao) {
    if (!input) {
        alertaNAN(localizacao);
    } else {
        alertaOK(localizacao);
    }
}

function senhasIguais(local1, local2, local) {
    if (local1 == local2) {
        alertaOK(local)
    } else {
        alertaNAN(local)
    }
}

function alertaNAN(local) {
    document.getElementsByName(local)[0].placeholder = 'Insira ' + local;
    document.getElementById(local).style.border = "solid";
    document.getElementById(local).style.borderColor = "Red";
    document.getElementById(local).style.borderWidth = "1px";
}

function alertaOK(local) {
    document.getElementById(local).style.border = "solid";
    document.getElementById(local).style.borderColor = "rgba(0, 255, 110)";
    document.getElementById(local).style.borderWidth = "1px";
}