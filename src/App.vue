<template>
  <div class="app">
    <SpinnerComp v-if="showSpinner" />
    <div v-else>
      <NavbarComp></NavbarComp>
      <main>
        <router-view />
      </main>
      <FooterComp />
    </div>
  </div>
</template>
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
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
.app{
 background-image: url(https://demilee06.github.io/Portfolio-images/Chloes_background_Img.png);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
