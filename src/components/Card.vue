<template>
  <div class="card">
    <div class="card-header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'CardComp',
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();

    const viewDetails = () => {
      // Ensure productId is available
      if (props.productId) {
        router.push(`/products/${props.productId}`);
      } else {
        console.error('Product ID is missing');
      }
    };

    return {
      viewDetails
    };
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
}

.card-header {
  padding: 0;
  background-color: #f8f9fa;
}

.card-body {
  padding: 1.25rem;
  text-align: center;
}

.card-body img {
  max-width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.card-body .btn-primary {
  background-color: #8b5e3c;
  border: none;
}

.card-body .btn-primary:hover {
  background-color: #5c5347;
}
</style>
