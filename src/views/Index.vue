<template>
    <div>
      <div class="about-area bg-light" id="about">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="video-intro shadow">
                <img src="/about/video-intro.jpg" alt="video-intro" class="img-fluid" />
                <a class="video-play embedded-popup" href="https://www.youtube.com/watch?v=SZEflIVnhH8">
                  <i class="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="about-text">
                <h4>About The Event</h4>
                <p>This event is exclusively for those who want to learn about material design principles introduced by Google. If you are a designer, learning about new design trends like Material Design is essential, as it represents the future of design. In this conference, we will discuss topics like material design principles, what to do, and what not to do.</p>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="single-about shadow bg-white">
                    <h5>Who we are?</h5>
                    <p>We are the best designer community around the world. We love to share our knowledge & experiences.</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="single-about shadow bg-white">
                    <h5>Our Mission</h5>
                    <p>We are the best designer community around the world. We love to share our knowledge & experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.about-area -->
  
      <TestimonialsComponent />
  
      <div class="contact-area gray-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="location-card mb-30 shadow">
                <img src="/contact/location.jpg" alt="location" />
                <div class="overlay"></div>
                <div class="location-info">
                  <h6>Hall Of Fame</h6>
                  <h4>49 West 32nd Street, New York</h4>
                </div>
                <span class="map-trigger">
                  <i class="fa fa-map-marker"></i>
                </span>
                <div class="google-map-area">
                  <div id="map" class="map"></div>
                  <span class="map-close"><i class="fa fa-close"></i></span>
                </div>
              </div>
            </div><!-- /.col -->
            <div class="col-md-4">
              <div class="contact-info shadow bg-white">
                <h4>Contact Info</h4>
                <div class="row">
                  <ContactItemComponent v-for="contact in contacts" :key="contact.id" :contact="contact" />
                </div>
              </div><!-- /.contact-info -->
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.contact-area -->
    </div>
  </template>
  
  <script>
  import ContactItemComponent from '../components/ContactItemComponent.vue';
  import TestimonialsComponent from '../components/TestimonialsComponent.vue';
  import contactsData from '../assets/contacts.json';
  
  export default {
    name: 'MainComponent',
    components: {
      ContactItemComponent,
      TestimonialsComponent,
    },
    data() {
      return {
        contacts: contactsData,
      };
    },
  };
  </script>
  