<template>
  <!-- Welcome Area Start -->
  <section class="hero-area sky-blue d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <!-- Start Hero Caption -->
          <div class="hero-caption">
            <span class="subheading">{{ hero.HEY }}</span>
            <h1>{{ hero.SHORT_NAME }}</h1>
            <div>
              {{ hero.IAM }}
              <TypedString v-bind:text="hero.TYPEDSTRING"></TypedString>
              <span class="LR-C" id="typed" style="white-space: pre"></span>
            </div>
            <SimpleText :text="hero.PHRASE"></SimpleText>
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
import { HeroAreaData } from "../store/data/aboutme";
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
      hero: HeroAreaData,
    }
  }
};
</script>
