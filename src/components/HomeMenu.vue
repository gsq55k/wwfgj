<template>
	<div>

		
		<div style="display: flex;flex-wrap: wrap;">
		
		
			<el-card  class="box-card home-menu" style="background-color: #EF8569;">
				<span @click="goto('/ruzhudengji')">入驻登记</span>
			</el-card>
			
			<el-card  class="box-card home-menu" style="background-color: #F9AB52;">
				<span @click="tianjiafangyuandialog=true">添加房源</span>
			</el-card>
			
			<el-card  class="box-card home-menu" style="background-color: #808080;">
				<span>空置房源12间</span>
			</el-card>
			
			<el-card  class="box-card home-menu" style="background-color: #FE7DF3;">
				<span>租金确认16间</span>
			</el-card>
			
			<el-card  class="box-card home-menu" style="background-color: #9EDF23;">
				<span>微信群发88间</span>
			</el-card>
			
			<el-card  class="box-card home-menu" style="background-color: #C17DFE;">
				<span>退租登记</span>
			</el-card>
			
			<el-card  class="box-card home-menu" style="background-color: #46DAD4;">
				<span>收支记账</span>
			</el-card>
			
			<el-card  class="box-card home-menu" style="background-color: #69C3EF;">
				<span>已租房源999间</span>
			</el-card>
			
			<el-card  class="box-card home-menu" style="background-color: #23DF7B;">
				<span>即将到期33间</span>
			</el-card>
			
			<el-card  class="box-card home-menu" style="background-color: #FC6BA6;">
				<span>租金欠费22间</span>
			</el-card>
		
		</div>
		
		
		
		
		<el-dialog
		title="添加房源"
		:visible.sync="tianjiafangyuandialog"
		width="40%"
		center
		>
		
		<div>
			<el-button-group>
			  <el-button type="warning" class="warning">房源信息</el-button>
			  <el-button>房间管理</el-button>
			  <el-button>房型配置</el-button>
			  <el-button>大房东信息</el-button>
			  <el-button>微信收款码</el-button>
			</el-button-group>
		</div>
		
		<div style="margin-top: 1rem;">
			<label>地址：</label>
		</div>
		
		<div style="margin-top: 1rem;">
			
			<el-input placeholder="广东省/深圳市/宝安区/西乡街道"></el-input>
			
		</div>
		
		<div style="margin-top: 1rem;">
			
			<div id="container" style="width: 100%;height: 22.5rem;"></div>
			
		</div>
		
		</el-dialog>
		
		
	</div>
</template>
<script>
	import maps from 'qqmap'
	export default{
		data(){
			return {
				tianjiafangyuandialog : true,
				map: null,
				  getAddress: null,
				  getAddCode: null,
				  addressKeyword: "",
				  marker: ""
			}
		},
		methods:{
			goto(page){
				console.log(123);
				
				this.$router.push({path: page})
				
				
			},
			initMap() {
			           maps.init("OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77", () => {
			               console.log(maps);
						   
						   var center = new maps.LatLng(104.101940, 30.659840)
						   var map = new maps.Map(document.getElementById('container'), {
							   center : center,
							   //缩放比例
							   zoom : 10,
							   //设置俯仰角
							   pitch : 45,
							   //设置旋转角度
							   rotation : 180
						   });
						   
						   console.log(map.getCenter());
						   
						   
					   });
					   
					   
					   
					   
					   
			        }
		},
		mounted() {
			this.initMap();
		}
	}
</script>

<style scoped="scoped">
	.home-menu{
		width: 12.5rem;
		margin: 0.125rem;
		color: #FFFFFF;
		font-size: 1.0625rem;
		line-height: 1.5625rem;
	}
</style>
