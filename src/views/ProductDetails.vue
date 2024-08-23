<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Product Details</h2>
    </div>
    <div class="row justify-content-center" v-if="product">
      <Card>
        <template #cardHeader>
          {{ product.productUrl }}
          <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
          <p class="lead"><span class="fw-bold">Amount</span>: R{{ product.amount }}</p>
        </template>
      </Card>
    </div>
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
    this.$store.dispatch('fetchProduct',  this.$route.params.id)

  }
}
</script>

<style>
</style>