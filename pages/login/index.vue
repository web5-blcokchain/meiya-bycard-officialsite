<template>
  <div>
    <div text-6>
      Welcom to ByCard
    </div>
    <div mt-4>
      <ATabs>
        <ATabPane key="1" tab="Personal" />
        <ATabPane key="2" tab="Organization" />
      </ATabs>

      <div>
        <AForm>
          <AFormItem>
            <AInput placeholder="Email" size="large" bg="#f3f4f6" b-none py-3 />
          </AFormItem>
          <AFormItem>
            <UserPasswordInput v-model="password" placeholder="Password" />
          </AFormItem>
          <AFormItem>
            <AButton type="primary" size="large" block>
              Login
            </AButton>
          </AFormItem>
        </AForm>

        <div>
          <AButton type="link" p-0 text="3.5 primary" @click="router.push('/login/forget-password')">
            Forget Password?
          </AButton>
        </div>

        <div space-x-2>
          <span text="#999">No account?</span>
          <AButton type="link" p-0 text="3.5 primary">
            Register
          </AButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login'
})

const router = useRouter()

const password = ref('')
</script>
