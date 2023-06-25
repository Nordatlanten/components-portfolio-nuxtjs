<template>
  <button :class="['button', secondary ? 'button--secondary' : '', naked ? 'button--naked' : '']">
    im gay
  </button>
</template>


<script setup>
  defineProps({
    text: String,
    secondary: Boolean,
    naked: Boolean,
  })
</script>

<style lang="scss" scoped>
  .button{
    color: blue;
    &--secondary{
      color: red;
    }
  }
</style>
