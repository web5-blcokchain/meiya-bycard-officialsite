<template>
  <div>
    <div text-6>
      Welcom to ByCard
    </div>
    <div mt-4>
      <ATabs active-key="2">
        <ATabPane key="1" tab="Personal" disabled>
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
                <FormPasswordInput v-model="confirmPassword" placeholder="Password" />
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
        <ATabPane key="2" tab="Organization">
          <div space-y-4>
            <div text-3 space-y-2>
              <p>By creating a business account, you can:</p>
              <p text="#666">
                Access our data APIs, which include cards account info and transaction data.
              </p>
              <p text="#666">
                Use sample data to try out our APIs in our sandbox environment.Hassle-free bookkeeping and expense management.Easy to get your profile on our visual portal.
              </p>
            </div>

            <AForm :model="form">
              <AFormItem name="mail">
                <AInput v-model="form.mail" placeholder="Email" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="password">
                <FormPasswordInput v-model="form.password" placeholder="Password" />
              </AFormItem>
              <AFormItem>
                <FormPasswordInput v-model="confirmPassword" placeholder="Confirm password" />
              </AFormItem>
              <AFormItem name="mobile">
                <AInput v-model="form.mobile" placeholder="Mobile" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="cust_name">
                <AInput v-model="form.cust_name" placeholder="Customer name" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="logo">
                <FormUpload>Organization logo</FormUpload>
              </AFormItem>
              <AFormItem name="business_licence_no">
                <AInput v-model="form.business_licence_no" placeholder="Business licence no" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem>
                <FormUpload>Business license</FormUpload>
              </AFormItem>
              <AFormItem name="juridical_person">
                <AInput v-model="form.juridical_person" placeholder="Juridical person" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem>
                <ASelect v-model="form.juridical_person_type" placeholder="Juridical person type" size="large">
                  <ASelectOption value="10000">
                    ID card
                  </ASelectOption>
                  <ASelectOption value="10001">
                    Passport
                  </ASelectOption>
                </ASelect>
              </AFormItem>
              <AFormItem name="juridical_person_no">
                <AInput v-model="form.juridical_person_no" placeholder="Juridical person no" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="contacts">
                <AInput v-model="form.contacts" placeholder="Contacts" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem>
                <ASelect placeholder="Select Country and Region" size="large">
                  <ASelectOption v-for="item in countryCodes" :key="item.code" :value="item.code">
                    {{ item.code }} {{ item.name }}
                  </ASelectOption>
                </ASelect>
              </AFormItem>
              <AFormItem name="contact_way">
                <AInput v-model="form.contact_way" placeholder="Contact information of institution contact person" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="invitation_code_ref">
                <AInput v-model="form.invitation_code_ref" placeholder="Invitation code" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>

              <AFormItem mt-4>
                <AButton type="primary" size="large" block @click="router.push('/register/org-success')">
                  Register
                </AButton>
              </AFormItem>
            </AForm>
          </div>
        </ATabPane>
      </ATabs>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login'
})

const router = useRouter()

const countryCodes = useCountry()

const form = reactive({
  country_code: '',
  business_licence_file: '',
  business_licence_no: '',
  contact_way: '',
  contacts: '',
  country: '',
  cust_name: '',
  cust_type: '',
  juridical_person: '',
  juridical_person_no: '',
  logo: '',
  mail: '',
  mobile: '',
  password: '',
  juridical_person_type: '',
  invitation_code_ref: ''
})

const confirmPassword = ref('')

const agree = ref(false)
</script>
