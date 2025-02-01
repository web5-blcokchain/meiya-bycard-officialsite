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
        3+ Customer Reviews
      </div>
      <div text-11>
        Empowering the Future of Online Transactions
      </div>
      <div text-5>
        Explore what our satisfied users have to say about their experiences with it.
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
              “{{ customer.review }}”
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

const customers = [
  {
    name: 'Sarah Williams',
    title: 'Marketing Manager',
    avatar: CustomerAvatar1,
    review: 'ByCard has completely transformed the way we handle online transactions in our company. The security features are top-notch, and the ease of generating virtual cards makes our online purchases hassle-free. I highly recommend ByCard to anyone looking for a secure and convenient online payment solution.'
  },
  {
    name: 'John Smith',
    title: 'Small Business Owner',
    avatar: CustomerAvatar2,
    review: 'As a small business owner, ByCard has been a game-changer. It allows me to offer convenient payment options to my clients while generating an extra revenue stream. The one-time-use codes provide peace of mind, knowing that my transactions are secure. ByCard is a win-win for both my clients and my business.'
  },
  {
    name: 'Lisa Rodriguez',
    title: 'Online Shopper',
    avatar: CustomerAvatar3,
    review: 'Shopping online has never been this secure and straightforward. ByCard’s unique codes make me feel confident about the safety of my transactions. It’s like having an extra layer of protection. I can’t imagine going back to using my regular card for online purchases. ByCard has won me over!'
  }
]
</script>
