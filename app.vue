<template>
    <Header />
    <section id="page-area">
      <NuxtPage />
    </section>
    <Footer />
</template>

<style lang="scss">
:root {
  background: $color-yellow;
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  height: 100%;
}

#__nuxt {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}


</style>