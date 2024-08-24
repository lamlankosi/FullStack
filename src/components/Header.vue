<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="https://zenlee-george.github.io/hostedimages/UrbanLoftLogo.PNG" alt="Urban Loft Logo" class="logo" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" exact-active-class="active">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" exact-active-class="active">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link" exact-active-class="active">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" exact-active-class="active">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
};
</script>
<style scoped>
/* Custom color variables */
:root {
  --primary-bg: #4E3A2E; /* Dark brown */
  --primary-text: #FFF; /* White text */
  --hover-color: #D1BFA7; /* Light brown for hover */
  --active-color: #8B5E3C; /* Brown for active link */
  --link-color: #E0C8B0; /* Light beige for text and icons */
}
/* Navbar styling */
.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
    color: brown;
}
.navbar {
  background-color: var(--primary-bg); /* Dark brown background */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  padding: 15px 20px;
}
.navbar-brand {
  display: flex;
  align-items: center;
}
.logo {
  height: 50px; /* Adjust for better visibility */
  transition: transform 0.3s ease; /* Animation on hover */
}
.logo:hover {
  transform: scale(1.1); /* Slightly enlarge on hover */
}
.nav-link {
  color: var(--link-color); /* Light beige text for visibility */
  margin-left: 10px;
  font-weight: 500;
  position: relative;
  padding-bottom: 5px;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: var(--hover-color) !important; /* Light brown for hover effect */
}
/* Ensure active link styling */
.nav-link.active, .nav-link.router-link-exact-active {
  color: var(--active-color); /* Brown for active link */
  font-weight: 600;
  border-bottom: 2px solid var(--active-color); /* Optional underline for active link */
}
.navbar-toggler {
  border-color: var(--primary-text);
  background-color: #000;
}
.navbar-toggler-icon {
  /* background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_icon_%28menu%29.svg"); */
  background-size: 1.5em 1.5em; /* Adjust size as needed */
  background-repeat: no-repeat;
  background-position: center;
}
/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar-nav {
    margin-top: 10px;
  }
  .nav-link {
    margin-left: 0;
    margin-bottom: 10px;
  }
}
</style>