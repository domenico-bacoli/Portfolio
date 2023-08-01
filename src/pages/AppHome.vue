<script>
import {store} from '../store.js';
import axios from 'axios';
import CarouselProjects from '../components/CarouselProjects.vue';

export default {
    name: 'appHome',
    data() {
        return {
            store,
            myImg: "img/domenico.JPG",
        }; 
    },

    components: {
        CarouselProjects,
    },

    emits: ['contactForm'],

    // with Backend API
    // created() {
    //     this.getProjects();
    // },

    // methods: {
    //     getProjects() {
    //         axios.get('http://127.0.0.1:8000/api/projects').then(response => {
    //         this.store.projects = response.data.results;
    //         });
    //     },  
    // },
}
</script>

<template>
<!-- With backend API -->    
<!-- <div v-if="store.projects.length > 0" class="container"> -->
<div class="container">
    <div class="card-container">
        <div class="about-me-card">
            <div class="left-side">
                <div style="--d: .5s;" class="my-name card">
                    <div class="name">
                        <span><h1>I'm Domenico Bacoli</h1></span>
                    </div>
                    <p class="grade">
                        <span style="--d: 3.2s;">Jr Full Stack Web Developer</span>

                    </p>
                    <div class="contact-me-button">
                        <button @click="$emit('contactForm')" class="contact-me">Contact Me</button>
                    </div>  
                </div>
            </div>
            <div style="--d: .5s;" class="social-icon card">
                
                <div class="about-me icon-card">
                    <router-link :to="{ name: 'about' }" class="about-me icon-card">
                        <div class="image">
                            <img :src="this.myImg" alt="about me image">
                        </div>
                    </router-link>
                    <span class="icon-detail">About me</span>
                </div>

                <div class="instagram-card icon-card">
                    <div class="image">
                        <a href="https://www.instagram.com/domenicobacoli/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <span class="icon-detail">Instagram</span>
                </div>
                <div class="linkedin-card icon-card">
                    <div class="image">
                        <a href="https://www.linkedin.com/in/domenico-bacoli-4299a3b0" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span class="icon-detail">Linkedin</span>
                </div>
                <div class="github-card icon-card">
                    <div class="image">
                        <a href="https://github.com/domenico-bacoli" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                    <span class="icon-detail">Github</span>
                </div>
            </div>
        </div>
        <div style="--d: .8s;" class="projects-section">
            <div class="recent-projects">
                <div class="projects-information">
                    <h2>Projects Previews</h2>
                    <router-link :to="{ name: 'projects.index' }"><button>View All</button></router-link>
                </div>
                <CarouselProjects></CarouselProjects>
            </div>
        </div>
    </div>
</div>

<!-- With backend API -->
<!-- <div v-else class="container loading-container">
    <div class="loading">
        <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</div> -->

