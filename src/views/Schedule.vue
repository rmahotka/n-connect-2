<template>
  <div class="my-16">
    <div class="container mx-auto">
      <h5 class="font-bold text-3xl text-purple-800 lg:text-left text-center">
        REGISTER FOR SESSION
      </h5>
      <div class="w-full pt-8">
        <div class="mx-auto w-full rounded-xl bg-[#9476E6] p-2">
          <Disclosure v-for="(group, time) in groupedSchedules" :key="time">
            <DisclosureButton
              class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-lg font-bold text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 mb-2"
            >
              <span>{{ time }}</span>
              <ChevronUpIcon class="h-5 w-5 text-purple-500" />
            </DisclosureButton>
            <DisclosurePanel
              v-for="schedule in group"
              :key="schedule.id"
              class="px-4 pb-2 pt-4 text-md text-white"
            >
              <ScheduleItemComponent :schedule="schedule" />
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>

      <!-- <div class="schedules">
        <div class="flex">
          <div class="schedule-details">
            <div class="single-schedule card">
              <div
                class="tab-pane fade show active"
                id="date-1"
                role="tabpanel"
                aria-labelledby="date-1-tab"
              >
                <div class="accordion">
                  <div v-for="(group, time) in groupedSchedules" :key="time">
                    <div class="card-header">
                      <h5 class="card-title mb-1">
                        <h4 class="schedule-time">
                          {{ time }}
                        </h4>
                      </h5>
                    </div>
                    <div
                      :id="'schedule-group-' + time"
                      class="collapse show"
                      :aria-labelledby="'schedule-group-' + time + '-heading'"
                      data-bs-parent="#accordion-date-1"
                    >
                      <div v-for="schedule in group" :key="schedule.id">
                        <ScheduleItemComponent :schedule="schedule" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import ScheduleItemComponent from '@/components/ScheduleItemComponent.vue';
import schedulesData from '@/assets/schedules.json';
import { ref, computed } from 'vue';

const schedules = ref(schedulesData);

const groupedSchedules = computed(() => {
  return schedules.value.reduce((acc, schedule) => {
    if (!acc[schedule.time]) {
      acc[schedule.time] = [];
    }
    acc[schedule.time].push(schedule);
    return acc;
  }, {});
});
</script>

<style scoped></style>
