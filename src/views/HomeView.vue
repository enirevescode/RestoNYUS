<script setup>

import Card_Accueil from '../components/Card_Accueil.vue';
import Card_Resa from '../components/slots/Card_Resa.vue'


</script>

<template>
  <div class="bg-img-accueil">
<br>
<br> 
<br>
<Card_Accueil/>
<br>
  
<br>
<Card_Resa>
</Card_Resa>
<br>
  

  </div>
</template>
<style scoped>
.bg-img-accueil{
   height: 100vh;
   background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(102, 99, 99, 0.56)),
   url('@/assets/img/homepage.webp');
   background-size: cover;
  }
</style>