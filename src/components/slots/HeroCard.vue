<template>
    <v-sheet
      class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 text-white"
      elevation="0"
      height="550"
      rounded
      max-width="900"
      width="100%"
      color="transparent"
    >
      <div>
        <slot name="titre">
            <!-- <div class="text-titre"> -->
            A Really Good Place to Eat In the City of New York!
            <!-- </div> -->
        </slot>
        <br>
  
        <slot name="ss-titre">
            <div class="text-h6 font-weight-medium mb-2">
            You are officially a part of the Vuetify Community!
            </div>
        </slot>
  
        <!-- <slot name="p"><p class="text-body-2 mb-4">
          Please head over to your inbox/spam or others folder to find our verificaiton email.
        </p></slot> -->
  
        <!-- <v-btn variant="text">Go to Login</v-btn> -->
      </div>
      
            <v-divider
            :thickness="2"
            class="border-opacity-100"
            color="#fad390"
            vertical
            ></v-divider>
    </v-sheet>
</template>
<style>
.n-titre {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
}

</style>