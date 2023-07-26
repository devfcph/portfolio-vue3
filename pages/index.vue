<template>
  <div>
    <HeroArea></HeroArea>
    <!-- <ServiceArea /> -->
    <AboutArea></AboutArea>
    <ResumeArea></ResumeArea>
    <!--<TestimonialArea></TestimonialArea>-->
    
  </div>
</template>

<script>
import HeroArea from "~/components/HeroArea";
import ServiceArea from "~/components/ServiceArea";
import AboutArea from "~/components/AboutArea";
import ResumeArea from "~/components/ResumeArea";
import TestimonialArea from "~/components/TestimonialArea";

export default {
  components: {
    HeroArea,
    ServiceArea,
    AboutArea,
    ResumeArea,
    TestimonialArea,
  }
};
</script>
