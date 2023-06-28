<template>
  <div class="col-md-6">
    <div class="progress-wrap">
      <h5>{{ itemSkill.title }}</h5>
      <div class="progress" v-show="itemSkill.percent.isVisible">
        <div class="progress-bar" :style="'width: ' + itemSkill.percent.value">
          <span>{{ itemSkill.percent.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        skill: Object
    },
    data() {
      return {
        itemSkill: this.skill
      }
    }
};
</script>
