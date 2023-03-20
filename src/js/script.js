const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputLogin = e.target.querySelector('#login');
  const inputSenha = e.target.querySelector('#senha');

  const login = String(inputLogin.value);
  const senha = String(inputSenha.value);

  function alertaNAN(local) {
    document.getElementsByName(local)[0].placeholder = 'Insira um E-mail.';
    document.getElementById(local).style.border = "solid";
    document.getElementById(local).style.borderColor = "Red";
    document.getElementById(local).style.borderWidth = "2px";
  }

  function alertaOK(local) {
    document.getElementById(local).style.border = "solid";
    document.getElementById(local).style.borderColor = "rgba(0, 255, 110)";
    document.getElementById(local).style.borderWidth = "2px";
  }

  if (!login) {
    alertaNAN('login');
  } else {
    alertaOK('login')
  }

  if (!senha) {
    alertaNAN('senha');
  } else {
    alertaOK('senha')

  }

  if (senha && login) {
    alert('obrigado por realizar login')
  }

})
