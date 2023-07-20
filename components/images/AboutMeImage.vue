<template>
  <div class="img-about">
    <img class="img-fluid" :src="imgMe" alt="abou me" />
  </div>
</template>

<script>
export default {
  name: "AboutMeImage",
  computed: {
    imgMe() {
      return `${require(`@/static/assets/img/about/1082318.jpg`)}`;
      //Descomentar para visualizar foto genérica
      //return 'https://via.placeholder.com/824x1024';
    },
  },
};
</script>
