<template>
  <!-- Start Resume Nav -->
  <nav id="navi">
    <ul>
      <li v-for="(navItem, index) in infoNav"  v-bind:key="index">
    <a :href="navItem.href"> {{ navItem.label }}</a>
    </li>
      <li><a href="#page-1">Education</a></li>
      <li><a href="#page-2">Experience</a></li>
      <li><a href="#page-3">Skills</a></li>
      <li><a href="#page-4">Awards</a></li>
    </ul>
  </nav>
  <!-- End Resume Nav -->
</template>

<script>
export default {
  props: ["infoNav"],
};
</script>

