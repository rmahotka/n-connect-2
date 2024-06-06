<template>
  <div>
    <div class="featured-speakers-area mb-30">
      <div class="container">
        <div class="sub-heading">
          <div class="row">
            <div class="col-md-12">
              <h4>Featured SPEAKERS</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <FeaturedSpeakerComponent v-for="speaker in featuredSpeakers" :key="speaker.id" :speaker="speaker" />
        </div>
      </div>
    </div>

    <div class="speakers-area grey-bg">
      <div class="container">
        <div class="sub-heading">
          <div class="row">
            <div class="col-md-12">
              <h4>Other Speakers</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <OtherSpeakersComponent v-for="speaker in otherSpeakers" :key="speaker.id" :speaker="speaker" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedSpeakerComponent from '../components/FeaturedSpeakerComponent.vue'
import OtherSpeakersComponent from '../components/OtherSpeakersComponent.vue'
import speakersData from '../assets/speakers.json'

export default {
  name: 'Speakers',
  components: {
    FeaturedSpeakerComponent,
    OtherSpeakersComponent
  },
  data() {
    return {
      featuredSpeakers: speakersData.filter(speaker => speaker.featured),
      otherSpeakers: speakersData.filter(speaker => !speaker.featured)
    }
  }
}
</script>
