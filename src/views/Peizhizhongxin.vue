<template>
	<el-row style="height: 100%;">
	
	
		<el-col :span="4" style="height: 100%;background-color: #FFFFFF;">
			
			<div style="margin-top: 1.5rem; width:100%;display: flex;align-items: center;justify-content: center;">
				
				<el-button type="warning" class="warning" style="width: 80%;">全部（137）</el-button>
				
			</div>
			
			<div style="margin-top: 1.5rem; width:100%;display: flex;align-items: center;justify-content: center;">
				
				<el-input style="width: 80%;" placeholder="搜索"></el-input>
				
			</div>
			
			<div style="color: #555;display: flex;flex-direction: column;align-items: center;">
				
				<div style="border-bottom: 1px solid #A6A9AD;width: 80%;line-height: 4rem;">
					<span>领航城5期（2）</span>
				</div>
				
				
				<div style="border-bottom: 1px solid #A6A9AD;width: 80%;line-height: 4rem;">
					<span>中熙ECO国际（1）</span>
				</div>
				
				<div style="border-bottom: 1px solid #A6A9AD;width: 80%;line-height: 4rem;">
					<span>富通城一期（4）</span>
				</div>
				
				<div style="border-bottom: 1px solid #A6A9AD;width: 80%;line-height: 4rem;">
					<span>富通城二期（2）</span>
				</div>
				
				<div style="border-bottom: 1px solid #A6A9AD;width: 80%;line-height: 4rem;">
					<span>东江月碧桂园（1）</span>
				</div>
				
				
			</div>
			
			
			
			
			
			
			
			
		</el-col>
	
		<el-col :span="20" style="height: 100%;background-color: #FFFFFF;border-left: 0.0625rem solid #CCCCCC;">
	
			
			<el-row style="height: 3rem;border-bottom: 1px solid #D3D3D3;">
				<el-col :span="24" style="display: flex;">
					
					<div class="category_menu" :class="{active : activeName == '1'}" @click="activeName = 1">
						<span>全部</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '2'}" @click="activeName = 2">
						<span>合同模板配置</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '3'}" @click="activeName = 3">
						<span>签约配置</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '4'}" @click="activeName = 4">
						<span>打印配置</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '5'}" @click="activeName = 5">
						<span>房型配置</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '6'}" @click="activeName = 6">
						<span>账单配置</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '7'}" @click="activeName = 7">
						<span>水电气价格配置</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '8'}" @click="activeName = 8">
						<span>费用配置</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '9'}" @click="activeName = 9">
						<span>审核配置</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '9'}" @click="activeName = 9">
						<span>智能设备配置</span>
					</div>
					
				</el-col>
			
				
			</el-row>
			
			<el-row>
				<el-col :span="12" style="padding: 0.8rem">
					
					
				</el-col>
				<el-col :span="12" style="display: flex;flex-direction: row;justify-content: right;align-items: center;height: 100%;">
					
					
					<div>
						
						    <el-button type="warning" class="warning" slot="append">+ 新建房型</el-button>
						 
					</div>
					
				</el-col>
				
			</el-row>
			
			<el-row>
				<el-col :span="24" style="padding: 0.8rem">
					
					
					  <el-table
					  size="mini"
					    :data="tableData"
					    border
					    style="width: 100%">
					    <el-table-column
					      prop="date"
					      label="房源信息">
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="房型名称">
					    </el-table-column>
					    <el-table-column
					      prop="province"
					      label="户型">
					    </el-table-column>
					    <el-table-column
					      prop="city"
					      label="面积">
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="付租方式">
					    </el-table-column>
					    <el-table-column
					      prop="zip"
					      label="租金">
					    </el-table-column>
						
						<el-table-column
						  label="操作"
						  width="100">
						  <template slot-scope="scope">
						    <el-button type="text" size="small">编辑</el-button>
						    <el-button type="text" size="small">删除</el-button>
						  </template>
						</el-table-column>
						
					
					  </el-table>
					
					
				</el-col>
			</el-row>
			
			
			
			
			
			
			
		</el-col>
	</el-row>
</template>

<script>
	export default{
		data(){
			return {
				activeName : 1,
				 tableData: [{
				          date: '小窝青年公寓',
				          name: '2房一厅',
				          province: '2室1厅1卫',
				          city: '50m²',
				          address: '付一压三',
				          zip: "1000.00",
						  
						  
				        }, {
				          date: '小窝青年公寓',
				          name: '2房一厅',
				          province: '2室1厅1卫',
				          city: '50m²',
				          address: '付一压三',
				          zip: "1000.00",
				          
				        }]
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
