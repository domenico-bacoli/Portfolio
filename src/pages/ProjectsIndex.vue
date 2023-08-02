<script>

import {store} from '../store.js';

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';


export default {
    name: 'ProjectsIndex',

    data() {
        return {
            store,
        }
    },

    components: {
        ProjectCard,
    },

    // with backend API
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
  <div class="container">
    <h1>My Projects</h1>

    <div style="--d: .4s;" class="card-container">
      <ProjectCard v-for=" project in store.projects" :project="project"></ProjectCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding-top: 80px;
    max-width: 1300px;

    h1{
        padding: 20px 0;
        margin-left: 50px;
    }

    .card-container{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 50px;
        overflow: auto;
        scroll-behavior: smooth;
        padding: 30px 100px 40px;
        opacity: 0;
        animation: cardProjectsReveal .6s forwards var(--d);
    }   
}


.container.loading-container{
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
}


@media screen and (max-width: 767px) {
    .container{
        padding-left: 10px;
        padding-right: 10px;

        h1{
            padding: 10px 0;
            margin-left: 20px;
        }
    
        .card-container{
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            gap: 34px;
            overflow: auto;
            padding: 20px 24px 50px;
        }
    }
}


@media screen and ((min-width: 768px) and (max-width: 991px)) {
    .container{
        height: 100vh;
        max-width: 1000px;
        padding-top: 80px;

    .card-container{
        gap: 50px;
        padding: 30px 60px 40px;
    }
}

}

@keyframes cardProjectsReveal{
    from{
        transform: translateY(100px);
    }
    to{
        opacity: 1;
        transform: none;
    }
}

</style>