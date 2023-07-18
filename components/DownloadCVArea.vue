<template>
  <div class="row text-center">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <DownloadCVButton
        v-for="(button, index) in buttons"
        v-bind:key="index"
        v-bind:item="button"
      ></DownloadCVButton>
    </div>
  </div>
</template>

<script>
import DownloadCVButton from "./buttons/DownloadCVButton.vue";
export default {
  name: "DownloadCVArea",
  components: {
    DownloadCVButton,
  },
  data() {
    return {
      buttons: [
        { file: "#", label: "Download CV [EN]" },
        { file: "#", label: "Download CV [ES]" },
        { file: "#", label: "Download CV [AA]" },
      ],
    };
  },
};
</script>

<style>
</style>