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
            <div class="text-titre">
            <slot name="titre"></slot>
            </div>
        <br>
        <br>
            <div class="text-ss-titre">
            <slot name="ss-titre"></slot>
            </div>
      </div>

        <v-divider
            :thickness="2"
            class="border-opacity-100"
            inset
            color="#fad390"
            vertical
        ></v-divider>
    </v-sheet>
</template>
<style>
.text-titre {
    font-size: 3.75rem !important;
    font-weight: 300;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
}

.text-ss-titre {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
}

</style>