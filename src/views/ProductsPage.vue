<template>
  <div class="products">
    <div class="row">
      <div class="display-2">
        <h2>Our Products</h2>
      </div>
      {{ this.products }}
      <div class="row" v-if="products">
        <Card v-for="product in products" :key="product.prod2ID">
        <template #cardHeader>
          <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
        </template>
        <template #cardBody>
          <h5 class="card-title">{{product.prodName}}</h5>
          <p class="lead">{{ product.Category}}</p>
          <p class="lead">Amount R{{ product.amount }}</p>
        </template>
      </Card>
      </div>
    </div>

  </div>
</template>

<script>

import Card from '@/components/Card.vue'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
export default {
  components: {
    Card
  },
  // computed: {
  //   products(){
  //     return this.$store.state.products
  //   }
  // },
  // mounted() {
  //   this.$store?.dispatch('fetchProducts')
  // },
  setup(){
    const products = computed(
      () => store.state.products
    )
    onMounted(
      () =>{ 
        store?.dispatch('fetchProducts')
        console.log(products);
        
      }
      
      
    )
  }

}
</script>

<style>

</style>