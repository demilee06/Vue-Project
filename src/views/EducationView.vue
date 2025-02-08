<template>

  <div class="education container">
    <div class="row1"> 
      <br><br><br>
      <h2>EDUCATION</h2>
    </div>
    <div class="row gap-3">
      <transition-group name="fade-left" tag="div">
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

      </transition-group>
    </div>
    <div class="row2">
      <h2>WORK EXPERIENCE</h2>
    </div>

    <div class="row justify-content-evenly">
      <card-comp v-for="workExp in getWork" :key="workExp" >
        <template #cardHeader>
          <h3 class="card-title">{{ workExp.placeOfWork }}</h3>
        </template>
        <template #cardBody>
          <h6 class="card-subtitle mb-2 text-body-secondary" id="work">{{ workExp.year }}</h6>
          <p class="card-text">{{ workExp.description }}</p>
          <p class="card-text">{{ workExp.contact[0].name }}</p>
          <p class="card-text">{{ workExp.contact[0].cell }}</p>
          <p class="card-text">{{ workExp.contact[0].position }}</p>
          <p class="card-text">{{ workExp.contact[0].email }}</p>
        </template>
        
      </card-comp>

    <div class="row ">
      <transition-group name="fade" tag="div" class="work-container"> 

        <card-comp v-for="workExp in getWork" :key="workExp" >
          <template #cardHeader>
            <h3 class="card-title">{{ workExp.placeOfWork }}</h3>
          </template>
          <template #cardBody>
            <h6 class="card-subtitle mb-2 text-body-secondary" id="card-sub">{{ workExp.year }}</h6>
            <p class="info">{{ workExp.description }}</p>
            <p class="info">{{ workExp.contact[0].name }}</p>
            <p class="info">{{ workExp.contact[0].cell }}</p>
            <p class="info">{{ workExp.contact[0].position }}</p>
            <p class="info">{{ workExp.contact[0].email }}</p>
          </template>
          
        </card-comp>
      </transition-group>

      
    </div>
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
    }
  },
  mounted() {
    this.$store.dispatch('getAboutMe')
  }
}
</script>
<style scoped>
.education container{
  background-color: #fff;
  padding:50px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 380px;
  height: 100%;
  color: black;
}
.row {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically if needed */
  width: 100%;
}

.row1{
  padding:50px;
 
}
.row2{
  padding:50px;
 
}
.card-title{
  display: flex;
  justify-content: center;
  color: #fff;
}
h2{
  text-align: center;
}

.info{
  color:white;
}
#card-sub{
  color: white;
}

.fade-left-enter-active {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.fade-left-leave-active {
  opacity: 0;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.work-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly; /* Ensures even spacing */
  
}

.fade-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: fadeInLeft 0.8s ease-out forwards;
}

.fade-right {
  opacity: 0;
  transform: translateX(50px);
  animation: fadeInRight 0.8s ease-out forwards;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
