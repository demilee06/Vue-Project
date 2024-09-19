<template>
    <div class="project card-group card-group-scroll agh">
        <div class="row justify-content-center">
          <card-comp class="col-m-3" v-for="project in getProjects" :key="project">
             
                <template #cardHeader>
                  <h2 class="card-title">{{ project.name }}</h2>
                </template>
                <template #cardBody>
                  <img :src= "project.image" class="card-img-top" :alt= project.name />
                  <div class="card-body">
                    <p>{{ project.description }}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted"><a :href="project.github" target="_blank">GitHub Respository</a></small>
                    <br>  
                    <small class="text-muted"><a :href="project.vercel" target="_blank">Vercel Host</a></small>
                  </div>
                </template>
              
              </card-comp>

          </div>
      </div>
                    
    <!-- <div class="card-group card-group-scroll" >
        <div  class="card">
            <img src="https://demilee06.github.io/images-bootstrap-project/wednesday.png" class="card-img-top" alt="vercel project wednesday" />
            <div class="card-body">
                <h1 class="card-title">Project_Wednesday</h1>
            </div>
            <div class="card-footer">
                <small class="text-muted"><a href="https://wednesday-chi.vercel.app/">The Project</a></small>
            </div>
        </div>
    </div>   -->
</template>
<script>
import CardComp from '@/components/CardComp.vue';

export default {
    components: {
    CardComp
  },
  data(){
    return{
      
    }
  },
  methods:{},
  computed: {
    getProjects(){
      return this.$store.state.projects
    }
  },
  mounted() {
    this.$store.dispatch('getAboutMe')
    
  }
}
</script>

<style scoped>
.card-footer{
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}

.agh{
  margin-top: 120px;
}
</style>