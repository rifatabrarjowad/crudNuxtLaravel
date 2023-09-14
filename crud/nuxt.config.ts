export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 CRUD Application',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt 3 CRUD Application' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        {
          rel: 'preconnect',
           href: 'https://fonts.googleapis.com'
       },
       {
         rel: 'stylesheet',
         href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
         crossorigin: ''
       },
       {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
       },
       {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
        integrity: 'sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD',
        crossorigin: ''
       },
    ],
       script: [          
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
        },
        {
          src: 'https://code.jquery.com/jquery-3.7.1.min.js',
          type: 'text/javascript',
        }
      ]
      
    }
  }
})
