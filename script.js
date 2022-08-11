const loginBtn = document.querySelector('#login-button');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const loginEmail = document.querySelector('#login-email');
  const loginPassword = document.querySelector('#login-password');
  if (loginEmail.value === 'tryber@teste.com' && loginPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const textArea = document.querySelector('#input-name');

textArea.addEventListener('keyup', () => {
  console.log(500 - textArea.value.length);
});
