<style lang="scss">
html,
body,
#__nuxt,
#nuxt-app {
  --uno: size-screen;
}
</style>

<template>
  <div id="nuxt-app" of-x-hidden of-y-auto flex="~ col" bg="#f3f4f6">
    <NuxtRouteAnnouncer />
    <LayoutHeader shrink-0>
      <template #header>
        <slot name="header" />
      </template>
    </LayoutHeader>
    <main flex-1>
      <div size-full of-y-auto pb-25>
        <div mx-a mt-30 w-120 rounded-4 bg-white p-6>
          <NuxtPage />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import LayoutHeader from './header.vue'
</script>
