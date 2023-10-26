<script setup>
import Card_Img_Cake from '../components/slots/Card_Img_Cake.vue';
import Card_Resa from '../components/slots/Card_Resa.vue';
import HeroCard from '../components/slots/HeroCard.vue'
</script>
<template>
    <v-container id="menu">
        <HeroCard>
        <template #titre>Contact Us</template>
        <template #ss-titre>Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id.</template>
        </HeroCard>
    </v-container>
    
    <h3>OUR LOCATION</h3>
    <h1>3 E 19th St, 123 Fifth Avenue, NY 10160, New York, USA</h1>
    
    <Card_Resa/>
        
   
    <Card_Img_Cake></Card_Img_Cake>
</template>
<style scoped>
.v-container {
  max-width: 100%;
}

#menu {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)), url('@/assets/img/contact-us.webp');
    background-size: cover;
    height: 750px;
}

h1, h3 {
    margin-top: 50px;
    margin-bottom: 70px;
    text-align: center;
    letter-spacing: 1.2;
}

h1 {
    font-size: 30px;
    font-weight: 900!important;
    width: 720px;
}
</style>