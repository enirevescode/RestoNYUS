<template>
   <div>
   <v-img
    src='src\assets\img\cake.webp'
    width="275"
    height="400"
    id="cake"
    ></v-img>
    <slot></slot>
    </div>
</template>
<style scoped>
#cake {
  position: relative;
  top: 110px;
  left: 1170px;
}
</style>