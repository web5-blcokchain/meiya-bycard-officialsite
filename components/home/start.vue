<template>
  <div fccc gap-10 py-20 bg="#f7f8fb">
    <div text="lt-md:8 md:10 12">
      {{ $t('cta.title') }}
    </div>
    <div>
      <AButton type="primary" size="large" @click="register">
        <div fyc gap-1>
          <div>{{ $t('cta.button') }}</div>
          <div i-material-symbols-arrow-right-alt-rounded size-5 />
        </div>
      </AButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { register } = useRedirect()
</script>
