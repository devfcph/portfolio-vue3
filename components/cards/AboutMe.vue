<template>
  <!-- Start About Detail -->
  <div class="about-details">
    <SectionTitle title="About Me"></SectionTitle>
    <SimpleText v-bind:text="iam1"></SimpleText>
    <SimpleText v-bind:text="iam2"></SimpleText>
    <hr />
    <SimpleText v-bind:text="iam3"></SimpleText>
    <ul class="about-info mt-4">
      <PersonalInfo
        v-for="(info, index) in infos"
        v-bind:key="index"
        v-bind:info="info"
      ></PersonalInfo>
    </ul>
    <DownloadCVArea></DownloadCVArea>
  </div>
  <!-- End About Detail -->
</template>

<script>
import PersonalInfo from "../labels/PersonalInfo.vue";
import SimpleText from "../labels/SimpleText.vue";
import SectionTitle from "../labels/SectionTitle.vue";
import DownloadCVArea from "../DownloadCVArea.vue";

export default {
  components: {
    PersonalInfo,
    SimpleText,
    SectionTitle,
    DownloadCVArea,
  },
  data() {
    return {
      infos: [
        { title: "Name:", info: "Francisco Cristóbal Pérez Hernández" },
        { title: "Date of birth:", info: "October 12, 1997" },
        { title: "Address:", info: "Mexico City" },
        { title: "Zip code:", info: "01790" },
        { title: "Email:", info: "devfcph@gmail.com" },
        { title: "Languages:", info: "Spanish" },
        { title: "", info: "English" },
      ],
      iam1: "An enthusiastic software developer with over 4 years of IT work experience.",
      iam2: "I consider myself a person with logical and critical thinking, analytical and focused on problem solving. 🧠",
      iam3: "I have a passion for the challenges that are presented to me every day, since each one of them is an opportunity to test my skills, qualities and experience as a programmer. 📈",
    };
  },
};
</script>

