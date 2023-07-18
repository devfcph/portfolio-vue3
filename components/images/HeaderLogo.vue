<template>
  <div class="logo">
    <a href="index.html"><img :src="getHeaderLogo" alt="logo" /></a>
  </div>
</template>

<script>
export default {
  name: "HeaderLogo",
    computed: {
        getHeaderLogo() {
            return `${require(`@/static/assets/img/logo.png`)}`;
        }
    }
};
</script>
