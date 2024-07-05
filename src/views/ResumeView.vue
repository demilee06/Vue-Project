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
  <!-- <div v-for="education in getEdu()" :key="education">
    <card-comp :education="education">
      <template #educationPage>
        <h2>
          <p class="text-center">EDUCATION</p>
        </h2>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ education.placeOfInstitution }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ education.year }}</h6>
            <p class="card-text">{{ education.description }}</p>
            <br>
            <p class="card-text"> Name:{{ education.contact[0].name }}</p>
            <p class="card-text"> Contact: {{ education.contact[0].contactDetails }}</p>
          </div>
        </div>
      </template>
    </card-comp>
  </div> -->
  <!-- <div class="workExp card-group">
    <div class="text-center">
      <h2>WORK EXPERIENCE</h2>
    </div>
    <div v-for="workExp in getWork()" :key="workExp">
      <card-comp :workExp="workExp">
        <template #workPage>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ workExp.placeOfWork }}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">{{ workExp.year }}</h6>
              <p class="card-text">{{ workExp.description }}</p>
              <p class="card-text">{{ workExp.contact[0].name }}</p>
              <p class="card-text">{{ workExp.contact[0].cell }}</p>
              <p class="card-text">{{ workExp.contact[0].position }}</p>
              <p class="card-text">{{ workExp.contact[0].email }}</p>
            </div>
          </div>
        </template>
      </card-comp>
    </div>
  </div> -->
  <!-- <div class="skill card-group container">
    <div class="row">
      <h2 class="text-center">SKILLS</h2>
    </div>
    <div class="row gap-2" >
      <card-comp v-for="skill in getSkill()" :key="skill" :skills="skill">
        <template #skillsPage>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ skill.name }}</h5>
              <a :href=skill.link> <img :src=skill.image alt="html5" width="40" height="40" /> </a>
            </div>
          </div>
        </template>
      </card-comp>
    </div>
  </div> -->
  <!-- <h2><p class="text-center">EDUCATION</p></h2>
        <div class="card-group">                                                                          
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Westridge High School</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">2019-2023</h6>
              <p class="card-text">I attended this high school for five years,and one
                of the extra murals I had taken from grade 10 till 
                my matric year was “Computer Application 
                Technology”, which I had excelled in. High school
                 is where I had learned to most of what I know 
                now.  </p>
            </div>
          </div>
        <br>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Life Choices Academy</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">2024Apr-2024Sep</h6>
              <p class="card-text">At the academy I have been doing  coding 
                for the past month , being taught in a thorough
                yet patient manner by the lecturers . My 
                experience at the academy is a memorable 
                collection of treasured times and a abundance 
                of knowledge.</p>
            </div>
            <br>
          </div>
        </div>
        <h2><p class="text-center">WORK & EXPERIENCE</p></h2>
          <div class="card-group">                                                                          
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Volunteering at the Library</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">2022-2023</h6>
              <p class="card-text">The experience of helping out at a library is not 
                like anything I have done before in my life, it was 
                very trying at times based on what would need 
                to be done in a day. the library was a delightful 
                event to be apart of and learn from.</p>
            </div>
          </div>
        <br>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Part-time Job as a Catering assistant</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">2024Apr-2024(to be continued)</h6>
              <p class="card-text">The job gave me lots of opportunities to interact 
                with people from many different walks of life. I got 
                to learn a little about how the business sector 
                worked the only side to it that was a bit tough was 
                the times that I would be working but overall it 
                it was very helpful in terms of learning and earning.</p>
            </div>
          </div>
            </div>
          <br>
          <h2><p class="text-center">SKILLS</p></h2>
          <div class="card-group">                                                                          
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            
                1. <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
                2. <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
                3. <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
                4. <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a>
              
            </div>
          </div>
         </div> -->

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
@media only screen and (max-width: 600px){

}
@media only screen and (max-width: 480px){
  /* .container{ */
    /* display:flex;
    justify-content: center; */
    /* margin:auto; */
    /* position: relative;
    left:0;
    right:0; */
  /* } */
}
</style>
