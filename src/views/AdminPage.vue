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
          <label for="Category">Category</label>
          <input id="Category" v-model="newProduct.Category" type="text" placeholder="Category" required />
        </div>
        <div class="form-group">
          <label for="prodUrl">Image URL</label>
          <input id="prodUrl" v-model="newProduct.prodUrl" type="text" placeholder="Image URL" required />
        </div>
        <button type="submit" class="btn-primary">Add Product</button>
      </form>
    </section>

    <!-- Product List -->
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

    <!-- Edit Product Form -->
    <section v-if="editingProduct" class="form-section">
      <h2>Edit Product</h2>
      <form @submit.prevent="updateProduct">
        <div class="form-group">
          <label for="editProdName">Product Name</label>
          <input id="editProdName" v-model="editingProduct.prodName" type="text" required />
        </div>
        <div class="form-group">
          <label for="editAmount">Amount</label>
          <input id="editAmount" v-model="editingProduct.amount" type="number" required />
        </div>
        <div class="form-group">
          <label for="editQuantity">Quantity</label>
          <input id="editQuantity" v-model="editingProduct.quantity" type="number" required />
        </div>
        <div class="form-group">
          <label for="editCategory">Category</label>
          <input id="editCategory" v-model="editingProduct.Category" type="text" required />
        </div>
        <div class="form-group">
          <label for="editProdUrl">Image URL</label>
          <input id="editProdUrl" v-model="editingProduct.prodUrl" type="text" required />
        </div>
        <button type="submit" class="btn-primary">Update Product</button>
        <button @click="cancelEdit" class="btn-secondary">Cancel</button>
      </form>
    </section>
    
    <section class="user-list">
      <h2>User List</h2>
      <table class="user-table">
          <tr>
            <th>Profile</th>
            <th>Username</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>

          <tr v-for="user in users" :key="user.userID">
            <td><img :src="user.userProfile" :="lazy" :alt="user.firstName" id="user-image"></td>
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
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      newProduct: {
        prodName: '',
        amount: 0,
        quantity: 0,  // Added quantity field
        Category: '',
        prodUrl: ''
      },
      editingProduct: null
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
      this.editingProduct = { ...product };
    },
    async updateProduct() {
      await this.$store.dispatch('updateProduct', this.editingProduct);
      this.editingProduct = null;
    },
    cancelEdit() {
      this.editingProduct = null;
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchUsers')
  }
}
</script>


<style scoped>
.admin-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f4f1e9; /* Light beige background */
  color: #5c5347; /* Dark brown text color */
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #8B5E3C; /* Warm brown color */
  text-align: center;
}

.form-section {
  margin-bottom: 40px;
  padding: 20px;
  background: #fff; /* White background for forms */
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #8B5E3C; /* Warm brown color */
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f4f1e9; /* Light beige background */
}

.btn-primary {
  background-color: #8B5E3C; /* Warm brown color */
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

.btn-danger {
  background-color: #d9534f; /* Red for danger actions */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-group {
  margin-top: 10px;
}

.product-list {
  margin-top: 20px;
}

.product-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #fff; /* White background for product items */
  border-radius: 8px;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 8px; /* Rounded corners for images */
}

.product-info {
  flex: 1;
}

.product-info h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #5c5347; /* Dark brown color */
}

.product-info p {
  margin: 5px 0;
  color: #8B5E3C; /* Warm brown color */
}

#user-image{
  width: 50px;
}

@media (max-width: 600px) {
  .product-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-image {
    margin-bottom: 10px;
  }
}
</style>
