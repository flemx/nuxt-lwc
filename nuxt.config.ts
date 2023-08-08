// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },  

  css : ['@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'],
  // modules: [
  //   '@salesforce-ux/design-system',
  // ],
  
  // SSR is causing issues with importing LWC components,  https://github.com/lit/lit/discussions/2259
  ssr: false,

  typescript: {
    strict: true,
    typeCheck: true
  }
})
