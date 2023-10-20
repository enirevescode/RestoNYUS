<script setup>
import Card_Accueil from '../components/Card_Accueil.vue';
import HeroCard from '../components/slots/HeroCard.vue';



</script>

<template>
  <div class="bg-img-accueil">
<br>
  
<br>
<HeroCard>
  
</HeroCard>
<br>
  
<br>
  
<br>
  
  <Card_Accueil/>
  </div>
</template>
<style scoped>
.bg-img-accueil{
   /* width: 100vw; */
   height: 100vh;
   background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(102, 99, 99, 0.56)),
   url('../assets/homepage.webp');
   background-size: cover;
  }
</style>