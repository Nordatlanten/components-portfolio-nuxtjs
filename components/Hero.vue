<template>
  <article class="hero">
      <img :src="backgroundImage" />
      <section :style="{alignItems: contentPosition}">
        <h2>{{ headline }}</h2>
        <p>{{ description }}</p>
      </section>
  </article>
</template>

<script setup>
defineProps({
  backgroundImage: String,
  headline: String,
  description: String,
  contentPosition: String,
})
</script>


<style lang="scss">
.hero{
  min-height: calc(100vh - $header-height);
  background-repeat: no-repeat;
  height: 100%;
  position: relative;
  section{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    padding-inline: $horizontal-spacing;
    
    //Find better place for this style
    h2, p{
      color: white;
    }
  }
  img{
    filter: brightness(60%);
    position: absolute;
    inset: 0;
    z-index: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>
