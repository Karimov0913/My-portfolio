// Contact Form Validation and Submission

document.addEventListener('DOMContentLoaded', () => {
  initForm();
});

function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Add input event listeners for real-time validation
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      const formGroup = input.closest('.form-group');
      if (formGroup.classList.contains('error')) {
        validateField(input);
      }
    });
  });

  // Handle form submission
  form.addEventListener('submit', handleSubmit);
}

function validateField(field) {
  const formGroup = field.closest('.form-group');
  const errorMessage = formGroup.querySelector('.error-message');
  const value = field.value.trim();
  let error = '';

  // Validate based on field type
  if (field.id === 'fullname') {
    if (!value) {
      error = 'Full name is required';
    } else if (value.length < 2) {
      error = 'Full name must be at least 2 characters';
    }
  } else if (field.id === 'email') {
    if (!value) {
      error = 'Email is required';
    } else if (!validateEmail(value)) {
      error = 'Please enter a valid email address';
    }
  } else if (field.id === 'message') {
    if (!value) {
      error = 'Message is required';
    } else if (value.length < 10) {
      error = 'Message must be at least 10 characters';
    }
  }

  // Display error or clear it
  if (error) {
    formGroup.classList.add('error');
    errorMessage.textContent = error;
    return false;
  } else {
    formGroup.classList.remove('error');
    errorMessage.textContent = '';
    return true;
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const fullname = form.querySelector('#fullname');
  const email = form.querySelector('#email');
  const message = form.querySelector('#message');
  const submitBtn = form.querySelector('button[type="submit"]');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoader = submitBtn.querySelector('.btn-loader');
  const formMessage = form.querySelector('.form-message');

  // Validate all fields
  const isFullnameValid = validateField(fullname);
  const isEmailValid = validateField(email);
  const isMessageValid = validateField(message);

  // If any field is invalid, stop submission
  if (!isFullnameValid || !isEmailValid || !isMessageValid) {
    return;
  }

  // Show loading state
  submitBtn.disabled = true;
  btnText.style.display = 'none';
  btnLoader.style.display = 'inline';
  formMessage.className = 'form-message';
  formMessage.style.display = 'none';

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    // Simulate success (90% of the time)
    const isSuccess = Math.random() > 0.1;

    if (isSuccess) {
      showSuccess(form, formMessage);
      clearForm(form);
    } else {
      showError(formMessage, 'Failed to send message. Please try again.');
    }

    // Reset button state
    submitBtn.disabled = false;
    btnText.style.display = 'inline';
    btnLoader.style.display = 'none';
  }, 1500);
}

function showSuccess(form, messageElement) {
  messageElement.className = 'form-message success';
  messageElement.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
  messageElement.style.display = 'block';

  // Hide success message after 5 seconds
  setTimeout(() => {
    messageElement.style.display = 'none';
  }, 5000);
}

function showError(messageElement, errorText) {
  messageElement.className = 'form-message error';
  messageElement.textContent = errorText;
  messageElement.style.display = 'block';

  // Hide error message after 5 seconds
  setTimeout(() => {
    messageElement.style.display = 'none';
  }, 5000);
}

function clearForm(form) {
  form.reset();
  
  // Clear any error states
  const formGroups = form.querySelectorAll('.form-group');
  formGroups.forEach(group => {
    group.classList.remove('error');
    const errorMessage = group.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  });
}
