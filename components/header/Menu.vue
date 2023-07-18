<template>
  <div class="main-menu float-right d-none d-lg-block">
    <nav>
      <ul id="navigation">
        <MenuItem
            v-for="(item, index) in items"
            v-bind:key="index"
            v-bind:item="item"
        ></MenuItem>
      </ul>
    </nav>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "Menu",
  components: {
    MenuItem,
  },
  data() {
    return {
      items: [
        { href: "#body", title: "Home" },
        { href: "#services", title: "Services" },
        { href: "#about", title: "About" },
        { href: "#resume", title: "Resume" },
        { href: "#works", title: "Works" },
        { href: "#blog", title: "Blog" },
      ],
    };
  },
};
</script>
