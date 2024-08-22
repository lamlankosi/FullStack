<template>
  <div class="about-container">
    <div class="hero-section">
      <div class="parallax"></div>
      <div class="hero-text">
        <h1>About Urban Loft</h1>
        <p>Crafting elegant and timeless decor to make every home unique.</p>
      </div>
    </div>
    
    <div class="content-section">
      <h2 class="text-center">Our Story</h2>
      <p>
        Urban Loft was born from a passion for design and a love for beautifully crafted home decor. We believe that every space deserves a touch of elegance, whether it’s a cozy apartment or a sprawling home.
      </p>

      <h2 class="text-center">Our Mission</h2>
      <p>
        Our mission is to provide high-quality, stylish home decor that reflects your personal style. We carefully curate our collection to offer a range of pieces that are both functional and aesthetically pleasing.
      </p>

      <h2 class="text-center">Why Choose Us?</h2>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
          <div class="icon-box text-center">
            <i class="fas fa-couch fa-2x" data-aos="zoom-in" data-aos-delay="100"></i>
            <h3 data-aos="fade-up" data-aos-delay="200">Stylish Furniture</h3>
            <p data-aos="fade-up" data-aos-delay="300">Explore our wide range of modern and stylish furniture pieces that perfectly blend comfort with design.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
          <div class="icon-box text-center">
            <i class="fas fa-gem fa-2x" data-aos="zoom-in" data-aos-delay="100"></i>
            <h3 data-aos="fade-up" data-aos-delay="200">Quality Materials</h3>
            <p data-aos="fade-up" data-aos-delay="300">We use only the finest materials, ensuring that each piece is durable, beautiful, and built to last.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
          <div class="icon-box text-center">
            <i class="fas fa-paint-brush fa-2x" data-aos="zoom-in" data-aos-delay="100"></i>
            <h3 data-aos="fade-up" data-aos-delay="200">Custom Design</h3>
            <p data-aos="fade-up" data-aos-delay="300">Our team of experts can help you create custom designs that perfectly suit your space and style.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'AboutPage',
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.about-container {
  margin: 20px;
  color: #333;
}

.hero-section {
  position: relative;
  text-align: center;
  margin-bottom: 30px;
  overflow: hidden;
}

.parallax {
  background-image: url('https://images.pexels.com/photos/7512042/pexels-photo-7512042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 500px; /* Increased height for a larger parallax effect */
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  padding: 20px;
}

.hero-text h1 {
  font-size: 3rem; /* Increased size to match home page */
}

.hero-text p {
  font-size: 1.5rem; /* Increased size to match home page */
}

.content-section {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.content-section h2 {
  font-size: 2rem; /* Increased size for section headings */
  margin-bottom: 15px;
  color: #8B5E3C;
  text-align: center; /* Center the heading */
}

.content-section p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.icon-box {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.icon-box i {
  color: #8B5E3C;
  margin-bottom: 10px;
}

.icon-box h3 {
  font-size: 1.75rem; /* Increased size for icon box headings */
  margin-bottom: 10px;
  color: #333;
}

.icon-box p {
  font-size: 1rem;
  color: #555;
}

@media (max-width: 576px) {
  .hero-text h1 {
    font-size: 2.5rem;
  }

  .hero-text p {
    font-size: 1.2rem;
  }

  .content-section {
    padding: 15px;
  }

  .content-section h2 {
    font-size: 1.5rem;
  }

  .content-section p, .icon-box p {
    font-size: 0.9rem;
  }

  .icon-box h3 {
    font-size: 1.5rem;
  }
}
</style>
