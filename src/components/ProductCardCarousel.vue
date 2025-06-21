<template>
  <div class="product-wrapper">
    <div class="preview">
      <img :src="selected" alt="preview" />
    </div>
    <div class="carousel">
      <div
        class="card"
        v-for="(product, index) in products"
        :key="index"
        @click="selected = product.image"
      >
        <img :src="product.image" alt="product" />
        <p class="product-name">{{ product.name }}</p>
        <p class="product-price">{{ product.price }}</p>
        <button class="add-to-cart-btn">Tambah Keranjang</button>
      </div>
    </div>
  </div>
</template>

<script>
const img1 = new URL('@/assets/carousel1.jpg', import.meta.url).href;
const img2 = new URL('@/assets/carousel2.jpg', import.meta.url).href;
const img3 = new URL('@/assets/carousel3.jpg', import.meta.url).href;

export default {
  name: 'ProductCardCarousel',
  data() {
    return {
      products: [
        { name: 'Apel Merah', price: 'Rp 15.000', image: img1 },
        { name: 'Pisang', price: 'Rp 12.000', image: img2 },
        { name: 'Anggur', price: 'Rp 20.000', image: img3 }
      ],
      selected: img1
    };
  }
};
</script>

<style scoped>
.product-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1rem;
}

.preview {
  flex: 1.5;
  overflow: hidden;
  border-top-left-radius: 150px;
  border-bottom-left-radius: 150px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 150px;
  border-bottom-left-radius: 150px;
}

.carousel {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 1rem;
  flex: 2;
}

.card {
  min-width: 150px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
}

.product-name {
  font-weight: 600;
  margin: 10px 0 5px;
}

.product-price {
  color: #555;
  margin-bottom: 10px;
}

.add-to-cart-btn {
  background-color: orange;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: darkorange;
}
</style>

