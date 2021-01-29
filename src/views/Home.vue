<!-- 默认首页-工作台-->
<template>
	<div>
		<el-row>
			<el-col :span="18">

				<div style="display: flex;flex-wrap: wrap;">

					<el-card class="box-card home-menu" v-for="menu in menu_list" :style="{background: '#' + menu.color}">
						<span>{{menu.name}}</span>
					</el-card>

				</div>
				
				<div>
					sdfsdfsdf
					
					
					
				</div>

			</el-col>
			
			<el-col :span="6">
				
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
								 <el-button type="warning" class="warning">智能照片</el-button>
								 <el-button type="warning" class="warning">充值</el-button>
								 <el-button type="warning" class="warning">提现</el-button>
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

			</el-col>
			
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				menu_list :[
					{
						name : "入驻登记",
						color : 'EF8569',
					},
					{
						name : "添加房源",
						color : 'F9AB52',
					},
					{
						name : "空置房源12间",
						color : '808080',
					},
					{
						name : "租金确认16间",
						color : 'FE7DF3',
					},
					{
						name : "微信群发88间",
						color : '9EDF23',
					},
					{
						name : "退租登记",
						color : 'C17DFE',
					},
					{
						name : "收支记账",
						color : '46DAD4',
					},
					{
						name : "已租房源999间",
						color : '69C3EF',
					},
					{
						name : "即将到期33间",
						color : '23DF7B',
					},
					{
						name : "租金欠费22间",
						color : 'FC6BA6',
					},
				]
			}
		},
		methods:{
			
			
			
		}
	}
</script>

<style scoped="scoped">
	.el-col{
		/* background-color: #82848A; */
	}
	.home-menu{
		width: 12.5rem;
		margin: 0.125rem;
		color: #FFFFFF;
		font-size: 1.0625rem;
		line-height: 1.5625rem;
	}
	.warning{
		background-color: #FF8400;
	}
</style>
