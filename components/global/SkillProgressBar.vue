<template>
  <div class="col-md-6">
  
    <div class="progress-wrap">
      <h5>🔰 {{ itemSkill.title }}</h5>
      <div class="progress" v-show="itemSkill.percent.isVisible">
        <div class="progress-bar" :style="'width: ' + itemSkill.percent.value">
          <span> {{ itemSkill.experience }} </span>
        </div>
      </div>
      <p v-if="hasYearsOfExperience(itemSkill) && itemSkill.percent.isVisible">
        <b>{{ getTimeLabel(itemSkill) }} </b> OF EXPERIENCE
      </p>
    </div>
    <hr />
  </div>
</template>

<script>
import { numbers } from "../../helpers/constants";

export default {
  name: "SkillProgressBar",
  props: {
    skill: Object,
  },
  data() {
    return {
      itemSkill: this.skill,
      timeLabel: "",
      number: numbers,
    };
  },
  methods: {
    hasYearsOfExperience(property) {
      return property.hasOwnProperty("experience");
    },
    getTimeLabel(property) {
      return (this.timeLabel = property.isYear ? "YEARS " : "MONTHS ");
    },
  },
  computed: {},
};
</script>
