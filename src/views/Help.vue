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
							
							<div v-for="n in 4" style="line-height: 3rem;cursor: pointer;margin: 0px 0.625rem;">
								
								<span>全部</span>
								
							</div>
							
							
							
						</el-col>
						<el-col :span="9">
							
							sdf
							
						</el-col>
						
					</el-row>
					
					
					
					  <el-tabs v-model="activeName">
						<el-tab-pane name="first">
							<div slot="label" style="padding-left: 1.25rem;">全部</div>
							<all></all>
						</el-tab-pane>
					    <el-tab-pane label="常见问题" name="second"><all></all></el-tab-pane>
					    <el-tab-pane label="操作手册" name="third"><all></all></el-tab-pane>
					    <el-tab-pane label="商家分享" name="fourth"><all></all></el-tab-pane>
					  </el-tabs>

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
				activeName : "first",
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


</style>
