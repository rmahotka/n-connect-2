<template>
  <div class="location-card shadow w-3/5">
    <img src="/contact/location.jpg" alt="location" />
    <div class="overlay"></div>
    <div class="location-info">
      <h6>Hall Of Fame</h6>
      <h4>49 West 32nd Street, New York</h4>
    </div>
    <span class="map-trigger">
      <i class="fa fa-map-marker"></i>
    </span>
    <div class="google-map-area">
      <div id="map" class="map"></div>
      <span class="map-close"><i class="fa fa-close"></i></span>
    </div>
  </div>
  <div class="w-2/5">
    <div class="p-12 shadow bg-white h-full">
      <h4 class="font-bold text-2xl text-black mb-8">Contact Info</h4>
      <div class="flex justify-center gap-7">
        <ContactItemComponent
          v-for="contact in contacts"
          :key="contact.id"
          :contact="contact"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactItemComponent from "@/components/ContactItemComponent.vue";

const props = defineProps({
  contacts: {
    type: Object,
  },
});
</script>

<style scoped></style>
