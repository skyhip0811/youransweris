<template>
<a href='#'>
<el-card class="box-card answer-box">
<el-row>{{answer}}</el-row>
<el-row class='secondrow'><font-awesome-icon icon="heart"></font-awesome-icon><span class='love_num'>{{love_num}}</span><span class='ansbox-aurthor'>{{aurthor}}</span></el-row>
</el-card>    
</a>

</template>

<script>
    export default {
        props: ['aurthor','answer','love_num','seen'],
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