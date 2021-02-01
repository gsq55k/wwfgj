<template>
	<el-row style="height: 100%;">

		<el-col :span="16" :offset="2" style="height: 100%;">

			<el-row style="background-color: #FFFFFF;height: 100%;color: #000;">
				<el-col :span="18" style="height: 100%;padding: 1rem;">
				
					<el-row>
						
						<el-col :span="24">
							
							<div>房东利器对接蜂电智能表完成</div>
							
							<div style="color: #A6A9AD;font-size: 0.75rem;margin-top: 0.425rem;">2018-03-07 10:08:23</div>
							
						</el-col>
						
					</el-row>
					
					<el-divider></el-divider>
					
					<el-row>
						<el-col :span="24">
							
							这里是一大片文章这里是一大片文章这里是一大片文章这里是一大片文章这里是一大片文章这里是一大片文章这里是一大片文章这里是一大片文章这里是一大片文章这里是一大片文章这里是一大片文章
						</el-col>
						
					</el-row>

				</el-col>
				
				<el-col :span="6" style="height: 100%;padding: 1rem;">
				
					<div style="margin-bottom: 1.25rem;">
						热门搜索
					</div>
					
					<div v-for="n in 4">
						
						<div style="display: flex;">
						
							<div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
								为什么我看不见评价而你却看得到
							</div>
							<div style="margin-left: 0.3125rem;">
								<el-tag type="warning">标签四</el-tag>
							</div>
						</div>
						
						<div style="height: 4.25rem;overflow: hidden;text-overflow:ellipsis;margin-top: 0.3125rem;color: #A6A9AD;font-size: 0.8rem;">
							简单的内容撒刚按个按施工队阿萨德刚阿萨德刚阿萨德刚三哥阿三哥问题为提问题为为其他委屈提取物有去企业确认二
							
							
						</div>
						
						<el-divider>
							
						</el-divider>
						
					</div>
					
					<div style="text-align: center;">
						
						<el-button>查看更多</el-button>
						
					</div>
					
					
				
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
