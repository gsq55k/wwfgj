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
			<baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
				<!--缩放-->
				<bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
				<!--定位-->
				<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
				<!--点-->
				<bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
				<!--提示信息-->
				</bm-marker>
			</baidu-map>
		</div>
		
		<el-row style="margin-top: 1rem;">
			
			<el-col :span="12">
				<label>小区名：</label>
				<el-input></el-input>
			</el-col>
			
		</el-row>
		
		<div style="line-height: 2rem;background-color: #ececec;margin-top: 1rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 本栋管家</span>
		</div>
		
		<el-row style="margin-top: 1rem;">
			
			<el-col :span="11">
				<label>管家姓名：</label>
				<el-input></el-input>
			</el-col>
			
			<el-col :span="11" :offset="1">
				<label>管家联系方式：</label>
				<el-input></el-input>
			</el-col>
			
		</el-row>
		
		<div style="line-height: 2rem;background-color: #ececec;margin-top: 1rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 水电单价</span>
		</div>
		
		<el-row style="margin-top: 1rem;">
			
			<el-col :span="11">
				<label>冷水价：</label>
				<el-input></el-input>
			</el-col>
			
			<el-col :span="11" :offset="1">
				<label>热水价：</label>
				<el-input></el-input>
			</el-col>
			
		</el-row>
		
		<el-row style="margin-top: 1rem;">
			
			<el-col :span="11">
				<label>电 价：</label>
				<el-input></el-input>
			</el-col>
			
			<el-col :span="11" :offset="1">
				<label>燃气价：</label>
				<el-input></el-input>
			</el-col>
			
		</el-row>
		
		<div style="line-height: 2rem;background-color: #ececec;margin-top: 1rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 房源照片</span>
		</div>
		
		
		
		
		<div style="line-height: 2rem;background-color: #ececec;margin-top: 1rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 公共配置</span>
		</div>
		
		<div style="line-height: 2rem;background-color: #ececec;margin-top: 1rem;">
			<span style="font-size: 1.5rem;color: #FF8400;">|</span>
			<span> 房源描述</span>
		</div>
		
		
		<div style="margin-top: 1rem;">
			<el-input type="textarea"></el-input>
		</div>
		
		<div style="text-align: center;">
			<el-button type='warning' class="warning">下一页</el-button>
		</div>
		
		
		</el-dialog>
		
		
	</div>
</template>



<script>
	
	export default{
		data(){
			return {
				tianjiafangyuandialog : false,
				map:{
					center: {lng: 104.0723660000, lat: 30.66230400000},
					zoom: 15,
					show: true,
					dragging: true
				},
			}
		},
		methods:{
			goto(page){
				console.log(123);
				
				this.$router.push({path: page})
				
				
			},
			handler ({BMap, map}) {
				let me = this;
				console.log(BMap, map)
				// 鼠标缩放
				map.enableScrollWheelZoom(true);
				// 点击事件获取经纬度
				map.addEventListener('click', function (e) {
					console.log(e.point.lng, e.point.lat)
				})
			}
		},
		mounted() {
			
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
	
	.map {
	  width: 100%;
	  height: 200px;
	}
</style>
