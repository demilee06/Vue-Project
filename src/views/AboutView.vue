<template>
  <!-- About page -->
  <div class="container">
    <div class="box">
      <CardComp v-for="about in aboutMe" :key="about" style="width: 100%;">
        <template #cardHeader>
          <span class="title">{{ about.name }}</span>

        </template>
        <template #cardBody>
          <p ><i>{{ about.message }}</i></p>
          
          <p ><i>{{ about.messageTwo }}</i></p>
        </template>
      </CardComp>
      
    </div>
    <br><br>
    <div class="row">
      <h2 class="skill">SKILLS</h2>
    </div>
    <div class="row  justify-content-evenly" >
      <card-comp v-for="skill in getSkill" :key="skill" id="cards">
        <template #cardHeader >
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
.container {
  color: white;
  position: relative;
  font-family: sans-serif;
  padding-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container::before,
.container::after {
  content: "";
  background-color: #fab5704c;
  position: absolute;
}

.container::before {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  top: 30%;
  right: 7%;
}

.container::after {
  content: "";
  position: absolute;
  height: 3rem;
  top: 8%;
  right: 5%;
  border: 1px solid;
}

.container .box {
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
  transition: all ease 0.3s;
  
}

.container .box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container .box .title {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.container .box div strong {
  display: block;
  margin-bottom: 0.5rem;
}

.container .box div p {
  margin: 0;
  font-size: 0.9em;
  font-weight: 300;
  letter-spacing: 0.1em;
}

.container .box div span {
  font-size: 0.7rem;
  font-weight: 300;
}

.container .box div span:nth-child(3) {
  font-weight: 500;
  margin-right: 0.2rem;
}

.container .box:hover {
  box-shadow: 0px 0px 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
}
span{
 font-family:sans-serif;
 font-style: italic;
}
.skill{
  color:black;
  font-style: italic;
}
#cards{
  display: flex;
  margin: 1vw;
}
</style>

  
    
    
    