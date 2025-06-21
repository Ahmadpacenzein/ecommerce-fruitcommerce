<template>
  <footer class="footer">
    <div class="top-footer">
      <div class="branding">
        <div class="logo"></div>
        <h2>FruitCommerce</h2>
      </div>
      <div class="divider"></div>
      <div class="info">
        <p>Alamat: Jl.Air Dingin</p>
        <p>Telepon: 0823-8676-3727</p>
        <p>Email: info@fruitcommerce.com</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  margin-top: 40px;
}
.top-footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.divider {
  width: 100px;
  height: 100px;
  border-radius: 0 0 100px 100px;
  background-color: orange;
}
</style>
