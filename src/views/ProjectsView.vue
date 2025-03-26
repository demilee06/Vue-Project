<template>
  <div class="project card-group card-group-scroll prod">
    <div class="row ">
      <CardComp class="col-m-1" card v-for="project in getProjects" :key="project">
        <template #cardHeader>
          <h3 class="card-title" prodName>{{ project.name }}</h3>
        </template>
        <template #cardBody>
          <img :src="project.image" class="card-img-top" :alt="project.name" />
          <div class="card-body">
            <p prodDesc>{{ project.description }}</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-secondary"><a :href="project.github" target="_blank" git>GitHub</a></button>
            <!-- <small class="text-muted"><a :href="project.github" target="_blank">GitHub Repository</a></small> -->
            <br>
            <button type="button" class="btn btn-secondary"><a :href="project.vercel" target="_blank" git>GoLive</a></button>
          </div>
          </template>
        </CardComp>
    </div>
  </div>
</template>


<script>
import CardComp from '../components/CardComp.vue'

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
    getProjects() {
      return this.$store.state.projects
    }
  },
  mounted() {
    this.$store.dispatch('getAboutMe')

  }
}
</script>

<style scoped>
.card-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}
img{
  height:200px;
}
.card-body{
  height: 25vh;
}
.prod{
 padding:150px;
 display: flex;
 justify-content: space-between;

}

[prodName]{
  color: white ;
  text-align: center;
}

[prodDesc]{
  color: white ;
  text-align: center;
}

[card]{
  min-height: 32.5em ;
  margin-bottom: 3rem;
  scale: 0.8;  /* scale is used to scale down the selected element by the specified value*/
}

[git]{
  color: white;
  text-decoration: none;
}

.card-body{
  min-height: 180px;
}
.project{
}

.row{
  display: grid;
  grid-template-columns: auto auto auto;
}

</style>