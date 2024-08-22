<template>
<div class="container">
        <div class="row">
            <h2 class="display-2">Our Products</h2>
        </div>
        <div class="row gap-2 justify-content-center my-2" v-if="products">
            <Card v-for="product in products" :key="product.prodID" id="card">
                <template #cardHeader>
                    <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="lead fw-bold">{{ product.prodName }}</h5>
                    <p class="lead"><span class="fw-bold">Amount</span>: R{{ product.amount }}</p>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>

import Card from '@/components/Card.vue'
// import { computed, onMounted } from 'vue';
// import { useStore } from 'vuex';
// const store = useStore()
export default {
  components: {
    Card
  },
  computed: {
    products(){
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
  // setup(){
  //   const products = computed(
  //     () => store.state.products
  //   )
  //   onMounted(
  //     () =>{ 
  //       store?.dispatch('fetchProducts')
  //       console.log(products);
        
  //     }
      
      
  //   )
  // }

}
</script>

<style>
#card{
  display: grid;
  grid-template-rows: repeat (3, 1fr );
}
</style>