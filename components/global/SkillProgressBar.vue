<template>
  <div class="col-md-6">
    <div class="progress-wrap">
      <h5>{{ skill.title }}</h5>
      <div class="progress">
        <div class="progress-bar" :style="'width: ' + skill.percent">
          <span>{{ skill.percent }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        skill: Object
    }
};
</script>
