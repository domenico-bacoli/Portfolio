<script>
export default {
    name: 'appAbout',
    data() {
        return {
            myImg: "img/about-image.png",
        }; 
    },


}
</script>

<template>
<div class="container">
    <h1>About Me</h1>
    <div class="domenico">
        <div class="domenico-image">
            <img style="--d: .5s;" :src="this.myImg" alt="Domenico Image">
            <!-- <a href="/img/Domenico-Bacoli-cv.pdf" download>Scarica il mio CV</a> -->
        </div>
        <div class="domenico-details">
            <p class="text">
                <span style="--d: .5s;">
                    Hi, I'm Domenico, a passionate web developer with a fervent curiosity for the world of technology. Since I was young, I've had a strong attraction to the digital world and its ability to enhance our daily lives.
                    I'm a perpetual student, always in search of new challenges and learning opportunities. My coding passion is fueled by a constant desire to keep up with the latest trends and technologies, ensuring I never stop learning something new.
                </span>
            </p>
            <div class="skills">
                <h4>Skills</h4>
                <div class="icon" style="--d: 1s">
                    <div class="icon-card">
                        <i class="fa-brands fa-html5"></i>
                        <span>HTML</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-css3-alt"></i>
                        <span>CSS</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-square-js"></i>
                        <span>JS</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-bootstrap"></i>
                        <span>Bootstrap</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-sass"></i>
                        <span>Sass</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-vuejs"></i>
                        <span>Vue</span>
                    </div>
                    <div class="icon-card">  
                        <i class="devicon-php-plain"></i>
                        <span>Php</span>
                    </div>
                    <div class="icon-card">
                        <i class="fa-brands fa-laravel"></i>
                        <span>Laravel</span>
                    </div>
                    <div class="icon-card">
                        <i class="devicon-mysql-plain"></i>
                        <span>MySql</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    max-width: 1300px;

    h1{
        padding: 20px 0;
        margin-left: 50px;
    }

    .domenico{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
        // padding-top: 40px;

            .domenico-image{
                width: 30%;
                height: 470px;
                border-radius: 20px;

                img{
                    display: block;
                    opacity: 0;
                    animation: imageReveal 0.5s forwards var(--d);
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top;
                    border-radius: 20px;
                }

                a{
                    text-decoration: none;
                }
            }

            .domenico-details{
                width: 60%;
                background-color: #f7f9fb;
                background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);
                // box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
                box-shadow: rgba(100, 100, 111, 0.23) 0px 7px 29px 0px;
                border-radius: 20px;
                padding: 40px 60px;
                .text{
                    padding: 18px;

                    span{
                        font-size: 1em;
                        display: block;
	                    opacity: 0;
	                    animation: reveal 0.5s forwards var(--d);
                    }
                }

                .icon{
                    display: flex;
                    flex-flow: row wrap;
                    gap: 10px;
                    width: 100%;
                    padding: 10px;
                    opacity: 0;
                    animation: iconReveal 0.5s forwards var(--d);

                    .icon-card{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: calc(100% / 6 - (10px / 6 * 5));
                        height: 80px;
                        border-radius: 16px;
                        font-weight: 500;
                        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);

                        i{
                            font-size: 2em;
                        }

                        span{
                            font-size: .7em;
                            font-weight: 600;
                            padding-top: 4px;
                        }
                    }

                    .icon-card:nth-child(1){
                        background-color: #E34F2620;
                        box-shadow: 4px 4px 16px #E34F2610;
                        i{
                            color: #E34F26;
                        }
                    }
                    .icon-card:nth-child(2){
                        background-color: #1572B620;
                        box-shadow: 4px 4px 16px #1572B610;
                        i{
                            color: #1572B6;
                        }
                    }
                    .icon-card:nth-child(3){
                        background-color: #F7DF1E20;
                        box-shadow: 4px 4px 16px #F7DF1E10;
                        i{
                            color: #F7DF1E;
                        }
                    }
                    .icon-card:nth-child(4){
                        background-color: #7532F920;
                        box-shadow: 4px 4px 16px #7532F910;
                        i{
                            color: #7532F9;
                        }
                    }
                    .icon-card:nth-child(5){
                        background-color: #CC669920;
                        box-shadow: 4px 4px 16px #CC669910;
                        i{
                            color: #CC6699;
                        }
                    }
                    .icon-card:nth-child(6){
                        background-color: #4FC08D20;
                        box-shadow: 4px 4px 16px #4FC08D10;
                        i{
                            color: #4FC08D;
                        }
                    }
                    .icon-card:nth-child(7){
                        background-color: #4F5B9320;
                        box-shadow: 4px 4px 16px #4F5B9310;
                        i{
                            color: #4F5B93;
                        }
                    }
                    .icon-card:nth-child(8){
                        background-color: #FF2D2020;
                        box-shadow: 4px 4px 16px #FF2D2010;
                        i{
                            color: #FF2D20;
                        }
                    }
                    .icon-card:nth-child(9){
                        background-color: #4479A120;
                        box-shadow: 4px 4px 16px #4479A110;
                        i{
                            color: #4479A1;
                        }
                    }
                }
            }
    }
}

