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

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const form = document.getElementById('evaluation-form');
const main = document.getElementById('main');
const familia = document.querySelector('input[name="family"]:checked').value;
const materias = document.querySelectorAll('.subject:checked');
const mArr = Array.from(materias);
const notaMarcada = document.querySelector('input[name="rate"]:checked').value;
const comentario = document.getElementById('textarea');
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (ev) => {
  ev.preventDefault();

  const formData = document.createElement('div');
  formData.id = 'form-data';
  formData.innerHTML = `
    <p>Nome: ${nome.value} ${sobrenome.value}</p>
    <p>Email: ${email.value}</p>
    <p>Casa: ${casa.value}</p>
    <p>Família: ${familia}</p>
    <p>Matérias: ${mArr.map((el) => ` ${el.value}`)}</p>
    <p>Avaliação: ${notaMarcada}</p>
    <p>Observações: ${comentario.value}</p>
  `;

  form.style.display = 'none';
  main.insertBefore(formData, main.firstChild);
});
