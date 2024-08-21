<template>
    <section class="hero">
      <div class="hero-content">
        <h1>Elevate Your Space with Our Home Decor</h1>
        <p>Discover elegant and timeless pieces to complement your home.</p>
        <button class="shop-now">Shop Now</button>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero {
    height: 80vh;
    background: url('@/assets/hero-bg.jpg') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .hero-content {
    color: #FFF;
  }
  
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  .shop-now {
    padding: 10px 20px;
    background-color: #8B5E3C;
    border: none;
    color: #FFF;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  