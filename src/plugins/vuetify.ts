/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import i18n from '@/plugins/i18n'
import { useI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
  blueprint: md3,
  theme: {
    defaultTheme: 'dark',
    // themes: {
    //   light: {
    //     colors: {
    //       primary: '#3272D9',
    //       surface: '#E1E5EE',
    //       secondary: '#66CFFA',
    //       error: '#FF7373',
    //       warning: '#FFD580',
    //       info: '#66D9E8',
    //       danger: '#FF665A',
    //       text: '#1F2933',
    //       header: '#1F2933',
    //       feature: '#4CB8DA',
    //       background: '#FFFFFF',
    //       white: '#FFFFFF'
    //     }
    //   },
    //   dark: {
    //     colors: {
    //       primary: '#0F172A',
    //       surface: '#1E293B',
    //       secondary: '#00B2D6',
    //       error: '#EF4444',
    //       warning: '#F59E0B',
    //       info: '#00A5B2',
    //       danger: '#D60023',
    //       text: '#F0F4F8',
    //       header: '#072541',
    //       feature: '#00748E',
    //       background: '#1A2237',
    //       white: '#FFFFFF'
    //       // primary: '#1867C0',
    //       // card: '#1E293B',
    //       // secondary: '#5CBBF6',
    //       // error: '#5CBBF6',
    //       // fontColor: '#072541'
    //     },
    //   },
    // },
    themes: {
      light: {
        colors: {
          primary: '#4169E1', // Royal Blue
          surface: '#DDF0DF', // Alice Blue
          secondary: '#38B0DE', // Summer Sky
          accent1: '#FF6B6B', // Light Salmon
          accent2: '#FF8C00', // Dark Orange
          accent3: '#32CD32', // Lime Green
          accent4: '#FFD700', // Gold
          accent5: '#DB7093', // Pale Violet Red
          accent6: '#20B2AA', // Light Sea Green
          accent7: '#4682B4', // Steel Blue
          accent8: '#9370DB', // Medium Purple
          error: '#FF6B6B', // Bittersweet
          warning: '#FFC300', // Cyber Yellow
          success: '#3CB371', // Medium Sea Green
          info: '#23B2D7', // Pelorous
          danger: '#FF4747', // Fire Engine Red
          text: '#2C3E50', // Ebony Clay
          textSecondary: '#7F8C8D', // Roman Silver
          header: '#37425A', // Dark Slate Gray
          feature: '#3EAEDE', // Fountain Blue
          background: '#FFFFFF', // White
          white: '#FFFFFF', // White
          highlight: '#E6E6FA', // Lavender
          contrast: '#FFFFFF'
        }
      },
      dark: {
        colors: {
          primary: '#23395D', // Biscay
          surface: '#374C70', // Pigeon Post
          secondary: '#00BBF9', // Vivid Sky Blue
          accent1: '#FF6347', // Tomato
          accent2: '#FFD700', // Gold
          accent3: '#BA55D3', // Medium Orchid
          accent4: '#40E0D0', // Turquoise
          accent5: '#C71585', // Medium Violet Red
          accent6: '#FFA500', // Orange
          accent7: '#6A5ACD', // Slate Blue
          accent8: '#2E8B57', // Sea Green
          error: '#FC5C65', // Sunset Orange
          warning: '#FFB900', // Selective Yellow
          success: '#2E8B57', // Sea Green
          info: '#00C1D4', // Robin's Egg Blue
          danger: '#FF4567', // Radical Red
          text: '#CAD3E4', // Light Steel Blue
          textSecondary: '#BEC9C9', // Cascade
          header: '#2E4765', // San Juan
          feature: '#00ACC1', // Java
          background: '#162A40', // Maastricht Blue
          white: '#FFFFFF', // White
          highlight: '#2F4F4F', // Dark Slate Grey
          contrast: '#000000'
        },
      },
    },
  },
})
