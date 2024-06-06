<template>
  <div>
    <AboutHome />
    <TestimonialsComponent />

    <div class="gray-bg py-12">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <LocationAndContactItem :contacts="contacts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutHome from "@/components/AboutHome.vue";

import TestimonialsComponent from "@/components/TestimonialsComponent.vue";
import LocationAndContactItem from "@/components/LocationAndContactItem.vue";
import contactsData from "../assets/contacts.json";

const contacts = contactsData;
</script>
