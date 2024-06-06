import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import error404 from "@/views/404.vue";
import contact from "@/views/Contact.vue";
import gallery from "@/views/Gallery.vue";
import schedule from "@/views/Schedule.vue";
import speakers from "@/views/Speakers.vue";
import sponsors from "@/views/Sponsors.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: gallery,
  },
  {
    path: "/schedule",
    name: "schedule",
    component: schedule,
  },
  {
    path: "/speakers",
    name: "speakers",
    component: speakers,
  },
  {
    path: "/sponsors",
    name: "sponsors",
    component: sponsors,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: error404,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
