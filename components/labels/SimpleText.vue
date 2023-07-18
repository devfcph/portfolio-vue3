<template>
  <p>
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "SimpleText",
    props: {
        text: String
    }
};
</script>
