<template>
	<div>
		<el-row>
			<el-col :span="24">
				
				<el-card class="box-card">
				  <div class="text item">
					  
					<el-row>
						<el-col :span="12">
							<span style="color: #999;font-size: 0.75rem">平台账号余额（元）</span>
						</el-col>
						
						<el-col :span="12" style="text-align: right;">
							<span style="color: #FF8400;font-size: 0.75rem">明细</span>
						</el-col>
						
					</el-row>
					
					<el-row>
						<el-col :span="24" style="margin-top: 0.625rem;font-size: 1.875rem;font-weight: bold;">
							1200.00
						</el-col>
					</el-row>
					
					<div style="margin-top: 1.25rem;display: flex;justify-content: space-between;">
						 <el-button type="warning" class="warning">智能招租</el-button>
						 <el-button type="warning" class="warning">提现</el-button>
						 <el-button type="warning" class="warning" @click="rechargeDialogVisible=true">充值</el-button>
					</div>
				    
				  </div>
				</el-card>
				
				<el-card class="box-card" style="margin-top: 0.9375rem;">
					<div class="text item">
		
							<div style="background-image: linear-gradient(to right,#FF9567, #FE5F4F);color: #FFFFFF;padding: 0.9375rem;border-radius: 0.5rem;">
								
								
								<el-row>
									<el-col :span="20">
										
										<div>整栋出租</div>
										<div style="font-size: 0.75rem;">整栋公寓出租，拿房好帮手</div>
										
									</el-col>
									
									<el-col :span="4">
										<i class="fa fa-bank" style="font-size: 3.125rem;opacity: 0.9;"></i>
									</el-col>
									
								</el-row>
								
							</div>
							
							<div style="padding: 0.3125rem;font-size: 0.75rem;">
								<el-row style="margin-top: 0.625rem;">
									
									<el-col :span="20">
										深证市宝安区西乡街道8层公寓转让
									</el-col>
									
									<el-col :span="4" style="color: #999999;">
											2020-12-25
									</el-col>
									
								</el-row>
								
								<el-row style="margin-top: 0.625rem;">
									
									<el-col :span="20">
										中山市横栏镇8层公寓楼出租
									</el-col>
									
									<el-col :span="4" style="color: #999999;">
											2020-12-25
									</el-col>
									
								</el-row>
								
								<el-row style="margin-top: 0.625rem;">
									
									<el-col :span="20">
										惠州市博罗县园洲镇（6层酒店公寓出租）
									</el-col>
									
									<el-col :span="4" style="color: #999999;">
											2020-12-25
									</el-col>
									
								</el-row>
								
								
								<el-row style="margin-top: 0.625rem;">
									
									<el-col :span="20">
										广州市白云区5层公寓转让
									</el-col>
									
									<el-col :span="4" style="color: #999999;">
											2020-12-25
									</el-col>
									
								</el-row>
								
							</div>
					
					</div>
				</el-card>
				
				
				<el-card class="box-card" style="margin-top: 0.9375rem;">
					<div class="text item">
		
							<div style="background-image: linear-gradient(to right,#F8A754, #FE69B3);color: #FFFFFF;padding: 0.9375rem;border-radius: 0.5rem;">
								
								
								<el-row>
									<el-col :span="20">
										
										<div>房东论坛</div>
										<div style="font-size: 0.75rem;">行业大佬经验分享，房东之家</div>
										
									</el-col>
									
									<el-col :span="4">
										<i class="fa fa-bank" style="font-size: 3.125rem;opacity: 0.9;"></i>
									</el-col>
									
								</el-row>
								
							</div>
							
							<div style="padding: 0.3125rem;font-size: 0.75rem;">
								<el-row style="margin-top: 0.625rem;">
									
									<el-col :span="20">
										深证市宝安区西乡街道8层公寓转让
									</el-col>
									
									<el-col :span="4" style="color: #999999;">
											2020-12-25
									</el-col>
									
								</el-row>
								
								<el-row style="margin-top: 0.625rem;">
									
									<el-col :span="20">
										中山市横栏镇8层公寓楼出租
									</el-col>
									
									<el-col :span="4" style="color: #999999;">
											2020-12-25
									</el-col>
									
								</el-row>
								
								<el-row style="margin-top: 0.625rem;">
									
									<el-col :span="20">
										惠州市博罗县园洲镇（6层酒店公寓出租）
									</el-col>
									
									<el-col :span="4" style="color: #999999;">
											2020-12-25
									</el-col>
									
								</el-row>
								
								
								<el-row style="margin-top: 0.625rem;">
									
									<el-col :span="20">
										广州市白云区5层公寓转让
									</el-col>
									
									<el-col :span="4" style="color: #999999;">
											2020-12-25
									</el-col>
									
								</el-row>
								
							</div>
					
					</div>
				</el-card>

			</el-col>
			
		</el-row>

		<el-dialog
		  title="五五房管家充值"
		  :visible.sync="rechargeDialogVisible"
		  width="30%"
		  center
		  >
		  
		  <el-form label-position="top" label-width="80px" >
			<el-form-item label="充值金额">
				<div  style="display: flex;flex-direction: row;">
					<el-input ></el-input> <span>元</span>
				</div>

			</el-form-item>
			<el-form-item label="支付方式">
			      <el-select placeholder="请选择支付方式" style="width: 100%;">
			        <el-option label="微信" value="微信"></el-option>
			        <el-option label="支付宝" value="支付宝"></el-option>
			      </el-select>
			</el-form-item>
			
		  </el-form>
			  
		  
		  <span slot="footer" class="dialog-footer">
		    <el-button class="warning" type="warning" @click="rechargeDialogVisible = false">前往支付</el-button>
		    
		  </span>
		</el-dialog>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				rechargeDialogVisible : false
			}
		}
	}
</script>

<style scoped="scoped">


</style>
