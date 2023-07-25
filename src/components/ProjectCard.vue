<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
            //with backend API
            // baseUrl:'http://127.0.0.1:8000/storage/',
        }; 
    },

    props: {
        project: Object,
    },

    computed: {
        shortDescription() {
            if(this.project.description.length > 50){
                return this.project.description.substring(0, 50) + '...';
            } else {
                return this.project.description;
            } 
        },

        // With Backend API
        // thumb() {
        //     if(this.project.thumb == null) {
        //         return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        //     } else {
        //         return this.baseUrl + this.project.thumb;
        //     }    
        // },

    },
}
</script>

<template>
    <div class="card-project">
        <div class="thumb">
            <img :src="project.thumb" alt="anteprima progetto" loading="lazy">
            <div class="overlay"></div>
            <div class="title">{{ project.title}}</div>
            <div class="button-more">
                <router-link :to="{name: 'projects.show', params: {slug: project.slug}}">More</router-link>
                <!-- <a href="{{route('admin.projects.show', $project->slug)}}"><button>More</button></a> -->
            </div>
        </div>
        <div class="card-details">
            <small class="type">Type: {{ project.type ? project.type.name : 'Nessuna' }}</small>
            <!-- <div class="technologies">
                <span v-for="technology in project.technologies">{{ technology.name }}</span>
            </div> -->
            <div class="description">{{ shortDescription }}</div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;
.card-project{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3 - (50px / 3 * 2));
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    border: none;
    cursor: pointer;

    &:hover .thumb .button-more{
        opacity: 1;
    }
    .thumb{
        position: relative;
        height: 200px;
        width: 100%;

        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 20px 20px 0 0;
        }
    }

    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px 20px 0 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(70, 70, 70, 0) 70%);
    }

    .title{
            position: absolute;
            bottom: 14px;
            left: 20px;
            font-weight: 600;
            text-transform: uppercase;
            color: white;
            letter-spacing: 0.1ch;
            font-size: 1.1em;
    }

    .button-more{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        background-color: white;
        padding: 10px 20px;
        font-weight: 600;
        border-radius: 20px;
        transition: opacity 0.4s ease-in-out;

        a{
            text-decoration: none;
            color: $text-color;
        }
    }

    .card-details{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 10px 20px 30px;

        .type{
            font-weight: 600;
        }

        .technologies{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px; 
            width: 100%;
            overflow-x: scroll; 
        }

        .description{
            font-size: 0.8em;
            color: $text-color;
        }
    }
}

@media screen and (max-width: 767px) {
    .card-project{
        width: 100%;

    }    
}



@media screen and ((min-width: 768px) and (max-width: 991px)) {

    .card-project{
        width: calc(100% / 2 - ( 50px / 2 ));

    }   

}
</style>