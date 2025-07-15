const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

form.addEventListener('submit', () => {
  if (emailInput.value === '' || messageTextarea.value === '') {
    alert('Fill please all fields');
  } else {
    formData.email = emailInput.value.trim();
    formData.message = messageTextarea.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    form.reset();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const allInfo = localStorage.getItem('feedback-form-state');
  const parInfo = JSON.parse(allInfo);
  console.log(parInfo);

  form.reset();
  localStorage.clear();
});
