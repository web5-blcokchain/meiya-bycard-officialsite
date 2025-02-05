<template>
  <div size-full of-y-auto bg="#f3f4f6">
    <div mx-a mt-30 w-120 rounded-4 bg-white p-6>
      <div text-6>
        Welcom to ByCard
      </div>
      <div mt-4 text-center>
        <ATabs>
          <ATabPane key="1" tab="Personal" />
          <ATabPane key="2" tab="Organization" />
        </ATabs>

        <div>
          <AForm>
            <AFormItem>
              <AInput placeholder="Email" size="large" bg="#f3f4f6" b-none py-3 />
            </AFormItem>
            <AFormItem class="[&_.ant-input-affix-wrapper]:(b-none bg-[#f3f4f6] py-3)">
              <AInput placeholder="Password" :type="showPassword ? 'text' : 'password'" size="large" bg="#f3f4f6">
                <template #suffix>
                  <div clickable @click="showPassword = !showPassword">
                    <div size-5 bg="#999" :class="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" />
                  </div>
                </template>
              </AInput>
            </AFormItem>
            <AFormItem>
              <AButton type="primary" size="large" block>
                Login
              </AButton>
            </AFormItem>
          </AForm>

          <div text-left>
            <AButton type="link" p-0 text="3.5 primary">
              Forget Password?
            </AButton>
          </div>

          <div text-left space-x-2>
            <span text="#999">No account?</span>
            <AButton type="link" p-0 text="3.5 primary">
              Register
            </AButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login'
})

const showPassword = ref(false)
</script>
