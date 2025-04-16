<template>
  <div h-full fbc px-2>
    <div cursor-pointer select-none @click="router.push('/')">
      <img src="/logo.svg" h-10 lt-sm:h-6>
    </div>
    <div fyc gap-2>
      <button bg-transparent px-1 text="3.5 primary" clickable @click="login">
        {{ $t('header.login') }}
      </button>
      <AButton type="primary" @click="register">
        {{ $t('header.register') }}
      </AButton>
      <AButton bg-dark text-white lt-sm:hidden hover="text-white!" @click="callback">
        <div fyc gap-2>
          <div i-lineicons-telegram-original size-5 />
          <div>{{ $t('header.callback') }}</div>
        </div>
      </AButton>
      <ASelect v-model:value="currentLocale" size="small" class="w-24" :bordered="false" @change="setLocale">
        <ASelectOption v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
          {{ locale.name }}
        </ASelectOption>
      </ASelect>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { register, login, callback } = useRedirect()

const router = useRouter()
const { locale, locales, setLocale } = useI18n()

const currentLocale = ref(locale.value)
const availableLocales = computed(() => {
  return (locales.value || []).map((l) => {
    return typeof l === 'string' ? { code: l, name: l } : l
  })
})
</script>
