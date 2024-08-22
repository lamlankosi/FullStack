<template>
  <section class="shop">
    <h2>Shop Our Collection</h2>
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <router-link :to="`/product/${product.id}`">
          <img :src="product.image" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
      //   { id: 1, name: 'Decorative Vase', price: '$45', image: require('@/assets/vase.jpg') },
      //   { id: 2, name: 'Wall Art', price: '$120', image: require('@/assets/wall-art.jpg') },
      //   { id: 3, name: 'Wooden Chair', price: '$85', image: require('@/assets/chair.jpg') },
        // Add more products here
      ],
    };
  },
};
</script>

<style scoped>
.shop {
  padding: 50px 20px;
  background-color: #F5F5F5;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product {
  width: calc(33.333% - 20px);
  background: #FFF;
  padding: 20px;
  text-align: center;
  border: 1px solid #DDD;
  transition: transform 0.3s;
}

.product img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.product:hover {
  transform: scale(1.05);
}

h2 {
  margin-bottom: 30px;
  font-size: 32px;
  color: #8B5E3C;
}
</style>
