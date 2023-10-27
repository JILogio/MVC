<template>
  <div id="app">
    <HeaderPage></HeaderPage>
    <div class="center">
      <router-view></router-view>
    </div>
  <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import FooterComponent from './components/Footer.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export default {
  name: 'app',
  components: {
    HeaderPage,
    FooterComponent
}
}
</script>

<style>
@import './assets/css/styles.css';
</style>
