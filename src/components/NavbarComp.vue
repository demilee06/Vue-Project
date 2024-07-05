<template>
  <!-- Navbarpage -->
    <nav class="navbar sticky-top bg-body-tertiary">
      <div class="nav-bar ms-auto">
        <ul class="nav nav-underline">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link">Resume</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Projects</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" class="nav-link">Testimonials</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
  </nav>
</template>
<script>
import NavbarComp from '../components/NavbarComp.vue'
export default {
    name:'NavbarComp',
    components: 
         NavbarComp
    
}
</script>
<style scoped>
    
</style>






