<style lang="scss" scoped>
.swiper-container {
  :deep() {
    .swiper-pagination-bullet {
      --uno: pr top-4 w-7.5 h-2.5 opacity-100 rounded-none;
      background-color: rgba(0, 0, 0, 0.2);
    }

    .swiper-pagination-bullet-active {
      color: #fff;
      background: #6245F2;
    }
  }
}
</style>

<template>
  <div mx-a max-w-5xl w-full flex="~ lt-md:col" items-center gap-12 px-4 pb="40 lt-md:20">
    <div>
      <div text="5 #666">
        {{ $t('testimonials.title') }}
      </div>
      <div text-11>
        {{ $t('testimonials.subtitle') }}
      </div>
      <div text-5>
        {{ $t('testimonials.description') }}
      </div>
    </div>
    <div w="1/2 lt-md:full" class="swiper-container">
      <Swiper
        :modules="[
          Autoplay,
          Pagination
        ]"
        :pagination="{
          clickable: true
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        loop
      >
        <SwiperSlide v-for="customer in customers" :key="customer.name" p="x-4 b-8">
          <div b="~ #aaa solid" rounded-5 p-8 shadow-md>
            <div>
              "{{ customer.review }}"
            </div>

            <div bg="#d2d2d2" my-8 h-1px w-full />

            <div fyc gap-2>
              <img :src="customer.avatar" size-15 rounded-full b="~ solid gray">
              <div>
                <div>{{ customer.name }}</div>
                <div text="#666">
                  {{ customer.title }}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import CustomerAvatar1 from '~/assets/images/customer-avatar-1.png'
import CustomerAvatar2 from '~/assets/images/customer-avatar-2.png'
import CustomerAvatar3 from '~/assets/images/customer-avatar-3.png'

import 'swiper/css'
import 'swiper/css/pagination'

const { t } = useI18n()

// 使用计算属性，确保语言切换时重新计算 customers 内容
const customers = computed(() => [
  {
    name: 'Sarah Williams',
    title: t('testimonials.marketingManager.title'),
    avatar: CustomerAvatar1,
    review: t('testimonials.marketingManager.review')
  },
  {
    name: 'John Smith',
    title: t('testimonials.businessOwner.title'),
    avatar: CustomerAvatar2,
    review: t('testimonials.businessOwner.review')
  },
  {
    name: 'Lisa Rodriguez',
    title: t('testimonials.shopper.title'),
    avatar: CustomerAvatar3,
    review: t('testimonials.shopper.review')
  }
])
</script>
