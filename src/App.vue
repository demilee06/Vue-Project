<template>
  <div class="wrapper">
    <NavbarComp/>
      <main>
        <SpinnerComp/>
        <router-view/>
      </main>
      <Footer/>
  </div>

   
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'
import Footer from '@/components/FooterComp.vue'
import SpinnerComp from './components/SpinnerComp.vue';
export default {
  components:{
    NavbarComp,
    Footer,
    SpinnerComp
  },
  computed: {
    aboutMe(){
      return this.$store.state.aboutMe
    }
  },
  mounted() {
    this.$store.dispatch('getAboutMe')
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body{
  text-align: center;
  background-image: url('https://demilee06.github.io/images-bootstrap-project/depositphotos_101467770-stock-photo-white-gray-background-with-soft.jpg');
}
.wrapper{
  display: grid;
  grid-template-rows: auto minmax(100dvh, 100%) auto;
}


</style>
