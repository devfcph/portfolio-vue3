<template>
  <!-- Start Footer -->
  <footer class="footer-area sky-blue">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="footer-top flex-column">
            <div class="footer-logo text-center">
              <h4>More About me</h4>
            </div>
            <div class="footer-social text-center">
              <SocialNetwork
                v-for="(logo, index) in socialMedia.LOGOS"
                v-bind:key="index"
                v-bind:logo="logo"
              ></SocialNetwork>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer-bottom text-center justify-content-center">
        <p class="col-lg-8 col-sm-12 footer-text">
          Copyright ©All rights reserved | Francisco Pérez
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </p>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>
<script>
import { SocialMedia } from "../store/data/socialmedia";
import { typeOfIcon } from "../helpers/constants";
import SocialNetwork from "./footer/SocialNetwork.vue";

export default {
  name: "Footer",
  components: {
    SocialNetwork,
  },
  data() {
    return {
      socialMedia: SocialMedia,
      logos: [
        {
          href: "https://www.linkedin.com/in/cris-hernandez-fcphdev",
          icon: typeOfIcon.LINKEDIN,
        },
        {
          href: "#",
          icon: typeOfIcon.REDDIT,
        },
      ],
    };
  },
};
</script>
