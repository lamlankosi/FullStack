<template>
    <div class="product-details container">
      <div v-if="product" class="row">
        <!-- Product Image and Information -->
        <div class="col-md-6">
          <img :src="product.prodUrl" alt="Product Image" class="img-fluid rounded" />
        </div>
        <div class="col-md-6">
          <h1>{{ product.prodName }}</h1>
          <p class="lead">{{ product.Category }}</p>
          <p class="lead"><span class="fw-bold">Amount:</span> R{{ product.amount }}</p>
          <p>{{ product.description }}</p>
          <button @click="goBack" class="btn btn-primary">Back to Products</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  
  export default {
    name: 'ProductDetails',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const product = ref(null);
  
      const fetchProduct = async () => {
        try {
          const { data } = await axios.get(`https://fullstack-b2wd.onrender.com/product/${route.params.id}`);
          product.value = data.result;
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      const goBack = () => {
        router.push('/products');
      };
  
      onMounted(() => {
        fetchProduct();
      });
  
      return {
        product,
        goBack
      };
    }
  };
  </script>
  
  <style scoped>
  .product-details {
    margin-top: 20px;
  }
  
  .product-details img {
    max-width: 100%;
    height: auto;
  }
  
  .product-details h1 {
    font-size: 2rem;
    color: #5c5347;
  }
  
  .product-details p {
    font-size: 1.125rem;
    color: #333;
  }
  
  .product-details .btn-primary {
    background-color: #8b5e3c;
    border: none;
  }
  
  .product-details .btn-primary:hover {
    background-color: #5c5347;
  }
  </style>
  