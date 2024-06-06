<template>
  <nav class="">
    <div class="container mx-auto flex justify-between items-center">
      <router-link class="navbar-brand" to="/"
        ><img src="/logo.png" alt="Site Logo"
      /></router-link>
      <div class="text-black" id="navbarNav">
        <ul class="flex gap-4 text-lg items-center">
          <li class="hover:text-purple-600">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="hover:text-purple-600">
            <router-link class="nav-link" to="/speakers">Speakers</router-link>
          </li>
          <li class="hover:text-purple-600">
            <router-link class="nav-link" to="/schedule">Schedule</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sponsors">Sponsors</router-link>
          </li>
          <li>
            <Menu>
              <MenuButton>Pages</MenuButton>
              <MenuItems class="flex flex-col">
                <MenuItem
                  v-for="link of links"
                  :key="link.href"
                  as="template"
                  v-slot="{ active }"
                >
                  <router-link class="dropdown-item" :to="link.href">
                    {{ link.label }}
                  </router-link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li>
          <li>
            <router-link class="nav-link" to="/contact">Contact</router-link>
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
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

const links = [
  { href: '/about', label: 'About' },
  { href: '/accommodation', label: 'Accommodation' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/price-table', label: 'Price table' },
  { href: '/blog', label: 'Blog' },
  { href: '/blog-single', label: 'blog-single' },
  { href: '/Error404NotFound', label: 'Error 404' },
];
</script>

<style lang="scss" scoped></style>
