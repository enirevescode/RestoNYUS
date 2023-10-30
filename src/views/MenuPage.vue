<script setup>
import HeroCard from '../components/slots/HeroCard.vue'
import Card_Resa from '../components/slots/Card_Resa.vue'
import Dishes_Menu from '../components/Dishes_Menu.vue';
import CardPhotoAppetizer from '../components/CardPhotoAppetizer.vue';

</script>
<template>
   
    <v-container id="menu">
        <HeroCard>
        <template #titre>Our Menu</template>
        <template #ss-titre>Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id.</template>
        </HeroCard>
    </v-container>
        <CardPhotoAppetizer/>
        <Dishes_Menu/>
        <Card_Resa>
            <div class="bg-img_resa"></div>
        </Card_Resa>
</template>
<style scoped>
.v-container {
  max-width: 100%;
}

#menu {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)), url('@/assets/img/signature.webp');
    background-size: cover;
    height: 750px;
}

h1{
    color: red;
    font-weight: 900;
}

.bg-img_resa {
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(102, 99, 99, 0.56)),
    url('src\assets\img\topview.webp');
    background-size: cover;
}
</style>