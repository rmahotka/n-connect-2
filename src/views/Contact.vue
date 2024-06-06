<template>
  <div class="contact-area bg-light">
    <div class="container mx-auto">
      <div class="flex">
        <LocationAndContactItem :contacts="contacts" />
      </div>
      <div class="block">
        <div class="contact-form shadow bg-white">
          <h4 class="font-bold text-2xl">Drop Us A Line</h4>
          <form action="action.php">
            <div class="flex justify-between gap-6">
              <div class="flex flex-col-reverse w-full">
                <input
                  class="border-2 border-gray-500 rounded-lg p-2"
                  type="text"
                  name="Your-name"
                  id="Your-name"
                  placeholder="Your Name"
                />
                <label for="Your-name">Your Name</label>
              </div>
              <div class="flex flex-col-reverse w-full">
                <input
                  class="border-2 border-gray-500 rounded-lg p-2"
                  type="text"
                  name="Your_Subject"
                  id="Your_Subject"
                  placeholder="Your Subject"
                />
                <label for="Your_Subject">Your Subject</label>
              </div>
              <div class="flex flex-col-reverse w-full">
                <input
                  class="border-2 border-gray-500 rounded-lg p-2"
                  type="email"
                  name="Your_Email"
                  id="Your_Email"
                  placeholder="Your Email"
                />
                <label for="Your_Email">Your Email</label>
              </div>
            </div>
            <div class="mt-2">
              <div class="flex flex-col-reverse">
                <textarea
                  class="border-2 border-gray-500 rounded-lg p-2"
                  name="some-text"
                  id="some-text"
                  placeholder="Your Message"
                ></textarea>
                <label for="some-text">Your Message</label>
              </div>
            </div>
            <div class="row">
              <button
                type="submit"
                class="mt-2 border-2 font-bold bg-black border-black rounded-lg py-2 px-8 text-white transition-all hover:bg-inherit hover:text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LocationAndContactItem from "@/components/LocationAndContactItem.vue";

import contactsData from "../assets/contacts.json";

const contacts = contactsData;
</script>
