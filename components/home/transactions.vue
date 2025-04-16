<template>
  <div flex="~ col" gap-10>
    <div flex="~ lt-md:col-reverse" mx-a max-w-5xl w-full gap-10 px-4>
      <div space-y-4>
        <div text="11 lt-md:6 center" font-semibold>
          {{ $t('features.title') }}
        </div>
        <div text="5 lt-md:4 center #666">
          {{ $t('features.description') }}
        </div>
      </div>
      <div hidden lt-md:block text="#666 center">
        About US
      </div>
    </div>

    <div flex="~ lt-md:col" gap="7.5" mx-a max-w-7xl w-full items-center px-4>
      <div
        p="7.5" h-85 w-70 space-y-4 b="2 solid black" hover="b-transparent bg-primary text-white"
        class="[&:hover>div>.hover-img]:(inline!) [&:hover>div>.default-img]:(hidden!)"
      >
        <div>
          <img class="default-img" src="~/assets/images/credit-card.png" size-11>
          <img class="hover-img" hidden src="~/assets/images/credit-card-active.png" size-11>
        </div>
        <div text-6>
          {{ $t('features.virtualCards.title') }}
        </div>
        <div>
          {{ $t('features.virtualCards.description') }}
        </div>
      </div>

      <div
        p="7.5" h-85 w-70 space-y-4 b="2 solid black" hover="b-transparent bg-primary text-white"
        class="[&:hover>div>.hover-img]:(inline!) [&:hover>div>.default-img]:(hidden!)"
      >
        <div>
          <img class="default-img" src="~/assets/images/security.png" size-11>
          <img class="hover-img" hidden src="~/assets/images/security-active.png" size-11>
        </div>
        <div text-6>
          {{ $t('features.security.title') }}
        </div>
        <div>
          {{ $t('features.security.description') }}
        </div>
      </div>

      <div
        p="7.5" h-85 w-70 space-y-4 b="2 solid black" hover="b-transparent bg-primary text-white"
        class="[&:hover>div>.hover-img]:(inline!) [&:hover>div>.default-img]:(hidden!)"
      >
        <div>
          <img class="default-img" src="~/assets/images/coin.png" size-11>
          <img class="hover-img" hidden src="~/assets/images/coin-active.png" size-11>
        </div>
        <div text-6>
          {{ $t('features.fees.title') }}
        </div>
        <div>
          {{ $t('features.fees.description') }}
        </div>
      </div>

      <div
        p="7.5" h-85 w-70 space-y-4 b="2 solid black" hover="b-transparent bg-primary text-white"
        class="[&:hover>div>.hover-img]:(inline!) [&:hover>div>.default-img]:(hidden!)"
      >
        <div>
          <img class="default-img" src="~/assets/images/friendly.png" size-11>
          <img class="hover-img" hidden src="~/assets/images/friendly-active.png" size-11>
        </div>
        <div text-6>
          {{ $t('features.interface.title') }}
        </div>
        <div>
          {{ $t('features.interface.description') }}
        </div>
      </div>
    </div>
  </div>
</template>
