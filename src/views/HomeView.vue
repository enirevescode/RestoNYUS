<script setup>
import Card_Accueil from '../components/Card_Accueil.vue';
import Card_testimonial from '../components/Card_testimonial.vue';
import Dishes_Menu from '../components/Dishes_Menu.vue';
import Cards from '../components/slots/Cards.vue';
import GridPhoto from '../components/grid-photo.vue';
import Card_Img_Cake from '../components/slots/Card_Img_Cake.vue';
import Card_Resa from '../components/slots/Card_Resa.vue'
</script>

<template>
  <div class="bg-img-accueil">
<br>
<Card_Accueil/>

<br>
<Dishes_Menu/>
<br>
<Card_testimonial/>
<br>
<Cards/>
<GridPhoto/>
<Card_Resa/>
<Card_Img_Cake/>
<br>

  </div>
</template>
<style scoped>
.bg-img-accueil{
   height: 100vh;
   background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(102, 99, 99, 0.56)),
   url('C:/Users/Thomas Magnum/RestoNYUS/src/assets/img/homepage.webp');
   background-size: cover;
  }
</style>