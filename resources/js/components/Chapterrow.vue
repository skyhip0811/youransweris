<template>
    <div class="chapter-row">
        <a href='#'>
            <el-row>
        <el-col :span="4"> 06/25 14:02 </el-col>
        <el-col :span="8"> {{ book }} </el-col>
        <el-col :span="8"> {{chapter}} </el-col>
        <el-col :span="4"> {{aurthor}} </el-col>
        </el-row>
        </a>
    </div>
</template>

<script>
    export default {
        props: ['aurthor','book','chapter'],
        data () {
            return {
               
            }
        }
    }
</script>
<style>
.chapter-row{
    margin:20px 0px;
}
</style>