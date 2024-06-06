<template>
  <div class="single-gallery shadow">
    <img :src="imgInfo.imgSrc" alt="gallery" class="img-fluid" />
    <a :href="imgInfo.link" class="gallery-over image-popup">
      <i class="fa fa-image"></i>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  imgInfo: {
    type: Object,
  },
});
</script>

<style scoped></style>
