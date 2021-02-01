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
						<span>待处理(6)</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '3'}" @click="activeName = 3">
						<span>已完成(8)</span>
					</div>
					
					<div class="category_menu" :class="{active : activeName == '4'}" @click="activeName = 4">
						<span>关闭(0)</span>
					</div>
					
				</el-col>
			
				
			</el-row>
			
			<el-row>
				<el-col :span="24" style="padding: 0.8rem">
					<el-form :inline="true" class="demo-form-inline" size="mini">
					 <el-form-item label="选择房源信息">
					    
						<el-select style="width: 7rem;">
							<el-option>全部</el-option>
						</el-select>
						
						
					  </el-form-item>
					  
					  <el-form-item label="预约时间">
					     
							<el-date-picker
								 style="width: 12rem;"
								  type="datetimerange"
								  range-separator="至"
								  start-placeholder="开始日期"
								  end-placeholder="结束日期">
								</el-date-picker>
					  						
					  						
					   </el-form-item>
					   
					   <el-form-item label="租客联系方式">
					      
					   		<el-input style="width: 7rem;"></el-input>
					   						
					   						
					    </el-form-item>
					   
					   
					   <el-form-item label="租客信息">
					      
					   		<el-input style="width: 7rem;"></el-input>
					   						
					   						
					    </el-form-item>
						
						<el-form-item>
						   
								<el-button type="warning" class="warning" >搜索</el-button>
												
												
						 </el-form-item>
						
					</el-form>
					
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
					      label="房源">
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="房间号">
					    </el-table-column>
					    <el-table-column
					      prop="province"
					      label="预约时间">
					    </el-table-column>
					    <el-table-column
					      prop="city"
					      label="租客姓名">
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="联系方式">
					    </el-table-column>
					    <el-table-column
					      prop="zip"
					      label="描述">
					    </el-table-column>
						
						<el-table-column
						  prop="price"
						  label="维修费用">
						</el-table-column>
						
						<el-table-column
						  prop="remark"
						  label="备注">
						</el-table-column>
						
						<el-table-column
						  prop="door_date"
						  label="上门时间">
						</el-table-column>
						
						<el-table-column
						  prop="status"
						  label="处理状态">
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
				          name: '1003',
				          province: '2021-01-03',
				          city: '张三',
				          address: '18947745896',
				          zip: "门紧锁打不开",
						  price : 50.00,
						  remark : '-',
						  door_date : '2021-01-03 21:00',
						  status : '待处理'
				        }, {
				          date: '小窝青年公寓',
				          name: '1003',
				          province: '2021-01-03',
				          city: '张三',
				          address: '18947745896',
				          zip: "门紧锁打不开",
						  price : 50.00,
						  remark : '-',
						  door_date : '2021-01-03 21:00',
						  status : '待处理'
				        }, {
				          date: '小窝青年公寓',
				          name: '1003',
				          province: '2021-01-03',
				          city: '张三',
				          address: '18947745896',
				          zip: "门紧锁打不开",
						  price : 50.00,
						  remark : '-',
						  door_date : '2021-01-03 21:00',
						  status : '待处理'
				        }, {
				          date: '小窝青年公寓',
				          name: '1003',
				          province: '2021-01-03',
				          city: '张三',
				          address: '18947745896',
				          zip: "门紧锁打不开",
						  price : 50.00,
						  remark : '-',
						  door_date : '2021-01-03 21:00',
						  status : '待处理'
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
</style>
