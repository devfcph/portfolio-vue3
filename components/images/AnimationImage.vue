<template>
  <div class="hero-shape custom-animation">
    <img :src="getAnimationLogo" alt="animation shape" />
  </div>
</template>

<script>
export default {
  name: "AnimationImage",
  computed: {
    getAnimationLogo() {
      return `${require(`@/static/assets/img/hero/hero-shape.png`)}`;
    },
  },
};
</script>
