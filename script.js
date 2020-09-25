const other = document.getElementById('personalizado');

other.addEventListener('change', () => {
  const father = document.getElementById('signup-form');
  const customGender = document.createElement('input');
  customGender.type = 'text';
  customGender.name = 'gender-custom';
  customGender.placeholder = 'Gênero (opcional)';
  customGender.id = 'gender-custom';
  customGender.style.display = 'flex';
  customGender.style.width = '100%';
  father.appendChild(customGender);
  father.insertBefore(customGender, father.childNodes[14]);
});

document.getElementById('button-login').addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  const password = document.getElementById('user-password').value;
  alert(email + password);
});

document.getElementById('facebook-login').addEventListener('submit', (e) => {
  e.preventDefault();
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
});
