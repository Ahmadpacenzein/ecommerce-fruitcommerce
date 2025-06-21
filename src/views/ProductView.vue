<template>
  <div class="page-container">
    <h1>Product Page</h1>
  </div>
</template>

<style scoped>
.page-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}
h1 {
  font-size: 3rem;
  font-weight: 900;
  color: #110f0b;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
}
</style>

<script>
export default {
  name: 'ProductView'
}
</script>
