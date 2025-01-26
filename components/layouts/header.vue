<template>
  <div h-full fbc px-2>
    <div>
      <NuxtImg src="/logo.svg" h-10 lt-sm:h-6 />
    </div>
    <div fyc gap-2>
      <button bg-transparent px-1 text="3.5 primary" clickable>
        登陆
      </button>
      <AButton type="primary">
        注册
      </AButton>
      <AButton bg-dark text-white lt-sm:hidden hover="text-white!">
        <div fyc gap-2>
          <div i-lineicons-telegram-original size-5 />
          <div>CallBack</div>
        </div>
      </AButton>
    </div>
  </div>
</template>

<!-- <script lang="ts" setup>
import { Button as AntButton } from 'ant-design-vue'
</script> -->
