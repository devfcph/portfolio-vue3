<template>
  <div class="resume-wrap transition d-flex">
    <div class="icon d-flex align-items-center justify-content-center">
      <span :class="isEducationItem ? 'icon-graduation': 'icon-briefcase'"></span>
    </div>
    <div class="text pl-3">
      <span class="date">{{ infoItem.date }}</span>
      <br>
      <span>{{ infoItem.city }}</span>
      <h4>{{ infoItem.title }}</h4>
      <span class="position">{{ infoItem.place }}</span>
      <p>{{ infoItem.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoItem: Object,
    isEducationItem: {
        type: Boolean,
        require: true
    }
  },
  created() {
    console.log("Hola");
    console.log(this.infoItem);
  },
  data() {
    return {
       
    };
  },
};
</script>
