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
    <section class="product-list">
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.prodID" class="product-item">
          <img :src="product.prodUrl" :alt="product.prodName" class="product-image" />
          <div class="product-info">
            <h3>{{ product.prodName }}</h3>
            <p><strong>Amount:</strong> R{{ product.amount }}</p>
            <p><strong>Quantity:</strong> {{ product.quantity }}</p>
            <p><strong>Category:</strong> {{ product.Category }}</p>
            <div class="btn-group">
              <button @click="editProduct(product)" class="btn-secondary">Edit</button>
              <button @click="deleteProduct(product.prodID)" class="btn-danger">Delete</button>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- Users List -->
    <section class="user-list">
      <h2>User List</h2>
      <table class="user-table">
          <tr>
            <th>Profile</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>

          <tr v-for="user in users" :key="user.userID">
            <td><img :src="user.userProfile" :alt="user.firstName" id="user-image"></td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.Gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>
              <button @click="editUser(user)" class="btn-secondary">Edit</button>
              <button @click="deleteUser(user.userID)" class="btn-danger">Delete</button>
            </td>
          </tr>
      </table>
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
/* General Layout */
.admin-container {
  padding: 20px;
  background-color: #f5f5f5; /* Light beige background for a neutral look */
  color: #4a4a4a; /* Dark gray text for readability */
  font-family: 'Arial', sans-serif; /* Clean font for a modern look */
}

/* Page Title */
.page-title {
  margin-bottom: 20px;
  font-size: 2rem;
  color: #5c4033; /* Deep brown for a warm feel */
}

/* Form Section */
.form-section {
  background-color: #ffffff; /* White background for the form */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  margin-bottom: 20px;
}

.form-section h2 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #6f4f28; /* Medium brown */
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #6f4f28; /* Medium brown for labels */
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #d8b4a3; /* Light brown border */
  border-radius: 4px;
  background-color: #fafafa; /* Light background for input fields */
}

.btn-primary {
  background-color: #8b5e3c; /* Warm brown for buttons */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #704f36; /* Darker brown on hover */
}

.btn-secondary {
  background-color: #bfae9b; /* Lighter beige for secondary buttons */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-secondary:hover {
  background-color: #9e8e7e; /* Slightly darker beige on hover */
}

/* Product List */
.product-list {
  margin-bottom: 20px;
}

.product-list h2 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #6f4f28; /* Medium brown */
}

.product-item {
  display: flex;
  align-items: center;
  border: 1px solid #d8b4a3; /* Light brown border */
  border-radius: 8px;
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for each item */
}

.product-image {
  width: 100px;
  height: auto;
  margin-right: 15px;
  border-radius: 4px;
}

.product-info {
  flex-grow: 1;
}

.product-info h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #5c4033; /* Deep brown */
}

.product-info p {
  margin: 5px 0;
}

.btn-group {
  display: flex;
  gap: 10px;
}

/* User List */
.user-list {
  margin-bottom: 20px;
}

.user-list h2 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #6f4f28; /* Medium brown */
}

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th, .user-table td {
  padding: 10px;
  border: 1px solid #d8b4a3; /* Light brown border for table cells */
  text-align: left;
}

.user-table th {
  background-color: #e5d9cc; /* Light beige for headers */
  color: #6f4f28; /* Medium brown for header text */
}

.user-table td {
  background-color: #ffffff; /* White background for cells */
}

.user-table img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.btn-danger {
  background-color: #d9534f; /* Bootstrap red for danger */
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-danger:hover {
  background-color: #c9302c; /* Darker red on hover */
}
</style>

