<template>
  <a :href="logo.href" target="_blank"><i :class="getSocialIcon"></i></a>
</template>

<script>
export default {
    name: "SocialNetwork",
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
