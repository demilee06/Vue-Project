<template>
  <!-- Navbarpage -->
    <!-- <nav class="navbar sticky-top bg-body-tertiary">
      <div class="nav-bar ms-auto">
        <ul class="nav nav-underline">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link">Resume</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Projects</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
  </nav> -->
  <nav class="navbar navbar-expand-lg fixed-top shadow">
                <div class="container-fluid" id="nav">
                    <router-link to="/"><img src="https://demilee06.github.io/Portfolio-images/vue%20portfolio.jpg" class="logo" alt="My Logo" loading="lazy"></router-link>
                    <button class="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                      <span class="text-white p-2" style="font-size:30px;">&#9776;</span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="width:50vw;background-color: rgb(150 197, 114, 0.7)">
                      <div class="offcanvas-header">
                        <h1>MENU</h1>
                        <button type="button" class="btn-close bg-white pt-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                      <div class="offcanvas-body text-center">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 p-3 f-3">
                          <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/"><button data-bs-dismiss="offcanvas" aria-label="Close">Home</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/about" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close">About</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/education" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close">Education & Experience</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/projects" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close">Projects</button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/contact" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close">Contact</button></router-link>
                          </li>
                        </ul>
                        <ul class="navbar-nav justify-content-end flex-grow-1 p-3 f-3 px-2">
                          <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/search"><button data-bs-dismiss="offcanvas" aria-label="Close"><i class="las la-search"></i></button></router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/users" aria-current="page"><button data-bs-dismiss="offcanvas" aria-label="Close"><i class="las la-user"></i></button></router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </nav>





 
</template>
<script>
export default {
  
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeMount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const nav = document.getElementsByClassName('navbar')[0];
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    }
  }
</script>
<style scoped>
nav {
      background-color: transparent;
    }
    nav button {
      background-color: transparent;
      border:none;
      font-weight: bold;
      font-size:23px;
      color:whitesmoke;
      text-shadow: 1px 1px black;
      text-decoration: none;
      font-weight: 200;
      transition: 1s;
    }
    nav .nav-item button:hover{
      color:gray;
    }
    nav button i{
      color:whitesmoke;
      transition: 1s;
    }
    nav button i:hover{
      color: gray;
    }
    .navbar.scrolled{
      background-color: black;
      transition: 0.8s;
    }
    #nav .logo{
      width:100px;
      height:100px;
    }
    nav img{
      width:20px;
      height:30px;
      border-radius: 50%;
    }
    nav i{
      font-size: 25px;
      color:black;
    }
    h1{
      color:#93C572;
      text-shadow: 1px 1px black;
    }
    .navbar{
      height:100px
    }

</style>






