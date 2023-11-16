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
    <h1>3 E 19th St, 123 Fifth Avenue,</h1>
    <h1>NY 10160, New York, USA</h1>
    
    <Card_Resa/>
        
   
    <Card_Img_Cake></Card_Img_Cake>
</template>
<style scoped>
.v-container {
  max-width: 100%;
  /* background-color: #e9ecef; */
}

#menu {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)), url('@/assets/img/contact-us.webp');
    /* background-size: cover; */
    height: 750px;
}

h1, h3 {
    text-align: center;
    letter-spacing: 2px;
}

h1 {
    font-size: 3rem;
    font-weight: 900!important;
}

h3 {
    margin-top: 70px;
    font-size: 0.81rem;
    font-weight: 700;
}
</style>