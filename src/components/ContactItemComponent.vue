<template>
  <div class="single-contact-info">
    <div>
      <img :src="contact.image" alt="contact" />
    </div>
    <div class="col-7">
      <h6>{{ contact.name }}</h6>
      <span class="p-like">{{ contact.role }}</span>
      <ul>
        <li>{{ contact.phone }}</li>
        <li>{{ contact.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  contact: {
    type: Object,
    required: true,
  },
});
</script>
