<template>
	<el-row style="height: 100%;">
	
	
		<el-col :span="4" style="height: 100%;background-color: #FFFFFF;">
			
			<div style="margin-top: 1.5rem; width:100%;display: flex;align-items: center;justify-content: center;">
				
				<el-button type="warning" class="warning" style="width: 80%;">全部（137）</el-button>
				
			</div>
			
			<div style="margin-top: 1.5rem; width:100%;display: flex;align-items: center;justify-content: center;">
				
				<el-select placeholder="选择公寓模式" style="width: 80%;">
				      <el-option label="公寓一" value="公寓一"></el-option>
				      <el-option label="公寓二" value="公寓二"></el-option>
				</el-select>
				
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
						<span>全部(0)</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '2'}" @click="activeName = 2">
						<span>按表类型(6)</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '3'}" @click="activeName = 3">
						<span>按房间号(8)</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '4'}" @click="activeName = 4">
						<span>待生成账单(0)</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '4'}" @click="activeName = 4">
						<span>抄表记录(0)</span>
					</div>
					
				</el-col>
			
				
			</el-row>
			
			<el-row>
				<el-col :span="12" style="padding: 0.8rem">
					<el-button>冷水表</el-button>
					
					<el-button>热水表</el-button>
					
					<el-button>电表</el-button>
					
					<el-button>燃气表</el-button>
					
				</el-col>
				<el-col :span="12" style="display: flex;flex-direction: row;justify-content: right;align-items: center;height: 100%;">
					
					<div class="fenlei_menu active">
						<span>全部</span>
					</div>
					
					<div class="fenlei_menu">
						<span>本月已抄</span>
					</div>
					
					<div class="fenlei_menu">
						<span>本月未抄</span>
					</div>
					
					<div>
						<el-input placeholder="房源名称/房间号/租客姓名/租客手机号" >
						    <el-button type="warning" class="warning" slot="append">搜索</el-button>
						  </el-input>
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
					      label="房号">
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="设备名称">
					    </el-table-column>
					    <el-table-column
					      prop="province"
					      label="上次读数">
					    </el-table-column>
					    <el-table-column
					      prop="city"
					      label="本次读数">
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="用量">
					    </el-table-column>
					    <el-table-column
					      prop="zip"
					      label="费用总计">
					    </el-table-column>
						
						<el-table-column
						  prop="price"
						  label="抄表状态"
						  width="200"
						  >
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
				          date: '101',
				          name: '电表',
				          province: '1',
				          city: '3',
				          address: '2度',
				          zip: "2元",
						  price : "上次账单日（2020-12-18）",
						  
						  
				        }, {
				          date: '102',
				          name: '水表',
				          province: '1',
				          city: '1',
				          address: '3',
				          zip: "2度",
				           price : "上次账单日（2020-12-18）",
				          
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
