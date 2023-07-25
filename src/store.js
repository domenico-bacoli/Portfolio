import {reactive} from 'vue';

export const store = reactive({
    // With backend API
    // projects: [],

                // Start only front-end
                projects: [
                    {
                        title: "Boolflix", 
                        thumb: "/img/boolflix.png",
                        description: "Netflix Clone Projects with data fetched from the TheMovieDB API with dinamic searchbar working on the title.",
                        type: "Front End",
                        slug:"boolflix",
                    },
                    {
                        title: "Spotify Web", 
                        thumb: "/img/spotifyWeb.png",
                        description: "Clone of Spotify Web application.",
                        type: "Front End",
                        slug:"spotify-web",
                    },
                    {
                        title: "Boolzapp", 
                        thumb: "/img/boolzapp.png",
                        description: "Whatsapp Clone Project",
                        type: "Front End",
                        slug:"boolzapp",
                    },
                    {
                        title: "DC Comics", 
                        thumb: "/img/comicsDc.png",
                        description: "Dc Comics clone Project",
                        type: "Full Stack",
                        slug:"dc-comics",
                    },
                    {
                        title: "Boolando", 
                        thumb: "/img/boolando.png",
                        description: "Zalando clone Project",
                        type: "Front End",
                        slug:"boolando",
                    },
                    {
                        title: "Slider Project", 
                        thumb: "/img/vue3-slider.png",
                        description: "Simple automatic slider with start, stop and reverse button.",
                        type: "Front End",
                        slug:"slider-project",
                    },
                    {
                        title: "Front-end Project", 
                        thumb: "/img/frontend-Project.png",
                        description: "mid-course front end project",
                        type: "Front End",
                        slug:"front-end-project",
                    },
                    {
                        title: "Bootstrap portfolio", 
                        thumb: "/img/bootstrap-portfolio.png",
                        description: "Simple layout for a Portfolio made with bootstrap.",
                        type: "Front End",
                        slug:"bootstrap-portfolio",
                    },
                    {
                        title: "Discord", 
                        thumb: "/img/discord.png",
                        description: "Discord clone using html and css.",
                        type: "Front End",
                        slug:"discord",
                    },
                ]
                // End only front-end

});