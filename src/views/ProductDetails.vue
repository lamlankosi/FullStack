<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Product Details</h2>
    </div>
    <div class="row justify-content-center" v-if="product">
      <div class="product-content">
        <Card class="product-card">
          <template #cardHeader>
            <div class="image-container">
              <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
            </div>
          </template>
          <template #cardBody>
            <div class="details-container">
              <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
              <p>{{ product.description }}</p>
              <p class="lead"><span class="fw-bold">Amount</span>: R{{ product.amount }}</p>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <button class="back-button" @click="goBack">
      <span class="arrow">&#8592;</span>
    </button>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: { 
    Card
  },
  computed: {
    product() {
      return this.$store.state.product
    },
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.$route.params.id)
  },
  methods: {
    goBack() {
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
.product-card {
  border: 1px solid #d3b79d;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f6f2;
  padding: 1rem;
  margin-top: 4%;
  margin-bottom: 5%;
}

.product-content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: auto;
  max-width: 300px; /* Adjust as needed */
  border-radius: 8px;
}

.details-container {
  flex: 2;
  max-width: 600px; /* Adjust as needed to control text width */
}

.card-title {
  color: #5c4034; /* Neutral brown */
  margin-bottom: 0.5rem;
}

p {
  color: #6b4f3d; /* Slightly darker brown for text */
}

p.lead {
  font-size: 1.25rem;
  color: #4a3b29; /* Darker brown for important information */
}

.card-body {
  padding: 0;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .product-content {
    flex-direction: row;
    gap: 1rem;
  }
}

@media (max-width: 992px) {
  .product-content {
    flex-direction: row;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .product-content {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

@media (max-width: 576px) {
  .product-content {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .details-container {
    max-width: 100%;
    padding: 0 1rem;
  }

  .image-container img {
    max-width: 80%; /* Responsive image width for smaller screens */
  }
}

@media (max-width: 300px) {
  .image-container img {
    max-width: 100%; /* Ensure image fits within very small screens */
  }
}

/* Back Button */
.back-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #bfae9f; /* Lighter brown */
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-right: 3%;
  margin-bottom: 5%;
  z-index: 10;
}

.back-button:hover {
  background-color: #a89d8f; /* Slightly darker brown on hover */
  transform: scale(1.1);
}

.arrow {
  font-size: 24px;
  margin-top: -2px; /* Center the arrow vertically */
}
</style>
