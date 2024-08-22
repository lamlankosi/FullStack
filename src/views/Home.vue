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
              <Card v-for="product in chunk" :key="product.prodID">
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
        <!-- Optional: Indicators for carousel -->
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#featuredProductsCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#featuredProductsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <!-- Add more indicators if needed -->
        </div>
      </div>
      <!-- Button to navigate to the products page -->
      <div class="text-center mt-4">
        <button @click="goToProductsPage" class="btn btn-primary">View More Products</button>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'; // Import useRouter
import Card from '@/components/Card.vue';

export default {
  name: 'HomePage',
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const router = useRouter(); // Use router
    const products = computed(() => store.state.products || []);
    const productChunks = ref([]);

    // Chunk the products into groups of 2 for carousel slides
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

    const goToProductsPage = () => {
      router.push('/products'); // Navigate to the products page
    };

    return {
      productChunks,
      goToProductsPage,
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

.card {
  margin: 15px;
  width: 18rem;
}

@media (max-width: 300px) {
  .card {
    width: 100%;
  }
}

/* Hide carousel controls */
.carousel-control-prev,
.carousel-control-next {
  display: none;
}

/* Style for carousel indicators */
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}

.carousel-indicators button {
  background-color: #8b5e3c;
}

.carousel-indicators .active {
  background-color: #fff;
}

/* Style for button */
.btn-primary {
  background-color: #8B5E3C; /* Match the button color to your site */
  border: none;
}

.btn-primary:hover {
  background-color: #6a4b39; /* Darker shade for hover */
}
</style>
