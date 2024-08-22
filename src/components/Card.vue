<template>
    <div class="card">
      <div class="card-header">
        <!-- Render slot named 'cardHeader' -->
        <slot name="cardHeader"></slot>
      </div>
      <div class="card-body">
        <!-- Render slot named 'cardBody' -->
        <slot name="cardBody"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComp'
  }
  </script>
  
  <style scoped>
  .card {
    width: 14rem;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
  
  .card-header {
    padding: 0.75rem 1.25rem;
    background-color: #f8f9fa;
    border-bottom: 1px solid #ddd;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  
  .card-body {
    padding: 1.25rem;
  }
  </style>
  