<template>
	<el-row style="height: 100%;">
	
	
		<el-col :span="4" style="height: 100%;background-color: #FFFFFF;">
			
			<div style="margin-top: 1.5rem; width:100%;display: flex;align-items: center;justify-content: center;">
				
				<el-button type="warning" class="warning" style="width: 80%;">添加房源</el-button>
				
			</div>
			
			<div style="margin-top: 1.5rem; width:100%;display: flex;align-items: center;justify-content: center;">
				
				<el-button type="warning" class="warning" style="width: 80%;">全部（137）</el-button>
				
			</div>
			
			
			<div style="margin-top: 1.5rem; width:100%;display: flex;align-items: center;justify-content: center;">
				
				<el-input style="width: 80%;" disabled placeholder="搜索"></el-input>
				
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
	
		<el-col :span="20" style="height: 100%;border-left: 0.0625rem solid #CCCCCC;">
	
			
			<el-row style="height: 3rem;background-color: #FFFFFF;">
				<el-col :span="24" style="display: flex;">
					
					<div class="category_menu">
						<el-button>空房(0)</el-button>
					</div>
					
					<div class="category_menu">
						<el-button>已出租(3)</el-button>
					</div>
					
					<div class="category_menu">
						<el-button>已交租待确认(3)</el-button>
					</div>
					
					
					
				</el-col>
			
				
			</el-row>
			
			<el-row>
				<el-col :span="24" style="padding: 0.8rem">
					
					<div style="border-left: 2px solid #FF8400;padding-left: 1.25rem;display: flex;flex-direction: row;align-items: center;">
						
						<div>
							<span>领航城5期</span>
						</div>
						
						<div style="margin-left: 0.625rem ;border: 0.0625rem solid #FF8400;line-height: 1.5rem;padding:0 0.3125rem;font-size: 0.9rem;color: #606266;border-radius: 0.3125rem;">
							
							大房东：张二狗
							
							<el-tag type="danger">欠 99+</el-tag>
							<el-tag type="danger">快 99+</el-tag>
							
						</div>
						
						
						
						
						
					</div>
					
					
					
				</el-col>
			</el-row>
			
			
			<div style="padding: 0.8rem;background-color: #FFFFFF;">
				<div>
					<span>2栋1单元709</span>
				</div>
				
				<div style="display: flex;margin-top: 1.25rem;">
					
					<div v-for="n in 2" style="margin-right: 1.25rem;border: 0.0625rem solid #e1e5ea;height: 8.25rem;width: 8rem ;border-radius: 0.3125rem;background-color: #79849F;display: flex;flex-direction: column;">
						
						<div style="flex: 1;">
							<el-row style="font-size: 1.5rem;padding: 0.3125rem;color: #FFFFFF;">
								<el-col :span="6">A</el-col>
								<el-col :span="18" style="text-align: right;">¥1000</el-col>
							</el-row>
							
							<el-row style="font-size: 0.6rem;padding: 0.3125rem;color: #FFFFFF;">
								<el-col :span="24">2房一厅50m²</el-col>
								
							</el-row>
							
							
							
							
							
							
						</div>
						<div style="background-color: #FFFFFF;height: 20%;font-size: 0.6rem;line-height: 1.6rem;padding: 0 0.225rem;display: flex;">
							
							<div style="flex: 1;">
								<span style="background-color: #79849F;color: #FFFFFF;padding: 0.225rem;border-radius: 0.1875rem;">空</span>
								<span> 33</span>
							</div>
							
							<div>
								<span style="background-color: #79849F;color: #FFFFFF;padding: 0.225rem;border-radius: 0.1875rem;">办理入住</span>
								
							</div>
							
							
							
						</div>
						
						
					</div>
					
					
					
				</div>
				
				
				
			</div>
			
			
			<div style="padding: 0.8rem;background-color: #FFFFFF;">
				<div>
					<span>2栋1单元709</span>
				</div>
				
				<div style="display: flex;margin-top: 1.25rem;">
					
					<div v-for="n in 2" style="margin-right: 1.25rem;border: 0.0625rem solid #e1e5ea;height: 8.25rem;width: 8rem ;border-radius: 0.3125rem;background-color: #79849F;display: flex;flex-direction: column;">
						
						<div style="flex: 1;">
							<el-row style="font-size: 1.5rem;padding: 0.3125rem;color: #FFFFFF;">
								<el-col :span="6">A</el-col>
								<el-col :span="18" style="text-align: right;">¥1000</el-col>
							</el-row>
							
							<el-row style="font-size: 0.6rem;padding: 0.3125rem;color: #FFFFFF;">
								<el-col :span="24">2房一厅50m²</el-col>
								
							</el-row>
							
						
						</div>
						<div style="background-color: #FFFFFF;height: 20%;font-size: 0.6rem;line-height: 1.6rem;padding: 0 0.225rem;display: flex;">
							
							<div style="flex: 1;">
								<span style="background-color: #79849F;color: #FFFFFF;padding: 0.225rem;border-radius: 0.1875rem;">空</span>
								<span> 33</span>
							</div>
							
							<div>
								<span style="background-color: #79849F;color: #FFFFFF;padding: 0.225rem;border-radius: 0.1875rem;">办理入住</span>
								
							</div>
							
							
							
						</div>
						
						
					</div>
					
					
					
				</div>
				
				
				
			</div>
			
			
			
			
			
			
			
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
