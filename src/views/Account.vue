<template>
	<div>
		<el-row>
			<el-col :span="24">
				
				
				<span style="font-weight: bold;color: #FF8400;">|</span> 个人信息
				
			</el-col>
		</el-row>
		
		<el-row style="background-color: #ffffff;margin-top: 0.625rem;height: 12.25rem;">
			<el-col :span="2" style="display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;">	


					<div style="width: 4rem;height:4rem;background-color: #a1a1a1;border-radius: 2rem;">
						
						
					</div>
					
					<div style="margin-top: 0.925rem;font-size: 0.7375rem;color: darkgray;">
						头像照片
					</div>
				
				
			</el-col>
			
			<el-col :span="6" style="display: flex;flex-direction: column; justify-content: center;height: 100%;line-height: 2.9375rem;">
				
				<div>
					<span style="color: darkgray;">真实姓名：</span>
					<span>张飞</span>
				</div>
				
				
				<div>
					<span style="color: darkgray;">登录账号：</span>
					<span>123445563445</span>
				</div>
				
				<div>
					<span style="color: darkgray;">注册日期：</span>
					<span>2020.10.3</span>
				</div>
				
			</el-col>
			
			<el-col :span="6" style="display: flex;flex-direction: column; justify-content: center;height: 100%;line-height: 2.9375rem;">
				
				<div>
					<span style="color: darkgray;">品牌名称：</span>
					<span>五五房管家</span>
				</div>
				
				
				<div>
					<span style="color: darkgray;">联系电话：</span>
					<span>123445563445</span>
				</div>
				
				<div>
					<span style="color: darkgray;">联系地址：</span>
					<span>广东省深圳市宝安区安顺路47号</span>
				</div>
				
			</el-col>
			
			<el-col :span="10" style="display: flex;flex-direction: column; justify-content: center;align-items: flex-end; height: 100%;line-height: 2.9375rem;padding-right: 3.125rem;">
				
				<el-button type="warning" style="width:9.25rem;" class="bg_orange text-white">修改</el-button>
				
			</el-col>
		</el-row>
		
		
		
		
		
		<el-row style="margin-top: 1.25rem;">
			<el-col :span="24">
				
				
				<span style="font-weight: bold;color: #FF8400;">|</span> 品牌信息
				
			</el-col>
		</el-row>
		
		<el-row style="background-color: #ffffff;margin-top: 0.625rem;height: 8.25rem;padding-top: 1.225rem;padding-left: 1.225rem;">
			<el-col :span="6" style="display: flex;;height: 100%;">	
		
					<span>品牌logo图</span>
					<div style="padding-left: 0.625rem;">
						<div style="width: 4rem;height:4rem;background-color: #a1a1a1;border-radius: 0.3125rem;"></div>
						<span style="color: #aaaaaa;font-size: 0.625rem;">尺寸480*480，图片格式png,小于1M</span>
					</div>
					
					
						
				
				
			</el-col>
			
			<el-col :span="6" style="display: flex;;height: 100%;">
					
					<span>品牌宣传图</span>
					<div style="padding-left: 0.625rem;">
						<div style="width: 4rem;height:4rem;background-color: #a1a1a1;border-radius: 0.3125rem;"></div>
						<span style="color: #aaaaaa;font-size: 0.625rem;">尺寸480*480，图片格式png,小于1M</span>
					</div>
					
					
						
				
				
			</el-col>
			
			<el-col :span="6" style=";height: 100%;">
					
					
					<span>品牌介绍</span>
					<br/>
					<span style="color: #aaaaaa;font-size: 0.625rem;">品牌介绍内容都是暗色调房贷</span>
					
						
				
			</el-col>
			
			<el-col :span="6" style="display: flex;flex-direction: column; justify-content: center;align-items: flex-end; height: 100%;line-height: 2.9375rem;padding-right: 3.125rem;">
				
				<el-button type="warning" style="width:9.25rem;" class="bg_orange text-white">修改</el-button>
				
			</el-col>
		</el-row>
		
		
		<el-row style="margin-top: 1.25rem;">
			<el-col :span="24">
				
				
				<span style="font-weight: bold;color: #FF8400;">|</span> 账号安全
				
			</el-col>
		</el-row>
		
		<el-row style="background-color: #ffffff;margin-top: 0.625rem;height: 8.25rem;padding-top: 1.225rem;padding-left: 1.225rem;">
			<el-col :span="6" style=";height: 100%;">	
				<el-button @click="dialogVisible=true">修改密码</el-button>
			</el-col>
		</el-row>
		
		
		
		
		
		<el-dialog
		  title="修改登录密码"
		  :visible.sync="dialogVisible"
		  width="400px"
		  center
		  >
		  <div>
			  
			<el-form :inline="true" class="demo-form-inline" label-position="top">
				
			  <el-form-item label="手机号" :rules="[{required:true}]" style="width: 100%;">
			    <el-input placeholder="请输入手机号"></el-input>
			  </el-form-item>
			  
			  <el-form-item label="验证码" :rules="[{required:true}]" style="width: 100%;">
			    <el-input placeholder=""></el-input>
			  </el-form-item>
				
				
				<el-form-item label="新密码" :rules="[{required:true}]" style="width: 100%;">
				  <el-input placeholder="请输入您的新密码"></el-input>
				</el-form-item>
				
				<el-form-item label="新密码" :rules="[{required:true}]" style="width: 100%;">
				  <el-input placeholder="请再次输入您的新密码"></el-input>
				</el-form-item>
				
			</el-form>
			  
			  
			  
			  
			  
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button type="warning" class="warning" @click="dialogVisible = false">确定修改</el-button>
		  </span>
		</el-dialog>
		
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				dialogVisible : false
			}
		}
	}
</script>

<style>
	.bg_orange{
		background-color: #FF8400;
	}
	.text-white{
		color: #ffffff;
	}
</style>
