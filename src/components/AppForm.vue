<script>
export default {
    name: 'AppForm',

    data() {
        return {
            
        }
    },
    
}
</script>

<template>
<!-- form di prova per invio di messaggi su netlify -->
<div id="my-form">
    <form name="contact" method="POST" data-netlify="true">
        <p>
            <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
            <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
            <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>

</div>
</template>

<style lang="scss" scoped>
#my-form{
    // opacity: 0;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 100px 200px;
    background-color: #f7f9fb;
    background-image: linear-gradient(62deg, #f7f9fb 0%, #fbfbff 100%);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    transition: opacity 0.5s ease, top 0.5s ease;
}

#my-form.visible{
    opacity: 1;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}
</style>