<!--component ds menupage + homepage -->
<script setup>
import { useMenuItemStore } from '../stores/menuItem';

const { desserts } = useMenuItemStore()
</script>
<template></template>
    <v-container class="my-16 mx-16">
        <v-row align-content='stretch' no-gutters style="height: auto;" v-for="dish in desserts" :key="dish.id">
        <v-col cols="4" v-for="n in 3">
          <v-sheet class="px-3 mx-3" color= "transparent">
            <p class="text text-left">{{dish.plat}} - {{ dish.prix }}</p>
            <p class="text-subtitle-1 text-left">{{dish.ingredient}}</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="#7a7a7a" inset></v-divider>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>
<style scoped>

.v-container {
  background-color: transparent;
  padding: 50px 50px 50px 50px!important;
  margin: auto !important;;
  width: 100rem;
}

.text-subtitle-1 {
  color: #909091;
}

.text {
  color: #1a1a1a;
  font-weight: 700;
  font-size: 0.81rem;
}
</style>