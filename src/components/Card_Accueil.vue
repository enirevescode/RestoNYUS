<!--Entête de la page d'accueil en intégration ds 1 slot-->
<script setup>
import HeroCard from '../components/slots/HeroCard.vue';

</script>
<template>
        <v-container id="bg-img-accueil" class="Bckgd_Img Img_Size">
           <h6>GOOD PLACE. GOOD FOOD.</h6> 
        <HeroCard></HeroCard>
        <template #titre>A Really Good Place to Eat In the City of New York!</template>
        <template #ss-titre>Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id.</template>
   

        <v-btn variant="text">Scroll Down</v-btn>
        </v-container>

</template>
<style scoped>
h6 {
    color: white;
    text-align: center;
    font-size: 1rem !important;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0.5em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
    margin-top: 250px;
    margin-bottom: -55px;
}
button {
    color: white;
    display: flex;
    margin:auto;
}
#bg-img-accueil{
   background-image: url('src/assets/img/homepage.webp');
}
</style>