<template>
  <div class="test-item">
    <SimpleText :text="testimonial.text"></SimpleText>
    <div class="author-info">
      <img :src="testimonial.image" alt="client" />
      <h4>{{ testimonial.name }}</h4>
      <div class="position">
        {{ testimonial.position }}
        <span> {{ testimonial.company }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleText from "../labels/SimpleText.vue";

export default {
  name: "TestimonialItem",
  components: {
    SimpleText,
  },
  props: {
    testimonial: Object,
  },
  computed: {
    getTestimonialImage() {
      //return `${require(`@` + this.testimonial.image)}`;
      return `${require(this.testimonial.image)}`;
    },
  },
};
</script>
