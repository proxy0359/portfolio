const sidemenu = document.getElementById('sidemenu');

function closemenu() {
  sidemenu.style.right = '-200px';
}

function openmenu() {
  sidemenu.style.right = '0';
}

const formSent = document.getElementById('success');

const scriptURL =
  'https://script.google.com/macros/s/AKfycbzeNL2XVkww3t-49jL5HH0k8F8mUf123CuXkeWEhGmZUtD-Rs18cBCPFeKV3K7tRM9z/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      formSent.innerHTML = 'Message sent successfully!';
      form.reset();
      setTimeout(() => {
        formSent.innerHTML = '';
      }, 5000);
    })
    .catch((error) => console.error('Error!', error.message));
});
