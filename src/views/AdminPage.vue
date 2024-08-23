<template>
  <div class="admin-container">
    <h1 class="page-title">Admin Dashboard</h1>

    <!-- Add Product Form -->
    <section class="form-section">
      <h2>Add New Product</h2>
      <form @submit.prevent="addProduct">
        <div class="form-group">
          <label for="prodName">Product Name</label>
          <input id="prodName" v-model="newProduct.prodName" type="text" placeholder="Product Name" required />
        </div>
        <div class="form-group">
          <label for="amount">Amount</label>
          <input id="amount" v-model="newProduct.amount" type="number" placeholder="Amount" required />
        </div>
        <div class="form-group">
          <label for="quantity">Quantity</label>
          <input id="quantity" v-model="newProduct.quantity" type="number" placeholder="Quantity" required />
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <input id="category" v-model="newProduct.Category" type="text" placeholder="Category" required />
        </div>
        <div class="form-group">
          <label for="prodUrl">Product Image URL</label>
          <input id="prodUrl" v-model="newProduct.prodUrl" type="text" placeholder="Image URL" required />
        </div>
        <button type="submit" class="btn-primary">Add Product</button>
      </form>
    </section>

    <!-- Products List -->
    <section class="products-list">
      <h2>Products</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          <span>{{ product.prodName }} - {{ product.amount }}</span>
          <button @click="editProduct(product)">Edit</button>
          <button @click="deleteProduct(product.id)">Delete</button>
        </li>
      </ul>
    </section>

    <!-- Users List -->
    <section class="users-list">
      <h2>Users</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <span>{{ user.firstName }} {{ user.lastName }}</span>
          <button @click="editUser(user)">Edit</button>
          <button @click="deleteUser(user.id)">Delete</button>
        </li>
      </ul>
    </section>

    <!-- Product Edit Modal -->
    <EditModal
      :visible="showEditModal"
      :product="selectedProduct"
      @update:visible="showEditModal = $event"
      @update-product="handleUpdateProduct"
    />

    <!-- User Edit Modal -->
    <EditUserModal
      :visible="showEditUserModal"
      :user="selectedUser"
      @update:visible="showEditUserModal = $event"
      @update-user="handleUpdateUser"
    />
  </div>
  <CardComp/>
</template>

<script>
import EditModal from '../components/EditModal.vue'
import EditUserModal from '../components/EditUserModal.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EditModal,
    EditUserModal
  },
  data() {
    return {
      newProduct: {
        prodName: '',
        amount: 0,
        quantity: 0,
        Category: '',
        prodUrl: ''
      },
      editingProduct: null,
      showEditModal: false,
      selectedProduct: null,
      showEditUserModal: false,
      selectedUser: null
    }
  },
  computed: {
    ...mapState(['products']),
    users() {
      return this.$store.state.users
    }
  },
  methods: {
    async addProduct() {
      await this.$store.dispatch('addProduct', this.newProduct);
      this.newProduct = { prodName: '', amount: 0, quantity: 0, Category: '', prodUrl: '' };
    },
    async deleteProduct(id) {
      await this.$store.dispatch('deleteProduct', id);
    },
    editProduct(product) {
      this.selectedProduct = { ...product };
      this.showEditModal = true;
    },
    async handleUpdateProduct(updatedProduct) {
      await this.$store.dispatch('updateProduct', updatedProduct);
      this.showEditModal = false;
    },
    cancelEdit() {
      this.showEditModal = false;
    },
    editUser(user) {
      this.selectedUser = { ...user };
      this.showEditUserModal = true;
    },
    async handleUpdateUser(updatedUser) {
      await this.$store.dispatch('updateUser', updatedUser);
      this.showEditUserModal = false;
    },
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id);
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('fetchUsers');
  }
}
</script>

<style scoped>
/* Add necessary styles for your page */
.admin-container {
  padding: 20px;
}

.page-title {
  margin-bottom: 20px;
}

.form-section, .products-list, .users-list {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #5a6268;
}
</style>
