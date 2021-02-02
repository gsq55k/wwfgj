<template>
	<div style="height: 100%;">
		
		<div style="border-bottom: 2px solid #FF8400;">
			
			<div style="background-color: #FF8400;color: #FFFFFF;text-align: center;width: 6.25rem;line-height: 1.5rem;">
				房东论坛
			</div>
		</div>
		
		<div>
			
			<el-table
			
			:data="tbleData"
			style="width: 100%;"
			header-cell-style="color:#FF8400"
			:row-class-name="tableRowClassName"
			@cell-click="goDetail()"
			>
			
			<el-table-column
				prop="title"
				label="标题"
			>
			</el-table-column>
			
			<el-table-column
				prop="name"
				label="作者"
				width="120"
			>
			</el-table-column>
			
			<el-table-column
				prop="huifu"
				label="回复"
				width="100"
			>
			</el-table-column>
			
			<el-table-column
				prop="huifushijian"
				label="回复时间"
				width="150"
			>
			</el-table-column>
			
			</el-table>
			
		</div>
		
		
		
		
		
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				tbleData:[
					{
						title : '很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字',
						name : 'sdag@',
						dianji : '784',
						huifu : '265',
						huifushijian : '01-15 14:39'
					},
					{
						title : '很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字',
						name : 'sdag@',
						dianji : '784',
						huifu : '265',
						huifushijian : '01-15 14:39'
					},
					{
						title : '很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字',
						name : 'sdag@',
						dianji : '784',
						huifu : '265',
						huifushijian : '01-15 14:39'
					},
					{
						title : '很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字',
						name : 'sdag@',
						dianji : '784',
						huifu : '265',
						huifushijian : '01-15 14:39'
					},
					{
						title : '很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字',
						name : 'sdag@',
						dianji : '784',
						huifu : '265',
						huifushijian : '01-15 14:39'
					},
					{
						title : '很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字',
						name : 'sdag@',
						dianji : '784',
						huifu : '265',
						huifushijian : '01-15 14:39'
					},
					{
						title : '很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多字',
						name : 'sdag@',
						dianji : '784',
						huifu : '265',
						huifushijian : '01-15 14:39'
					},
					
				]
			}
		},
		methods:{
			tableRowClassName({row, rowIndex}) {
				if (rowIndex%2 === 0) {
				  return 'even';
				} else {
				  return '';
				}

			  },
			  goDetail()
			  {
				  this.$router.push({path:'LuntanDetail'});
			  }
			  
		}
	}
	
</script>

<style>
	  .el-table .even {
		background-color: #f0f0f0;
	  }
</style>
