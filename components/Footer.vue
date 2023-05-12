<template>
  <!-- Start Footer -->
  <footer class="footer-area sky-blue">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="footer-top flex-column">
            <div class="footer-logo text-center">
              <a href="#">
                <img src="assets/img//logo.png" alt="logo" />
              </a>
              <h4>Follow Me</h4>
            </div>
            <div class="footer-social text-center">
              <SocialNetwork
              v-for="(logo, index) in logos"
              v-bind:key="index"
              v-bind:logo="logo"
              ></SocialNetwork>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer-bottom text-center justify-content-center">
        <p class="col-lg-8 col-sm-12 footer-text">
          Copyright ©All rights reserved | Cobra is made with
          <i class="fa fa-heart-o" aria-hidden="true"></i> by
          <a href="https://themeforest.net/user/karimezzat" target="_blank"
            >KarimEzZat</a
          >
        </p>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>
<script>
import { typeOfIcon } from "../helpers/constants";
import SocialNetwork from "./footer/SocialNetwork.vue";

export default {
  name: "Footer",
  components: {
    SocialNetwork,
  },
  data() {
    return {
      logos: [
        {
          href: "#",
          icon: typeOfIcon.FACEBOOK,
        },
        {
          href: "#",
          icon: typeOfIcon.TWITTER,
        },
        {
          href: "#",
          icon: typeOfIcon.DRIBBBLE,
        },
        {
          href: "#",
          icon: typeOfIcon.BEHANCE,
        },
      ],
    };
  },
};
</script>
