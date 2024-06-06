<template>
  <div class="mb-20">
    <div class="container mx-auto">
      <div class="sub-heading">
        <h4 class="font-bold text-4xl">Featured SPEAKERS</h4>
      </div>
      <div class="flex gap-4">
        <FeaturedSpeakerComponent
          v-for="speaker in featuredSpeakers"
          :key="speaker.id"
          :speaker="speaker"
        />
      </div>
    </div>

    <div class="container mx-auto">
      <div class="sub-heading">
        <h4 class="font-bold text-4xl">Other Speakers</h4>
      </div>
      <div class="flex justify-center flex-wrap gap-4">
        <OtherSpeakersComponent
          v-for="speaker in otherSpeakers"
          :key="speaker.id"
          :speaker="speaker"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedSpeakerComponent from "../components/FeaturedSpeakerComponent.vue";
import OtherSpeakersComponent from "../components/OtherSpeakersComponent.vue";
import speakersData from "../assets/speakers.json";

export default {
  name: "Speakers",
  components: {
    FeaturedSpeakerComponent,
    OtherSpeakersComponent,
  },
  data() {
    return {
      featuredSpeakers: speakersData.filter((speaker) => speaker.featured),
      otherSpeakers: speakersData.filter((speaker) => !speaker.featured),
    };
  },
};
</script>
