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

const textArea = document.querySelector('#textarea');

function counter() {
  const count = 500 - textArea.value.length;
  document.querySelector('#counter').innerText = count;
}
textArea.addEventListener('input', counter);

const checkBox = document.querySelector('#agreement');
checkBox.addEventListener('click', () => {
  const submintBtn = document.querySelector('#submit-btn');
  if (submintBtn.disabled) {
    submintBtn.disabled = false;
  } else {
    submintBtn.disabled = true;
  }
});
