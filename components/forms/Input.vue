<template>
  <div v-bind:class="input.divClass">
    <div class="form-group">
      <input
        v-bind:type="input.type"
        v-bind:id="input.id"
        v-bind:class="input.class"
        v-bind:name="input.name"
        v-bind:placeholder="input.placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    input: Object,
  },
  data() {
    return {
       
    }
  }
};
</script>

