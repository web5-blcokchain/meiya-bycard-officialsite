<template>
  <div fccc>
    <div size-12 rounded-full bg="#d2c9ff">
      <div i-material-symbols-check-small-rounded size-full />
    </div>

    <div mt-3>
      Successful registration
    </div>

    <div mt-10 text="3.5">
      Your account <span text="#ff7300">xxxx@xx.com</span> has been successfully registered
    </div>

    <div mt-25>
      <AButton size="large" w-50>
        OK
      </AButton>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login'
})
</script>
