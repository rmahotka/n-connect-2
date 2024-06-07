<template>
  <div>
    <div class="footer-area">
      <div class="container mx-auto">
        <!-- <div
          class="flex flex-wrap items-start xl:flex-row xl:justify-between lg:justify-center lg:flex-col lg:items-center"
        > -->
        <div
          class="grid lg:grid-cols-3 grid-cols-1 justify-items-center lg:gap-16 gap-8"
        >
          <div class="single-footer-widget lg:text-left text-center">
            <router-link to="/" class="footer-logo">
              <img src="/footer-logo.png" alt="logo" />
            </router-link>
            <p class="text-xs">
              Evemat is a Responsive HTML Event Template based on material
              design language invented by Google.
            </p>
            <ul class="flex items-center lg:justify-start gap-2 justify-center">
              <li v-for="link in networkingLink" :key="link.id">
                <a href="">
                  <i
                    :class="link.icon"
                    class="text-white transition-all hover:text-purple-800"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div class="text-white">
            <h4 class="text-white text-2xl mb-3 text-center lg:text-left">
              Subscribe Me!
            </h4>
            <form
              action="subscribe.php"
              class="flex flex-col justify-start mb-2"
            >
              <input
                type="email"
                placeholder="Your Email"
                class="p-2 rounded-xl mb-2 lg:w-80 w-full text-black"
              />
              <button
                type="submit"
                class="border-2 rounded-xl p-2 transition-all hover:bg-white hover:text-black hover:border-purple-800"
              >
                Subscribe
              </button>
            </form>
            <p class="text-white text-sm text-center lg:text-left">
              Your information is safe with us.
            </p>
          </div>

          <div>
            <h4
              class="text-white text-2xl mb-3 2xl:text-left lg:text-left text-center"
            >
              Mini Gallery
            </h4>
            <ul class="flex flex-wrap gap-2 lg:justify-start justify-center">
              <li v-for="img in galleryFooter" :key="img.id">
                <img :src="img.img" :alt="img.alt" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const galleryFooter = ref([
  {
    id: 1,
    img: '/gallery/thumb/1.jpg',
    alt: 'gallery',
  },
  {
    id: 2,
    img: '/gallery/thumb/1.jpg',
    alt: 'gallery',
  },
  {
    id: 3,
    img: '/gallery/thumb/1.jpg',
    alt: 'gallery',
  },
  {
    id: 4,
    img: '/gallery/thumb/1.jpg',
    alt: 'gallery',
  },
  {
    id: 5,
    img: '/gallery/thumb/1.jpg',
    alt: 'gallery',
  },
  {
    id: 6,
    img: '/gallery/thumb/1.jpg',
    alt: 'gallery',
  },
]);

const networkingLink = ref([
  {
    id: 1,
    link: '#',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    link: '#',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    link: '#',
    icon: 'fab fa-pinterest-p',
  },
  {
    id: 4,
    link: '#',
    icon: 'fab fa-youtube',
  },
  {
    id: 5,
    link: '#',
    icon: 'fab fa-linkedin',
  },
  {
    id: 6,
    link: '#',
    icon: 'fab fa-tumblr',
  },
]);
</script>
