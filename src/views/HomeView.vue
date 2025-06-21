<template>
  <div class="home-view">
    <section class="hero card">
      <div class="hero-content">
        <h1>Ayo Makan Buah</h1>
        <p>Jadiin Buah Sebagai Cemilan Sehat Mu</p>
        <blockquote>"Gass Kuy"</blockquote>
        <button class="btn-explore">Jelajahi Produk</button>
      </div>
      <div class="scroll-down-indicator" title="Scroll down to see more">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>

    <section class="carousel-section">
      <HomeCarousel />
    </section>

    <section class="article-section card">
      <h2>Welcome to FruitCommerce</h2>
      <p>
        Discover the best products at unbeatable prices. Our curated selection offers quality and value for every shopper. Enjoy seamless shopping experience with fast delivery and excellent customer service.
      </p>
    </section>

    <section class="product-section">
      <ProductCardCarousel />
    </section>
  </div>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel.vue';
import ProductCardCarousel from '@/components/ProductCardCarousel.vue';

export default {
  name: 'HomeView',
  components: {
    HomeCarousel,
    ProductCardCarousel
  }
};
</script>

<style scoped>
.hero {
  height: 400px;
  background: url('@/assets/tampilan.png') center center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin: 7rem ;
  
  margin-bottom: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
}

.scroll-down-indicator {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  cursor: pointer;
  opacity: 0.8;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(10px);
  }
  60% {
    transform: translateX(-50%) translateY(5px);
  }
}

.hero-content {
  max-width: 600px;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
  color: #ffcc33;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 1rem;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease;
}

.hero h1:hover {
  color: #ffd633;
  cursor: pointer;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 6px black;
}

.hero blockquote {
  font-style: italic;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 6px black;
}

.btn-explore {
  background-color: #d4af37;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 15px #d4af37;
  transition: box-shadow 0.3s ease;
}

.btn-explore:hover {
  box-shadow: 0 0 25px #d4af37;
}

.carousel-section,
.product-section,
.article-section {
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.article-section h2 {
  margin-bottom: 1rem;
  color: #333;
}

.article-section p {
  color: #555;
  line-height: 1.5;
}
.below {
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
  color: #ffcc33;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 2rem 0 1rem 2rem;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease;
}

.below:hover {
  color: #ffd633;
  cursor: pointer;
}
</style>

