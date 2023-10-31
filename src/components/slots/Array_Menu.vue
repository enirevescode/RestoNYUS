<script setup>
import {ref} from 'vue';

const dishes = ref([
                {
                "id": 1,
                "plat": "LEMON AND GARLIC GREEN BEANS",
                "prix": "15.00",
                "ingredient": "Lemon / Garlic / Beans"
                  },
                  {
                "id": 2,
                "plat": "BACON-WRAPPED SHRIMP WITH GARLIC",
                "prix": "21.50",
                "ingredient": "Bacon / Shrimp / Garlic"
                  },
                  {
                "id": 3,
                "plat": "LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI",
                "prix": "18.50",
                "ingredient": "Lamb / Wine / Butter"
                  },
                  {
                "id": 4,
                "plat": "IMPORTED OYSTERS GRILL (5 PIECES)",
                "prix": "20.00",
                "ingredient": "Oysters / Veggie / Ginger"
                  }
])
</script>
<template>
    <v-container class="my-16 mx-16">
        <v-row align-content='stretch' no-gutters style="height: auto;" v-for="dish in dishes" :key="dish.id">
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
  color: #7a7a7a;
}

.text {
  color: #7a7a7a;
  font-weight: 700;
  font-size: 0.81rem;
}
</style>