<template>
<el-upload
  class="avatar-uploader" 

  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload"
  :name = 'name' v-bind:style="{ width: iconWidth +'px', height: iconHeight +'px' }">
  <img v-if="imageUrl" :src="imageUrl" class="avatar" v-bind:style="{ width: iconWidth +'px', height: iconHeight +'px'  }">
  <i v-else class="el-icon-plus avatar-uploader-icon" v-bind:style="{ lineHeight:iconHeight+'px',width: iconWidth +'px', height: iconHeight +'px'  }"></i>
</el-upload>
</template>
<style lang='scss'>
  $height: 100px;
  $width: 100px;
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: $width;
    height: $height;
    line-height: $height;
    text-align: center;
  }
  .avatar {
    width: $width;
    height: $height;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        imageUrl: '',
      };
    },
    props: ['name', 'width', 'height', 'iconWidth','iconHeight'],
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 1;
        const width = this.width;
        const height = this.height;
        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 1MB!');
        }

        const isSize = new Promise(function(resolve, reject) {

            let _URL = window.URL || window.webkitURL;
            let img = new Image();
            img.onload = function() {
              console.log([this.width,this.height]);
                let valid = img.width == width && img.height == height;
                valid ? resolve() : reject();
            }
            img.src = _URL.createObjectURL(file);
        }).then(() => {
            return file;
        }, (err) => {
            console.log(err)
            this.$message.error('上傳的image必须是等于'+width+'*'+height+'!');
            return Promise.reject();
        });
        return isJPG && isLt2M && isSize;
      }
    }
  }
</script>