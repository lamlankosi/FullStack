<template>
  <div class="container">
    <!-- Search, Price, and Category Filters -->
    <div class="row my-4">
      <div class="col-md-4">
        <input type="text" v-model="searchQuery" placeholder="Search products..." class="form-control" />
      </div>
      <div class="col-md-4">
        <select v-model="selectedPriceRange" class="form-control">
          <option value="">All Prices</option>
          <option v-for="range in priceRanges" :key="range.label" :value="range.value">
            {{ range.label }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <select v-model="selectedCategory" class="form-control">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>

    <div class="row">
      <h2 class="display-2">Our Products</h2>
    </div>
    <div class="row gap-2 justify-content-center my-2" v-if="filteredProducts.length">
      <Card v-for="product in filteredProducts" :key="product.prodID" class="product-card">
        <template #cardHeader>
          <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
        </template>
        <template #cardBody>
          <h5 class="lead fw-bold">{{ product.prodName }}</h5>
          <p class="lead"><span class="fw-bold">Amount</span>: R{{ product.amount }}</p>
          <router-link :to="{ name: 'product-details', params: { id: product.prodID } }">
            <button class="btn btn-primary">View</button>
          </router-link>
        </template>
      </Card>
    </div>
    <div v-else>
      <p>No products found matching your criteria.</p>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import Card from '@/components/Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      searchQuery: '',
      selectedPriceRange: '',
      selectedCategory: '',
      priceRanges: [
        { label: 'R200 to R500', value: [200, 500] },
        { label: 'R500 to R1000', value: [500, 1000] },
        { label: 'Over R1000', value: [1000, Infinity] },
      ]
    };
  },
  computed: {
    ...mapState(['products', 'categories']),
    filteredProducts() {
      return this.products.filter(product => {
        const matchesSearchQuery = product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesPrice = this.selectedPriceRange ? (product.amount >= this.selectedPriceRange[0] && product.amount <= this.selectedPriceRange[1]) : true;
        const matchesCategory = this.selectedCategory ? product.Category === this.selectedCategory : true;

        return matchesSearchQuery && matchesPrice && matchesCategory;
      });
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  }
}
</script>




<style scoped>

.container {
  padding: 1rem 2rem;
}

.filter-bar {
  background-color: #f7f5f2;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}
.filter-bar .form-control {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #5c5347;
}

.filter-bar .form-control:focus {
  border-color: #8b5e3c;
  box-shadow: 0 0 5px rgba(139, 94, 60, 0.3);
}

.filter-bar .search-input,
.filter-bar .price-input,
.filter-bar .category-select {
  padding: 0.5rem;
  font-size: 1rem;
}

.filter-bar .search-input::placeholder,
.filter-bar .price-input::placeholder {
  color: #a39585;
}

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

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 18rem;
  background-color: #fff;
}

.product-card img {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-card .card-body {
  padding: 1.25rem;
  text-align: center;
}

.btn-primary {
  background-color: #8b5e3c;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #5c5347;
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
