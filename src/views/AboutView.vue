<template>
  <!-- About page -->
  <div class="container">
    <div class="row">
      <CardComp v-for="about in aboutMe" :key="about" style="width: 100%;">
        <template #cardHeader>
          <h3 class="display-3">{{ about.name }}</h3>

        </template>
        <template #cardBody>
          <p class="fs-3"><i>{{ about.message }}</i></p>
          
          <p class="fs-3"><i>{{ about.messageTwo }}</i></p>
        </template>
      </CardComp>
    </div>
    
  </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default{
  components: {
    CardComp

  },
  data(){
    return{
      
    }
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
<style scoped>

</style>

  
    
    
    