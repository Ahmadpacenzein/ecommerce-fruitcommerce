<template>
  <nav class="navbar">
    <div class="logo"></div>
    <h1 class="title">FruitCommerce</h1>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/product">Product</router-link>
      <router-link to="/voucher">Voucher</router-link>
      <router-link to="/cart">🛒</router-link>
      <router-link to="/login" class="login-btn">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
.navbar {
  background: #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 12px;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.logo {
  width: 40px;
  height: 40px;
  background-image: url('@/assets/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
}
.title {
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
  color: orange;
}
.nav-links a {
  margin: 0 10px;
  text-decoration: none;
  color: black;
  font-weight: 500;
}
.login-btn {
  background-color: orange;
  color: white !important;
  padding: 5px 10px;
  border-radius: 8px;
}
</style>

