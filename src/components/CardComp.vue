<template>
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
    props: ['aboutMe', 'projects', 'education', 'skills', 'workExp', 'testimonials']
}
</script>
<style scoped>
 .card{
    width: 18rem
 }

</style>