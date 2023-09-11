<script>
import {store} from '../store.js';

import axios from 'axios';

import { defineComponent } from 'vue'

import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


export default defineComponent({
  name: 'Breakpoints',

  data: () => ({
    settings: {
            itemsToShow: 2.3,
            snapAlign: 'center',
        },
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 4.5,
                snapAlign: 'start',
            },
            1200: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
        baseUrl:'http://127.0.0.1:8000/storage/',
        store,
    }),

  components:{
    Carousel,
    Slide,
    Navigation,
  },  

  props: {
        projects: Object,
    },

})
</script>

<template>
  
 <div class="my-container">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
        <!-- with Backend API -->
      <!-- <Slide v-for="project in store.projects" :key="project">
        <div class="carousel__item">
            <div class="project-card">
                <div class="project-thumb">
                    <img :src="this.baseUrl + project.thumb" alt="project image"> 
                </div>
                <div class="button-more">
                    <router-link :to="{name: 'projects.show', params: {slug: project.slug}}">More</router-link>
                </div>
            </div>
        </div>

      </Slide> -->

      <!-- Only frontend -->
        <Slide v-for="project in store.projects" :key="projects">
            <div class="carousel__item">
                <div class="project-card">
                    <div class="project-thumb">
                        <router-link :to="{name: 'projects.show', params: {slug: project.slug}}"><img :src="project.thumb" alt="project image"></router-link> 
                    </div>
                    <div class="button-more">
                        <router-link :to="{name: 'projects.show', params: {slug: project.slug}}">More</router-link>
                    </div>
                </div>
            </div>

        </Slide>

      <template #addons>
        <Navigation>
          <template #next>
              <i class="fa-solid fa-chevron-right"></i>
          </template>
          <template #prev>
              <i class="fa-solid fa-chevron-left"></i>
          </template>
        </Navigation>
      </template>
    </Carousel>
  </div> 

</template>

<style lang="scss">
  
@import "../scss/variables";

.my-container{
    display: flex;
    justify-content: center;
    max-width: 1000px;
    

        .project-card{
            position: relative;
            padding: 0 12px;

            .button-more{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                transition: opacity 0.3s ease;
                background-color: white;
                padding: 8px 18px;
                border-radius: 20px;
                font-weight: 600;
                box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

                a{
                    text-decoration: none;
                    color: $text-color;
                }
            }

            .project-thumb{
                width: 100%;
                height: 200px;
                border-radius: 24px;
                cursor: pointer;
                overflow: hidden;   
            
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 24px;
                    transition: all 0.3s ease;
                }
            }

            &:hover img{
                opacity: 0.3;
                transform: scale(1.1);
            }

            &:hover .button-more{
                opacity: 1;
            }
        }

.fa-solid.fa-chevron-right {
        font-size: 50px;
        color: $text-color;
        padding-left: 100px;
        transition: all 0.4s ease-in-out;
    }

    .fa-solid.fa-chevron-left {
        font-size: 50px;
        color: $text-color;
        padding-right: 100px;
        transition: all 0.4s ease-in-out;
    }

    .fa-solid.fa-chevron-right:hover,
    .fa-solid.fa-chevron-left:hover {
        transform: scale(1.15);
    }

    .carousel__track{
        margin: 0;
    }

}

@media screen and (max-width: 768px) {
    .my-container{
    display: flex;
    justify-content: center;
    width: 100%;

        .project-card{
            display: flex;
            justify-content: center;
            padding: 0 10px 0 0;

            .button-more{
                display: none;
            }

            .project-thumb{
                width: 100%;
                height: 240px;
            }

            &:hover img{
                opacity: unset;
                transform: none;
            }

            &:hover .button-more{
                opacity: unset;
            }
        }

.fa-solid.fa-chevron-right {
        display: none;
        // font-size: 30px;
        // padding-left: 120px;
    }

    .fa-solid.fa-chevron-left {
        display: none;
        // font-size: 30px;
        // padding-right: 120px;
    }

}
}


@media screen and ((min-width: 768px) and (max-width: 992px)) {
    .my-container{
        display: flex;
        justify-content: center;
        max-width: 1000px;
    

        .project-card{
            position: relative;
            padding: 0 8px;

            .button-more{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                transition: opacity 0.3s ease;
                background-color: white;
                padding: 8px 18px;
                border-radius: 20px;
                font-weight: 600;
                box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

                a{
                    text-decoration: none;
                    color: $text-color;
                }
            }

            &:hover img{
                opacity: 0.3;
                transform: scale(1.1);
            }

            &:hover .button-more{
                opacity: 1;
            }

            .project-thumb{
                width: 100%;
                height: 220px;
                border-radius: 24px;
                overflow: hidden;
                cursor: pointer;        
            
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 24px;
                    transition: all 0.3s ease;
                }
            }
        }

.fa-solid.fa-chevron-right {
        font-size: 50px;
        color: $text-color;
        padding-left: 100px;
        transition: all 0.4s ease-in-out;
    }

    .fa-solid.fa-chevron-left {
        font-size: 50px;
        color: $text-color;
        padding-right: 100px;
        transition: all 0.4s ease-in-out;
    }

    .fa-solid.fa-chevron-right:hover,
    .fa-solid.fa-chevron-left:hover {
        transform: scale(1.15);
    }

    .carousel__track{
        margin: 0;
    }

}
 


}


</style>