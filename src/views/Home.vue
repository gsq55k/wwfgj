<!-- 默认首页-工作台-->
<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="18">
				<el-row>
					<el-col :span="24">
						<home-menu></home-menu>
					</el-col>
				</el-row>
				
				<el-row :gutter="20" style="margin-top: 1.65rem;">
					<el-col :span="12">
						<el-card style="height: 15rem;">
							
							<div id="main1" style="height: 12rem;width: 100%;float: left;"></div>
							
					
							
						</el-card>
					</el-col>
					
					<el-col :span="12">
						<el-card style="height: 15rem;">
							<div id="main2" style="height: 12rem;width: 100%;float: left;"></div>
							
						</el-card>
					</el-col>
					
				</el-row>
				
				<el-row :gutter="20" style="margin-top: 1.25rem;">
					<el-col :span="12">
						<el-card style="height: 15rem;">
							<div id="main3" style="height: 12rem;width: 100%;float: left;"></div>
							
						</el-card>
					</el-col>
					
					<el-col :span="12">
						<el-card style="height: 15rem;">
							<div id="main4" style="height: 12rem;width: 100%;float: left;"></div>
							
						</el-card>
					</el-col>
					
				</el-row>
				
			</el-col>
			
			<el-col :span="6">
				<home-right></home-right>
			</el-col>
			
		</el-row>
	</div>
</template>

<script>
	
	import HomeRight from '../components/HomeRight.vue'
	import HomeMenu from '../components/HomeMenu.vue'
	
	import echarts from 'echarts'
	
	export default{
		components:{
			HomeRight,
			HomeMenu
		},
		data(){
			return {
			charts : ''
			}
		},
		methods:{
			
			initEcharts()
			{
				let charts1 = echarts.init(document.getElementById('main1'))
				let charts2 = echarts.init(document.getElementById('main2'))
				let charts3 = echarts.init(document.getElementById('main3'))
				let charts4 = echarts.init(document.getElementById('main4'))

				let option = {
				    legend: {},
				    tooltip: {},
				    dataset: {
				        source: [
				            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
				            ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
				            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
				            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
				            ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
				        ]
				    },
				    series: [{
				        type: 'pie',
				        radius: ['20%', '30%'],
				        center: ['25%', '30%'],
				        // No encode specified, by default, it is '2012'.
				    }, {
				        type: 'pie',
				        radius: ['20%', '30%'],
				        center: ['75%', '30%'],
				        encode: {
				            itemName: 'product',
				            value: '2013'
				        }
				    }, {
				        type: 'pie',
				        radius: ['20%', '30%'],
				        center: ['25%', '75%'],
				        encode: {
				            itemName: 'product',
				            value: '2014'
				        }
				    }, {
				        type: 'pie',
				        radius: ['20%', '30%'],
				        center: ['75%', '75%'],
				        encode: {
				            itemName: 'product',
				            value: '2015'
				        }
				    }]
				};
				
				charts1.setOption(option)
				charts2.setOption(option)
				charts3.setOption(option)
				charts4.setOption(option)
				
			}
			
		},
		mounted() {
			this.initEcharts();
		}
	}
</script>

<style>


</style>
