<template>
  <div id="app">
    <Header />
    <HeroSection/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';

export default {
  components: {
    Header,
    HeroSection
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  color: #4A4A4A;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
}
</style>z