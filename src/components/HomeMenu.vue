<template>
	<div>

		
		<div style="display: flex;flex-wrap: wrap;">
		
			<el-card  class="box-card home-menu" v-for="menu in menu_list" :style="{background: '#' + menu.color}">
				<span @click="goto(menu.page)">{{menu.name}}</span>
			</el-card>
		
		</div>
		
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
						page : '/ruzhudengji'
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
			goto(page){
				console.log(123);
				
				this.$router.replace({path: page})
				
				
			}
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
