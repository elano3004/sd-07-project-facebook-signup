const inputs = document.querySelectorAll('.right-content input');

const gender = document.querySelector('#cust-gender');
gender.style.display = 'none';

document.querySelector('#button-login').addEventListener('click', () => {
  alert(document.querySelector('#user-email-phone').value);
});

document
  .querySelector('#facebook-register')
  .addEventListener('click', (event) => {
    for (let i = 0; i < inputs.length; i += 1) {
      if (inputs[i].value === '') {
        event.preventDefault();
        document.querySelector('.handle-error').innerHTML = 'Campos inválidos';
      }
    }
  });

document.querySelector('#Personalizado').addEventListener('click', () => {
  gender.style.display = 'block';
});
