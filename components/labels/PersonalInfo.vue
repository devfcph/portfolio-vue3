<template>
  <li>
    <span>{{ info.title }}:</span>
    <span>{{ info.info }}</span>
  </li>
</template>

<script>
export default {
    props: {
        info: Object
    }
};
</script>
