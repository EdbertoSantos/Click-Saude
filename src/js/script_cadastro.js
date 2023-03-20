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

    function alertaNAN(local) {
        document.getElementsByName(local)[0].placeholder = 'Insira ' + local;
        document.getElementById(local).style.border = "solid";
        document.getElementById(local).style.borderColor = "Red";
        document.getElementById(local).style.borderWidth = "2px";
    }

    function alertaOK(local) {
        document.getElementById(local).style.border = "solid";
        document.getElementById(local).style.borderColor = "rgba(0, 255, 110)";
        document.getElementById(local).style.borderWidth = "2px";
    }

    function valorOk(valor1, valor2, local) {
        if (valor1 == valor2) {
            return alertaOK(local)
        } else {
            return alertaNAN(local)
        }
    }

    if (!nome) {
        alertaNAN('nome');
    } else {
        alertaOK('nome')
    }

    if (!email) {
        alertaNAN('email');
    } else {
        alertaOK('email')
    }

    if (!Confirmação_de_Email) {
        alertaNAN('Confirmação_de_Email');
    } else {
        valorOk(email.value, Confirmação_de_Email.value, 'Confirmação_de_Email')
    }

    if (!senha) {
        alertaNAN('senha');
    } else {
        alertaOK('senha')
    }

    if (!Confirmação_de_Senha) {
        alertaNAN('Confirmação_de_Senha');
    } else {
        valorOk(senha.value, Confirmação_de_Senha.value, 'Confirmação_de_Senha')
    }

});

