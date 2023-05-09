<template>
  <!-- Header Start -->
  <header>
    <div class="header-area header-transparrent">
      <div class="main-header header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <!-- Logo -->
            <div class="col-xl-2 col-lg-2 col-md-2">
              <HeaderLogo></HeaderLogo>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-10">
              <!-- Main-menu -->
              <Menu></Menu>
            </div>
            <!-- Mobile Menu -->
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
import Menu from './header/Menu.vue';
import HeaderLogo from './images/HeaderLogo.vue';

export default {
  name: "Header",
  components: {
    Menu,
    HeaderLogo
  },
};
</script>
