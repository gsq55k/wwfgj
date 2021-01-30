<template>
	<div class="dvBg" style="" style="display: flex;justify-content: center;align-items: center;">
		
		<div style="width: 50rem;height: 37.5rem;display: flex;background-color: #FFFFFF;box-shadow: 0px 0px 15px #D3D3D3;border-radius: 1.25rem;">
			<div class="carLeftBg" style="flex: 1;background-position: center;height: 100%;border-radius: 1.25rem 0 0 1.25rem;">
				
			</div>
			<div style="flex: 1;">
				
				<el-row style="margin-top: 2.25rem;">
					
					<el-col :span="24" style="display: flex;align-items: center;justify-content: center;">
						<span style="font-size: 2rem;font-weight: bold;letter-spacing: 0.3125rem;">五五房管家</span>
					</el-col>
					
				</el-row>
				
				<el-row type="flex" justify="center" style="margin-top: 2.25rem;">
					
					<el-col :span="20">
						
						<el-form label-position="top">
							<el-form-item label="手机号:">
								
								<el-input></el-input>
								
							</el-form-item>
							
							<el-form-item label="验证码:">
								
								<el-input></el-input>
								
							</el-form-item>
							
							<el-form-item label="设置密码:">
								
								<el-input></el-input>
								
							</el-form-item>
							
							<el-form-item label="确认秘密:">
								
								<el-input></el-input>
								
							</el-form-item>
							
							<el-form-item>
								
								<el-button size="medium" type="warning" style="width: 100%;background-color: #FF8400;">修改密码</el-button>
								
								
							</el-form-item>
							
							<div style="font-size: 0.725rem;color: #c3c3c3;">
								<span>注册/登录即代表统一五五房管家<a href="#">《用户注册协议》</a>即<a  href="#">《隐私条款》</a>即<a  href="#">《用户支付服务协议》</a></span>
								
							</div>
								
							
							
						</el-form>
						
						
					</el-col>
					
				</el-row>
				
				
				
				
				
				
				
			</div>
			
		</div>
		
		
		
		
		
		
		
		
		
	</div>
	
</template>

<script>
</script>

<style>
	.dvBg{
		width: 100%;
		height: 100%;
		background-image: url(../assets/register_background.jpg);
		background-position: center;
		background-repeat: no-repeat;
		
	}
	.carLeftBg{
		background-image: url(../assets/register_card_background.png);
	}
	
	.cardBg{
		background-image: url(../assets/register_card_background.png);
	}
</style>
