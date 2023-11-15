<!--Card sur toutes les pages avec ou sans backgd img-->
<template>
    <v-sheet
      class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
      color="transparente"
      elevation="0"
      height="550"
      rounded
      width="100%">
      <div>
        <h1 class="text-h2 font-weight-black">Réservation</h1>
  
        <div class="text-h6 font-weight-medium my-2">
          Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non.
        </div>
  
        <v-btn variant="outlined"
        class="text-h5"
        >Book A Table NOW</v-btn>
        <v-spacer></v-spacer>
  
        <p class="text-h3 my-4">
          
         <v-icon icon="mdi-Phone"></v-icon>Telephone Reservations
        </p>
        <p class="tel">12 34 56 7829</p>
        </div>
    </v-sheet>
  </template>
  
  <style scoped>
  .tel{
    font-size: 45px;
  }
  
  #cake {
    left: 715px;
  }
  .v-sheet {
    margin-top: 190px;
  }
  .text-h5 {
font-size: 0.75rem;
  }
  </style>