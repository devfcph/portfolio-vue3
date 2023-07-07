<template>
  <!-- Welcome Area Start -->
  <section class="hero-area sky-blue d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <!-- Start Hero Caption -->
          <div class="hero-caption">
            <span class="subheading">Hey! I am</span>
            <h1>Francisco Pérez</h1>
            <div>
              I'm a
              <TypedString v-bind:text="iamTypedString"></TypedString>
              <span class="LR-C" id="typed" style="white-space: pre"></span>
            </div>
            <SimpleText :text="phrase"></SimpleText>
          </div>
          <!-- End Hero Caption -->
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Hero Right Image -->
          <AboutMeImage></AboutMeImage>
        </div>
      </div>
    </div>

    <!-- Hero Animated Shape -->
    <AnimationImage></AnimationImage>
  </section>
  <!-- Welcome Area End -->
</template>

<script>
import AboutMeImage from "./images/AboutMeImage.vue";
import SimpleText from "./labels/SimpleText.vue";
import TypedString from "./labels/TypedString.vue";
import AnimationImage from "./images/AnimationImage.vue";

export default {
  name: "HeroArea",
  components: {
    AboutMeImage,
    SimpleText,
    TypedString,
    AnimationImage
  },
  data() {
    return {
      phrase: " Welcome to all the challenges that make me grow professionally and personally! 🧑‍💻",
      iamTypedString: "Software Developer"
    }
  }
};
</script>
