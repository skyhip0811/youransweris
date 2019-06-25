<template>
    <div class="book-row">
        <a href='#'>
            <el-row>
        <el-col :span="14"> {{ book }} </el-col>
        <el-col :span="6"> {{aurthor}} </el-col>
        <el-col :span="4"> {{ticket}} </el-col>
        </el-row>
        </a>
    </div>
</template>

<script>
    export default {
        props: ['aurthor','book','ticket'],
        data () {
            return {
               
            }
        }
    }
</script>
<style>
.book-row{
    margin:20px 0px;
}
</style>