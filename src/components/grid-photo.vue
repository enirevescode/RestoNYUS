<script setup>


   const photos = [
        { "src": 'src/assets/img/fine-dining-food.webp',
        "alt":"dining",
        "flex": 4 },

        { "src": 'src/assets/img/lunch-together.webp', "alt":"lunch together", "flex": 4 },
        { "src": 'src/assets/img/lunch.webp', "alt":"lunch", "flex": 4 },
        { "src": 'src/assets/img/food-on-the-table.webp', "alt":"sort of food", "flex": 4 },
        { "src": 'src/assets/img/drink-at-daytime.webp', "alt":"drinking", "flex": 4 },
        { "src": 'src/assets/img/chef-in-restaurant-kitchen.webp', "alt":"Our Chief", "flex": 4 }
        
      ]
</script>
<template>
   <!-- 1ere card sans img -->
   <v-container>
      <v-row class="mt-6">
         <v-col
         v-for="photo in photos"
         :key="photo.src"
         alt="preparation plat"
         cols="4" 
         max-width ="410" 
         height="274" 
         class="mb-6">
                     <v-img 
                     :src="photo.src"
                     :alt="photo.alt"
                     cover hide-delimiter>
                     </v-img>
         </v-col>
      </v-row>      
   </v-container>
</template>

<style scoped>
.v-container{
   max-width: 100%;
}
</style>