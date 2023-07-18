<template>
  <li>
    <span>{{ info.title }}</span>
    <span>{{ info.info }}</span>
  </li>
</template>

<script>
export default {
  name: "PersonalInfo",
    props: {
        info: Object
    }
};
</script>
