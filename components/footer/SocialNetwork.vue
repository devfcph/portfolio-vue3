<template>
  <a :href="logo.href"><i :class="getSocialIcon"></i></a>
</template>

<script>
export default {
    props: {
        logo: Object
    },
    computed: {
        getSocialIcon() {
            return this.logo.icon + " transition";
        }
    }
};
</script>
