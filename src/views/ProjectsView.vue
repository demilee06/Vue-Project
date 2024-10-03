<template>
  <div class="project card-group card-group-scroll prod">
    <div class="row justify-content-center">
      <CardComp class="col-m-3" v-for="project in getProjects" :key="project">
        <template #cardHeader>
          <h2 class="card-title">{{ project.name }}</h2>
        </template>
        <template #cardBody>
          <img :src="project.image" class="card-img-top" :alt="project.name" />
          <div class="card-body">
            <p>{{ project.description }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><a :href="project.github" target="_blank">GitHub Repository</a></small>
            <br>
            <small class="text-muted"><a :href="project.vercel" target="_blank">Vercel Host</a></small>
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

.prod{
 padding:120px;
 justify-content: space-evenly;
}

</style>