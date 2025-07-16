const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

form.addEventListener('submit', formSub);

function formSub(event) {
  if (emailInput.value === '' || messageTextarea.value === '') {
    event.preventDefault();
    alert('Fill please all fields');
    return;
  } else {
    formData.email = emailInput.value.trim();
    formData.message = messageTextarea.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const allInfo = localStorage.getItem('feedback-form-state');
  const parInfo = JSON.parse(allInfo);
  console.log(parInfo);
});
