const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(document.querySelector('#user-email-phone').value);
});

function validateRadios() {
  const radioFemale = document.querySelector('#feminine');
  const radioMale = document.querySelector('#masculine');
  const radioCustom = document.querySelector('#custom');
  let validRadio = false;
  if ((radioFemale.checked) || (radioMale.checked) || (radioCustom.checked)) {
    validRadio = true;
  }
  return validRadio;
}

function validateName() {
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  let isValid = true;
  if ((firstName.value === '') || (lastName.value === '')) {
    isValid = false;
  }
  return isValid;
}

function validateOthers() {
  const phoneEmail = document.querySelector('#phone-email');
  const password = document.querySelector('#password');
  const birthdate = document.querySelector('#birthdate');
  let isValid = true;
  if ((phoneEmail.value === '') || (birthdate.value === '') || (password.value === '')) {
    isValid = false;
  }
  return isValid;
}

function validateForm() {
  let isValid = true;

  if ((validateName()) && (validateOthers()) && (validateRadios())) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}

function showResults() {
  const rightContent = document.querySelector('.right-content');
  const infos = [];
  infos[0] = `Olá, ${document.querySelector('#first-name').value} ${document.querySelector('#last-name').value}`;
  rightContent.innerHTML = '';
  rightContent.innerText = infos;
}

const buttonRegister = document.querySelector('#facebook-register');

buttonRegister.addEventListener('click', function (event) {
  event.preventDefault();
  const submitError = document.querySelector('#submit-error');
  submitError.innerText = '';
  if (!validateForm()) {
    submitError.innerText = 'Campos inválidos';
  } else {
    showResults();
  }
});
