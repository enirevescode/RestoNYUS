<script setup>

</script>
<template>
<header>
    <v-toolbar height="100">  
       <v-img
       src="../assets/logo.webp"
       ></v-img>
        
         <v-spacer></v-spacer> 

         <v-col cols="auto" class="mr-16">
            <v-btn size="x-large" variant="outlined" color="white"><router-link active-class="active"
                  to="/resa">Réservation</router-link></v-btn>
         </v-col>
    </v-toolbar>
</header>

</template>
<style scoped>


header {
   background-color: transparent !important;
   position: absolute;
   font-size: 26px;
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
   font-size: 15px;
   text-decoration: none;
   letter-spacing: 1.2;
}
</style>