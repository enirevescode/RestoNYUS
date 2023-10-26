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
                  },
                  {
                "id": 5,
                "plat": "LEMON AND GARLIC GREEN BEANS",
                "prix": "15.00",
                "ingredient": "Lemon / Garlic / Beans"
                  },
                  {
                "id": 6,
                "plat": "BACON-WRAPPED SHRIMP WITH GARLIC",
                "prix": "21.50",
                "ingredient": "Bacon / Shrimp / Garlic"
                  },
                  {
                "id": 7,
                "plat": "LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI",
                "prix": "18.50",
                "ingredient": "Lamb / Wine / Butter"
                  },
                  {
                "id": 8,
                "category": "appetizer",
                "plat": "IMPORTED OYSTERS GRILL (5 PIECES)",
                "prix": "20.00",
                "ingredient": "Oysters / Veggie / Ginger"
                  }
])
</script>
<template>
    <div>
        <v-row align="start" no-gutters style="height: 120px;" v-for="dish in dishes" :key="dish.id">
        <v-col>
          <v-sheet class="px-3 mx-3" color= "#1a1a1a">
            <p class="text-h6 text-left">{{dish.plat}} - {{ dish.prix }}</p>
            <p class="text-subtitle-1 text-left" color="#7a7a7a">{{dish.ingredient}}</p>
            <v-divider class="border-opacity-50 ml-1 mr-6 my-5" color="white" inset></v-divider>
            <slot name="dish" :plat="dish.plat" :prix="dish.prix" :ingredient="dish.ingredient"></slot>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
</template>