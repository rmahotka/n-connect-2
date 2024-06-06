<template>
  <div class="py-24">
    <div class="container mx-auto">
      <div id="sponsorsTabsContent">
        <div
          class="tab-pane fade show active"
          id="silverSponsors"
          role="tabpanel"
          aria-labelledby="silverSponsors-tab"
        >
          <div class="flex flex-wrap gap-5">
            <SponsorComponent
              v-for="sponsor in sponsors"
              :key="sponsor.id"
              :sponsor="sponsor"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SponsorComponent from "@/components/SponsorComponent.vue";
import sponsorsData from "@/assets/sponsor.json";
const sponsors = sponsorsData;
</script>
