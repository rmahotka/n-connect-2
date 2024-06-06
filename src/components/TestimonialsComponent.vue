<template>
  <div class="testimonials-area image-bg">
    <div class="overlay">
      <div class="container">
        <div class="sub-heading">
          <div class="row">
            <div class="col-md-12">
              <h4>Testimonials</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div
              id="testimonials"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div
                  v-for="(testimonial, index) in testimonials"
                  :key="index"
                  :class="['carousel-item', { active: index === 0 }]"
                >
                  <div class="single-testimonial">
                    <div class="row">
                      <div class="col-sm-1"></div>
                      <div class="col-sm-6 mb-30">
                        <blockquote>{{ testimonial.quote }}</blockquote>
                        <ul class="customer-rating">
                          <li v-for="star in testimonial.rating" :key="star">
                            <i class="fa fa-star"></i>
                          </li>
                        </ul>
                        <h4>{{ testimonial.name }}</h4>
                      </div>
                      <div class="col-sm-3">
                        <div class="client-image primary-shadow">
                          <img :src="testimonial.image" alt="client" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#testimonials"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#testimonials"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import testimonialsData from '../assets/testimonials.json';
</script>

<style scoped>
.testimonials-area {
  position: relative;
  padding: 50px 0;
}
.carousel-item {
  transition: transform 0.6s ease;
}
</style>
