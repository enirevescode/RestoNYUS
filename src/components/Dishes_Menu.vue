<script setup>
import Array_Menu from './slots/Array_Menu.vue';


</script>
<template>
    <div>
<Array_Menu >
    <template #dish="{dish}">
    {{ dish.plat }} - {{ dish.prix }} {{ dish.ingredient }}
    </template>
</Array_Menu>
    </div>
</template>