import { createRouter, createWebHistory } from 'vue-router';

// faccio l'import di tutti i componenti che utilizzerò come pagina
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectShow from './pages/ProjectShow.vue';

const router = createRouter({
    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta: {
                title: 'Home'
            }
        },

        {
            path: '/about-us',
            name: 'about',
            component: AppAbout,
            meta: {
                title: 'Chi sono'
            }
        },
        
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex,
            meta: {
                title: 'Progetti'
            }
        },

        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: ProjectShow,
            meta: {
                title: 'Progetto'
            }
        },
    ],
});

// funzione per modificare il titolo da visualizzare per ogni pagina
router.beforeEach((to) => {
    document.title = to.meta?.title ? 'Boolfolio - ' + to.meta.title : 'Boolfolio';
  });
  

export { router };