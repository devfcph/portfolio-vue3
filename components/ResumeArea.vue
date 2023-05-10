<template>
  <!-- Resume Area Start -->
  <section class="resume-area section-padding" id="resume">
    <div class="container">
      <!-- Start Section Title -->
      <TitleComponent :title="sectionTitle"></TitleComponent>
      <!-- End Section Title -->
      <div class="row">
        <div class="col-lg-3 d-none d-lg-block">
          <!-- Start Resume Nav -->
          <ResumeNavComponent v-bind:infoNav="infoNav"></ResumeNavComponent>
          <!-- End Resume Nav -->
        </div>
        <div class="col-lg-9 col-md-12">
          <!-- Start Education -->
          <div id="page-1" class="page one">
            <h3 class="heading">Education</h3>
            <ItemCardComponent
              v-bind:icon="icon.EDUCATION"
              v-for="(school, index) in schools"
              v-bind:key="index"
              v-bind:infoItem="school"
            >
              {{ school }}
            </ItemCardComponent>
          </div>
          <!-- End Education -->

          <!-- Start Experience -->
          <div id="page-2" class="page two">
            <h3 class="heading">Experience</h3>
            <ItemCardComponent
              v-bind:icon="icon.EXPERIENCE"
              v-for="(experience, index) in experiences"
              v-bind:key="index"
              v-bind:infoItem="experience"
            >
              {{ experience }}
            </ItemCardComponent>
          </div>
          <!-- End Experience -->

          <!-- Start Skills -->
          <div id="page-3" class="page three">
            <h3 class="heading">Skills</h3>
            <div class="row">
              <SkillProgressBarComponent
                v-for="(skill, index) in skills"
                v-bind:key="index"
                v-bind:skill="skill"
              >
                {{ skill }}
              </SkillProgressBarComponent>
            </div>
          </div>
          <!-- End Skills -->

          <!-- Start Awards -->
          <div id="page-4" class="page four">
            <h3 class="heading">Courses</h3>
            <div class="row">
              <ItemCardComponent
                class="mx-auto col-sm-12 col-md-5 col-lg-5 col-xs-12 px-0"
                v-bind:icon="icon.LEARN"
                v-for="(course, index) in courses"
                v-bind:key="index"
                v-bind:infoItem="course"
              >
                {{ course }}
              </ItemCardComponent>
            </div>
          </div>
          <!-- End Awards -->
        </div>
      </div>
    </div>
  </section>
  <!-- Resume Area End -->
</template>


<script>
import ResumeNavComponent from "./global/ResumeNav.vue";
import TitleComponent from "./labels/SectionTitle.vue";
import ItemCardComponent from "./cards/ResumeItemCard.vue";
import SkillProgressBarComponent from "./global/SkillProgressBar.vue";
import { typeOfIcon } from "../helpers/constants";

export default {
  name: "ResumeArea",
  components: {
    ResumeNavComponent,
    TitleComponent,
    ItemCardComponent,
    SkillProgressBarComponent,
  },
  data() {
    return {
      infoNav: [
        { label: "Education", href: "#page-1" },
        { label: "Experience", href: "#page-2" },
        { label: "Skills", href: "#page-3" },
        { label: "Awards", href: "#page-4" },
      ],
      sectionTitle: "Resume",
      experiences: [
        {
          date: "Oct 2022 - Actuallity",
          city: "Mexico City. México",
          title: "Microservices Developer",
          place: "Grupo Salinas [Hybrid]",
          body: "Lorem ipsum, or lipsum as it is sometimes known",
        },
        {
          date: "Jul 2022 - Oct 2022",
          title: "iOS Mobile Developer",
          place: "Gonet [Remote]",
          body: "CHEEMS",
        },
        {
          date: "Oct 2020 - Oct 2022",
          city: "Tuxtla Gutiérrez, Chiapas. México",
          title: "Fullstack developer",
          place: "Secretaría de Hacienda del Estado de Chiapas [On site]",
          body: "Lorem ipsum, or lipsum as it is sometimes known",
        },
        {
          date: "Jul 2020 - Oct 2020",
          city: "Tuxtla Gutiérrez, Chiapas. México",
          title: "Fullstack developer",
          place: "Global Transfer [On site]",
          body: "Lorem ipsum, or lipsum as it is sometimes known",
        },
        {
          date: "Ago 2018 - Jan 2020",
          city: "Tuxtla Gutiérrez, Chiapas. México",
          title: "Fullstack developer",
          place: "Induxsoft Data Services [On site]",
          body: "Lorem ipsum, or lipsum as it is sometimes known",
        },
      ],
      schools: [
        {
          date: "2016 - 2022",
          city: "Tuxtla Gutiérrez, Chiapas. México",
          title: "Software Development and Technology Engineering",
          place: "Autonomous University of Chiapas",
          body: "Lorem ipsum, or lipsum as it is sometimes known",
        },
        {
          date: "January 2020 - June 2020",
          city: "Tunja, Boyacá. Colombia",
          title: "Interchange Student",
          place: "University of Boyacá",
          body: "CHEEMS",
        },
      ],
      skills: [
        { title: "A B C D E F G H", percent: "50%" },
        { title: "A B C D E F G H", percent: "75%" },
        { title: "A B C D E F G H", percent: "99%" },
      ],
      courses: [
        {
          date: "January 2020 - June 2020",
          title: "NOMBRE DEL CURSO",
          place: "PLATZI ACADEMY",
          body: "CHEEMS",
        },
        {
          date: "January 2020 - June 2020",
          title: "NOMBRE DEL CURSO",
          place: "PLATZI ACADEMY",
          body: "CHEEMS",
        },
        {
          date: "January 2020 - June 2020",
          title: "NOMBRE DEL CURSO",
          place: "PLATZI ACADEMY",
          body: "CHEEMS",
        },
        {
          date: "January 2020 - June 2020",
          title: "NOMBRE DEL CURSO",
          place: "PLATZI ACADEMY",
          body: "CHEEMS",
        },
        {
          date: "January 2020 - June 2020",
          title: "NOMBRE DEL CURSO",
          place: "PLATZI ACADEMY",
          body: "CHEEMS",
        },
        {
          date: "January 2020 - June 2020",
          title: "NOMBRE DEL CURSO",
          place: "PLATZI ACADEMY",
          body: "CHEEMS",
        },
        {
          date: "January 2020 - June 2020",
          title: "NOMBRE DEL CURSO",
          place: "PLATZI ACADEMY",
          body: "CHEEMS",
        },
        {
          date: "January 2020 - June 2020",
          title: "NOMBRE DEL CURSO",
          place: "PLATZI ACADEMY",
          body: "CHEEMS",
        },
      ],
      icon: typeOfIcon,
    };
  },
};
</script>
