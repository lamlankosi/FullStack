<template>
    <div>
      <h1>Our Products</h1>
      <div v-if="products.length" class="product-list">
        <div v-for="product in products" :key="product.id" class="product">
          <router-link :to="`/product/${product.id}`">
            <img :src="product.image" :alt="product.name">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
          </router-link>
        </div>
      </div>
      <div v-else>Loading products...</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('https://api.example.com/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
  }
  .product {
    width: calc(33.333% - 20px);
    margin: 10px;
    padding: 20px;
    background: #FFF;
    border: 1px solid #DDD;
    text-align: center;
  }
  .product img {
    max-width: 100%;
    height: auto;
  }
  </style>
  