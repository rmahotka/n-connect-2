<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 justify-items-center">
    <div class="schedule-img w-3/4">
      <img :src="schedule.image" alt="schedule" class="rounded-xl" />
    </div>
    <div
      class="schedule-info h-full flex justify-center gap-12 items-center flex-col"
    >
      <div class="">
        <div>
          <p class="text-white w-full text-center lg:text-left">
            {{ schedule.description }}
          </p>
          <h5 class="text-xl font-bold text-center lg:text-left">
            <span class="uppercase text-2xl">With</span> :
            {{ schedule.speaker.name }}
            <small class="lg:ml-7"
              >{{ schedule.speaker.role }} at
              {{ schedule.speaker.company }}</small
            >
          </h5>
        </div>
      </div>
      <div class="flex w-full lg:justify-end justify-center">
        <button
          role="button"
          class="bg-white text-black py-2 px-8 rounded-xl font-bold border-0 transition-all border-white hover:bg-black hover:text-white"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  schedule: {
    type: Object,
    required: true,
  },
});
</script>
