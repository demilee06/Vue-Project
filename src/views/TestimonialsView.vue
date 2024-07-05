<template>
  <br><br> 
    <div class="testimonials container">
      <div class="row gap-2 justify-content-evenly">
        <card-comp v-for="testimonial in getTestimonial"  :key="testimonial" class="rounded-5 shadow" >
          <template #cardHeader>
            <h5 class="card-title">{{ testimonial.name }}</h5>
          </template>
          <template #cardBody>
            <div class="col" id="coll">
              <div class="card" id="test-c">
                <img :src="testimonial.image" class="card-img-top" id="test-card" alt="photo of gwiba">
                <div class="card-body" >
                  <p class="card-text_1">{{ testimonial.position }}</p>
                  <p class="card-text_2">{{ testimonial.message }}</p>
                </div>
              </div>
            </div>   

          </template>
        </card-comp>
      </div>
    </div>
    
        <!-- <div class="">
            <div >
              <div class="card h-100">
                <img src="https://demilee06.github.io/images-bootstrap-project/IMG-20221024-WA0251.jpg" class="card-img-top" alt="photo of gwiba">
                <div class="card-body">
                  <h5 class="card-title">Gwiba Mabandla</h5>
                  <p class="card-text">"Chloe is hardworking, very keen on small details and have has a create sense of design and personality towards her work. She keeps improving her skills everyday and I'm here for it. "</p>
                </div>
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
  data(){
    return{
      
    }
  },
  methods:{},
  computed: {
    getTestimonial(){
      return this.$store.state.testimonials
    }
  },
  mounted() {
    return this.$store.dispatch('getAboutMe')
  }
}
</script>
<style scoped>
 #test-card{
  width: 230px;
  height:250px;
}
#test-c{
  width: 230px;
  height: 750x;
  padding: 0px;
}
#coll{
  padding: 0px;
}
.card-text_2{
  width: 230;
  height: 400px;
}


</style>
    