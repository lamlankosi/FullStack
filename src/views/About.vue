<template>
  <div class="about-container">
    <div class="hero-section">
      <img src="https://images.pexels.com/photos/7512042/pexels-photo-7512042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us" class="hero-image img-fluid" />
      <div class="hero-text">
        <h1>About Urban Loft</h1>
        <p>Crafting elegant and timeless decor to make every home unique.</p>
      </div>
    </div>
    
    <div class="content-section">
      <h2 class="section-heading">Our Story</h2>
      <p>
        Urban Loft was born from a passion for design and a love for beautifully crafted home decor. We believe that every space deserves a touch of elegance, whether it’s a cozy apartment or a sprawling home.
      </p>

      <h2 class="section-heading">Our Mission</h2>
      <p>
        Our mission is to provide high-quality, stylish home decor that reflects your personal style. We carefully curate our collection to offer a range of pieces that are both functional and aesthetically pleasing.
      </p>

      <h2 class="section-heading">Why Choose Us?</h2>
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
    
    <a href="/products" class="back-to-products">
      <i class="fas fa-arrow-left"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
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
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  filter: brightness(0.75);
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
  font-size: 2.5rem;
}

.hero-text p {
  font-size: 1.2rem;
}

.content-section {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.content-section h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #8B5E3C;
}

.content-section p, .content-section ul {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.content-section ul {
  padding-left: 20px;
}

.content-section ul li {
  margin-bottom: 10px;
}

.content-section ul li i {
  color: #8B5E3C;
  margin-right: 8px;
}

/* Responsive Styles */
@media (max-width: 576px) {
  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-text p {
    font-size: 1rem;
  }

  .content-section {
    padding: 15px;
  }

  .content-section h2 {
    font-size: 1.5rem;
  }

  .content-section p, .content-section ul {
    font-size: 0.9rem;
  }

  .content-section ul li i {
    margin-right: 5px;
  }
}
</style>
