<template>
  <div class="carousel">
    <button class="arrow left" @click="prev">&#10094;</button>
    <div class="image-container" :style="containerStyle">
      <img v-for="(image, index) in images" :key="index" :src="image" alt="carousel image" />
    </div>
    <button class="arrow right" @click="next">&#10095;</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCarousel',
  data() {
    return {
      images: [
        new URL('@/assets/carousel1.jpg', import.meta.url).href,
        new URL('@/assets/carousel2.jpg', import.meta.url).href,
        new URL('@/assets/carousel3.jpg', import.meta.url).href
      ],
      current: 0,
      intervalId: null,
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translateX(-${this.current * 100}%)`,
        transition: 'transform 0.5s ease-in-out',
        width: `${this.images.length * 100}%`
      };
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.next();
      }, 3000);
    },
    next() {
      this.current = (this.current + 1) % this.images.length;
    },
    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-height: 500px;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  display: flex;
  width: 300%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.3);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0 10px;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  z-index: 10;
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}
</style>
