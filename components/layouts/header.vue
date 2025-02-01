<template>
  <div h-full fbc px-2>
    <div>
      <img src="/logo.svg" h-10 lt-sm:h-6>
    </div>
    <div fyc gap-2>
      <button bg-transparent px-1 text="3.5 primary" clickable @click="login">
        Login
      </button>
      <AButton type="primary" @click="register">
        Register
      </AButton>
      <AButton bg-dark text-white lt-sm:hidden hover="text-white!" @click="callback">
        <div fyc gap-2>
          <div i-lineicons-telegram-original size-5 />
          <div>CallBack</div>
        </div>
      </AButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { register, login, callback } = useRedirect()
</script>
