<template>
	<div style="background-color: #FFFFFF;padding: 1rem;height: 100%;">
		
		<el-row>
			<el-col :span="24">
				
				<el-button type="warning" class="warning">全部（12）</el-button>
				
				<el-button>集中公寓</el-button>
				
				<el-button>分散公寓</el-button>
				
				<el-button>短租公寓</el-button>
				
			</el-col>
		</el-row>
		
		
		<el-row>
			<el-col :span="24">
				
				<el-table
				:data="tableData"
				>
				
				<el-table-column
				prop="gongyumingcheng"
				label="公寓名称"
				></el-table-column>
				
				<el-table-column
				prop="weixinshoukuanerweima"
				label="微信收款二维码"
				></el-table-column>
				
				
				<el-table-column
				
				label="操作"
				>
				
				<el-button type="text">上传</el-button>
				
				<el-button type="text">删除</el-button>
				
				</el-table-column>
				
				<el-table-column
				prop="zfb"
				label="支付宝收款账号"
				></el-table-column>
				
				<el-table-column
				prop="zfbname"
				label="支付宝收款姓名"
				></el-table-column>
				
				<el-table-column
				
				label="操作"
				>
				
				<el-button type="text">编辑</el-button>
				
				<el-button type="text">确定</el-button>
				</el-table-column>
				
				</el-table>
				
			</el-col>
			
			
		</el-row>
		
		<div style="line-height: 3rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 备注信息</span>
		</div>
		
		<div style="color: #8a8a8a;">
			
			<p>1.使用范围</p>
			
			<p>通过公众号微交租发送账单时，会同时将微信收款码发送给租客，租客可以通过识别二维码支付房租。支付宝是租客采用直接转账)</p>
			
			<p>2.收款码上传要求</p>
			
			<p>收款码应该完整，无残缺;</p>
		</div>
		
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				activeName : 1,
				 tableData: [{
				          gongyumingcheng: '青年公寓',
				          weixinshoukuanerweima: '',
				          zfb: '15798574587',
				          zfbname: '张胜男'
						  
						  
				        },{
				          gongyumingcheng: '青年公寓',
				          weixinshoukuanerweima: '',
				          zfb: '15798574587',
				          zfbname: '张胜男'
						  
						  
				        },{
				          gongyumingcheng: '青年公寓',
				          weixinshoukuanerweima: '',
				          zfb: '15798574587',
				          zfbname: '张胜男'
						  
						  
				        },{
				          gongyumingcheng: '青年公寓',
				          weixinshoukuanerweima: '',
				          zfb: '15798574587',
				          zfbname: '张胜男'
						  
						  
				        },]
			}
		}
	}
</script>

<style>
	
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
	
	.fenlei_menu{
		text-align: center;
		margin: 0px 1.25rem;
		line-height: 2.6rem;
		box-sizing: border-box;
		margin-top: 0.325rem;
	}
	
	.fenlei_menu:hover{
		
		border-bottom: 2px solid #FF8400;
		
	}
	.active{
		
		border-bottom: 2px solid #FF8400;
		
	}
	
</style>
