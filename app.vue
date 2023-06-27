<template>
    <Header />
    <section id="page-area">
      <NuxtPage />
    </section>
    <Footer />
</template>

<style lang="scss">
// Style is meant to serve as properties for the global wrapper of the website.
:root {
  background: $color-yellow;
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  height: 100%;

  //I will want to define a couple of different max-width settings and use as variables
  // max-width: 1440px;
}

#__nuxt {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}


</style>
