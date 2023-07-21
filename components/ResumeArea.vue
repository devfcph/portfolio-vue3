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
          <!-- End Resume Nav  -->
        </div>
        <div class="col-lg-9 col-md-12">
          <!-- Start Experience -->
          <div id="page-2" class="page two">
            <h3 class="heading">Experiences</h3>
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

          <!-- Start Hard Skills -->
          <div id="page-3" class="page three">
            <h3 class="heading">Hard Skills</h3>

            <div class="text-center">
              <h3>{{ hardSkills.BACKEND.title }}</h3>
            </div>
            <br />
            <div class="row">
              <SkillProgressBarComponent
                v-for="(skill, index) in hardSkills.BACKEND.techs"
                v-bind:key="index"
                v-bind:skill="skill"
                v-bind:subtitle="hardSkills.BACKEND.title"
              >
                {{ skill }}
              </SkillProgressBarComponent>
            </div>

            <div class="text-center">
              <h3>{{ hardSkills.FRONTEND.title }}</h3>
            </div>
            <br />
            <div class="row">
              <SkillProgressBarComponent
                v-for="(skill, index) in hardSkills.FRONTEND.techs"
                v-bind:key="index"
                v-bind:skill="skill"
                v-bind:subtitle="hardSkills.BACKEND.title"
              >
                {{ skill }}
              </SkillProgressBarComponent>
            </div>

            <div class="text-center">
              <h3>{{ hardSkills.MOBILE.title }}</h3>
            </div>
            <br />
            <div class="row">
              <SkillProgressBarComponent
                v-for="(skill, index) in hardSkills.MOBILE.techs"
                v-bind:key="index"
                v-bind:skill="skill"
                v-bind:subtitle="hardSkills.BACKEND.title"
              >
                {{ skill }}
              </SkillProgressBarComponent>
            </div>

            <div class="text-center">
              <h3>{{ hardSkills.DATABASE.title }}</h3>
            </div>
            <br />
            <div class="row">
              <SkillProgressBarComponent
                v-for="(skill, index) in hardSkills.DATABASE.techs"
                v-bind:key="index"
                v-bind:skill="skill"
                v-bind:subtitle="hardSkills.BACKEND.title"
              >
                {{ skill }}
              </SkillProgressBarComponent>
            </div>

            <div class="text-center">
              <h3>{{ hardSkills.OTHER_TECHS.title }}</h3>
            </div>
            <br />
            <div class="row">
              <SkillProgressBarComponent
                v-for="(skill, index) in hardSkills.OTHER_TECHS.techs"
                v-bind:key="index"
                v-bind:skill="skill"
                v-bind:subtitle="hardSkills.BACKEND.title"
              >
                {{ skill }}
              </SkillProgressBarComponent>
            </div>
          </div>
          <!-- End Skills -->

          <!-- Start Soft Skills -->
          <div id="page-3" class="page three">
            <h3 class="heading">Soft Skills</h3>
            <div class="row">
              <SkillProgressBarComponent
                v-for="(skill, index) in softSkills"
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
            <br />
            <!--
            <div class="row">
              <ItemCardComponent
                class="mx-auto col-sm-12 col-md-5 col-lg-5 col-xs-12 px-0"
                v-bind:icon="icon.LEARN"
                v-for="(course, index) in otherCourses"
                v-bind:key="index"
                v-bind:infoItem="course"
              >
                {{ course }}
              </ItemCardComponent>
            </div> -->
          </div>
          <!-- End Awards -->
        </div>
      </div>
    </div>
  </section>
  <!-- Resume Area End -->
</template>


<script>
import {
  Experiences,
  Schools,
  HardSkills,
  SoftSkills,
  Courses,
  OtherCourses,
} from "../store/data/resume";

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
        { label: "Experience", href: "#page-2" },
        { label: "Education", href: "#page-1" },
        { label: "Skills", href: "#page-3" },
        { label: "Courses", href: "#page-4" },
      ],
      sectionTitle: "Resume",
      experiences: Experiences,
      schools: Schools,
      hardSkills: HardSkills,
      softSkills: SoftSkills,
      courses: Courses,
      otherCourses: OtherCourses,
      icon: typeOfIcon,
    };
  },
};
</script>
