<script setup>
import HeroCard from '../components/slots/HeroCard.vue'
import Card_Text from '../components/Card_Text.vue'
</script>

<template>
    
    <v-container id="menu" class="Bckgd_Img Img_Size">
        <HeroCard>
        <template #titre>About Us</template>
        <template #ss-titre>Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id.</template>
        </HeroCard>
    </v-container>
<br>
    <Card_Text/>
</template>
<style scoped>
.v-container {
  max-width: 100%;
}

#menu {
    background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(102, 99, 99, 0.56)),
    url('@/assets/img/about-section.webp');
}
</style>