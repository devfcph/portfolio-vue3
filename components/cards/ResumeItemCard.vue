<template>
  <div class="resume-wrap transition d-flex">
    <div class="icon d-flex align-items-center justify-content-center">
      <!--<span :class="isEducationItem ? 'icon-graduation': 'icon-briefcase'"></span>-->
      <span :class="icon"></span>
    </div>
    <div class="text pl-3">
      <span class="date">{{ resumeItem.date }}</span>
      <br />
      <span>{{ resumeItem.city }}</span>
      <h4>
        {{ resumeItem.title }}
        <a
          v-if="hasExternalLink(resumeItem)"
          :href="resumeItem.externalLink"
          target="_blank"
          ><i class="fa fa-lg fa-external-link" aria-hidden="true"></i>
        </a>
      </h4>

      <span class="position">{{ resumeItem.place }}</span>
      <hr v-if="!hasExternalLink(resumeItem)" />
      <p
        v-for="(item, index) in resumeItem.body"
        v-bind:key="index"
        :class="item.style"
      >
         {{ item.info }}
         <a
          v-if="hasExternalLink(item)"
          :href="item.externalLink"
          target="_blank"
          ><i class="fa fa-external-link" aria-hidden="true"></i>
          <hr >
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { typeOfIcon } from "../../helpers/constants";

export default {
  name: "ResumeItemCard",
  props: {
    infoItem: Object,
    icon: typeOfIcon,
  },
  data() {
    return {
      resumeItem: this.infoItem,
    };
  },
  methods: {
    hasExternalLink: function(property) {
      
      return property.hasOwnProperty("externalLink");
    },
  },
};
</script>
