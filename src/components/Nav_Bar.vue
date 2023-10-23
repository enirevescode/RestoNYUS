<script setup>
import NavBar_Route from '@/components/NavBar_Route.vue';


</script>
<template>
<div>
    <v-toolbar height="100">  
       <v-img
       src="../assets/img/logo.webp"
       alt="logo" height="50" class="ml-n16"
       ></v-img>
      <v-spacer></v-spacer> 

      <NavBar_Route/>

         <v-col cols="auto">
            <v-btn size="x-large" variant="outlined" color="white"><router-link active-class="active"
                  to="/resa">Réservation</router-link></v-btn>
         </v-col>
    </v-toolbar>
</div>
</template>
<style scoped>
.navbar {
   /* display: inline-flex; */
   vertical-align: auto;
}

header {
   background-color: transparent !important;
   position: absolute;
}

img {
   width: 90px;
   height: 35px;
   float: left;
   margin-left: 250px;
}

a {
   text-decoration: none;
   color: white;
}
.active {
   font-weight: 900;
   color: rgb(250, 211, 144);
   font-size: 26px;
   text-decoration: none;
   letter-spacing: 1.2;
}
</style>