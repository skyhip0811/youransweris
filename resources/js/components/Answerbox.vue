<template>
<a :href="'/chapter/' + chapterid">
<el-card class="box-card answer-box">
<el-row>{{answer}}</el-row>
<el-row class='secondrow'>
<!-- disable the like function -->
<!-- 
<font-awesome-icon icon="heart"></font-awesome-icon>
<span class='love_num'>{{love_num}}</span>
-->
<span class='ansbox-aurthor'>作者: {{aurthor}}<span v-show="bookaurthor"> (第一作者)</span> </span></el-row>
</el-card>    
</a>

</template>

<script>
    export default {
        props: ['aurthor','answer','love_num','seen','chapterid','bookaurthor'],
        data () {
            return {
               
            }
        }
    }
</script>
<style>
.love_num{
    margin-left:10px;
}

.ansbox-aurthor{
    margin-left: 10px;
    
}

.secondrow{
    color:#888  ;
}

.secondrow:hover{
    text-decoration:none;
}
</style>