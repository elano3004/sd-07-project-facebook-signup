const inputs = document.querySelectorAll('.right-content input');

// const gender = document.querySelector('#cust-gender');
const cg = document.querySelector('#cg');

document.querySelector('#button-login').addEventListener('click', () => {
  alert(document.querySelector('#user-email-phone').value);
});

function buttonSelected() {
  const radioButtons = document.querySelectorAll('input[name="gender"]');
  let selectedValue = '';
  for (let u = 0; u < radioButtons.length; u += 1) {
    if (radioButtons[u].checked) {
      return (selectedValue = radioButtons[u].value);
    }
  }
  return selectedValue;
}

document
  .querySelector('#facebook-register')
  .addEventListener('click', (event) => {
    for (let i = 0; i < inputs.length; i += 1) {
      if (inputs[i].value === '') {
        event.preventDefault();
        return (document.querySelector('.handle-error').innerHTML =
          'Campos inválidos');
      }
    }
    document.querySelector('.right-content').innerHTML = `Olá, ${
      document.querySelector('#fn').value
    } ${document.querySelector('#ln').value}. Email/telefone: ${
      document.querySelector('#phone-email').value
    }. Nacimento: ${
      document.querySelector('#data').value
    }. Gênero: ${buttonSelected()}.`;
    return true;
  });
document.querySelector('#Feminino').addEventListener('click', () => {
  cg.innerHTML = '';
});
document.querySelector('#Masculino').addEventListener('click', () => {
  cg.innerHTML = '';
});
document.querySelector('#Personalizado').addEventListener('click', () => {
  const inputGender = document.createElement('input');
  inputGender.name = 'gender-custom';
  inputGender.placeholder = 'Gênero';
  inputGender.setAttribute('id', 'cust-gender');
  cg.appendChild(inputGender);
});
