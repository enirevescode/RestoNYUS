<!--Grille des témoignages sur homeview-->
<script setup>
import { ref } from 'vue';

const temoignages = ref ([
         {
       "id": 1,
       "img": "src/assets/img/emma.webp",
       "alt": "portrait",
       "name": "Emma Odinson",
       "avis": "Risus donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel"
          },
          {
       "id": 2,
       "img": "src/assets/img/diana.webp",
       "alt": "portrait",
       "name":"Diana Annakin",
       "avis": "Donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel"
          },
          {
       "id": 3,
       "img": "src/assets/img/kyle.webp",
       "alt": "portrait",
       "name":"Kyle Smith",
       "avis": "Neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est in scelerisque donec. Tincidunt malesuada odio neque et vel fringilla elit. Placerat turpis mus donec id vel"
          },

])
</script>
<template>
   <div id="testi" class="Img_Size_Card">
   <h3 class="titre1">TESTIMONIAL</h3>
   <h2 class="titre2">What They Say</h2>
   
     
  <v-container>
    <v-row no-gutters>
      <v-col v-for="temoignage in temoignages" :key="temoignage.id">
        <v-avatar size="95" color="#f5c61c" class="mx-auto">
         <img width ="80" height ="80" :src="temoignage.img" :aspect-ratio="1" class="ma-auto"/>
        </v-avatar>
            <v-sheet 
            class="pt-16 px-6 mb-n16"
            color= "#1a1a1a"
            width="367px"
            height="320px"
            rounded="lg"
            >
                <div class="text">
                <p class="avis">{{ temoignage.avis }}</p>
                <p class="name">{{ temoignage.name }}</p>
                </div>
            </v-sheet>
      </v-col>
    </v-row>
  </v-container>
 
   </div>
 </template>

 <style scoped>
 /* .v-container {
  max-width: 100%;
} */
 #testi{
   background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)),
   url('src/assets/img/lunch.webp');
   background-size: cover;
 }
 
 .titre1{
   color: white;
   font-weight: 700;
   padding-bottom: 50px;
   padding-top: 70px;
   letter-spacing: 2px;
   line-height: 1.7;
   text-align: center;
 }
 
 .titre2{
   line-height: 1.3;
   color: white;
   font-size: 3rem;
   font-weight: 700;
   letter-spacing: 2px;
   text-align: center;
 }
 
 .v-avatar {
  z-index: 1000;
  margin-bottom: -50px;
  display: block;
 }
 
 .v-container {
  margin-top: 70px;
 }
 .name {
   text-align: center;
   margin-bottom: 5px;
   margin-top: 5px;
 }
 .avis {
   text-align: justify;
   font-size: 18px;
   font-weight: 400;
 }
 
 p {
   color: white;
 }
 </style>