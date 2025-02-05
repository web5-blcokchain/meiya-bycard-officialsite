<template>
  <div fccc>
    <div size-12 rounded-full bg="#d2c9ff">
      <div i-material-symbols-check-small-rounded size-full />
    </div>

    <div mt-3>
      Submit successfully
    </div>

    <div mt-10 text="3.5 center">
      The registration information is being reviewed. Please pay attention to your email to check the review progress information.
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
