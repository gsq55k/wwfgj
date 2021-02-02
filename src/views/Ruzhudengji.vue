<template>
	<div style="height: 100%;">
		
		<div style="line-height: 3rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 房间信息</span>
		</div>
		
		<div style="background-color: #FFFFFF;padding: 1rem;">
			<el-select>
				<el-option>你</el-option>
			</el-select>
		</div>
		
		<div style="line-height: 3rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 合同类型</span>
		</div>
		
		<div style="background-color: #FFFFFF;padding: 1rem;">
			
			<div style="height: 5.5rem;width:28.125rem;background-image:linear-gradient(to right, #F38003, #FE9F29);border-radius: 0.3125rem;padding: 1rem;color: #FFFFFF;">
				
				<div style="display: flex;font-size: 1rem;align-items: center;">
					
					<div style="width: 1.5rem;">
						<i class="el-icon-success"></i>
					</div>
					<div>
						<span>已签纸质合同</span>
					</div>
					
				</div>
				
				
				<div style="display: flex;font-size: 1rem;align-items: center;margin-top: 1rem;">
					
					<div style="width: 1.5rem;">
						
					</div>
					<div>
						适用于已与租客签约过纸质合同场景
					</div>
					
				</div>
				
				
			</div>
			
		</div>
		
		<div style="line-height: 3rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 租客信息</span>
			<span style="color: #FF8400;"> 》添加同住人</span>
		</div>
		
		<div style="background-color: #FFFFFF;padding: 1rem;">
			
			<el-row>
				
				<el-col :span="4">
					
					<div>
						<span>租客姓名：</span>
					</div>
					<el-input></el-input>
					
				</el-col>
				
				<el-col :span="4" :offset="1">
					
					<div>
						<span>手机号码：</span>
					</div>
					<el-input></el-input>
					
				</el-col>
				
				
			</el-row>
			
			<el-row style="margin-top: 1rem;">
				
				<el-col :span="4">
					
					<div>
						<span>性别：</span>
					</div>
					<el-input></el-input>
					
				</el-col>
				
				<el-col :span="4" :offset="1">
					
					<div>
						<span>证件号码：</span>
					</div>
					<el-input></el-input>
					
				</el-col>
				
				
			</el-row>
			
			<el-row style="margin-top: 1rem;">
				
				
				<el-col :span="24">
					
					<div>
						<span style="color: #FF8400;">隐藏证件 <i class="fa fa-angle-double-up"></i></span>
					</div>
					
					
				</el-col>
				
				<el-col :span="24" style="margin-top: 1rem;display: flex;justify-content: space-between;width: 35rem;">
					
					<el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <div v-else style="border-radius: 0.3125rem;border: 1px solid #acacac;background-color: #F3F4F8;width: 10rem;height: 8rem;color: #868686;display: flex;align-items: center;justify-content: center;">
						  <div>
							  <i class="el-icon-plus avatar-uploader-icon" style="font-size: 3rem;"></i>
							  <br/>
							  <span>正面照</span>	
						  </div>
						 
									 
					  </div>
					</el-upload>
					
					
					<el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <div v-else style="border-radius: 0.3125rem;border: 1px solid #acacac;background-color: #F3F4F8;width: 10rem;height: 8rem;color: #868686;display: flex;align-items: center;justify-content: center;">
						  <div>
							  <i class="el-icon-plus avatar-uploader-icon" style="font-size: 3rem;"></i>
							  <br/>
							  <span>反面照</span>	
						  </div>
						 
									 
					  </div>
					</el-upload>
					
					<el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <div v-else style="border-radius: 0.3125rem;border: 1px solid #acacac;background-color: #F3F4F8;width: 10rem;height: 8rem;color: #868686;display: flex;align-items: center;justify-content: center;">
						  <div>
							  <i class="el-icon-plus avatar-uploader-icon" style="font-size: 3rem;"></i>
							  <br/>
							  <span>手持证件照</span>	
						  </div>
						 
									 
					  </div>
					</el-upload>
					
				</el-col>
				
				
			</el-row>
			
			
		</div>
		
		<div style="line-height: 3rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 租约信息</span>
			
		</div>
		
		<div style="background-color: #FFFFFF;padding: 1rem;">
			
			<el-row>
				
				<el-col :span="6">
					
					<div>
						<span>租约起止日期：</span>
					</div>
					<el-date-picker
					      v-model="value1"
					      type="daterange"
					      range-separator="至"
					      start-placeholder="开始日期"
					      end-placeholder="结束日期">
					    </el-date-picker>
					
				</el-col>
				
				<el-col :span="4" :offset="1">
					
					<div>
						<span>月租金：</span>
					</div>
					
					<el-input>
						
						 <template slot="append">元/月</template>
						 
					</el-input>
					
				</el-col>
				
				
			</el-row>
			
			<el-row style="margin-top: 1rem;">
				
				<el-col :span="6">
					
					<div>
						<span>付租方式：</span>
					</div>
					<div>
						押一付一
					</div>
					
				</el-col>
				
				<el-col :span="4" :offset="1">
					
					<div>
						<span>押金：</span>
					</div>
					
					<el-input>
						
						 <template slot="append">元/月</template>
						 
					</el-input>
					
				</el-col>
				
				
			</el-row>
			
			
			<el-row style="margin-top: 1rem;">
				
				<el-col :span="6">
					
					<div>
						<span>账单日：</span>
					</div>
					<el-select></el-select>
					
				</el-col>
				
				<el-col :span="4" :offset="1">
					
					<div>
						<span>选择收租日：</span>
					</div>
					
					<el-select></el-select>
					
				</el-col>
				
				
			</el-row>
			
		</div>
		
		
		
		<div style="line-height: 3rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 其他费用</span>
			<span style="color: #FF8400;"> 》添加其他费用</span>
		</div>
		
		
		<div style="background-color: #FFFFFF;padding: 1rem;">
			
			<el-row>
				
				<el-col :span="4">
					
					<el-select placeholder="首期一次性费用"></el-select>
					
				</el-col>
				
				<el-col :span="4">
					
					<el-select placeholder="门卡押金"></el-select>
					
				</el-col>
				
				<el-col :span="4">
					
					<el-input>
						
						 <template slot="append">元</template>
						 
					</el-input>
					
				</el-col>
				
				<el-col :span="4" :offset="1">
					
					<el-button type="danger">删除</el-button>
					
				</el-col>
				
			</el-row>
			
			
			<el-row style="margin-top: 0.625rem;">
				
				<el-col :span="4">
					
					<el-select placeholder="首期一次性费用"></el-select>
					
				</el-col>
				
				<el-col :span="4">
					
					<el-select placeholder="门卡押金"></el-select>
					
				</el-col>
				
				<el-col :span="4">
					
					<el-input>
						
						 <template slot="append">元</template>
						 
					</el-input>
					
				</el-col>
				
				<el-col :span="4" :offset="1">
					
					<el-button type="danger">删除</el-button>
					
				</el-col>
				
			</el-row>
		</div>
		
		
		<div style="line-height: 3rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 滞纳金</span>
			<span style="color: #FF8400;"> 》打开滞纳金</span>
		</div>
		
		<div style="background-color: #FFFFFF;padding: 1rem;">
			
			<div style="display: flex;">
				<div style="flex: 1;background-color: #ececec;">
					<div style="display: flex;width: 100%;text-align: center;line-height: 2rem;">
						<div style="background-color: #FF8400;color: #FFFFFF;flex: 1;">
							<span>按天计算</span>
						</div>
						<div style="flex: 1;">
							<span>单次计算</span>
						</div>
						
					</div>
					
					<div style="padding: 1.25rem;">
						
						<el-row>
							
							<el-col :span="4" style="line-height: 1.5rem;">
								
								<el-radio>按天</el-radio>
								
							</el-col>
							
							<el-col :span="6">
								
								<el-input></el-input>
								
							</el-col>
							<el-col :span="14" style="font-size: 0.6rem;line-height: 1.5rem;color: #a3a3a3;">
								
								<span> (滞纳金计算：每逾期一天，按0.00元加收滞纳金)</span>
								
							</el-col>
							
						</el-row>
						
						<el-row style="margin-top: 0.625rem;">
							
							<el-col :span="4" style="line-height: 1.5rem;">
								
								<el-radio>百分比</el-radio>
								
							</el-col>
							
							<el-col :span="6">
								
								<el-input></el-input>
								
							</el-col>
							<el-col :span="14" style="font-size: 0.6rem;line-height: 1.5rem;color: #a3a3a3;">
								
								<span> (滞纳金计算：每逾期一天，按当前期租赁账单总额的0.00%加收滞纳金)</span>
								
							</el-col>
							
						</el-row>
						
					</div>
					
				</div>
				
				
				<div style="flex: 1;background-color: #ececec;margin-left: 1rem;">
					<div style="display: flex;width: 100%;text-align: center;line-height: 2rem;">
						<div style="background-color: #FF8400;color: #FFFFFF;flex: 1;">
							<span>按天计算</span>
						</div>
						<div style="flex: 1;">
							<span>单次计算</span>
						</div>
						
					</div>
					
					<div style="padding: 1.25rem;">
						
						<el-row>
							
							<el-col :span="4" style="line-height: 1.5rem;">
								
								<el-radio>按天</el-radio>
								
							</el-col>
							
							<el-col :span="6">
								
								<el-input></el-input>
								
							</el-col>
							<el-col :span="14" style="font-size: 0.6rem;line-height: 1.5rem;color: #a3a3a3;">
								
								<span> (滞纳金计算：每逾期一天，按0.00元加收滞纳金)</span>
								
							</el-col>
							
						</el-row>
						
						<el-row style="margin-top: 0.625rem;">
							
							<el-col :span="4" style="line-height: 1.5rem;">
								
								<el-radio>百分比</el-radio>
								
							</el-col>
							
							<el-col :span="6">
								
								<el-input></el-input>
								
							</el-col>
							<el-col :span="14" style="font-size: 0.6rem;line-height: 1.5rem;color: #a3a3a3;">
								
								<span> (滞纳金计算：每逾期一天，按当前期租赁账单总额的0.00%加收滞纳金)</span>
								
							</el-col>
							
						</el-row>
						
					</div>
					
				</div>
				
			</div>
			
		</div>
		
		<div style="line-height: 3rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 水电费</span>
			<span style="color: #FF8400;"> 》</span>
			<span style="color: #CCCCCC;">（当前数值） 生成账单时，将自动为您扣除当前读数产生的费用</span>
		</div>
		
		<div style="background-color: #FFFFFF;padding: 1rem;">
			
			<el-row>
				
				<el-col :span="6">
					
					<span>冷水表读数</span>
					
					<div style="display: flex;">
						<div style="flex: 1;">
							<el-input>
								<template slot="append">吨</template>
							</el-input>
						</div>
						<div style="width: 6rem;margin-left: 2rem;line-height: 2rem;">
							<span>单价：5元/吨</span>
						</div>
						
					</div>
					
					
				</el-col>
				
				<el-col :span="6" :offset="1">
					
					<span>电表读数</span>
					
					<div style="display: flex;">
						<div style="flex: 1;">
							<el-input>
								<template slot="append">度</template>
							</el-input>
						</div>
						<div style="width: 7rem;margin-left: 2rem;line-height: 2rem;">
							<span>单价：1.5元/度</span>
						</div>
						
					</div>
					
					
				</el-col>
			
				
			</el-row>
			
			
		</div>
		
		
		<div style="line-height: 3rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 合同信息</span>
		</div>
		
		
		<div style="background-color: #FFFFFF;padding: 1rem;">
			
			<el-row>
				<el-col :span="4">
					<span>合同编号：</span>
					<el-input></el-input>
				</el-col>
				
			</el-row>
			
			<el-row style="margin-top: 0.625rem;">
				<el-col :span="24">
					<span>上传凭证：</span>
				</el-col>
			</el-row>
			
			<el-row>
				<el-col :span="24">
					
					
					<el-badge value="×" class="item" style="margin: 1rem;">
					 	<div style="width: 9.375rem;height: 4rem;background-color: #9f9f9f;"></div>
					</el-badge>
					
					<el-badge value="×" class="item" style="margin: 1rem;">
					 	<div style="width: 9.375rem;height: 4rem;background-color: #9f9f9f;"></div>
					</el-badge>
					
					
					<el-badge value="" class="item" style="margin: 1rem;">
					 	<div style="width: 9.375rem;height: 4rem;background-color: #d9d9d9;border:1px solid #c5c5c5;font-size: 3rem;text-align: center;line-height: 4rem;color: #A6A9AD;">+</div>
					</el-badge>
					
					
					
				</el-col>
			</el-row>
			
			<div style="color: #c7c7c7;">
				<span>上传凭证失败，最多20张</span>
			</div>
			
			
		</div>
		
		
		<div style="line-height: 3rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 备注信息</span>
		</div>
		
		<div style="background-color: #FFFFFF;padding: 1rem;">
			<el-row>
				<el-col :span="10">
					<el-input type="textarea"></el-input>
				</el-col>
			</el-row>
			
			<el-row style="margin-top: 1rem;">
				<el-col :span="24" style="text-align: center;">
					<span>保存提交后一定让租客使用微信扫描屏幕二维码来接收账单，交租信息</span>
					<br/>
					<el-button type="warning" class="warning" style="width: 8rem;height: 2.5rem;">保存并提交</el-button>
				</el-col>
			</el-row>
			
		</div>
		
		
		
		
	</div>
</template>

<script>
</script>

<style>
</style>
