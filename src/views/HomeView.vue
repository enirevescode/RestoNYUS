<script setup>
import Nav_Bar from '@/components/Nav_Bar.vue'
import NavBar_Route from '../components/NavBar_Route.vue';
</script>

<template>
  <main class="bg-img-accueil">
    <Nav_Bar/>
    <NavBar_Route/>
   <h1>nonnnnn</h1>
  </main>
</template>
<style scoped>
.bg-img-accueil{
   width: 100vw;
   height: 100vh;
   background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(102, 99, 99, 0.56)),
   url('../assets/homepage.webp');
   background-size: cover;
  }
</style>