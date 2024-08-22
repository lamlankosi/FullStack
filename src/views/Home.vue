<template>
  <div class="home-container">
    <!-- Parallax Section -->
    <div class="parallax">
      <div class="parallax-blur"></div>
      <div class="hero-content">
        <h1>Welcome to Urban Loft</h1>
        <p>Discover elegant and timeless decor for every home.</p>
      </div>
    </div>

    <!-- Featured Products Carousel Section -->
    <section class="featured-products">
      <h2 class="text-center">Featured Products</h2>
      <div id="featuredProductsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(chunk, index) in productChunks"
            :key="index"
            :class="{ active: index === 0 }"
          >
            <div class="row">
              <Card v-for="product in chunk" :key="product.prodID" class="product-card">
                <template #cardHeader>
                  <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>
                <template #cardBody>
                  <h5 class="card-title">{{ product.prodName }}</h5>
                  <p class="lead">{{ product.Category }}</p>
                  <p class="lead">Amount R{{ product.amount }}</p>
                </template>
              </Card>
            </div>
          </div>
        </div>
        <!-- Carousel controls (if needed) -->
      </div>

      <!-- View More Button under Carousel -->
      <div class="text-center my-3">
        <button @click="viewMore" class="btn btn-primary">View More</button>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Card from '@/components/Card.vue';

export default {
  name: 'HomePage',
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const products = computed(() => store.state.products || []);
    const productChunks = ref([]);

    // Chunk the products into groups of 3 for carousel slides
    const chunkProducts = (products, size) => {
      const result = [];
      for (let i = 0; i < products.length; i += size) {
        result.push(products.slice(i, i + size));
      }
      return result;
    };

    onMounted(() => {
      store.dispatch('fetchProducts').then(() => {
        productChunks.value = chunkProducts(products.value.filter(product => product.Category === 'Features'), 2);
      });
    });

    const viewMore = () => {
      router.push('/products');
    };

    return {
      productChunks,
      viewMore,
    };
  },
};
</script>

<style scoped>
.home-container {
  margin: 20px;
}

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
  font-size: 3rem;
}

.hero-content p {
  font-size: 1.5rem;
}

.featured-products {
  margin-top: 30px;
  text-align: center;
}

.featured-products h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #8B5E3C;
}

.carousel-inner {
  background: #5c5347; /* Light background to match the website */
  border-radius: 8px; /* Optional: Add rounded corners */
  padding: 20px; /* Optional: Add some padding */
}

.carousel-item {
  padding: 20px;
}

.row {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 18rem;
}

.product-card img {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
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

.btn-primary {
  background-color: #8B5E3C;
  border: none;
}

.btn-primary:hover {
  background-color: #6f4e28;
}
</style>
