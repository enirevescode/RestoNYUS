<script setup>
import { RouterLink } from 'vue-router';
import {ref} from 'vue';

    const icons = ref ([
       'mdi-facebook',
       'mdi-twitter',
       'mdi-linkedin',
       'mdi-instagram',
      ])

</script>
<template>
<v-container class="mt-10">
  <v-row>
      <v-col cols="3">
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-card class="bg-transparent ml-1">
          <v-img 
            src="src\assets\img\logo.webp"
            :width="120"
            alt="logo" />
              <v-card-text class="text-justify" variant="flat">
                Egestas sit in lobortis duis viverra enim eros ornare. Et tincidunt pretium curabitur vehicula turpis adipiscing donec. Et ut morbi magna quis purus aliquet.
              </v-card-text>
      <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-3"
              :icon="icon"
              variant="plain"
              size="small"
              ></v-btn>
      </v-card>
      </v-col>
      <v-col cols="3">
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-card class="bg-transparent ml-1" variant="flat">
          <v-card-title>Our Location</v-card-title>
          <div class="text-left">
            <p> 3 E 19th St, 123 Fifth Avenue,</p>
            <p>NY 10160, New York, USA </p>
            <p>1 234 567 890</p>
          </div>
        <v-card-actions>
          <v-btn variant="outlined" color="white">Get location</v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
      <v-col cols='3'>
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-card class="bg-transparent ml-1" variant="flat">
          <v-card-title>Quick Links</v-card-title>
          <div class="navbar">
            <router-link active-class="active" to="/">Accueil</router-link>
            <router-link active-class="active" to="/menu">Menu</router-link>
            <router-link active-class="active" to="/contact">Contact</router-link>
            <router-link active-class="active" to="/apropos">A propos</router-link>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-card class="bg-transparent ml-1" variant="flat">
          <v-card-title>Opening Hours</v-card-title>
          <div >
              <p>
              Sunday to Wednesday<br>

              9AM - 10.30PM<br><br>

              Thursday, Friday, Saturday<br>

              9AM - 12.30AM
              </p>
          </div>
        </v-card>
      </v-col>
  </v-row>
</v-container>
</template>

<style scoped>
.v-row {
  width: 1000px;
  margin: auto;
}
.navbar {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
.v-row, .v-container {
  max-width: 100%;
  background-color: #1a1a1a;
}

.v-card-text, p, .v-card-title {
  color: white;
}
</style>