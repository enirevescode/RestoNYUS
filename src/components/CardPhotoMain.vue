<!--Card horizontal sur menupage-->
<template>
<v-row>
    <v-col cols="4" class="Main">
        <v-img
        src="src\assets\img\main.webp"
        width="480"
        height="445"
        ></v-img>

    </v-col>
    <v-col cols="8" class="Main">
  
    <h2 class="mt-10">Main Courses</h2>
   
        <p class="text-left">Lorem sollicitudin quis amet, pellentesque et proin. Venenatis iaculis nibh neque sit ullamcorper ac dictumst. Amet dignissim nunc gravida eu vestibulum elit. In lorem ornare sollicitudin aliquet nunc cum massa.</p>
   
    <v-col cols="3" class="float-left mt-6">
        <v-img
        src="src\assets\img\myrtille.webp"
        height="100"
        class="img"
        ></v-img>
    </v-col>
    <v-col cols="6" class="float-left mt-6">
        <div class="titre">SIGNATURE</div>
        <div class="font-weight-bold">NYUS Toasted Bread with Grape</div>
        <div class="text-disabled">In lorem ornare sollicitudin aliquet nunc cum massa.</div>
        <div class="font-weight-bold">8.50</div>
    </v-col>
</v-col>
</v-row>
</template>
<style scoped>
    .v-container {
        max-width: 100%;
    }
    .Main{
        margin-top: 11px;
        padding: 0;
    }
    .titre {
        color: rgb(250, 211, 144);
        font-weight: 500;
    }
    .font-weight-bold{
         font-size: 1.5rem;
    }
    h2 {
        font-size: 3rem;
        font-weight: 700;
        margin: 0% 10% 0% 16%;
    }
    .text-left {
        margin: 0% 10% 0% 16%;
    }
    .img {
        margin: 0% 10% 0% 56%;
    }
    </style>