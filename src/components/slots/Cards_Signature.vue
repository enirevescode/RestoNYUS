<!--Card sur homeview-->
<template>
   <v-sheet class="mb-16">
    <div id="signature" class="Bckgd_Img">
    <h3 class="text-h6">HOMEMADE</h3>
    <h2 class="text-h2">Signature Menu</h2>
    <p >Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit.</p><p>Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non. </p>
    </div>  
   </v-sheet>
 </template>
 
 <style scoped>
 #signature{
    background-image: url('src/assets/img/signature.webp');
 }
 .text-h2, .text-h6, p {
   color: white;
   font-weight: 700;
   letter-spacing: 2px;
   line-height: 1.7;
   text-align: left;
   margin-left: 150px;
 }
 .text-h6{
    padding-bottom: 50px;
    padding-top: 90px;
 }
 
 .text-h2{
    font-size: 3rem;
 }
 .v-container {
    max-width: 100vw;
 }
 </style>