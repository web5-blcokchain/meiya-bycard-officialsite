<template>
  <AInput v-model="value" placeholder="Password" :type="showPassword ? 'text' : 'password'" size="large" bg="#f3f4f6">
    <template #suffix>
      <div clickable @click="showPassword = !showPassword">
        <div size-5 bg="#999" :class="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" />
      </div>
    </template>
  </AInput>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

const showPassword = ref(false)
</script>
