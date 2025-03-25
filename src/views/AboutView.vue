<template>
  <!-- About page -->
  <div class="container">
    <!-- <div class="box">
      <CardComp v-for="about in aboutMe" :key="about" style="width: 100%;">
        <template #cardHeader>
          <span class="title">{{ about.name }}</span>
  
        </template>
        <template #cardBody>
          <p class="info"><i>{{ about.message }}</i></p>
  
          <p class="info"><i>{{ about.messageTwo }}</i></p>
        </template>
      </CardComp>
  
    </div> -->

    <!-- From Uiverse.io by lowa2006 --> 
    <div class="row">
      <h5 class="skill">About Me</h5>
    </div>
      <div class="card">
        <CardComp v-for="about in aboutMe" :key="about" style="width: 100%;">
          <template #cardHeader>
            <span>{{about.name}}</span>

          </template>
          <template  #cardBody>
            <p class="info">{{ about.message }}</p>
            <p class="info">{{ about.messageTwo }}</p>
           
          </template>

        </CardComp>
      </div> 
    
    <div class="row">
      <h5 class="skill">My Skills</h5>
    </div>
    <div class="row justify-content-evenly">
      <card-comp v-for="skill in getSkill" :key="skill" id="cards">
        <template #cardHeader>
          <h5 class="card-title" id="cart">{{ skill.name }}</h5>
        </template>
        <template #cardBody>
          <a :href=skill.link> <img :src=skill.image alt="html5" width="60" height="60" id="carb" /> </a>
        </template>
      </card-comp>
  
    </div>
    <div class="row">
      <h3 class="badge">My Badges</h3>
    </div>
    <div class="row justify-content-evenly">
      <card-comp v-for="badges in getBadges" :key="badges" id="cards">
        <template #cardHeader>
          <h5 class="card-title" id="cart">{{ badges.name }}</h5>
        </template>
        <template #cardBody>
          <a :href=badges.link> <img :src=badges.image alt="html5" width="90" height="80" id="carb" /> </a>
        </template>
      </card-comp>
  
    </div>

    
            
        
    
  </div>


 


    
           
    
</template>
<script>
 import CardComp from '@/components/CardComp.vue'
 export default {
  components: {
    CardComp

  },
  data() {
    return {

    }
  },
  computed: {
    aboutMe() {
      return this.$store.state.aboutMe
    },
    getSkill() {
      return this.$store.state.skills
    },
    getBadges() {
      return this.$store.state.badges
    }
  },
  mounted(){
    this.$store.dispatch('getAboutMe')
  }

 }
</script>
<style scoped>
.container {
  color: transparent;
  position: relative;
  font-family: sans-serif;
  padding-top: 18vh;
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
  width: 980px;
  height: 400px;
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
  display:flex;
  justify-content: center;
}

.container .box div strong {
  display: block;
  margin-bottom: 0.5rem;
}

.container .box div p {
  margin:0;
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

span {
  font-family: sans-serif;
  font-style: italic;
}

.skill {
  color: black;
  font-style: italic;
}

#cards {
  display: flex;
  margin: 1vw;
}

#cart {
  display: flex;
  justify-content: center;
}

#carb {
  display: block;
  margin-left: auto;
  margin-right: auto;
}


/* From Uiverse.io by lowa2006 */ 
.card {
  width: 50em;
  height: 22.5em;
  background: #171717;
  transition: 1s ease-in-out;
  clip-path: polygon(
    30px 0%,
    100% 0,
    100% calc(100% - 30px),
    calc(100% - 30px) 100%,
    0 100%,
    0% 30px
  );
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
}
.title{
  color: white;
}
.info{
  color:white;
  padding: 2vh;
}
#cards.card{
  width: 200px;
  height: 200px;
  color: white;
}

.card span {
  font-weight: bold;
  color: white;
  text-align: center;
  display: block;
  font-size: 1em;
}

.card .info {
  font-weight: 400;
  color: white;
  display: block;
  text-align: center;
  font-size: 0.72em;
  margin: 1em;
}

.card .img {
  width: 4.8em;
  height: 4.8em;
  background: white;
  border-radius: 15px;
  margin: auto;
}

.card .share {
  margin-top: 1em;
  display: flex;
  justify-content: center;
  gap: 1em;
}

.card a {
  color: white;
  transition: 0.4s ease-in-out;
}

.card a:hover {
  color: red;
}

.card button {
  padding: 0.8em 1.7em;
  display: block;
  margin: auto;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  background: #ffffff;
  color: rgb(0, 0, 0);
  transition: 0.4s ease-in-out;
}

.card button:hover {
  background: red;
  color: white;
  cursor: pointer;
}

.skill {
  padding: 1vh;
  font-family: "Poppins", sans-serif; /* Modern, clean look */
  font-size: 1.5rem; /* Adjust size for readability */
  font-weight: 600; /* Semi-bold for emphasis */
  text-transform: uppercase; /* Optional: Makes it look more refined */
  letter-spacing: 1px; /* Adds slight spacing for a sleek look */
  color: #333; /* Dark gray for professionalism */
}

.badge{
  padding: 1vh;
  font-family: "Poppins", sans-serif; /* Modern, clean look */
  font-size: 1.5rem; /* Adjust size for readability */
  font-weight: 600; /* Semi-bold for emphasis */
  text-transform: uppercase; /* Optional: Makes it look more refined */
  letter-spacing: 1px; /* Adds slight spacing for a sleek look */
  color: #333; /* Dark gray for professionalism */
}

</style>