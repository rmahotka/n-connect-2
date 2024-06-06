<template>
  <div class="sponsors-area bg-light page-section">
    <div class="container">
      <div class="tab-content" id="sponsorsTabsContent">
        <div class="tab-pane fade show active" id="silverSponsors" role="tabpanel" aria-labelledby="silverSponsors-tab">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <SponsorComponent v-for="sponsor in sponsors" :key="sponsor.id" :sponsor="sponsor" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SponsorComponent from '../components/SponsorComponent.vue'
import sponsorsData from '../assets/sponsor.json'

export default {
  name: 'Sponsors',
  components: {
    SponsorComponent
  },
  data() {
    return {
      sponsors: sponsorsData
    }
  }
}
</script>