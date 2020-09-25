const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function (event) {
  if (userEmailPhone.value === '') {
    event.preventDefault();
  } else {
    alert(userEmailPhone.value);
  }
});

const buttonRegister = document.getElementById('facebook-register');
let gender = '';
const classesRadioButtons = document.querySelectorAll('.radio');
const rightContent = document.querySelector('.right-content');
const genderCustom = document.querySelector('.gender-custom');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phoneEmail = document.getElementById('phone-email');
const password = document.getElementById('password');
const birthdate = document.getElementById('birthdate');

function radioEvents(event) {
  if (event.target.id === 'Personalizado') {
    genderCustom.style.display = 'initial';
    gender = 'Personalizado';
  } else {
    genderCustom.style.display = 'none';
    switch (event.target.id) {
      case 'Feminino':
        gender = 'Feminino';
        break;
      default:
        gender = 'Masculino';
        break;
    }
  }
}

for (let index = 0; index < classesRadioButtons.length; index += 1) {
  classesRadioButtons[index].addEventListener('click', radioEvents);
}

function validationRadioButton() {
  let check = 0;
  const radio0 = classesRadioButtons[0].checked;
  const radio1 = classesRadioButtons[1].checked;
  const radio2 = classesRadioButtons[2].checked;

  if (radio0 || radio1 || radio2) {
    check = 1;
  }

  switch (true) {
    case (check > 0 && classesRadioButtons[2].checked && genderCustom.value === ''):
      return false;
    case (check > 0 && classesRadioButtons[2].checked && genderCustom.value !== ''):
      return true;
    case (check > 0):
      return true;
    default:
      return false;
  }
}

function newUserData() {
  const originalDate = birthdate.value;
  const year = birthdate.value.slice(0, 4);
  const day = birthdate.value.slice(8, 10);
  const month = birthdate.value.slice(5, 7);
  const adjustDate = `${day}/${month}/${year}`
  rightContent.innerHTML = `Olá, ${firstname.value} ${lastname.value}
${phoneEmail.value}
${adjustDate}
${gender}`;
}

buttonRegister.addEventListener('click', function (event) {
  event.preventDefault();
  const firstnameV = firstname.value;
  const lastnameV = lastname.value;
  const phoneEmailV = phoneEmail.value;
  const passwordV = password.value;
  const birthdateV = birthdate.value;
  const error = document.querySelector('.error-form');
  const values = [firstnameV, lastnameV, phoneEmailV, passwordV, birthdateV];
  let check = 0;
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === '') {
      check += 1;
    }
  }

  if (validationRadioButton() && check === 0) {
    newUserData();
  } else {
    error.style.display = 'initial';
  }
});
