<template>
  <div>
    <div v-show="step === Step.SendCode">
      <div text-6>
        Forget password
      </div>

      <AForm mt-4>
        <AFormItem>
          <AInput placeholder="Email" size="large" bg="#f3f4f6" b-none py-3 />
        </AFormItem>
        <AFormItem class="[&_.ant-input-affix-wrapper]:(b-none bg-[#f3f4f6] py-3)">
          <AInput placeholder="Code" size="large" bg="#f3f4f6">
            <template #suffix>
              <div h-full w-18 bg-gray />
            </template>
          </AInput>
        </AFormItem>
        <AFormItem>
          <AButton type="primary" size="large" block @click="sendCode">
            Send code
          </AButton>
        </AFormItem>
      </AForm>
    </div>

    <div v-show="step === Step.Sended">
      <div fccc gap-2>
        <img src="~/assets/images/postbox.png" alt="postbox" size-25>

        <div text-6>
          Verify your account
        </div>

        <div text="3.5">
          We have sent a verification email to: <span text="#ff7300">xxxx@xx.com</span>, please check your email and click the link to verify your account.
        </div>

        <div space-x-2>
          <span text="3.5 #999">If you didn't receive it?</span>
          <AButton type="link" text="3.5 primary" p-0 @click="resendCode">
            Resend
          </AButton>
        </div>

        <div>
          <AButton size="large" block @click="step = Step.ResetPassword">
            Confirm
          </AButton>
        </div>
      </div>
    </div>

    <div v-show="step === Step.ResetPassword">
      <div text-6>
        Reset password
      </div>

      <AForm mt-4>
        <AFormItem>
          <AInput placeholder="Email" size="large" disabled bg="#f3f4f6" b-none py-3 />
        </AFormItem>
        <AFormItem>
          <FormPasswordInput v-model="form.password" placeholder="Password" />
        </AFormItem>
        <AFormItem>
          <FormPasswordInput v-model="confirmPassword" placeholder="Confirm password" />
        </AFormItem>
        <AFormItem class="[&_.ant-input-affix-wrapper]:(b-none bg-[#f3f4f6] py-2)">
          <AInput placeholder="Code" size="large" bg="#f3f4f6">
            <template #suffix>
              <div h-8 w-18 fcc select-none bg-gray-2>
                <div text="3 gray">
                  Captcha
                </div>
              </div>
            </template>
          </AInput>
        </AFormItem>
        <AFormItem>
          <AButton type="primary" size="large" block>
            Reset
          </AButton>
        </AFormItem>
      </AForm>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login'
})

enum Step {
  SendCode,
  Sended,
  ResetPassword
}

const step = ref(Step.ResetPassword)

const form = reactive({
  email: '',
  code: '',
  password: ''
})

const confirmPassword = ref('')

function sendCode() {
  step.value = Step.Sended
}

function resendCode() {
  step.value = Step.SendCode
}
</script>
