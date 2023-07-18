<template>
  <div id="typed-strings">
    <!-- Animated Text Writer -->
    <span> {{ text }}</span>
    <span> {{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "TypedString",
    props: {
        text: String
    }
};
</script>
