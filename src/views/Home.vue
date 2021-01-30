<!-- 默认首页-工作台-->
<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="18">
				<el-row>
					<el-col :span="24">
						<home-menu></home-menu>
					</el-col>
				</el-row>
				
				<el-row :gutter="20" style="margin-top: 1.65rem;">
					<el-col :span="12">
						<el-card style="height: 15rem;"></el-card>
					</el-col>
					
					<el-col :span="12">
						<el-card style="height: 15rem;"></el-card>
					</el-col>
					
				</el-row>
				
				<el-row :gutter="20" style="margin-top: 1.25rem;">
					<el-col :span="12">
						<el-card style="height: 15rem;"></el-card>
					</el-col>
					
					<el-col :span="12">
						<el-card style="height: 15rem;"></el-card>
					</el-col>
					
				</el-row>
				
				
				
				
			</el-col>
			
			<el-col :span="6">
				<home-right></home-right>
			</el-col>
			
		</el-row>
	</div>
</template>

<script>
	
	import HomeRight from '../components/HomeRight.vue'
	import HomeMenu from '../components/HomeMenu.vue'
	
	export default{
		components:{
			HomeRight,
			HomeMenu
		},
		data(){
			return {
			
			}
		},
		methods:{
			
			
			
		}
	}
</script>

<style scoped="scoped">


</style>
