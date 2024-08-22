<template>
    <div>
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Your Name" required />
        <input type="email" v-model="email" placeholder="Your Email" required />
        <textarea v-model="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here
        alert(`Message sent by ${this.name}`);
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  input, textarea {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #DDD;
  }
  button {
    padding: 10px;
    background-color: #8B5E3C;
    border: none;
    color: #FFF;
    cursor: pointer;
  }
  </style>
  