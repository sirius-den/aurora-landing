import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // Explicitly enable SSR (this is the default in Nuxt 3)
  ssr: true,
  
  // Add the installed modules
  modules: [
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  
  // Configure color mode
  colorMode: {
    classSuffix: '',
    fallback: 'dark',
    preference: 'system'
  },
});