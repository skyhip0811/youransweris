<template>
    <div class="chapter-row">
        <a :href="'/chapter/'+chapter_id">
            <el-row>
        <el-col :span="14">{{chapter }}</el-col>
        <el-col :span="6"> {{aurthor}} </el-col>
        <el-col :span="4"> {{like}} </el-col>
        </el-row>
        </a>
    </div>
</template>

<script>
    export default {
        props: ['aurthor','chapter','like','chapter_id'],
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