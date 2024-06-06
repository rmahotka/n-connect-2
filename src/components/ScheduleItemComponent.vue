<template>
  <div class="schedule-card">
    <div class="collapse show">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="schedule-img">
              <img :src="schedule.image" alt="schedule" />
            </div>
          </div>
          <div class="col-sm-8">
            <div class="schedule-info">
              <div class="schedule-content">
                <p>{{ schedule.description }}</p>
                <h5>
                  <span>With</span> : {{ schedule.speaker.name }}
                  <small
                    >{{ schedule.speaker.role }} at
                    {{ schedule.speaker.company }}</small
                  >
                </h5>
              </div>
              <div class="schedule-button">
                <button role="button">
                  <span class="text">Register</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScheduleItemComponent",
  props: {
    schedule: {
      type: Object,
      required: true,
    },
  },
};
</script>
