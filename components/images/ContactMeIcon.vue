<template>
  <div class="media align-items-center">
    <div class="media-icon">
      <i v-bind:class="info.icon"></i>
    </div>
    <div class="media-body">
      <h4>{{ info.title }}</h4>
      <span>{{ info.info }}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    info: Object
  },
  data() {
    return {
     
    };
  },
};
</script>
