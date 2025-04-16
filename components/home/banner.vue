<style lang="scss" scoped>
.banner {
  @media (min-width: 768px) {
    background: url('~/assets/images/grid.png') no-repeat 0 0 / cover;
  }
}
</style>

<template>
  <div mt="40 lt-md:10" fxc class="banner">
    <div flex="~ lt-md:col" gap="4 lt-md:18" max-w-7xl w-full px-4>
      <div flex-1 space-y-4>
        <div text="lt-md:center lt-md:8 md:9 lg:10 xl:12" font-semibold>
          {{ $t('hero.title') }}
        </div>
        <div text="5 lt-md:4 lt-md:center #666" font-light leading-relaxed>
          {{ $t('hero.paymentNeeds') }}
        </div>
        <div flex lt-md:fccc lt-md:px-4>
          <AButton type="primary" h-12 lt-sm:hidden @click="register">
            <div fcc gap-2 text-5>
              <div>{{ $t('hero.applyCard') }}</div>
              <div i-material-symbols-arrow-right-alt-rounded size-5 />
            </div>
          </AButton>

          <div hidden lt-sm:block space-y-4>
            <AButton :block="true" type="primary" h-12 @click="register">
              <div fcc gap-2 text-5>
                <div>{{ $t('hero.applyCard') }}</div>
                <div i-material-symbols-arrow-right-alt-rounded size-5 />
              </div>
            </AButton>
            <AButton :block="true" h-12 bg-dark text-white hover="text-white!" @click="callback">
              <div fcc gap-2 text-5>
                <div i-lineicons-telegram-original size-5 />
                <div>{{ $t('header.callback') }}</div>
              </div>
            </AButton>
          </div>
        </div>
      </div>

      <div w="lt-md:full 75" lt-md:mt-32 class="[&>img]:(pr left-1/2 w-[90%] translate-x--1/2 lt-md:w-[80%] md:w-[80%] sm:w-[70%])">
        <img src="~/assets/images/card-1.png" top--15 rotate--30>
        <img src="~/assets/images/card-2.png" top--30 rotate-30>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { register, callback } = useRedirect()
</script>
