<template>
  <div id="app">
    <Navbar />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    FooterComponent
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right top, #eaeaea, #ffffff);
  min-height: 100vh;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: transparent;
}
</style>
