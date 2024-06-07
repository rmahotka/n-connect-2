<template>
  <button
    @click="burgerOpen"
    class="lg:hidden text-black focus:outline-none relative"
    :class="{ 'burger-open': isOpen }"
  >
    <div
      class="relative z-10 w-10 h-1 transition-all duration-300 ease-in-out bg-black rounded-full before:content-[''] before:absolute before:w-10 before:h-1 before:bg-black before:rounded-full before:translate-y-2 before:left-0 before:transition-all before:duration-300 before:ease-in-out after:content-[''] after:absolute after:w-10 after:h-1 after:bg-black after:rounded-full after:-translate-y-2 after:left-0 after:transition-all after:duration-300 after:ease-in-out"
    />
  </button>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const emit = defineEmits(['burgerOpen']);

const burgerOpen = () => {
  isOpen.value = !isOpen.value;
  emit('burgerOpen');
};
</script>

<style scoped>
button.burger-open div {
  background-color: transparent;
}
button.burger-open div:before {
  transform: rotate(45deg) translateY(0) translateX(0);
}
button.burger-open div:after {
  transform: rotate(-45deg) translateY(0) translateX(0);
}
</style>
