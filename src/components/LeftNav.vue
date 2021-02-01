<template>

		<el-menu
		      default-active="1"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
			  
		      @close="handleClose">
			  
		      <el-menu-item :index="menu.id" v-for="menu in menu_list" @click="goto(menu.page)" >
					  <i :class="menu.icon"></i> <span slot="title">{{menu.name}}</span>
		      </el-menu-item>

		</el-menu>
		

</template>

<script>
	export default {
		data(){
			return {
				menu_list : [
					{
						id : '1',
						icon : 'fa fa-home',
						name : '工作台',
						page : '/home'
					},
					{
						id : '2',
						icon : 'fa fa-building',
						name : '集中公寓',
						page : '/jizhonggongyu'
					},
					{
						id : '3',
						icon : 'fa fa-building',
						name : '分散公寓'
					},
					{
						id : '4',
						icon : 'fa fa-building',
						name : '短租模式',
						page : '/short'
					},
					{
						id : '5',
						icon : 'fa fa-building',
						name : '合租模式',
						page : '/sharing'
					},
					{
						id : '6',
						icon : 'fa fa-building',
						name : '工商地产'
					},
					{
						id : '7',
						icon : 'fa fa-building',
						name : '员工管理'
					},
					{
						id : '8',
						icon : 'fa fa-building',
						name : '集中抄表',
						page : '/jizhongchaobiao'
					},
					{
						id : '9',
						icon : 'fa fa-building',
						name : '设备管理',
						page : '/ruzhudegnji'
					},
					{
						id : '10',
						icon : 'fa fa-building',
						name : '配置中心',
						page : '/peizhizhongxin'
					},
					{
						id : '11',
						icon : 'fa fa-building',
						name : '报修维护',
						page : 'repair'
					},
					{
						id : '12',
						icon : 'fa fa-building',
						name : '营收账目'
					},
					{
						id : '13',
						icon : 'fa fa-building',
						name : '收款账号'
					},
					{
						id : '14',
						icon : 'fa fa-building',
						name : '整栋招租'
					},
					{
						id : '15',
						icon : 'fa fa-building',
						name : '智能招租'
					},
					{
						id : '16',
						icon : 'fa fa-building',
						name : '邀请分佣'
					}
				]
			}
		},
		methods:{
			handleOpen(){
				
			},
			handleClose()
			{
				
			},
			goto(route_path)
			{
				this.$router.push({path:route_path});
			}
			
			
		}
	}
</script>

<style>
.el-menu{
	height: 100%;
}
.el-menu-item{
	height: 2.1875rem;
	line-height: 2.1875rem;
}
</style>
