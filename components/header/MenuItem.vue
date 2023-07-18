<template>
  <li class="nav-item">
    <a class="nav-link transition active" :href="item.href"> {{ item.title }}</a>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
    props:{
        item: Object
    }
};
</script>