@media screen and (max-width: 767px) {
    .container{
        padding: 400px 10px 30px 10px;
        overflow: auto;
    h1{
        padding-top: 80px;
        padding-bottom: 20px;
        margin-left: 20px;
    }

    .domenico{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
        
        // padding-top: 40px;

            .domenico-image{
                width: 80%;
                height: 320px;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top;
                }
            }

            .domenico-details{
                width: 100%;
                padding: 10px 20px;

                .text{
                    font-size: .8em;
                    padding: 20px 20px;
                }

                .icon{
                    display: flex;
                    flex-flow: row wrap;
                    gap: 10px;
                    width: 100%;
                    padding: 10px 20px;

                    .icon-card{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: calc(100% / 3 - (10px / 3 * 2));
                        height: 70px;
                        border-radius: 16px;

                        i{
                            font-size: 1.6em;
                        }

                        span{
                            font-size: .65em;
                            font-weight: 600;
                            padding-top: 4px;
                        }
                    }

                    .icon-card:nth-child(1){
                        background-color: #E34F2620;
                        box-shadow: 4px 4px 16px #E34F2610;
                        i{
                            color: #E34F26;
                        }
                    }
                    .icon-card:nth-child(2){
                        background-color: #1572B620;
                        box-shadow: 4px 4px 16px #1572B610;
                        i{
                            color: #1572B6;
                        }
                    }
                    .icon-card:nth-child(3){
                        background-color: #F7DF1E20;
                        box-shadow: 4px 4px 16px #F7DF1E10;
                        i{
                            color: #F7DF1E;
                        }
                    }
                    .icon-card:nth-child(4){
                        background-color: #7532F920;
                        box-shadow: 4px 4px 16px #7532F910;
                        i{
                            color: #7532F9;
                        }
                    }
                    .icon-card:nth-child(5){
                        background-color: #CC669920;
                        box-shadow: 4px 4px 16px #CC669910;
                        i{
                            color: #CC6699;
                        }
                    }
                    .icon-card:nth-child(6){
                        background-color: #4FC08D20;
                        box-shadow: 4px 4px 16px #4FC08D10;
                        i{
                            color: #4FC08D;
                        }
                    }
                    .icon-card:nth-child(7){
                        background-color: #4F5B9320;
                        box-shadow: 4px 4px 16px #4F5B9310;
                        i{
                            color: #4F5B93;
                        }
                    }
                    .icon-card:nth-child(8){
                        background-color: #FF2D2020;
                        box-shadow: 4px 4px 16px #FF2D2010;
                        i{
                            color: #FF2D20;
                        }
                    }
                    .icon-card:nth-child(9){
                        background-color: #4479A120;
                        box-shadow: 4px 4px 16px #4479A110;
                        i{
                            color: #4479A1;
                        }
                    }
                }
            }
    }
}

}

@media screen and ((min-width: 768px) and (max-width: 991px)) {
    .container{
        justify-content: unset;
        height: 100vh;
        padding-top: 100px;
        max-width: 1000px;

    .domenico{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
        padding-top: 40px;

            .domenico-image{
                width: 30%;
                height: 350px;
            }

            .domenico-details{
                width: 90%;
                padding: 40px 50px;
            }
    }
}
}

@media screen and ((min-width: 992px) and (max-width: 1199px)) {
    .container{

    h1{
        padding-bottom: 20px;
        margin-left: 50px;
    }

    .domenico{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;
        // padding-top: 40px;

            .domenico-image{
            width: 25%;
            height: 380px;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top;
                    border-radius: 20px;
                }

                a{
                    text-decoration: none;
                }
            }

            .domenico-details{
                width: 55%;
                height: 380px;
                padding: 20px 40px;

                .text{
                    padding: 10px;
                    font-size: .9em;
                }

                .icon{
                    padding: 0;

                    .icon-card{

                        height: 70px;
                        padding: 0 10px;

                        i{
                            font-size: 1.8em;
                        }

                        span{
                            font-size: .6em;
                            font-weight: 600;
                            padding-top: 4px;
                        }
                    }
                }
            }
    }
}
}

@keyframes reveal {
	from {
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

@keyframes imageReveal {
	from {
		transform: translateX(-50px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

@keyframes iconReveal {
	from {
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

</style>