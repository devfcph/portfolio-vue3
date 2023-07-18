<template>
  <div v-bind:class="textarea.div">
    <div class="form-group">
      <textarea
        v-bind:name="textarea.name"
        v-bind:id="textarea.id"
        v-bind:class="textarea.class"
        v-bind:placeholder="textarea.placeholder"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "Textarea",
  props: {
    textarea: Object,
  },
};
</script>
