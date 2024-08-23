<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Our Products</h2>
    </div>
    <div class="row gap-2 justify-content-center my-2" v-if="products">
      <Card v-for="product in filteredProducts" :key="product.prodID" class="product-card">
        <template #cardHeader>
          <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
        </template>
        <template #cardBody>
          <h5 class="lead fw-bold">{{ product.prodName }}</h5>
          <p class="lead"><span class="fw-bold">Amount</span>: R{{ product.amount }}</p>
          <router-link :to="{ name: 'product-details', params: { id: product.prodID } }">
            <button class="btn">View</button>
          </router-link>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card
  },
  computed: {
    products() {
      return this.$store.state.products || [];
    },
    filteredProducts() {
      return this.products;
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  }
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 18rem;
}

.product-card img {
  display: block;
  width: 100%;
  height: 200px; /* Fixed height for uniformity */
  object-fit: cover; /* Cover the area without distortion */
}

.product-card .card-body {
  padding: 1.25rem;
  background: #fff;
  text-align: center;
}

@media (max-width: 767px) {
  .product-card {
    max-width: 100%;
  }

  .product-card img {
    height: 150px;
  }
}

@media (max-width: 480px) {
  .product-card img {
    height: 120px;
  }
}

@media (max-width: 360px) {
  .product-card img {
    height: 100px;
  }
}
</style>
