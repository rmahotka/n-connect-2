<template>
    <div class="single-contact-info">
      <div class="row">
        <div class="col-5">
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
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactItemComponent',
    props: {
      contact: {
        type: Object,
        required: true
      }
    }
  }
  </script>