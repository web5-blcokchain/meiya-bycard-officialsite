<style lang="scss" scoped>
.status-container {
  background: url('~/assets/images/status-background.png') no-repeat 0 0 / cover;
}
</style>

<template>
  <div class="status-container" py-25>
    <div mx-a max-w-5xl w-full fcc gap-10 px-4 text="white center">
      <div flex="~ lt-md:col" gap-25>
        <div>
          <div text-15>
            1,000,000
          </div>
          <div text-8>
            {{ $t('stats.users') }}
          </div>
        </div>

        <div>
          <div text-15>
            1B+
          </div>
          <div text-8>
            {{ $t('stats.transactions') }}
          </div>
        </div>

        <div>
          <div text-15>
            160+
          </div>
          <div text-8>
            {{ $t('stats.team') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
