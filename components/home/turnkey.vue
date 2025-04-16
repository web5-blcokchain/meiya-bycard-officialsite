<template>
  <div flex="~ col" gap-20 py-20 bg="#f7f8fb">
    <div mx-a max-w-5xl w-full fcc gap-10 px-4>
      <div space-y-4>
        <div text="11 lt-md:6 center" font-semibold>
          {{ $t('solutions.turnkey.title') }}
        </div>
        <div text="5 lt-md:4 center #666">
          {{ $t('solutions.turnkey.description') }}
        </div>
      </div>
    </div>

    <div grid="~ md:cols-3 lt-md:rows-6" gap="x-10 y-20 lt-md:y-4" mx-a max-w-7xl w-full px-4>
      <div flex gap-4>
        <div w-18 shrink-0>
          <img src="~/assets/icons/go-borderless.svg" size-18>
        </div>
        <div>
          <div text="7.5">
            {{ $t('solutions.borderless.title') }}
          </div>
          <div text="5 #666">
            {{ $t('solutions.borderless.description') }}
          </div>
        </div>
      </div>

      <div flex gap-4>
        <div w-18 shrink-0>
          <img src="~/assets/icons/kyc.svg" size-18>
        </div>
        <div>
          <div text="7.5">
            {{ $t('solutions.kyc.title') }}
          </div>
          <div text="5 #666">
            {{ $t('solutions.kyc.description') }}
          </div>
        </div>
      </div>

      <div flex gap-4>
        <div w-18 shrink-0>
          <img src="~/assets/icons/payments.svg" size-18>
        </div>
        <div>
          <div text="7.5">
            {{ $t('solutions.contactless.title') }}
          </div>
          <div text="5 #666">
            {{ $t('solutions.contactless.description') }}
          </div>
        </div>
      </div>

      <div flex gap-4>
        <div w-18 shrink-0>
          <img src="~/assets/icons/with-no-hidden-fees.svg" size-18>
        </div>
        <div>
          <div text="7.5">
            {{ $t('solutions.noFees.title') }}
          </div>
          <div text="5 #666">
            {{ $t('solutions.noFees.description') }}
          </div>
        </div>
      </div>

      <div flex gap-4>
        <div w-18 shrink-0>
          <img src="~/assets/icons/issuance.svg" size-18>
        </div>
        <div>
          <div text="7.5">
            {{ $t('solutions.flexible.title') }}
          </div>
          <div text="5 #666">
            {{ $t('solutions.flexible.description') }}
          </div>
        </div>
      </div>

      <div flex gap-4>
        <div w-18 shrink-0>
          <img src="~/assets/icons/effortless.svg" size-18>
        </div>
        <div>
          <div text="7.5">
            {{ $t('solutions.integration.title') }}
          </div>
          <div text="5 #666">
            {{ $t('solutions.integration.description') }}
          </div>
        </div>
      </div>
    </div>

    <div lt-md:px-5>
      <div p="x-12.5 t-12.5" flex="~ lt-md:col" mx-a max-w-7xl w-full items-end gap-10 bg-white lt-md:rounded-5>
        <div pb-20 space-y-20>
          <div flex="~ col">
            <div text-11>
              {{ $t('benefits.swift') }}
            </div>

            <div text="5 #666">
              {{ $t('benefits.toMarket.title') }}
            </div>
          </div>

          <div>
            <div text="7.5">
              {{ $t('benefits.toMarket.description') }}
            </div>
            <div text="5 #666">
              {{ $t('benefits.toMarket.details') }}
            </div>
            <AButton type="text" size="large" mt-4 @click="showdoc">
              <div inline-block select-none clickable>
                {{ $t('benefits.getApi') }} →
              </div>
            </AButton>
          </div>

          <div>
            <div text="7.5">
              {{ $t('benefits.instantCards.title') }}
            </div>
            <div text="5 #666">
              {{ $t('benefits.instantCards.description') }}
            </div>
          </div>
        </div>

        <div px-10>
          <img src="~/assets/images/swift.png" w-95>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { showdoc } = useRedirect()
</script>
