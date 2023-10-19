<script setup>
import { RouterView } from 'vue-router'
import Nav_Bar from './components/Nav_Bar.vue';


</script>

<template>
  <Nav_Bar/>
  <RouterView />
</template>
<style module>

.v-container {
  max-width: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>