<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton class="flex gap-2 items-center"
      >Pages <i class="fa fa-chevron-down"
    /></MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute flex flex-col right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-non"
      >
        <MenuItem
          v-for="link of links"
          :key="link.href"
          as="template"
          class="hover:rounded hover:bg-purple-500 hover:text-white p-2"
        >
          <router-link class="dropdown-item" :to="link.href">
            {{ link.label }}
          </router-link>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

defineProps({
  links: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
