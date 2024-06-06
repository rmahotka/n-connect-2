<template>
  <div>
    <HeadItem />
    <NavItemVue />
  </div>

  <div class="header-area" id="home-header">
    <div class="overlay">
      <div class="container mx-auto">
        <div class="col-md-12">
          <h3 class="text-2xl">
            14 - 26 December 2016 , <span>New York</span>
          </h3>
          <h1 class="text-5xl mb-0">Designer Conference</h1>
          <div class="flex items-center gap-2 mt-8">
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
  </div>
</template>

<script setup>
import NavItemVue from './NavItem.vue';
import HeadItem from './HeadItem.vue';
</script>
