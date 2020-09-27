const entrar = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');
const register = document.getElementById('facebook-register');
const invalidValues = document.getElementById('invalid');
const ifChecked = document.getElementById('genero-personalizado');

entrar.addEventListener('click', () => {
  alert(emailPhone.value);
});

function validateInputs() {
  const inputs = document.querySelectorAll('.forms input');
  let isntValid;
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      isntValid = true;
    }
  }
  return isntValid;
}

function validateRadios() {
  const radio = document.getElementsByName('gender');
  let isntChecked;
  for (let i = 0; i < radio.length; i += 1) {
    if (radio[i].checked === false) {
      isntChecked = true;
    }
  }
  return isntChecked;
}

function getGender() {
  const feminino = document.getElementById('feminino');
  const masculino = document.getElementById('masculino');
  if (feminino.checked) {
    return 'Feminino';
  } else if (masculino.checked) {
    return 'Masculino';
  }
  return 'Personalizado';
}

function reviewInputs() {
  const rightContent = document.getElementsByClassName('right-content');
  const name = document.getElementById('firstname');
  const lastName = document.getElementById('lastname');
  const phoneEmail = document.getElementsByClassName('phone_email');
  const birthDate = document.getElementById('birthdate');
  if (validateRadios() === true && validateInputs() === true) {
    invalidValues.innerText = 'Campos inválidos';
  } else {
    rightContent[0].innerHTML =
    `<div>
      <p>Olá, ${name.value} ${lastName.value}.</p>
      <p>Os dados informados são:</p>
      <p>- ${phoneEmail[0].value};</p>
      <p>- Data de Nascimento: ${birthDate.value};</p>
      <p>- Gênero: ${getGender()}</p>
    </div>`;
  }
}

register.addEventListener('click', reviewInputs);
ifChecked.addEventListener('click', () => {
  if (ifChecked.checked) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
    invalidValues.appendChild(newInput);
  }
});
