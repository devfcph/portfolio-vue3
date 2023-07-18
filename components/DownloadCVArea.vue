<template>
  <div class="row text-center">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <DownloadCVButton
        v-for="(button, index) in buttons.RESUMES"
        v-bind:key="index"
        v-bind:item="button"
      ></DownloadCVButton>
    </div>
  </div>
</template>

<script>
import { ResumeFiles } from "../store/data/files";
import DownloadCVButton from "./buttons/DownloadCVButton.vue";

export default {
  name: "DownloadCVArea",
  components: {
    DownloadCVButton,
  },
  data() {
    return {
      buttons: ResumeFiles,
    };
  },
};
</script>

<style>
</style>