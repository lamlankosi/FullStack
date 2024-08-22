<template>
  <div class="contact-form">
    <h2 class="text-center mb-4">Contact Us</h2>
    <form @submit.prevent="submitForm" action="https://formspree.io/f/xkgwqjzp" method="POST">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <div class="input-group">
          <span class="input-group-text"><i class="fas fa-user"></i></span>
          <input type="text" id="name" name="name" class="form-control" required />
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <div class="input-group">
          <span class="input-group-text"><i class="fas fa-envelope"></i></span>
          <input type="email" id="email" name="email" class="form-control" required />
        </div>
      </div>
      <div class="mb-3">
        <label for="subject" class="form-label">Subject</label>
        <div class="input-group">
          <span class="input-group-text"><i class="fas fa-tag"></i></span>
          <input type="text" id="subject" name="subject" class="form-control" required />
        </div>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <div class="input-group">
          <span class="input-group-text"><i class="fas fa-comment"></i></span>
          <textarea id="message" name="message" class="form-control" rows="5" required></textarea>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'ContactForm',
  methods: {
    async submitForm() {
      try {
        const form = document.querySelector('form');
        const formData = new FormData(form);

        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent',
            text: 'Thank you for contacting us. We will get back to you soon!',
            confirmButtonColor: '#8B5E3C',
          });
          form.reset(); // Reset the form after successful submission
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again later.',
          confirmButtonColor: '#8B5E3C',
        });
      }
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.input-group-text {
  background-color: #8B5E3C;
  color: #fff;
  border: none;
}

.form-control {
  border: 1px solid #ddd;
  border-radius: 0 4px 4px 0;
}

.btn-primary {
  background-color: #8B5E3C;
  border-color: #8B5E3C;
}

@media (max-width: 576px) {
  .contact-form {
    padding: 15px;
  }

  .btn-primary {
    width: 100%;
  }
}
</style>
