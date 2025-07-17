const formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  if (!form) return;

  const emailInput = form.elements.email;
  const messageTextarea = form.elements.message;

  const saved = localStorage.getItem('feedback-form-state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      formData.email = parsed.email || '';
      formData.message = parsed.message || '';
      emailInput.value = formData.email;
      messageTextarea.value = formData.message;
    } catch (err) {
      console.error('Помилка при парсингу localStorage:', err);
    }
  }

  form.addEventListener('input', event => {
    const { name, value } = event.target;
    if (name in formData) {
      formData[name] = value.trim();
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageTextarea.value.trim();

    if (email === '' || message === '') {
      alert('Fill please all fields');
      return;
    }

    formData.email = email;
    formData.message = message;
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    form.reset();

    formData.email = '';
    formData.message = '';
  });
});
