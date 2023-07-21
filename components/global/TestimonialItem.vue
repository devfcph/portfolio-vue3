<template>
  <div class="test-item">
    <h4>{{ testimonial.text }}</h4>
    <div class="author-info">
      <img :src="getTestimonialImage" alt="client" />

      <h4>
        {{ testimonial.name }}
        <a
          v-if="hasExternalLink(testimonial)"
          :href="testimonial.externalLink"
          target="_blank"
        >
          <i class="fa fa-external-link fa-2xs" aria-hidden="true"></i>
        </a>
      </h4>

      <div class="position">
        <span> {{ testimonial.position }}</span>
      </div>
      <div class="position">
        {{ testimonial.company }}
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
      console.log("noshes: " + this.testimonial.image);
      //require("../../static/assets/img/testimonial/raul.jpg");
      return `${require(`@/static/assets/img/testimonial/` +
        this.testimonial.image)}`;
    },
  },
  methods: {
    hasExternalLink: function () {
      console.log(this.testimonial);
      return this.testimonial.hasOwnProperty("externalLink");
    },
  },
};
</script>
