<template>
  <!-- Start Testimonial Area -->
  <section class="testimonial-area section-padding">
    <div class="container">
      <TitleComponent :title="sectionTitle"></TitleComponent>
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-12">
          <!-- start testimonial carousel -->
          <div class="test-slider">
            <!-- start tetimonial item -->
            <TestimonialItem
              v-for="(testimonial, index) in this.testimonials"
              v-bind:key="index"
              v-bind:testimonial="testimonial"
            ></TestimonialItem>
            <!-- end tetimonial item -->
          </div>
          <!-- end testimonial carousel -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Testimonial Area -->
</template>

<script>
import { testimonials } from "../store/data/testimonial";
import TestimonialItem from "./global/TestimonialItem.vue";
import TitleComponent from "./labels/SectionTitle.vue";

export default {
  name: "TestimonialArea",
  components: {
    TestimonialItem,
    TitleComponent
  },
  data() {
    return {
      testimonials: testimonials,
      sectionTitle: "Testimonials"
    };
  },
};
</script>
