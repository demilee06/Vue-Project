import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:null,
    projects:null,
    education:null,
    skills:null,
    workExp:null,
    testimonials:null
  },
  getters: {
  },
  mutations: {
    setAboutMe(state,payload){
      state.aboutMe = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setProjects(state,payload){
      state.projects = payload
    },
    setSkills(state,payload){
      state.skills = payload
    },
    setWorkExp(state,payload){
      state.workExp = payload
    },
    setTestimonials(state,payload){
      state.testimonials = payload
    }
  },
  actions: {
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://demilee06.github.io/First-API/Data/data.json')
      let data = await fetchedInfo.json()
      //dependant on the json file
      let {aboutMe,education,Projects,skills,workExp,testimonials} = data

      commit("setAboutMe",aboutMe)
      commit("setEducation",education)
      commit("setProjects",Projects)
      commit("setSkills",skills)
      commit("setWorkExp",workExp)
      commit("setTestimonials",testimonials)
    }
    },
  modules: {
  }
})
