<template>
  <div flex="~ lt-md:col-reverse" mx-a max-w-7xl w-full gap-10 px-4>
    <div fcc shrink-0>
      <img src="~/assets/images/card-3.png" w="lt-md:full md:120 sm:70%">
    </div>
    <div space-y-4>
      <div text="11 lt-md:6 lt-md:center" font-semibold>
        {{ $t('about.title') }}
      </div>
      <div text="5 lt-md:4 lt-md:center #666">
        {{ $t('about.mission') }}
      </div>
      <div grid="~ cols-2" gap-2>
        <div fyc gap-2>
          <div i-material-symbols-light-check-circle-outline-rounded size="6.5" />
          <div text="3.5">
            {{ $t('about.vision') }}
          </div>
        </div>
        <div fyc gap-2>
          <div i-material-symbols-light-check-circle-outline-rounded size="6.5" />
          <div text="3.5">
            {{ $t('about.difference') }}
          </div>
        </div>
        <div fyc gap-2>
          <div i-material-symbols-light-check-circle-outline-rounded size="6.5" />
          <div text="3.5">
            {{ $t('about.commitment') }}
          </div>
        </div>
        <div fyc gap-2>
          <div i-material-symbols-light-check-circle-outline-rounded size="6.5" />
          <div text="3.5">
            {{ $t('about.joinUs') }}
          </div>
        </div>
      </div>
    </div>
    <div hidden lt-md:block text="#666 center">
      About US
    </div>
  </div>
</template>
