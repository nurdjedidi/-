import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'makkah',
      themes: {
        makkah: {
          dark: false,
          colors: {
            primary: '#D4AF37',
            secondary: '#2E8B57',
            accent: '#8B4513',
            error: '#DC3545',
            info: '#17A2B8',
            success: '#28A745',
            warning: '#FFC107',
            background: '#FAFAFA',
            surface: '#FFFFFF'
          }
        }
      }
    }
  })

  app.vueApp.use(vuetify)
})