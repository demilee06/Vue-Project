<template>
  <div class="app">
    <!-- Background Layer -->
    <div class="background"></div>

    <!-- Content Layer -->
    <div class="content">
      <SpinnerComp v-if="showSpinner" />
      <div v-else>
        <NavbarComp />
        <main>
          <router-view />
        </main>
        <FooterComp />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
/* Apply global font settings */
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@700&display=swap');

export default {
  components: {
    NavbarComp,
    FooterComp,
    SpinnerComp,
  },
  data() {
    return {
      showSpinner: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000); // 2 seconds delay before hiding the spinner
  },
};
</script>

<style scoped>
/* Main container */
.app {
  position:relative;
  width: 100%;
  height: 100%;
  overflow:scroll;
}

/* Background with blur effect */
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("https://demilee06.github.io/Portfolio-images/Chloes_background_Img.png") center/cover no-repeat;
  filter: blur(5px);
  z-index: -1;
}

/* Content should be on top and not blurred */
.content {
  position: relative;
  z-index: 1;
}
</style>
