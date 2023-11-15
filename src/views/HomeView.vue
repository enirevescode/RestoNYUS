<script setup>
import Card_Accueil from '../components/Card_Accueil.vue';
import Card_testimonial from '../components/Card_testimonial.vue';
import Cards_Signature from '../components/slots/Cards_Signature.vue';
import GridPhoto from '../components/grid-photo.vue';
import Card_Img_Cake from '../components/slots/Card_Img_Cake.vue';
import Card_Resa from '../components/slots/Card_Resa.vue'
import Array_Menu from '../components/Array_Menu.vue';

</script>

<template>
  <div class="bg-img-accueil Bckgd_Img Img_Size">
<br>
<Card_Accueil/>
<br>
<Array_Menu/>
<br>
<Card_testimonial/>
<br>
<Cards_Signature/>
<GridPhoto/>
<Card_Resa/>
<Card_Img_Cake/>
<br>
</div>
</template>
<style scoped>
.bg-img-accueil{
   background-image: url('src/assets/img/homepage.webp');
}
</style>