<!-- This component is built mobile-first. I will initially build it using media-queries, but more modern approaches may be implemented in the future. The component has a slot for branding (e.g. a logo) and a slot for navigation links. An extra component will be loaded as a "hamburger slider" to the right side of the header component. A component may eventually be created for the navigation menu.-->

<template>
  <header>
    <div class="content1">
      <div class="branding">
        <NuxtLink to="/"><h1>Nordatlanten</h1></NuxtLink>
      </div>
    </div>
    <div class="content2">
      <nav>
        <ul>
          <li>
            <NuxtLink :class="{ 'link-underline': ($route.path === '/examples') }" to="/examples">Examples</NuxtLink>
          </li>
          <li>
            <NuxtLink :class="{ 'link-underline': ($route.path === '/about') }" to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink :class="{ 'link-underline': ($route.path === '/contact') }" to="/contact">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink :class="{ 'link-underline': ($route.path === '/blog') }" to="/blog">Blog</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="slide-menu">
        <div @click="toggleSlideMenu" class="slide-menu__trigger"></div>
        <div class="slide-menu__content">
          <h2>Slide menu content</h2>

          To be styled and optimized
          <button @click="toggleSlideMenu">Close slide menu</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    function toggleSlideMenu(){
      const slideMenuContent = document.querySelector(".slide-menu__content")
      slideMenuContent.classList.toggle("slide-menu__content--expanded")
    }
    return {
      toggleSlideMenu
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;

  padding-inline: $horizontal-spacing;
  .content1{
    h1{
      margin: 0;
    }
  }
  .content2 {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}



nav {
  ul {
    display: flex;
    align-items: center;
    gap: 16px;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      text-transform: uppercase;
      font-weight: bold;
      text-underline-offset: 6px;
    }
  }
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}

.link-underline,
.link-underline:hover {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.slide-menu {
  &__trigger {
    display: inline-block;
    background-image: url("~/assets/icons/menu.svg");
    background-position: center;
    background-repeat: no-repeat;
    min-height: 36px;
    min-width: 36px;
    cursor: pointer;

    //This particular icon sits a bit funky.
    position: relative;
    top: 4px;
  }
  &__content{
    z-index: 1;
    background: #333;
    width: 30vw;
    position: fixed;
    top: 0;
    left: 70%;
    bottom: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease, width 0.3s ease;

    &--expanded{
      transform: translateX(0);
    }
  }
}</style>
