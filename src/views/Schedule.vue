<template>
  <div class="schedule-area page-section bg-light">
    <div class="container">
      <div class="schedules">
        <div class="row">
          <div class="col-md-12">
            <div class="schedule-details">
              <div class="schedule-title">
                <div class="row">
                  <div class="col-sm-4">
                    <h5>REGISTER FOR SESSION</h5>
                  </div>
                </div>
              </div>
              <div class="single-schedule card">
                <div class="tab-pane fade show active" id="date-1" role="tabpanel" aria-labelledby="date-1-tab">
                  <div class="accordion">
                    <div v-for="(group, time) in groupedSchedules" :key="time">
                      <div class="card-header">
                        <h5 class="card-title mb-1">
                          <h4 class="schedule-time">
                            {{ time }}
                          </h4>
                        </h5>
                      </div>
                      <div :id="'schedule-group-' + time" class="collapse show" :aria-labelledby="'schedule-group-' + time + '-heading'" data-bs-parent="#accordion-date-1">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleItemComponent from '../components/ScheduleItemComponent.vue'
import schedulesData from '../assets/schedules.json'

export default {
  name: 'ScheduleAreaComponent',
  components: {
    ScheduleItemComponent
  },
  data() {
    return {
      schedules: schedulesData
    }
  },
  computed: {
    groupedSchedules() {
      return this.schedules.reduce((acc, schedule) => {
        if (!acc[schedule.time]) {
          acc[schedule.time] = []
        }
        acc[schedule.time].push(schedule)
        return acc
      }, {})
    }
  }
}
</script>

<style scoped>
/* Add your styles here if necessary */
</style>
