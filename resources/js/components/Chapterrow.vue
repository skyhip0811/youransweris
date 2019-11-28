<template>
    <div class="chapter-row">

            <el-row>
        <!-- <el-col :span="3"> {{updatedat}} </el-col> -->
        <el-col :span="6"><a :href="'/book/'+book_id"> {{ book }} </a></el-col>
        <el-col :span="7"><a :href="'/chapter/'+chapter_id"> {{chapter}}</a> </el-col>

        <el-col v-if="previous_chapter_id" :span="7"><a :href="'/chapter/'+previous_chapter_id"> {{previouschapter}}</a>  </el-col>
        <el-col v-else="previous_chapter_id" :span="7">{{previouschapter}} </el-col>
        <el-col :span="4" style="word-wrap: break-word;"> {{aurthor}} </el-col>
        </el-row>
     
    </div>
</template>

<script>
    export default {
        props: ['aurthor','book','chapter', 'updatedat','previouschapter','book_id', 'chapter_id','previous_chapter_id'],
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