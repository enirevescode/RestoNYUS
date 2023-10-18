<script setup>

</script>
<template>
<div>
  
    <v-toolbar height="90">
       
       <v-img
       src="https://picsum.photos/500/300?image=232"
       width="80"></v-img>
        <h1>hey00000000000000000000000000 navbar</h1>
         <v-spacer></v-spacer> 

         <v-col cols="auto" class="mr-16">
            <v-btn size="x-large" variant="outlined" color="white"><router-link active-class="active"
                  to="/resa">Réservation</router-link></v-btn>
         </v-col>
  
    </v-toolbar>
    

</div>

</template>
<style scoped>
.navbar {
   display: inline-flex;
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
   font-size: 15px;
   text-decoration: none;
   letter-spacing: 1.2;
}
</style>