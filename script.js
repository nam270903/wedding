const scriptURL = 'https://script.google.com/macros/s/AKfycbxQuaTft1PHK39fOKjgnMVYv8IVBgYacAWMkiQ4EI9V6l1bot_4zVw_QCvnZhDd1pPl6Q/exec';

const form = document.forms['wedding-form'];
const submitButton = document.getElementById('submit');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  submitButton.disabled = true;

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => 