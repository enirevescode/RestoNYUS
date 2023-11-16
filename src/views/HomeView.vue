<script setup>
import Card_Accueil from '../components/Card_Accueil.vue';
import Grid_Ambiance from '../components/Grid_Ambiance.vue';
import Array_Menu from '../components/Array_Menu.vue';
import Cards_Signature from '../components/slots/Cards_Signature.vue';
import GridPhoto from '../components/grid-photo.vue';
import Our_Teams from '../components/Our_Teams.vue';
import Card_testimonial from '../components/Card_testimonial.vue';
import Card_Resa from '../components/slots/Card_Resa.vue'
import Card_Img_Cake from '../components/slots/Card_Img_Cake.vue';

</script>

<template>
<Card_Accueil/>
<br>
<Grid_Ambiance/>
<br>
<Array_Menu/>
<br>
<Cards_Signature/>
<GridPhoto/>
<Our_Teams/>
<Card_testimonial/>
<br>

<Card_Resa/>
<Card_Img_Cake/>
</template>
