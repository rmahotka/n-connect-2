<template>
  <div class="image-bg text-white">
    <div class="overlay py-12">
      <div class="container mx-auto">
        <div>
          <h4 class="text-4xl font-semibold">Testimonials</h4>
        </div>
        <div class="row">
          <div id="testimonials">
            <div class="flex gap-5">
              <carousel :items-to-show="1">
                <Slide
                  v-for="(testimonial, index) in testimonials"
                  :key="index"
                >
                  <div>
                    <div class="flex flex-col mt-5">
                      <h4 class="text-xl font-bold">{{ testimonial.name }}</h4>
                      <p class="text-white mb-0">{{ testimonial.quote }}</p>
                      <ul class="flex justify-center gap-1">
                        <li v-for="star in testimonial.rating" :key="star">
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div class="flex justify-center">
                      <img :src="testimonial.image" alt="client" />
                    </div>
                  </div>
                </Slide>
                <template #addons>
                  <navigation />
                  <pagination />
                </template>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import testimonialsData from "../assets/testimonials.json";

const testimonials = testimonialsData;
</script>

<style scoped></style>
