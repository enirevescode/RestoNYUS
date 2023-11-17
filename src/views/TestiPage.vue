<script setup>
import HeroCard from '../components/slots/HeroCard.vue'
import Card_Text_Page_Testi from '../components/Card_Text_Page_Testi.vue'
</script>

<template>
    
    <v-container id="menu" class="Bckgd_Img Img_Size">
        <HeroCard>
        <template #titre>Témoignage</template>
        <template #ss-titre>Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id.</template>
        </HeroCard>
    </v-container>
<br>
    <Card_Text_Page_Testi/>
</template>
<style scoped>
.v-container {
  max-width: 100%;
}

#menu {
    background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(102, 99, 99, 0.56)),
    url('@/assets/img/drink-at-daytime.webp');
}
</style>