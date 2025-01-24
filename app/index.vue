<style lang="scss">
html,
body,
#__nuxt,
#nuxt-app {
  --uno: size-screen;
}
</style>

<template>
  <div id="nuxt-app">
    <AConfigProvider :theme>
      <NuxtLayout>
        <template #header>
          <LayoutsHeader />
        </template>
      </NuxtLayout>
    </AConfigProvider>
  </div>
</template>

<script lang="ts" setup>
import type { ConfigProviderProps } from 'ant-design-vue'

const theme: ConfigProviderProps['theme'] = {
  token: {
    colorPrimary: '#6040ec'
  }
}

useHead({
  title: 'ByCard',
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})
</script>
