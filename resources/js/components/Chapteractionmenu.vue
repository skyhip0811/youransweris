<template>
<div class="menu_action" >

	<el-row class='menu_action_content'>
		<el-col :md=8 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
	<el-col :md='8'>

		<el-col :span='6' ><a @click="likechapter" href='#' ><div class='center'>

		<font-awesome-icon v-bind:class="{ liked: isLiked }"  icon="heart" /><span class='action_number'>{{likescount}}</span>

		</div></a></el-col>
		

		
		<el-col :span='6'>
		<a href="#">
		<div class='center'><font-awesome-icon icon="comment" /> 
			<span v-on:click="$emit('commentbtnclicked')" type="text">留言 ({{commentscount}}) </span> 
		</div>
		</a>
		</el-col> 
	
		<el-col :span='6'><a :href="'/createchapter/'+chapterid"><div class='center'><font-awesome-icon icon="plus" /><span class='action_number'>加分支</span></div></a></el-col>
		<el-col :span='6'>

<!-- 		<a href='#'><div class='center'><font-awesome-icon icon="file-alt" /><span class='action_number'>資料</span></div></a> -->
		<infoboxbutton :text=text ></infoboxbutton>

	</el-col>
	</el-col>
	</el-row>
	</el-menu>	
</div>	
	
</template>

<script>
    export default {
        props: ['chapterid','text', 'likes' , 'liked' , 'logined' ,'commentsnum'],
        data () {
            return {
               isLiked:this.liked == '1',
               likescount : this.likes?parseInt(this.likes):0,
               commentscount : this.commentsnum
            }
        },
        methods:{
	        likechapter(event){
		  		window.axios.get('/likechapter/'+this.chapterid).then((response)=>{
		  				
                        if(response.data.status){
                  
                        	this.isLiked = true;
                        	this.likescount+=1;
                     	}else{
                     		
                     		this.isLiked = false;
                     		this.likescount-=1;
                     	};
                         
                      })
                      .catch(function (error) {
                 		console.log(error);
                        if(error.response.status == 401){
                        	//alert("請先登入。");
                        	window.location='/register';
                    	};
                      });
		  	}
    	}
    }
</script>

<style>
.menu_action{
	width: 100%;
	position: fixed;
	height: 60px;
	background: white;
	font-size: 15px;
	padding-top:15px;
}

.menu_action_content{
	position: absolute;
	width: 100%;
}

.liked{
	color:red;
}

.center {
  margin: auto;
  text-align: center;
}

.action_number{
	margin-left: 10px;
}
</style>