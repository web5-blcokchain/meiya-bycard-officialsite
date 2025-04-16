<template>
  <footer fcc py-15>
    <div lt-md="flex flex-col" mx-a max-w-7xl w-full gap-5 px-4 md:fbc>
      <div space-y-4>
        <div>
          <img src="/logo.svg" h-10>
        </div>
        <div w-120 lt-md:w-full text="#666">
          {{ $t('footer.thanks') }}
        </div>
      </div>
      <div text="#666">
        {{ $t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>
