<template>


  <div class="education container" this>

    
    <div class="row1"> 
      <br><br><br>
      <h2>EDUCATION</h2>
    </div>
    <div class="row4 gap-3">
      <transition-group name="fade-left" tag="div">

        <card-comp v-for="education in getEdu" :key="education" style="width: 100%;" edu>

        <!-- <card-comp v-for="education in getEdu" :key="education"  :class="{ 'small-card': index === 0 }" ></card-comp>
        style="width: 100%;"> -->
          <template #cardHeader>
            <h3 class="card-title">{{ education.placeOfInstitution }}</h3>
          </template>
          <template #cardBody>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ education.year }}</h6>
            <br>
            <p class="info">{{ education.description }}</p>
            <p class="info"> Name:{{ education.contact[0].name }}</p>
            <p class="info"> Contact: {{ education.contact[0].contactDetails }}</p>
          </template>

        </card-comp>

      </transition-group>
    </div>

    <div class="work container">
      <div class="row2">
        <h2>WORK EXPERIENCE</h2>
      </div>
      <div class="row justify-content-evenly">
        <card-comp v-for="workExp in getWork" :key="workExp" gue>
          <template #cardHeader>
            <h3 class="card-title">{{ workExp.placeOfWork }}</h3>
          </template>
          <template #cardBody>
            <h6 class="card-subtitle mb-2 text-body-secondary" id="work">{{ workExp.year }}</h6>
            <p class="info">{{ workExp.description }}</p>
            <p class="info">{{ workExp.contact[0].name }}</p>
            <p class="info">{{ workExp.contact[0].cell }}</p>
            <p class="info">{{ workExp.contact[0].position }}</p>
            <p class="info">{{ workExp.contact[0].email }}</p>
          </template>
          
        </card-comp>
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
.education .container{
  background-color: #fff;
  padding:50px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 380px;
  height: 100%;
  color: black;
}

.small-card {
  height: 600px; /* Adjust height */
  overflow: hidden;
}

.row {
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly; /* Ensures even spacing */
}

.row1{
  padding:40px;
 
}

.row2{
  padding: 28px;
}

.row4 card-comp:first-child{
  height: 150px; /* Adjust this value as needed */
  overflow: hidden; /* Ensures content does not overflow */
  margin-top: auto;
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
  text-align: center;
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

[edu]{
  min-height: 250;
}

</style>
