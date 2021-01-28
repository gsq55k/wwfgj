<template>

	<div>

		<el-row>
			<el-col :span="12">
				<div class='titleBox'>
					<span>五五房管家</span>
				</div>

				<div class="kouhao">

					<span>终生免费使用房屋管理系统--全国房东都在用</span>

				</div>

			</el-col>

			<el-col :span="12">

				<el-row type="flex" class="row-bg" justify="end">
					
					<el-col :span="2"  style="height: 3.75rem;display: flex;align-items: center;">
						<div class="grid-content bg-purple">
							
							<span style="color: #606266;font-size: 0.875rem;"> <i class="el-icon-chat-dot-square el-icon--right"></i> 微聊</span>
							
						</div>
					</el-col>
					
					<el-col :span="2"  style="height: 3.75rem;display: flex;align-items: center;">
						<div class="grid-content bg-purple">
							
							<span style="color: #606266;font-size: 0.875rem;"> <i class="el-icon-bell el-icon--right"></i> 消息</span>
							
						</div>
					</el-col>
					
					<el-col :span="3"  style="height: 3.75rem;display: flex;align-items: center;">
						<div class="grid-content bg-purple">
							
							<span style="color: #606266;font-size: 0.875rem;"> <i class="el-icon-mobile-phone el-icon--right"></i> 下载手机端</span>
							
						</div>
					</el-col>
					<el-col :span="3" style="height: 3.75rem;display: flex;align-items: center;">
						<div class="grid-content">
							
							<span style="color: #606266;font-size: 0.875rem;"> <i class="el-icon-service el-icon--right"></i> 在线客服</span>
							
						</div>
					</el-col>
					<el-col :span="3" style="height: 3.75rem;display: flex;align-items: center;">
						<div class="grid-content">
							<el-dropdown>
							  <span class="el-dropdown-link">
								  <i class="el-icon-user-solid el-icon--right"></i>
							    个人中心
								<i class="el-icon-arrow-down el-icon--right"></i>
							  </span>
							  <el-dropdown-menu slot="dropdown">
							    <el-dropdown-item>菜单一</el-dropdown-item>
							    <el-dropdown-item>菜单二</el-dropdown-item>
							  </el-dropdown-menu>
							  
							</el-dropdown>
							
						</div>
					</el-col>
				</el-row>


			</el-col>


		</el-row>


	</div>

</template>

<script>
	export default {
		data: () => {
			return {
				activeIndex: "1"
			}
		},
		methods: {
			handleSelect() {

			}
		}
	}
</script>

<style>
	.titleBox {
		background-color: #FF8400;
		height: 3.75rem;
		width: 12.5rem;
		line-height: 3.75rem;
		text-align: center;
		font-size: 1.3125rem;
		color: #FFFFFF;
		font-weight: bold;
		letter-spacing: 0.325rem;
		float: left;
	}

	.kouhao {
		float: left;
		height: 3.75rem;
		line-height: 3.75rem;
		color: lightgray;
		padding-left: 0.9375rem;
	}
</style>
