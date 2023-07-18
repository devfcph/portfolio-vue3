<template>
  <!-- Start Resume Nav -->
  <nav id="navi">
    <ul>
      <li v-for="(navItem, index) in infoNav" v-bind:key="index">
        <a :href="navItem.href"> {{ navItem.label }}</a>
      </li>
    </ul>
  </nav>
  <!-- End Resume Nav -->
</template>

<script>
export default {
  name: "ResumeNav",
  props: ["infoNav"],
};
</script>

