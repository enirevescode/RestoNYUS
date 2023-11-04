<script setup>
import HeroCard from '../components/slots/HeroCard.vue'
</script>
<template>
    
    <v-container id="menu" class="Bckgd_Img">
        <HeroCard>
        <template #titre>About Us</template>
        <template #ss-titre>Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id.</template>
        </HeroCard>
    </v-container>
</template>
<style scoped>
.v-container {
  max-width: 100%;
}

#menu {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)), url('@/assets/img/about-section.webp');
    background-size: cover;
    height: 750px;
}
</style>