<template>
  <div id="app" :class="{ 'no-scroll': isLoading }">
    <Header />
    <main class="content">
      <Loader v-if="isLoading" />
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Loader from './components/LoaderComp.vue';

export default {
  components: {
    Header,
    Footer,
    Loader,
  },
  setup() {
    const isLoading = ref(true);
    
    // Function to enable scrolling
    const enableScrolling = () => {
      document.body.style.overflow = 'auto';
    };

    // Simulate a loading process and toggle scroll lock
    const simulateLoading = () => {
      // Lock scrolling initially
      document.body.style.overflow = 'hidden';
      
      // Unlock scrolling after 3 seconds
      setTimeout(() => {
        isLoading.value = false;
        enableScrolling();
      }, 3000); // 3 seconds
    };

    onMounted(() => {
      simulateLoading();
    });

    onBeforeUnmount(() => {
      // Ensure scrolling is enabled when component is unmounted
      enableScrolling();
    });

    return {
      isLoading,
    };
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
  overflow: hidden; /* Hide scroll bars by default */
}

#app.no-scroll {
  overflow: hidden; /* Disable scrolling when loader is active */
}

/* Ensure the content is scrollable when the loader is not active */
#app {
  overflow: auto; /* Allow scrolling when loader is not active */
}

.content {
  flex: 1;
}

/* Hide content when loading */
.content.hidden {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Footer styles */
footer {
  width: 100%;
  margin-top: auto;
  background: #8B5E3C;
  color: #FFF;
  text-align: center;
  padding: 10px 0;
}

/* Loader styling */
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Solid black background with opacity */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure loader is above all content */
}
</style>
