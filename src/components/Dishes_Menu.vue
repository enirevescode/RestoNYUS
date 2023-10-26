<script setup>
import Array_Menu from './slots/Array_Menu.vue';


</script>
<template>
    <div>
<Array_Menu >
    <template #dish="slotProps">
    <!-- {{ slotProps.plat }} - {{ slotProps.prix }} {{ slotProps.ingredient }} -->
    </template>
</Array_Menu>
    </div>
</template>