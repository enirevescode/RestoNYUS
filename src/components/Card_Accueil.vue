<script setup>
import HeroCard from './slots/HeroCard.vue';

</script>
<template>
    <div>
        <v-container>
        <HeroCard>
        <template #titre>A Really Good Place to Eat In the City of New York!</template>
        <template #ss-titre>You are officially a part of the Vuetify Community!</template>
        </HeroCard>
        <div class="white">
            <p >
          Please head over to your inbox/spam or others folder to find our verificaiton email.
        </p>
  
        <v-btn variant="text">Go to Login</v-btn>
        </div>
        </v-container>
        
    </div>
</template>
<style scoped>
.white {
    color: white;
    text-align: center;
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0178571429em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
}
</style>