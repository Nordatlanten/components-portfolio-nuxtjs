// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Additional data added to load global scss variables.
          additionalData: '@import "@/assets/style/global.scss";',
        }
      }
    }
  },
  devtools: { enabled: true },
})
