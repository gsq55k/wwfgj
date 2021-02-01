<template>
	<el-row style="height: 100%;">

		<el-col :span="16" :offset="2" style="height: 100%;">

			<el-row style="background-color: #FFFFFF;height: 100%;text-align: center;color: #000;">
				<el-col :span="3" style="height: 100%;">
					<el-menu
					      default-active="2"
					      class="el-menu-vertical-demo">

					      <el-menu-item :index="menu.page" v-for="menu in menu_list">
					        <span slot="title">{{menu.name}}</span>
					      </el-menu-item>


					</el-menu>

				</el-col>
				
				<el-col :span="21">
					
					<el-row style="height: 3rem;border-bottom: 1px solid #D3D3D3;">
						<el-col :span="15" style="display: flex;">
							
							<div class="category_menu" :class="{active : activeName == '1'}" @click="activeName = 1">
								<span>全部</span>
							</div>
							
							<div class="category_menu" :class="{active : activeName == '2'}" @click="activeName = 2">
								<span>常见问题</span>
							</div>
							
							<div class="category_menu" :class="{active : activeName == '3'}" @click="activeName = 3">
								<span>操作手册</span>
							</div>
							
							<div class="category_menu" :class="{active : activeName == '4'}" @click="activeName = 4">
								<span>商家分享</span>
							</div>
							
						</el-col>
						<el-col :span="5" :offset="3" style="display: flex;align-items: center;height: 100%;">
							
							 <el-input placeholder="请输入文章标题">
							    <el-button slot="append" icon="el-icon-search"></el-button>
							  </el-input>
							
							
						</el-col>
						
					</el-row>
					
					<el-row>
						
						<el-col :span="24">
							
							<all></all>
							
						</el-col>
						
					</el-row>
					

				</el-col>
				
				
			</el-row>
			
		</el-col>

	</el-row>
</template>

<script>
	import all from '../components/help/all.vue'
	export default{
		components:{
			all
		},
		data(){
			return {
				activeName : 1,
				menu_list : [
					{
						name : '热门搜索',
						page : ''
					},
					{
						name : '平台活动',
						page : ''
					},
					{
						name : '房源管理',
						page : ''
					},
					{
						name : '销售管理',
						page : ''
					},
					{
						name : '财务管理',
						page : ''
					},
					{
						name : '金融支持',
						page : ''
					},
					{
						name : '配套服务',
						page : ''
					},
					{
						name : '权限管理',
						page : ''
					},
					{
						name : '系统管理',
						page : ''
					},
					{
						name : '业内分享',
						page : ''
					},
					{
						name : '版本更新',
						page : ''
					},
				]
			}
		}
	}
</script>

<style scoped="scoped">
.el-menu-item{
	height: 3rem;
	line-height: 3rem;
}
.el-menu-item:hover{
	color: #FF8400;
}

.category_menu{
	
	line-height: 3rem;
	cursor: pointer;
	margin: 0px 0.625rem;
	color: #999999;
	box-sizing: border-box;
	
}
.category_menu:hover{
	
	border-bottom: 2px solid #FF8400;
	
}

.active{
	
	border-bottom: 2px solid #FF8400;
	color: #000000;
	
}

</style>
