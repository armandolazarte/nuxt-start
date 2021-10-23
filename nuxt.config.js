export default {
  // server: {
  //   host: '0.0.0.0'
  // },
  loading: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-start",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
      // { name: "theme-color", content: "#334155" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "nuxt-gsap-module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap"
  ],

  sitemap: {
    // options
    hostname: "http://localhost:3000",
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    // routes: [
    //     '/',
    //     '/about',
    // ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    },
    icon: {
      fileName: "icon.png"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
