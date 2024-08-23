<template>
  <div v-if="visible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>Edit Product</h2>
      <form @submit.prevent="updateProduct">
        <div class="form-group">
          <label for="editProdName">Product Name</label>
          <input id="editProdName" v-model="localProduct.prodName" type="text" required />
        </div>
        <div class="form-group">
          <label for="editAmount">Amount</label>
          <input id="editAmount" v-model="localProduct.amount" type="number" required />
        </div>
        <div class="form-group">
          <label for="editQuantity">Quantity</label>
          <input id="editQuantity" v-model="localProduct.quantity" type="number" required />
        </div>
        <div class="form-group">
          <label for="editCategory">Category</label>
          <input id="editCategory" v-model="localProduct.Category" type="text" required />
        </div>
        <div class="form-group">
          <label for="editProdUrl">Image URL</label>
          <input id="editProdUrl" v-model="localProduct.prodUrl" type="text" required />
        </div>
        <button type="submit" class="btn-primary">Update Product</button>
        <button @click="cancelEdit" class="btn-secondary">Cancel</button>
      </form>
      <button class="modal-close" @click="closeModal">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localProduct: { ...this.product }
    };
  },
  methods: {
    closeModal() {
      this.$emit('update:visible', false);
    },
    async updateProduct() {
      this.$emit('update-product', this.localProduct);
      this.closeModal();
    },
    cancelEdit() {
      this.closeModal();
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #f8f4f1; /* Light beige */
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #8b5e3c; /* Warm brown */
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #5c4a3a; /* Darker brown */
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
}

.btn-primary {
  background-color: #8b5e3c; /* Warm brown */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-secondary {
  background-color: #a89f91; /* Neutral brown */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
