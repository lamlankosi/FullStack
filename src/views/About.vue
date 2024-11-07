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
      <h2>Our Story</h2>
      <p>
        Urban Loft was born from a passion for design and a love for beautifully crafted home decor. We believe that every space deserves a touch of elegance, whether it’s a cozy apartment or a sprawling home.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to provide high-quality, stylish home decor that reflects your personal style. We carefully curate our collection to offer a range of pieces that are both functional and aesthetically pleasing.
      </p>

      <h2>Why Choose Us?</h2>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="icon-box text-center">
            <i class="fas fa-couch fa-2x"></i>
            <h3>Stylish Furniture</h3>
            <p>Explore our wide range of modern and stylish furniture pieces that perfectly blend comfort with design.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="icon-box text-center">
            <i class="fas fa-gem fa-2x"></i>
            <h3>Quality Materials</h3>
            <p>We use only the finest materials, ensuring that each piece is durable, beautiful, and built to last.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="icon-box text-center">
            <i class="fas fa-paint-brush fa-2x"></i>
            <h3>Custom Design</h3>
            <p>Our team of experts can help you create custom designs that perfectly suit your space and style.</p>
          </div>
        </div>
      </div>
    </div>
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
  color: #f5f5f5; /* Light beige for contrast */
}

.hero-text p {
  font-size: 1.2rem;
  color: #f5f5f5; /* Light beige for contrast */
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
  color: #8B5E3C; /* Neutral brown */
  text-align: center; /* Center the heading */
}

.content-section p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #6F4F28; /* Darker brown for text */
}

.icon-box {
  background-color: #f9f6f2; /* Very light brown */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.icon-box i {
  color: #8B5E3C; /* Neutral brown */
  margin-bottom: 10px;
}

.icon-box h3 {
  font-size: 1.75rem; /* Increased size for icon box headings */
  margin-bottom: 10px;
  color: #5c4034; /* Medium brown */
}

.icon-box p {
  font-size: 1rem;
  color: #6F4F28; /* Darker brown for text */
}
/* Product List */
.product-item {
  display: flex;
  flex-direction: row; /* Default to row layout */
  align-items: center;
  border: 1px solid #d8b4a3; 
  border-radius: 8px;
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
}

.product-image {
  width: 100px;
  height: auto;
  margin-right: 15px; /* Space between image and text */
}

.product-info {
  flex-grow: 1;
}



/* Responsive Styles */
@media (max-width: 576px) {
  .hero-text {
    padding: 10px; /* Reduce padding on small devices */
  }

  .hero-text h1 {
    font-size: 1.5rem; /* Adjusted size for smaller devices */
    white-space: nowrap; /* Prevents the text from wrapping */
    overflow: hidden; /* Hides overflow text */
    text-overflow: ellipsis; /* Adds ellipsis for overflow text */
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

  .content-section p {
    font-size: 0.9rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>
