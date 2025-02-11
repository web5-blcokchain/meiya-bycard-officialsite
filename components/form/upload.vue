<template>
  <div fyc gap-4>
    <div size-25 of-hidden rounded-2 clickable-98 b="~ solid #d2d2d2">
      <template v-if="loading">
        <div size-full fcc>
          <div i-eos-icons-loading size-8 />
        </div>
      </template>
      <template v-else>
        <div v-show="imageUrl === ''" size-full fcc @click="upload">
          <div i-material-symbols-add-2-rounded size-8 />
        </div>
        <div v-show="imageUrl !== ''" size-full @click="upload">
          <img :src="imageUrl" alt="avatar" size-full>
        </div>
      </template>
    </div>
    <div text="3.5">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const loading = ref(false)

const imageUrl = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})

function upload() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (!file) {
      message.error('Please select a file')
      return
    }

    loading.value = true

    commonApi
      .uploadFile(file)
      .then((response) => {
        imageUrl.value = response.data.result
        message.success('Upload successfully')
      })
      .finally(() => {
        loading.value = false
      })
  }

  input.click()
}
</script>
