<template>
 <a href="#" @click='open'><div class='center'><font-awesome-icon icon="file-alt" /><span class='action_number'>資料</span></div></a>
</template>

<script>
  export default {
    props:['text'],
    methods: {
      open() {
        this.$alert(this.text,'補充資料');
      }
    }
  }
  </script>
  <style>
  .el-message-box{
    max-width: 90%;
    margin: 10px;
    width: 700px;
  }
  a{
    color :#3490dc;
  }
  .el-message-box__message{
    white-space: pre-line
  }
  </style>