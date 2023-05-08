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
    data() {
        return {
        //img_default: 'https://via.placeholder.com/824x1024',
        //img_me: '../static/assets/img/about/1082318.jpg',
        //img_profile: this.img_default,
        };
    },
};
</script>
