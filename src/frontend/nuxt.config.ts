// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    // Keys within public, will be also exposed to the client-side
    public: {
      directusToken: process.env.DIRECTUS_TOKEN,
      clientDirectusUrl: process.env.CLIENT_DIRECTUS_URL,
      serverDirectusUrl: process.env.SERVER_DIRECTUS_URL,
    }
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
