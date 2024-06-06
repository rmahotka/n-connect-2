<template>
    <div class="col mb-4">
      <div class="single-sponsor primary-shadow bg-white p-3">
        <img :src="sponsor.image" :alt="sponsor.name" class="img-fluid" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SponsorComponent',
    props: {
      sponsor: {
        type: Object,
        required: true
      }
    }
  }
  </script>