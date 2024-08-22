<!-- src/views/Home.vue -->
<template>
  <div class="landing-page">
     <!-- Parallax Section -->
     <div class="parallax">
      <div class="parallax-blur"></div>
      <div class="hero-content">
        <h1>Welcome to Elegant Home Decor</h1>
        <p>Your one-stop shop for stylish and timeless home decor</p>
        <router-link to="/products" class="btn btn-primary">Shop Now</router-link>
      </div>
    </div>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <h2>About Us</h2>
        <p>We specialize in providing high-quality, beautiful home decor that enhances your living space. Our collection is carefully curated to offer you the best in design and craftsmanship.</p>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="cta-section">
      <div class="container text-center">
        <h2>Ready to Transform Your Space?</h2>
        <router-link to="/contact" class="btn btn-secondary">Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.landing-page {
  font-family: 'Poppins', sans-serif;
  color: #fff;
}

/* Parallax Section */
.parallax {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  overflow: hidden;
}

.parallax-blur {
  background-image: url('https://zenlee-george.github.io/hostedimages/paraimg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  filter: blur(8px); /* Blur effect */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure the image stays behind the text */
}

.hero-content {
  position: relative;
  z-index: 1; /* Ensure the text stays above the blurred image */
  color: #5c5347;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: black;
}

.btn-primary {
  background-color: grey;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
}

.btn-primary:hover {
  background-color: #a06a4d;
}
/* About Section */
.about-section {
  padding: 60px 0;
  background-color: #f8f9fa;
  text-align: center;
}

.about-section h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.about-section p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
}

/* Call to Action Section */
.cta-section {
  padding: 40px 0;
  background-color: #8b5e3c;
  color: #fff;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.btn-secondary {
  background-color: #a06a4d;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
}

.btn-secondary:hover {
  background-color: #8b5e3c;
}
</style>
