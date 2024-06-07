<template>
  <div>
    <HeadItem />
    <HeadNav />
  </div>

  <div class="header-area" id="home-header">
    <div class="overlay">
      <div class="container mx-auto text-center md:text-left">
        <h3 class="text-2xl">14 - 26 December 2016 , <span>New York</span></h3>
        <h1 class="text-5xl mb-0">Designer Conference</h1>
        <div
          class="flex items-center justify-center md:justify-start gap-2 mt-8"
        >
          <a
            href="#"
            class="border-2 rounded-xl p-3 transition-all hover:text-black hover:bg-white"
            >Register Now</a
          >
          <a
            href="#"
            class="border-2 rounded-xl p-3 transition-all hover:text-black hover:bg-white"
            >Learn More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeadNav from '@/components/HeadNav.vue';
import HeadItem from '@/components/HeadItem.vue';
</script>
