<template>
  <nav class="relative">
    <div class="container mx-auto flex justify-between items-center">
      <router-link class="navbar-brand" to="/"
        ><img src="/logo.png" alt="Site Logo"
      /></router-link>
      <div class="text-black" id="navbarNav">
        <ul class="hidden lg:flex gap-4 text-lg items-center">
          <li v-for="link in links" :key="link" class="hover:text-purple-600">
            <router-link class="nav-link" :to="link.href">{{
              link.label
            }}</router-link>
          </li>
          <li>
            <DropDownMenu :links="DropDownlinks" />
          </li>
          <li
            class="border-2 p-2 rounded-lg cursor-pointer transition-all border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <router-link
              class="nav-link btn btn-outline-primary"
              to="/price-table"
              >Reserve Your Seat</router-link
            >
          </li>
        </ul>
        <BurgerMenu @burger-open="menuOpen" />
        <Transition>
          <div
            v-if="isVisible"
            class="lg:hidden bg-white absolute right-0 w-full text-center text-xl pb-8"
          >
            <li
              v-for="link in links"
              :key="link"
              class="list-none p-1 hover:text-purple-600"
            >
              <router-link class="nav-link" :to="link.href">
                {{ link.label }}
              </router-link>
            </li>
            <li
              v-for="link in DropDownlinks"
              :key="link"
              class="list-none p-1 hover:text-purple-600"
            >
              <router-link class="nav-link" :to="link.href">
                {{ link.label }}
              </router-link>
            </li>
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import DropDownMenu from '@/components/DropDownMenu.vue';
import BurgerMenu from '@/components/BurgerMenu.vue';

const DropDownlinks = ref([
  { href: '/about', label: 'About' },
  { href: '/accommodation', label: 'Accommodation' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/price-table', label: 'Price table' },
  { href: '/blog', label: 'Blog' },
  { href: '/blog-single', label: 'blog-single' },
  { href: '/Error404NotFound', label: 'Error 404' },
]);

const links = ref([
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/speakers',
    label: 'Speakers',
  },
  {
    href: '/schedule',
    label: 'Schedule',
  },
  {
    href: '/sponsors',
    label: 'Sponsors',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]);

const isVisible = ref(false);

const menuOpen = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
