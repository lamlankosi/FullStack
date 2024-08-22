<template>
  <div id="app" class="app-container">
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Global styles */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  color: #4A4A4A;
}


#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

footer {
  width: 100%;
  margin-top: auto;
  background: #8B5E3C;
  color: #FFF;
  text-align: center;
  padding: 10px 0;
  position: relative;
  left: 0;
  bottom: 0;
}
</style>
