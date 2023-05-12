<template>
  <!-- Start Testimonial Area -->
  <section class="testimonial-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-12">
          <!-- start testimonial carousel -->
          <div class="test-slider">
            <!-- start tetimonial item -->
            <TestimonialItem
              v-for="(testimonial, index) in testimonials"
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
import { imagePath } from "../helpers/constants";
import TestimonialItem from "./global/TestimonialItem.vue";

export default {
  name: "TestimonialArea",
  components: {
    TestimonialItem,
  },
  data() {
    return {
      testimonials: [
        {
          name: "ABDVSDVS",
          position: "BSKDK KJHASD KF",
          company: "ksahf akuef",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: imagePath.TESTIMONIAL_ONE,
        },
        {
          name: "ABDVSDVS",
          position: "BSKDK KJHASD KF",
          company: "ksahf akuef",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: imagePath.TESTIMONIAL_ONE,
        },
      ],
    };
  },
};
</script>
