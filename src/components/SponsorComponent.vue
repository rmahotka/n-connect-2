<template>
  <div class="single-sponsor primary-shadow bg-white p-3">
    <img :src="sponsor.image" :alt="sponsor.name" class="img-fluid" />
  </div>
</template>

<script setup>
defineProps({
  sponsor: {
    type: Object,
    required: true,
  },
});
</script>
