<template>
  <div class="resume-wrap transition d-flex">
    <div class="icon d-flex align-items-center justify-content-center">
      <!--<span :class="isEducationItem ? 'icon-graduation': 'icon-briefcase'"></span>-->
      <span :class="icon"></span>
    </div>
    <div class="text pl-3">
      <span class="date">{{ infoItem.date }}</span>
      <br />
      <span>{{ infoItem.city }}</span>
      <h4>{{ infoItem.title }}</h4>
      <span class="position">{{ infoItem.place }}</span>
      <p>{{ infoItem.body }}</p>
    </div>
  </div>
</template>

<script>
import { typeOfIcon } from "../../helpers/constants";

export default {
  props: {
    infoItem: Object,
    icon: typeOfIcon,
  },
  data() {
    return {
      //iconClass: this.icon,
    };
  },
};
</script>
