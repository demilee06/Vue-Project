<template>

  <div class="education container">

    
    <div class="row">
      <h2>EDUCATION</h2>
    </div>
    <div class="row gap-2">
      <card-comp v-for="education in getEdu" :key="education" style="width: 100%;">
        <template #cardHeader>
          <h3 class="card-title">{{ education.placeOfInstitution }}</h3>
        </template>
        <template #cardBody>
          <h6 class="card-subtitle mb-2 text-body-secondary">{{ education.year }}</h6>
          <p class="card-text">{{ education.description }}</p>
          <br>
          <p class="card-text"> Name:{{ education.contact[0].name }}</p>
          <p class="card-text"> Contact: {{ education.contact[0].contactDetails }}</p>
        </template>

      </card-comp>
    </div>
    <div class="row">
      <h2>WORK EXPERIENCE</h2>
    </div>
    <div class="row justify-content-between">
      <card-comp v-for="workExp in getWork" :key="workExp">
        <template #cardHeader>
          <h3 class="card-title">{{ workExp.placeOfWork }}</h3>
        </template>
        <template #cardBody>
          <h6 class="card-subtitle mb-2 text-body-secondary">{{ workExp.year }}</h6>
          <p class="card-text">{{ workExp.description }}</p>
          <p class="card-text">{{ workExp.contact[0].name }}</p>
          <p class="card-text">{{ workExp.contact[0].cell }}</p>
          <p class="card-text">{{ workExp.contact[0].position }}</p>
          <p class="card-text">{{ workExp.contact[0].email }}</p>
        </template>
        
      </card-comp>
      
    </div>
    <div class="row">
      <h2>SKILLS</h2>
    </div>
    <div class="row gap-2 justify-content-between">
      <card-comp v-for="skill in getSkill" :key="skill">
        <template #cardHeader>
          <h5 class="card-title">{{ skill.name }}</h5>
        </template>
        <template #cardBody>
          <a :href=skill.link> <img :src=skill.image alt="html5" width="40" height="40" /> </a>
        </template>
        
      </card-comp>
      
    </div>
  </div> 

</template>
<script>
import CardComp from '@/components/CardComp.vue';

export default {
  components: {
    CardComp
  },
  data() {
    return {

    }
  },
  methods: {},
  computed: {
    getEdu() {
      return this.$store.state.education
    },
    getWork() {
      return this.$store.state.workExp
    },
    getSkill() {
      return this.$store.state.skills
    }
  },
  mounted() {
    this.$store.dispatch('getAboutMe')
  }
}
</script>
<style scoped>

</style>