</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.card{
    border-radius: 20px;
    border: none;
    // box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
    box-shadow: rgba(100, 100, 111, 0.23) 0px 7px 29px 0px;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .card-container{
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 80px;
        margin-bottom: 30px;
        transition: opacity 0.3s ease;

        .about-me-card{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 30px;

            .left-side{
                display: flex;
                width: 100%;
                height: 260px;
                
                .my-name{ 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-grow: 1;
                    background-color: #f7f9fb;
                    background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);
                    opacity: 0;
                    animation: cardMynameReveal 0.5s forwards var(--d);

                    .name{
                        width: fit-content;
                        h1{
                            margin-top: 30px;
                            font-size: 3em;
                            width: 0%;
                            overflow: hidden;
                            white-space: nowrap;
                            border-right: .11em solid $text-color;
                            animation: typing 3s steps(60, end) forwards, blink-caret .85s step-end infinite;
                            animation-delay: .5s; 
                        }
                    }

                    .grade{
                        padding: 14px 0;
                        
                            span{
                            display: block;
                            opacity: 0;
                            animation: reveal 0.5s forwards var(--d);

                            }
                        }

                    .contact-me-button{

                        button{
                            border: none;
                            border-radius: 20px;
                            font-weight: 600;
                            padding: 8px 24px;
                            color: $text-color;
                        }
                    }
                }
            }


            .social-icon{
                display: flex;
                flex-flow: row wrap;
                align-content: center;
                row-gap: 12px;
                column-gap: 12px;
                font-size: 2em;
                width: 35%;
                height: 260px;
                padding: 24px 40px;
                background-color: #f7f9fb;
                background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);
                opacity: 0;
                animation: cardAboutmeReveal 0.5s forwards var(--d);     


                .icon-card{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: calc(100% / 2 - (12px / 2));
                    height: calc(100% / 2 - (12px / 2));
                    border-radius: 16px;
                    cursor: pointer;

                    .fa-instagram{
                        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
                        -webkit-background-clip: text;
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .fa-linkedin-in{
                        color: #0e76a8;
                    }

                    .fa-github{
                        color: #171515;
                    }

                    .icon-detail{
                        font-size: 0.4em;
                        font-weight: 600;
                        color: $text-color;
                        padding-top: 2px;
                    }

                    .fa-instagram, .fa-linkedin-in, .fa-github{
                        transition: all 0.4s ease;

                        &:hover{
                            transform: scale(1.2);
                        }
                    }
                }

                .about-me{
                    background: #50fe0040;
                    box-shadow: 2px 2px 10px #25e40320;
                
                    img{
                        width: 38px;
                        border-radius: 50%;
                        transition: 0.4s ease;
                        
                        &:hover{
                            transform: scale(1.2);
                        }
                    }
               
                }

                .instagram-card{
                    background: radial-gradient(circle at 30% 107%, #fdf49730 0%, #fdf49730 5%, #fd594930 45%, #d6249f30 60%, #285AEB30 90%);
                    box-shadow: 2px 2px 10px radial-gradient(circle at 30% 107%, #fdf49730 0%, #fdf49730 5%, #fd594930 45%, #d6249f30 60%, #285AEB30 90%);;
                }

                .linkedin-card{
                    background-color: #0e76a820;
                    box-shadow: 4px 4px 10px #0e76a810;
                }

                .github-card{
                    background-color: #17151510;
                    box-shadow: 2px 2px 10px #17151510;
                }

            }

        }   
    }

    .projects-section{ 
        opacity: 0;
        animation: cardCarouselProjectReveal 0.5s forwards var(--d);

        .recent-projects{
            padding: 30px 100px;
            // box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
            box-shadow: rgba(100, 100, 111, 0.23) 0px 7px 29px 0px;
            border-radius: 20px;
            background-color: #f7f9fb;
            background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);



            .projects-information{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.4em;

                button{
                    border: none;
                    border-radius: 20px;
                    padding: 4px 20px;
                    font-weight: 600;
                    transition: all 0.4s ease;
                    color: $text-color;

                    &:hover{
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
}

a{
    text-decoration: none;
    color: $text-color;
}


@media screen and (max-width: 767px) {
    .container{
        padding: 0 0;
    .card-container{
        display: flex;
        flex-direction: column;
        margin-top: 430px;

        .about-me-card{
            display: flex;
            flex-direction: column;
            padding: 0 12px;

            .left-side{
                
                .my-name{ 
                    opacity: 0;
                    animation: mobileCardMynameReveal 0.5s forwards var(--d);

                    .name{
                        h1{
                          
                            padding-top: 30px;
                            font-size: 1.7em;
                        } 
                    }

                    .grade{
                        // padding: 14px 0;
                        h5{
                            font-size: .8em;
                        }   
                        
                    }

                    .contact-me-button{

                        button{
                            padding: 8px 20px;
                            font-size: .8em;
                        }
                    }
                }
            }


            .social-icon{
                font-size: 2.3em;
                width: 100%;
                padding: 18px 28px;

                .icon-card{
                    
                    .icon-detail{
                        font-size: 0.35em;
                        font-weight: 600;
                        color: $text-color;
                        padding-top: 2px;
                    }
                }

                .about-me{
                
                    img{
                        width: 42px;
                        border-radius: 50%;
                        
                        &:hover{
                            transform: scale(1.2);
                        }
                    }

                    .icon-detail{
                        padding-top: 10px;
                    }
               
                }

            }   
        }
    }

    .projects-section{
        padding: 0 0 0 12px;
        .recent-projects{
            padding: 30px 0 30px 10px;

            .projects-information{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.4em;

                h2{
                    font-size: 1em;
                    margin: 0;
                    padding-left: 20px;
                }

                button{
                    padding: 6px 18px;
                    font-size: 0.9em;
                    margin-right: 30px;
                }
            }
        }
    }
}
}

@media screen and ((min-width: 768px) and (max-width: 991px)) {

.container{
    align-items: unset;
    max-width: 800px;

    .card-container{
        margin-top: 150px;


        .about-me-card{       

            .left-side{
                width: 100%;
                height: 320px;  
                
                .my-name{ 

                    .name{

                        h1{
                            padding-top: 30px;
                            font-size: 2.2em; 
                        } 
                    }

                    .grade{
                        padding: 8px 0;

                        h5{
                            font-size: 1em;
                        }
                    }

                    .contact-me-button{
                        padding: 10px 0;
                    }
                }
            }


            .social-icon{
                row-gap: 12px;
                column-gap: 12px;
                font-size: 1.8em;
                width: 50%;
                height: 320px;
                padding: 44px 20px;

                .icon-card{
                    .icon-detail{
                        padding-top: 3px;
                    }
                }

                .about-me{
                    img{
                        width: 34px;
                    }
                }

            }

        }   
    }

    .projects-section{

        .recent-projects{
            padding: 100px 60px;

            .projects-information{
                margin-bottom: 2.2em;
                h2{
                    font-size: 1.4em;
                    margin: 0;
                }

                button{
                    border-radius: 20px;
                    padding: 6px 20px;
                    font-size: .9em;
                }
            }
        }
    }
}


}


@media screen and ((min-width: 300px) and (max-width: 768px)) {
    .container{
        // height: auto;
        overflow: auto;

    }
}

@media screen and ((min-width: 992px) and (max-width: 1200px)) {
    .container{
        .card-container{
            .about-me-card{
                .social-icon{
                    padding: 26px 20px;
                }
            }   
        }
    }
}

@keyframes blink-caret{
    from,
    to{
        border-color: transparent;
    }
    50% {
        border-color: $text-color;
    }
}

@keyframes typing {
    0% {
        width: 0;
    }
    20% {
        width: 20%;
    }
    40% {
        width: 40%;
    }
    100% {
        width: 100%;
    }
}

@keyframes reveal{
    from{
        transform: translateY(20px);
    }
    to{
        opacity: 1;
        transform: none;
    }
}

@keyframes cardMynameReveal {
	from {
		transform: translateX(-80px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

@keyframes cardAboutmeReveal {
	from {
		transform: translateX(80px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

@keyframes cardCarouselProjectReveal {
	from {
		transform: translateY(80px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

@keyframes mobileCardMynameReveal{
	from {
		transform: translateX(80px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}
</style>