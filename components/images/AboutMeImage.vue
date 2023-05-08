<template>
  <div class="img-about">
    <img class="img-fluid" v-bind:src="imgMe" alt="abou me" />
  </div>
</template>

<script>
export default {
    computed: {
        imgMe() {
            //'../static/assets/img/about/1082318.jpg', 
            return 'https://via.placeholder.com/824x1024';
        }
    }
};
</script>
