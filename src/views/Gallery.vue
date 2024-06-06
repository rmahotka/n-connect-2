<template>
  <div class="container mx-auto">
    <div class="sub-heading">
      <h4 class="font-bold text-2xl">Featured Gallery</h4>
    </div>
    <div class="flex gap-4">
      <GalleryItem v-for="imgInfo in imgInfo" :key="index" :imgInfo="imgInfo" />
    </div>
  </div>

  <div class="container mx-auto">
    <div class="sub-heading">
      <div class="row">
        <div class="col">
          <h4 class="font-bold text-2xl">All images</h4>
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <GalleryItem v-for="imgInfo in imgInfo" :key="index" :imgInfo="imgInfo" />
    </div>
  </div>

  <div class="video-gallery-area">
    <div class="container mx-auto">
      <div class="sub-heading">
        <h4 class="font-bold text-2xl">Previous Event videos</h4>
      </div>
      <div class="flex">
        <div v-for="id in videoObj" :key="id" class="single-gallery shadow">
          <div data-type="youtube" :data-video-id="id"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import GalleryItem from "@/components/GalleryItem.vue";

const videoObj = ref([
  "nrJtHemSPW4",
  "4Wkr0eXiUNw",
  "keDneypw3HY",
  "k6Kly58LYzY",
]);

const imgInfo = ref([
  {
    imgSrc: "/gallery/1.jpg",
    link: "images/gallery/large.jpg",
  },
  {
    imgSrc: "/gallery/1.jpg",
    link: "images/gallery/large.jpg",
  },
  {
    imgSrc: "/gallery/1.jpg",
    link: "images/gallery/large.jpg",
  },
  {
    imgSrc: "/gallery/1.jpg",
    link: "images/gallery/large.jpg",
  },
]);
</script>
