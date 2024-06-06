<template>
    <div class="col-md-6">
      <div class="single-featured-speaker primary-shadow white-bg">
        <div class="row no-gutters">
          <div class="col-sm-6">
            <div class="speaker-cover">
              <img :src="speaker.image" alt="speakers" class="img-fluid">
              <div class="speaker-over">
                <ul>
                  <li><a :href="speaker.social.facebook"><i class="fab fa-facebook"></i></a></li>
                  <li><a :href="speaker.social.twitter"><i class="fab fa-twitter"></i></a></li>
                  <li><a :href="speaker.social.instagram"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="about-speaker">
              <h6>{{ speaker.role }}</h6>
              <h4>{{ speaker.name }}</h4>
              <p>{{ speaker.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeaturedSpeakerComponent',
    props: {
      speaker: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  