<template>
  <div class="download-btn mt-2">
    <a class="btn radius-btn btn-block" :href="item.file">{{ item.label }}</a>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>
