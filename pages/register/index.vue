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

            <AForm ref="organization-form" :model="form" :rules="rules">
              <AFormItem name="mail">
                <AInput v-model:value="form.mail" placeholder="Email" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="password">
                <FormPasswordInput v-model="form.password" placeholder="Password" />
              </AFormItem>
              <AFormItem name="confirmPassword">
                <FormPasswordInput v-model="confirmPassword" placeholder="Confirm password" />
              </AFormItem>
              <AFormItem name="mobile">
                <AInput v-model:value="form.mobile" placeholder="Mobile" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="cust_name">
                <AInput v-model:value="form.cust_name" placeholder="Customer name" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="logo">
                <FormUpload v-model="form.logo">
                  Customer logo
                </FormUpload>
              </AFormItem>
              <AFormItem name="business_licence_no">
                <AInput v-model:value="form.business_licence_no" placeholder="Business licence no" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="business_licence_file">
                <FormUpload v-model="form.business_licence_file">
                  Business license
                </FormUpload>
              </AFormItem>
              <AFormItem name="juridical_person">
                <AInput v-model:value="form.juridical_person" placeholder="Juridical person" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="juridical_person_type">
                <ASelect v-model="form.juridical_person_type" placeholder="Juridical person type" size="large" @change="selectJuridicalPersonType">
                  <ASelectOption value="10000">
                    ID card
                  </ASelectOption>
                  <ASelectOption value="10001">
                    Passport
                  </ASelectOption>
                </ASelect>
              </AFormItem>
              <AFormItem name="juridical_person_no">
                <AInput v-model:value="form.juridical_person_no" placeholder="Juridical person no" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="contacts">
                <AInput v-model:value="form.contacts" placeholder="Contacts" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="country_code">
                <ASelect v-model="form.country_code" placeholder="Select Country and Region" size="large" @change="selectCountry">
                  <ASelectOption v-for="item in countryCodes" :key="item.code" :value="item.code">
                    {{ item.code }} {{ item.name }}
                  </ASelectOption>
                </ASelect>
              </AFormItem>
              <AFormItem name="contact_way">
                <AInput v-model:value="form.contact_way" placeholder="Contact information of institution contact person" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>
              <AFormItem name="invitation_code_ref">
                <AInput v-model:value="form.invitation_code_ref" placeholder="Invitation code" size="large" bg="#f3f4f6" b-none py-3 />
              </AFormItem>

              <AFormItem mt-4>
                <AButton type="primary" size="large" :loading="loading" block @click="organizationRegister">
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
import type { Rule } from 'ant-design-vue/es/form'

import { message } from 'ant-design-vue'

definePageMeta({
  layout: 'login'
})

const router = useRouter()

const countryCodes = useCountry()

const loading = ref(false)

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

const organizationForm = useTemplateRef<any>('organization-form')

const rules: Record<string, Rule[]> = {
  mail: [{ required: true, message: 'Please enter your email address', trigger: 'blur' }],
  password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
  confirmPassword: [
    {
      validator: () => {
        if (confirmPassword.value !== form.password) {
          return Promise.reject(new Error('The two passwords do not match'))
        }
        return Promise.resolve()
      },
      trigger: 'blur'
    }
  ],
  mobile: [{ required: true, message: 'Please enter your mobile number', trigger: 'blur' }],
  logo: [{ required: true, message: 'Please upload the customer logo', trigger: 'blur' }],
  business_licence_file: [{ required: true, message: 'Please upload the business license', trigger: 'blur' }],
  country_code: [{ required: true, message: 'Please select the country and region', trigger: 'blur' }],
  cust_name: [{ required: true, message: 'Please enter the customer name', trigger: 'blur' }],
  business_licence_no: [{ required: true, message: 'Please enter the business license number', trigger: 'blur' }],
  juridical_person_type: [{ required: true, message: 'Please select the type of legal person', trigger: 'blur' }],
  juridical_person: [{ required: true, message: 'Please enter the legal person', trigger: 'blur' }],
  juridical_person_no: [{ required: true, message: 'Please enter the legal person number', trigger: 'blur' }],
  contacts: [{ required: true, message: 'Please enter the contact person', trigger: 'blur' }],
  contact_way: [{ required: true, message: 'Please enter the contact information of the institution contact person', trigger: 'blur' }]
}

function selectJuridicalPersonType(value: string) {
  form.juridical_person_type = value
}

function selectCountry(value: string) {
  form.country_code = value
  const countryName = _find(countryCodes, { code: value })?.name

  if (!countryName) {
    message.error('Country code error')
    return
  }

  form.country = countryName
}

async function organizationRegister() {
  await organizationForm.value.validate()

  loading.value = true

  customersApi
    .register(form)
    .then((response) => {
      if (response.data.code !== 0) {
        message.error(response.data.msg)
        return
      }

      router.push('/register/org-success')
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
