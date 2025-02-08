npm<template>

    <!-- card page -->
    <div class="card">

        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
        
    </div>
    
</template>
<!-- <template>
    <div>
        <div v-if="typeof aboutMe == 'object'">
            <slot name="aboutPage">
                <h1>aboutMe.name</h1>
                <p>aboutMe.message</p>
                <p>aboutMe.messageTwo</p>
            </slot>
        </div>
        <div v-if="typeof projects == 'object'">
            <slot name="projectsPage">
                <h1>projects.name</h1>
                <h1>projects.github</h1>
                <h1>projects.vercel</h1>
                <h1>projects.description</h1>
                <h1>projects.image</h1>
            </slot>
        </div>
        <div v-if="typeof education == 'object'">
            <slot name="educationPage">
                <h1>education.description</h1>
                <h1>education.year</h1>
                <h1>education.placeOfInstitution</h1>
                <h1>education.contact</h1>
            </slot>
        </div>
        <div v-if="typeof skills == 'object'">
            <slot name="skillsPage">
                <h1>skills.name</h1>
                <h1>skills.link</h1>
                <h1>skills.image</h1>
            </slot>
        </div>
        <div v-if="typeof workExp == 'object'">
            <slot name="workPage">
                <h1>workExp.placeOfWork</h1>
                <h1>workExp.year</h1>
                <h1>workExp.description</h1>
                <h1>workExp.contact</h1>
                
            </slot>
        </div>
        <div v-if="typeof testimonials == 'object'">
            <slot name="testimonialsPage">
                <h1>testimonials.name</h1>
                <h1>testimonials.position</h1>
                <h1>testimonials.message</h1>
                <h1>testimonials.image</h1>
                
            </slot>
        </div>
        <div v-else>
            <slot name="">
                
            </slot>
        </div>
    </div>
</template> -->
<script>
export default {
    props: ['aboutMe', 'projects', 'education', 'skills', 'workExp']
}
</script>
<style scoped>
/* From Uiverse.io by lowa2006 */ 
.card {
  width: 25em;
  height: 31em;
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

</style>