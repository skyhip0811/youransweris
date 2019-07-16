<template>
<div class="menu_action" >

	<el-row class='menu_action_content'>
		<el-col :md=8 class="hidden-md-and-down"><div style="visibility:hidden">.</div></el-col>
	<el-col :md='8'>
	<!-- disable the like function
		<el-col :span='6'><a href='#'><div class='center'>
		<font-awesome-icon icon="heart" /><span class='action_number'>20</span>
		</div></a></el-col>
	-->
	<!-- disable the follow function
		<el-col :span='6'><a href='#'><div class='center'><font-awesome-icon icon="bookmark" /><span class='action_number'>追蹤</span></div></a></el-col>
	-->
		<el-col :span='6'><a :href="'/createchapter/'+chapterid"><div class='center'><font-awesome-icon icon="plus" /><span class='action_number'>加分支</span></div></a></el-col>
		<el-col :span='6'><a href='#'><div class='center'><font-awesome-icon icon="file-alt" /><span class='action_number'>資料</span></div></a></el-col>
	</el-col>
	</el-row>
	</el-menu>	
</div>	
	
</template>

<script>
    export default {
        props: ['chapterid'],
        data () {
            return {
               
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



.center {
  margin: auto;
  text-align: center;
}

.action_number{
	margin-left: 10px;
}
</style>