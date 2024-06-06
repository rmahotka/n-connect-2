<template>
  <div class="single-speaker primary-shadow white-bg">
    <div class="speaker-cover">
      <img :src="speaker.image" :alt="speaker.name" class="img-fluid" />
      <div class="sperker-cover-over">
        <div class="speakers-thought">
          <p>{{ speaker.description }}</p>
        </div>
      </div>
      <ul class="speaker-social">
        <li>
          <a :href="speaker.social.facebook"><i class="fab fa-facebook"></i></a>
        </li>
        <li>
          <a :href="speaker.social.twitter"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a :href="speaker.social.instagram"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
      </ul>
      <h6>
        {{ speaker.role }} at
        <a :href="speaker.companyUrl">{{ speaker.company }}</a>
      </h6>
    </div>
  </div>
</template>

<script setup>
defineProps({
  speaker: {
    type: Object,
    required: true,
  },
});
</script>
