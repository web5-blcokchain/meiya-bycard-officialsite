<template>
  <div>
    <div text-6>
      Welcom to ByCard
    </div>
    <div mt-4>
      <ATabs active-key="2">
        <ATabPane key="1" tab="Personal" disabled />
        <ATabPane key="2" tab="Organization" />
      </ATabs>

      <div>
        <AForm>
          <AFormItem>
            <AInput v-model:value="email" placeholder="Email" size="large" bg="#f3f4f6" b-none py-3 />
          </AFormItem>
          <AFormItem>
            <FormPasswordInput v-model="password" placeholder="Password" />
          </AFormItem>
          <AFormItem>
            <AButton type="primary" size="large" block :loading="loading" @click="login">
              Login
            </AButton>
          </AFormItem>
        </AForm>

        <div space-x-2 text="3.5">
          <span text="#999">No account?</span>
          <AButton type="link" p-0 text="primary" @click="router.push('/register')">
            Register
          </AButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'

definePageMeta({
  layout: 'login'
})

const router = useRouter()

const loading = ref(false)

const email = ref('')
const password = ref('')

function login() {
  if (!email.value || !password.value) {
    message.error('Please enter email and password')
    return
  }

  loading.value = true

  customersApi.login({
    login_type: '1',
    mail: email.value,
    password: password.value
  })
    .then(() => {
      router.push('/')
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
