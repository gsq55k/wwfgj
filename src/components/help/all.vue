<template>
	<div style="text-align: left;padding-left: 0.625rem;display: flex;flex-direction: column;height: 100%;">
		
		<div>
			<div  v-for="n in 5" style="margin-top: 0.625rem;">
				
				<div>
					
					<label>为什么我的评价看不大是个阿萨德刚？</label>
					
				</div>
					
				<div style="color: #D3D3D3;font-size: 0.725rem;margin-top: 0.3125rem;">
					
					<span>评价正在逐步开放中，暂未开通评价查看功能</span>
					
				</div>
				
				
				
				<el-divider></el-divider>
				
				
			</div>
		</div>
		
		<div>
			<el-pagination
			  small
			  layout="prev, pager, next"
			  :total="50">
			</el-pagination>
		</div>
		


	</div>
</template>

<script>
</script>

<style>
</style>
