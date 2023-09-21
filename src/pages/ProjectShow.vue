<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ProjectShow',

    data() {
        return {
            project: {},
            store,
            isLoading: true,
            projectFound: false,
            projectSlug:'',
            // baseUrl: 'http://127.0.0.1:8000/', 
        }
    },

    // With Backend API
    // mounted() {
    //     this.projectSlug = this.$route.params.slug;

    //     this.getProject();
    // },

    // computed: {
    //     projectImage() {
    //         return this.baseUrl + 'storage/' + this.project.thumb;
    //     }
    // },

    // methods: {
    //     getProject() {
    //         axios.get('http://127.0.0.1:8000/api/projects/' + this.projectSlug).then(response => {
    //             this.isLoading = false;

    //             if(response.data.success) {
    //                 this.project = response.data.project;
    //                 this.projectFound = true;

    //             } else {
    //                 this.projectFound = false
    //             }

    //             // cambio il titolo alla pagina
    //             document.title = 'Boolfolio - ' + this.project.title;
    //         });
    //     }
    // }

    // Start Only frontend
    mounted() {
        this.projectSlug = this.$route.params.slug;
        
        this.getProject();
    },

    computed: {
        projectImage() {
            return  store.projects.thumb;
        }
    },

    methods: {
        getProject() {
            this.project = this.store.projects.find((project) => project.slug === this.projectSlug);
            // cambio il titolo alla pagina
            document.title = 'Boolfolio - ' + this.project.title;
        }
    }
    // End Only frontend

}
</script>

<template>
    <!-- With Backend API -->
    <!-- <div v-if="isLoading" class="loading">
        <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else class="container">
        <div class="return-button">
            <router-link :to="{name: 'projects.index', params: {slug: project.slug}}"><button><i class="fa-solid fa-angle-left"></i>View all</button></router-link>
        </div>
        <div v-if="projectFound" class="project-container">
            <div class="project-image">
                <img :src="projectImage" alt="immagine progetto">
            </div>
            <div class="project-details">
                <div class="project-title">
                    <h1>Project: <span>{{project.title}}</span></h1>
                </div>
                <h4>Type: <span>{{ project.type ? project.type.name : 'Nessuna' }}</span></h4>
                    <div class="technologies">
                        <h4>Technologies:</h4>
                        <span class="single-technology" v-for="technology in project.technologies">{{ technology.name }}</span>
                    </div>
                <h4>Description:</h4>
                <p>{{ project.description }}</p>
            </div>

        </div> 
        <div v-else>
            <div class="alert alert-warning" role="alert">
                Nessun progetto trovato!
            </div>
        </div>
    </div> -->

    <!-- Only Frontend -->
    <div class="container">
        <div class="return-button">
            <router-link :to="{name: 'projects.index'}"><button><i class="fa-solid fa-angle-left"></i>View all</button></router-link>
        </div>
        <div class="project-container">
            <div style="--d: .4s;" class="project-image">
                <img :src="this.project.thumb" alt="immagine progetto">
            </div>
            <div style="--d: .8s;" class="project-details">
                <div class="project-title">
                    <h1>Project: <span>{{this.project.title}}</span></h1>
                </div>
                <h4>Type: <span>{{ this.project.type ? this.project.type : 'Nessuna' }}</span></h4>
                    <!-- <div class="technologies">
                        <h4>Technologies:</h4>
                        <span class="single-technology" v-for="technology in project.technologies">{{ technology.name }}</span>
                    </div> -->
                <h4>Description:</h4>
                <p>{{ this.project.description }}</p>
            </div>

        </div> 
    </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

a{
    text-decoration: none;
    color: $text-color;
}
    .loading{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        max-width: 1200px;

        .return-button{
            width: 100%;

            i{
                padding-right: 10px;
                transition: all 0.4s ease;
                color: $text-color;
            }

            button{
                padding: 8px 24px;
                border-radius: 20px;
                border: none;
                margin-bottom: 40px;
                font-weight: 600;
                transition: all 0.4s ease;
                color: $text-color;

                &:hover{
                    transform: scale(1.1);

                    i{
                        transform: scale(1.5);
                    }
                }

            }
        }

        .project-container{
            display: flex;
            // flex-wrap: wrap;
            // justify-content: space-around;
            gap: 40px;
            align-items: center;
            width: 100%;
           
            .project-image{
                height: 450px;
                width: 700px;
                box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.3);
                border-radius: 20px;
                opacity: 0;
                animation: ProjectImageReveal 0.4s forwards var(--d);

                    img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 20px;
                    }
            }

            .project-details{
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 40%;
                height: 450px;
                gap: 20px;
                border-radius: 20px;
                padding: 0 60px;
                background-color: #f7f9fb;
                background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);
                box-shadow: rgba(100, 100, 111, 0.23) 0px 7px 29px 0px;
                color: $text-color;
                opacity: 0;
                animation: ProjectDetailsReveal 0.8s forwards var(--d);
                

                .project-title{
                    display: flex;
                    h1{
                        font-size: 1em;
                        font-weight: 600;

                        span{
                            font-weight: 300;
                            margin-left: 20px;
                        }
                    }
                }
              
                h4{
                    font-weight: 600;
                    font-size: 1em;
                    
                    span{
                        padding-left: 20px;
                        font-weight: 300;
                    }
                }

                .technologies{
                    
                    .single-technology{
                        padding: 2px 10px;
                        border: 1px solid gray;
                        border-radius: 8px;
                        font-size: .75em;
                        margin: 0 4px;
                    }


                }
            }
     
        }

    }


@media screen and (max-width: 767px) {
    .container{
        padding: 80px 20px 0;
        height: unset;
        
        .project-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            padding-bottom: 30px;
            .project-image{
                height: 260px;
                width: 100%;
            }

            .project-details{
                width: 100%;
                gap: 14px;

                .project-title{
                    display: flex;
                    h1{
                        font-size: 1em;
                        font-weight: 600;

                        span{
                            font-weight: 300;
                            margin-left: 20px;
                        }
                    }
                }
            
                h4{
                    font-weight: 600;
                    font-size: 1em;
                    margin: 0;
                    
                    span{
                        padding-left: 20px;
                        font-weight: 300;
                    }
                }

                .technologies{
                    display: flex;
                    flex-flow: row wrap;
                    gap: 4px;
                    
                    .single-technology{
                        padding: 2px 8px;
                        margin: 0;
                    }


                }
            }

        }

    }
}

@media screen and ((min-width: 768px) and (max-width: 992px)) {
    .container{

        .project-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            .project-image{
                width: 90%;
                height: 500px;
            }

            .project-details{
  
                width: 90%;
                height: 400px;
    
            }
     
        }

    }

}

@media screen and ((min-width: 992px) and (max-width: 1199px)) {
        .container{


        .project-container{
            display: flex;
            align-items: center;
            gap: 20px;
            .project-image{
                width: 55%;

            }

            .project-details{
                padding: 0 40px;
            
                .technologies{
                    
                    .single-technology{
                        padding: 2px 6px;
                        border: 1px solid gray;
                        border-radius: 8px;
                        font-size: .7em;
                        margin: 0 4px;
                    }


                }
            }
     
        }

    }
}

@keyframes ProjectImageReveal {
	from {
		transform: translateY(80px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

@keyframes ProjectDetailsReveal {
	from {
		transform: translateX(80px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

</style>