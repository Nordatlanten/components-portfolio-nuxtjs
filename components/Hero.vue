<template>
  <article :style="{'background-image': backgroundImage}" class="hero">
      Hero
  </article>
</template>

<script setup>
defineProps({
  backgroundImage: String
})
</script>


<style lang="scss">
.hero{
  min-height: calc(100vh - $header-height);
  background-color: green;
}
</style>