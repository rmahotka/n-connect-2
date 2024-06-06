<template>
  <div class="single-featured-speaker primary-shadow white-bg">
    <div class="speaker-cover">
      <img :src="speaker.image" alt="speakers" />
      <div class="speaker-over">
        <ul>
          <li>
            <a :href="speaker.social.facebook"
              ><i class="fab fa-facebook"></i
            ></a>
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
      </div>
    </div>
    <div class="about-speaker">
      <h6 class="text-lg">{{ speaker.role }}</h6>
      <h4 class="font-bold text-xl">{{ speaker.name }}</h4>
      <p>{{ speaker.description }}</p>
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
