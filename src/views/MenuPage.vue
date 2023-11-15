<script setup>
import HeroCard from '../components/slots/HeroCard.vue'
import Card_Resa from '../components/slots/Card_Resa.vue'
import Array_Menu_Dessert from '../components/Array_Menu_Dessert.vue';
import CardPhotoAppetizer from '../components/CardPhotoAppetizer.vue';
import CardPhotoMain from '../components/CardPhotoMain.vue';
import CardPhotoDessert from '../components/CardPhotoDessert.vue';
import Array_Menu from '../components/Array_Menu.vue';
import Array_Menu_Appetizer from '../components/Array_Menu_Appetizer.vue';
</script>
<template>
   
    <v-container id="menu" class="Bckgd_Img Img_Size">
        <HeroCard>
        <template #titre>Our Menu</template>
        <template #ss-titre>Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id.</template>
        </HeroCard>
    </v-container >
        <CardPhotoAppetizer/>
        <Array_Menu_Appetizer/>
        <CardPhotoMain/>
        <Array_Menu/>
        <CardPhotoDessert/>
        <Array_Menu_Dessert/>
        <Card_Resa class="bg-img_resa Bckgd_Img">

        </Card_Resa>
</template>
<style scoped>
.v-container {
  max-width: 100%;
}

#menu {
    background-image: url('@/assets/img/signature.webp');
}

h1{
    color: red;
    font-weight: 900;
}

.bg-img_resa {
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(102, 99, 99, 0.56)),
    url("C:\Users\Thomas Magnum\RestoNYUS\src\assets\img\topview.webp");
    background-size: cover;
}
</style>