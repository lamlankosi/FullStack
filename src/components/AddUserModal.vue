<template>
    <div v-if="visible" class="modal-backdrop">
      <div class="modal-content">
        <h2>Add New User</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group" v-for="(value, key) in user" :key="key">
            <label :for="key">{{ getLabel(key) }}</label>
            <input :id="key" v-model="user[key]" :type="getInputType(key)" :placeholder="getLabel(key)" required />
          </div>
          <button type="submit" class="btn-primary">Add User</button>
          <button @click="closeModal" type="button" class="btn-secondary">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          userAge: null,
          Gender: '',
          userRole: '',
          emailAdd: '',
          userPass: '',
          userProfile: '',
        }
      }
    },
    methods: {
      closeModal() {
        this.$emit('update:visible', false)
      },
      submitForm() {
        this.$emit('add-user', this.user)
        this.closeModal()
      },
      getLabel(key) {
        return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
      },
      getInputType(key) {
        if (key.toLowerCase().includes('email')) return 'email'
        if (key.toLowerCase().includes('pass')) return 'password'
        if (key.toLowerCase().includes('age')) return 'number'
        return 'text'
      }
    }
  }
  </script>
  
  <style scoped>
  /* Modal styling */
  
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 400px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #6f4f28;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #d8b4a3;
    border-radius: 4px;
    background-color: #fafafa;
  }
  
  .btn-primary, .btn-secondary {
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: #8b5e3c;
    color: white;
    border: none;
  }
  
  .btn-secondary {
    background-color: #bfae9b;
    color: white;
    border: none;
  }
  
  .btn-primary:hover {
    background-color: #704f36;
  }
  
  .btn-secondary:hover {
    background-color: #9e8e7e;
  }
  </style>
  