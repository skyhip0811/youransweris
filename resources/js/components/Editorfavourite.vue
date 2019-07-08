<template>
    <div class='editorfavourite'>
    <a href="#">
        <img src="/placeholder-image.jpg" />
        <br>
        <h4>{{book}}</h4>
        <p>第一作者: {{aurthor}}</p>
        <p>{{desc}}</p>
    </a>
    </div>
</template>

<script>
    export default {
        props: ['aurthor','book','desc'],
        data () {
            return {
               
            }
        }
    }
</script>
<style scoped>
.editorfavourite{
    padding: 10px;
}

a{
    color:#333;
}

</style>