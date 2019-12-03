<template>
    <div class='editorfavourite'>
    <a :href='link'>
        <div :style="'background-repeat: no-repeat;background-size: cover;background-position: center;width: 100%;padding-bottom: 75%;background-image: url(/storage/'+image+');'"></div>
<!--         <img :src="'/storage/'+image" /> -->
        <br>
        <h4>{{book}}</h4>
        <p>第一作者: {{aurthor}}</p>
        <p>{{desc}}</p>
    </a>
    </div>
</template>

<script>
    export default {
        props: ['aurthor','book','desc', 'link','image'],
        data () {
            return {
               
            }
        }
    }
</script>
<style scoped>
.editorfavourite{
    padding: 10px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #eee;
}

a{
    color:#333;
}

</style>