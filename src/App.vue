<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  color: #4A4A4A;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
