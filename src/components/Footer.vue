<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">&copy; {{ currentYear }} Urban Loft Decor Store. All rights reserved.</p>
      <nav class="footer-nav">
        <a href="#" class="footer-link">Privacy Policy</a>
        <a href="#" class="footer-link">Terms of Service</a>
        <a href="#" class="footer-link">Contact Us</a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #4E3A2E; /* Darker shade for a more modern look */
  color: #FFF;
  text-align: center;
  padding: 20px 0;
  position: relative;
  left: 0;
  bottom: 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.footer-text {
  font-size: 1rem;
  margin: 0;
}

.footer-nav {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.footer-link {
  color: #FFF;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #D1BFA7; /* Light brown for hover effect */
}

@media (max-width: 768px) {
  .footer-content {
    padding: 0 20px;
  }

  .footer-nav {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
