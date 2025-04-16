<template>
  <div flex="~ col" gap-10 pb-25>
    <div mx-a max-w-5xl w-full fccc gap-10 px-4>
      <div text="#666 center">
        {{ $t('howItWorks.title') }}
      </div>
      <div text="11 lt-md:6 center" font-semibold>
        {{ $t('howItWorks.flow') }}
      </div>
    </div>

    <div flex="~ lt-md:col" gap="7.5" mx-a max-w-7xl w-full fcc px-4>
      <div b="~ solid #9a9a9a" from="#fafafa" pr h-145 w-90 of-hidden rounded-5 to-white bg-gradient-to-b>
        <div p-4 space-y-3>
          <div text="7.5" font-semibold>
            {{ $t('howItWorks.step1.title') }}
          </div>

          <div text="7.5 center" font-semibold>
            {{ $t('howItWorks.step1.subtitle') }}
          </div>

          <div text="#666 center">
            {{ $t('howItWorks.step1.description') }}
          </div>
        </div>

        <div pa bottom-0 right-0>
          <img src="~/assets/images/step-1.png">
        </div>
      </div>

      <div b="~ solid #9a9a9a" from="#fafafa" pr h-145 w-90 of-hidden rounded-5 to-white bg-gradient-to-b>
        <div p-4 space-y-3>
          <div text="7.5" font-semibold>
            {{ $t('howItWorks.step2.title') }}
          </div>

          <div text="7.5 center" font-semibold>
            {{ $t('howItWorks.step2.subtitle') }}
          </div>

          <div text="#666 center">
            {{ $t('howItWorks.step2.description') }}
          </div>
        </div>

        <div pa bottom-0 right-0>
          <img src="~/assets/images/step-2.png">
        </div>
      </div>

      <div b="~ solid #9a9a9a" from="#fafafa" pr h-145 w-90 of-hidden rounded-5 to-white bg-gradient-to-b>
        <div p-4 space-y-3>
          <div text="7.5" font-semibold>
            {{ $t('howItWorks.step3.title') }}
          </div>

          <div text="7.5 center" font-semibold>
            {{ $t('howItWorks.step3.subtitle') }}
          </div>

          <div text="#666 center">
            {{ $t('howItWorks.step3.description') }}
          </div>
        </div>

        <div pa bottom-0 right-0>
          <img src="~/assets/images/step-3.png">
        </div>
      </div>
    </div>
  </div>
</template>
