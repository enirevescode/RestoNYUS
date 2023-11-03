<script setup>
import HeroCard from './slots/HeroCard.vue';
import Divider_Slot from './slots/Divider_Slot.vue';

</script>
<template>
    <div>
        <v-container>
           <h6>GOOD PLACE. GOOD FOOD.</h6> 
        <HeroCard>
        <template #titre>A Really Good Place to Eat In the City of New York!</template>
        <template #ss-titre>Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id.</template>
        </HeroCard>

        <v-btn variant="text">Scroll Down</v-btn>
        </v-container>
        <Divider_Slot></Divider_Slot>
    </div>
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

</style>