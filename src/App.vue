<script setup>
import { RouterView } from 'vue-router'
import Nav_Bar from './components/Nav_Bar.vue';
import Footer_1 from './components/Footer_1.vue';
</script>

<template>
  <Nav_Bar/>
  <RouterView/>
  <Footer_1/>
</template>
<style>
.v-container {
  max-width: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>