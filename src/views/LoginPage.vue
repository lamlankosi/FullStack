<template>
  <div class="auth-container">
    <h2 class="auth-title">Welcome Back!!</h2>
    <form @submit.prevent="handleLogin" class="auth-form">
      <div class="input-group mb-3">
        <span class="input-group-text">
          <i class="fas fa-envelope"></i>
        </span>
        <input type="email" id="email" v-model="email" class="form-control" placeholder="Email" required />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">
          <i class="fas fa-lock"></i>
        </span>
        <input type="password" id="password" v-model="password" class="form-control" placeholder="Password" required />
      </div>
      <button type="submit" class="btn btn-primary btn-block">Log In</button>
    </form>
    <p class="auth-switch">
      Don't have an account? <router-link to="/signup">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Add your log-in API logic here
      alert(`Logged in as ${this.email}`);
    },
  },
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.auth-title {
  margin-bottom: 20px;
  text-align: center;
  color: #8b5e3c;
  font-size: 24px;
  font-weight: bold;
}

.auth-form {
  display: flex;
  flex-direction: column;
}

.input-group-text {
  background-color: #8B5E3C;
  border: none;
  color:white;
}

.form-control {
  border-left: none;
}

.btn-block {
  width: 100%;
  background-color: #8b5e3c;
  border: none;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
}

.btn-block:hover {
  background-color: #a06a4d;
}

.auth-switch {
  text-align: center;
  margin-top: 15px;
}

.auth-switch a {
  color: #8b5e3c;
  text-decoration: none;
  font-weight: bold;
}
</style>
