<template>
  <div>
    <div text-6>
      Welcom to ByCard
    </div>
    <div mt-4>
      <ATabs>
        <ATabPane key="1" tab="Personal">
          <div>
            <AForm>
              <AFormItem>
                <AInput placeholder="Email" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem class="[&_.ant-input-affix-wrapper]:(b-none bg-[#f3f4f6] py-2)">
                <AInput placeholder="Code" size="large" bg="#f3f4f6">
                  <template #suffix>
                    <AButton type="link" p-0 text-primary>
                      Send Code
                    </AButton>
                  </template>
                </AInput>
              </AFormItem>
              <AFormItem>
                <UserPasswordInput v-model="password" placeholder="Password" />
                <div mt-2 fyc gap-1>
                  <div i-material-symbols-check-circle-rounded size-4 bg="#dfe1e5" />
                  <div text="3 #b3b3b3">
                    6-16 characters (letters, numbers, symbols), case sensitive
                  </div>
                </div>
              </AFormItem>
              <AFormItem>
                <AInput placeholder="Invite Code" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>

              <div fyc gap-1 text-3>
                <div size-4 clickable @click="agree = !agree">
                  <div v-show="agree" size-full rounded-full bg-primary>
                    <div i-material-symbols-check-small-rounded size-full bg-white />
                  </div>
                  <div v-show="!agree" size-full rounded-full bg-white b="~ solid #999" />
                </div>
                <div text="#999" cursor-pointer select-none @click="agree = !agree">
                  I agree
                </div>
                <div cursor-pointer select-none text-primary>
                  《ByCard Terms of Agreement》
                </div>
              </div>

              <AFormItem mt-4>
                <AButton type="primary" size="large" block @click="router.push('/register/success')">
                  Register
                </AButton>
              </AFormItem>
            </AForm>

            <div space-x-2>
              <span text="3.5 #999">Already have an account?</span>
              <AButton type="link" p-0 text="3.5 primary" @click="router.push('/login')">
                Login
              </AButton>
            </div>
          </div>
        </ATabPane>
        <ATabPane key="2" tab="Organization" />
      </ATabs>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login'
})

const router = useRouter()

const password = ref('')

const agree = ref(false)
</script>
