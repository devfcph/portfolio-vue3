<template>
  <!-- About Area Start -->
  <section class="about-area section-padding sky-blue" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Start About Area Image -->
          <AboutMeImage></AboutMeImage>
          <!-- End About Area Image -->
        </div>

        <div class="col-lg-6 col-md-12">
          <AboutMeInfo></AboutMeInfo>
        </div>
      </div>
    </div>
  </section>
  <!-- About Area End -->
</template>

<script>
import AboutMeInfo from './cards/AboutMe.vue';
import AboutMeImage from './images/AboutMeImage.vue';


export default {
    name: "AboutArea",
    components: {
      AboutMeImage,
      AboutMeInfo,
    },
};
</script>
