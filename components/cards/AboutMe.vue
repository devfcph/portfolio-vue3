<template>
  <!-- Start About Detail -->
  <div class="about-details">
    <SectionTitle title="About Me"></SectionTitle>
    <SimpleText v-bind:text="about_me.IAM1"></SimpleText>
    <SimpleText v-bind:text="about_me.IAM2"></SimpleText>
    <hr />
    <SimpleText v-bind:text="about_me.IAM3"></SimpleText>
    
    <hr />
    <ul class="about-info mt-4">
      <PersonalInfo
        v-for="(info, index) in about_me.DATA"
        v-bind:key="index"
        v-bind:info="info"
      ></PersonalInfo>
    </ul>
    <DownloadCVArea></DownloadCVArea>
  </div>
  <!-- End About Detail -->
</template>

<script>
import { AboutMeData } from "../../store/data/aboutme";
import PersonalInfo from "../labels/PersonalInfo.vue";
import SimpleText from "../labels/SimpleText.vue";
import SectionTitle from "../labels/SectionTitle.vue";
import DownloadCVArea from "../DownloadCVArea.vue";

export default {
  name: "AboutMe",
  components: {
    PersonalInfo,
    SimpleText,
    SectionTitle,
    DownloadCVArea,
  },
  data() {
    return {
      about_me: AboutMeData,
    };
  },
};
</script>

