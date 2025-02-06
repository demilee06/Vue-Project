<template>
  <!-- landing page -->
  <div class="container" id="container">
    <div class="row align-items-center min-vh-100">
      <div class="col-md-6" id="x">
        <img src="https://demilee06.github.io/Portfolio-images/images/Black%20and%20white%20photo%20of%20Me.jpg"
          alt="a photo of me" loading="lazy" class="img-fluid rounded-5 shadow ">
      </div>
      <div class="col-md-6">
        <h2 class="myName my-5 display-2">CHLOE ALMAZIEN</h2>
        <h4 class="full-stack">I AM AN ASPIRING FULL-STACK DEVELOPER</h4>
        <br>
        <!-- <a href="https://github.com/projects" target="_blank"><img class="img_3"  src="https://img.icons8.com/fluency/48/github.png" alt="github" /></a>
            <a href="mailto: chloealmazien6@gmail.com " target="_blank"> <img class="img_4"  src="https://img.icons8.com/doodle/48/email--v1.png" alt="email--v1" /></a>
            <a href="https://www.linkedin.com/in/chloe-almazien-6a0959317/" target="_blank"><img class="img_5" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></a> -->
        <a href="https://github.com/projects" target="_blank">
          <img class="social-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub" />
        </a>

        <a href="mailto: chloealmazien6@gmail.com" target="_blank">
          <img class="social-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Email" />
        </a>

        <a href="https://www.linkedin.com/in/chloe-almazien-6a0959317/" target="_blank">
          <img class="social-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
        </a>
        <br><br>
        <!-- From Uiverse.io by Codecite -->
        <div class="button">
          <a href="#" class="anchor">
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src




export default {
  name: 'HomeView',
  components: {
    
  
  }
}
</script>
<style scoped>
.container{
  padding:90px;
}

.social-icon {
  width: 40px; /* Adjust size as needed */
  height: 40px;
  margin: 0 10px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.img-fluid[data-v-9ea40744] {
    -o-object-fit: contain;
    object-fit: cover;
}
img{
  height:500px;
  width:449px;

}
.img_3{
  width:48px;
  height:48px;
}
.img_4{
  width:48px;
  height:48px;
}
.img_5{
  width:48px;
  height:48px;
}

/*add from chat */
.myName {
  font-family: 'Playfair Display', serif;
  font-size: 3rem; /* Adjust based on screen size */
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #222; /* Dark gray for elegance */
}

.full-stack {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #555; /* Slightly lighter gray for contrast */
  margin-top: 10px;
}
 
 /* From Uiverse.io by Codecite */ 
.anchor {
  text-decoration: none;
  color: #fff;
  display: inline-block;
  font-family: sans-serif;
  font-weight: 600;
  border-radius: 50px;
  border: 2px solid #000;
  padding: 14px 40px 13px;
  overflow: hidden;
  position: relative;
}

.anchor:hover {
  color: #4e484a;
}

.button a::before {
  position: absolute;
  content: "";
  z-index: 0;
  background-color: #000;
  left: -5px;
  right: -5px;
  bottom: -5px;
  height: 111%;
  transition: all .3s ease;
}

.button a:hover::before {
  height: 11%;
}

.button span {
  position: relative;
  z-index: 2;
  transition: all .3s ease;
}
</style>
