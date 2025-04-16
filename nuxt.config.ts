import type { ComponentResolver } from 'unplugin-vue-components/types'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import lodashImports from 'lodash-imports'
import component from 'unplugin-vue-components/vite'

const r = (path: string) => fileURLToPath(new URL(path, import.meta.url))

const lodash = lodashImports({ hasFrom: true })

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: r('locales'),
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      alwaysRedirect: true
    }
  },

  css: [
    '@unocss/reset/tailwind-compat.css'
  ],

  colorMode: {
    classSuffix: ''
  },

  imports: {
    dirs: [
      'composables/**'
    ],
    imports: [
      ...lodash.imports
    ]
  },

  vite: {
    plugins: [
      component({
        dts: r('./.nuxt/lib-components.d.ts'),
        resolvers: [
          ((name: string) => {
            if (name.startsWith('A'))
              return { importName: name.slice(1), path: 'ant-design-vue/es' }
          }) as ComponentResolver
        ]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  typescript: {
    tsConfig: {
      include: [
        './lib-components.d.ts'
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE
    }
  },

  ssr: false,

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
