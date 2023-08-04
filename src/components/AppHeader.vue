<script>
export default {
    name: 'appHeader',
    data() {
        return {
            
        }; 
    },

}
</script>

<template>
<!-- <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <router-link :to="{ name: 'home' }" class="navbar-brand">Boolfolio</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'projects.index' }" class="nav-link">Projects</router-link>  
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>  
        </li>
      </ul>
    </div>
  </div>
</nav> -->

<!-- <nav class="navbar navbar-expand-md bg-body-tertiary">
  <div class="container bg-body-tertiary">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'projects.index' }" class="nav-link">Projects</router-link>  
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav> -->

<nav class="navbar navbar-expand-md bg-body-white fixed-top">
  <div class="container">
    <router-link :to="{ name: 'home' }" class="navbar-brand">Domenico</router-link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Domenico</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1">
            <li class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page"><button data-bs-dismiss="offcanvas">Home</button></router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'projects.index' }" class="nav-link"><button data-bs-dismiss="offcanvas">Projects</button></router-link>  
            </li>
            <li class="nav-item dropdown">
                <router-link :to="{ name: 'about' }" class="nav-link"><button data-bs-dismiss="offcanvas">About</button></router-link>
            </li>  
        </ul>    
      </div>
    </div>
  </div>
</nav>

</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;


button{
    padding: 0;
    border: none;
    background-color: transparent;
    color: $text-color;
}
.navbar-toggler{
    border: none;
}
nav{
    height: 60px;
    width: 100%;
    z-index: 1;
    background-color: white;
    margin: 0 auto;

    .offcanvas-body{
        ul{
            gap: 20px;
        }
    }
}

.nav-item{
  position: relative;
  margin: 0 4px;
}
.nav-link::after{
    position: absolute;
    content: "";
    background-color: $text-color;
    height: 3px;
    width: 0;
    left: 0;
    bottom: 0;
    transition: 0.4s ease;
    gap: 0;
}

.nav-link:hover::after{
  width: 100%;
}

a{
    text-decoration: none;
    color: $text-color;
}

@media screen and (max-width: 767px) {
  nav{
    .offcanvas-body{
        display: flex;
        align-items: center;

        ul{
          display: flex;
          align-items: center;
          gap: 60px;
          text-transform: uppercase;
          padding-bottom: 30px;

          li{
            a{
              button{
                font-weight: 600;
                letter-spacing: 0.35ch;
                color: $text-color;
                font-size: 1.6em;
              }
            }
          }
        }
    }
  }
    button{
        text-transform: uppercase;
        color: $text-color;
    }

    .nav-link::after{
      display: none;
    }

    .nav-link:hover::after{
      width: 0;
    }
}

@media screen and (min-width: 1200px) {
    .container{
        // padding: 0 200px;
        max-width: 1200px;
    }
}
</style>