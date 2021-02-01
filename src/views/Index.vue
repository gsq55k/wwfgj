<!-- 主页 -->
<template>

	<el-container style="height:100%;width: 100%;">
		
		
	  <el-header style="padding: 0rem;">
		  <top-nav></top-nav>
	  </el-header>
	  
	  <el-container style="padding: 0rem;">
		  
		<el-aside width="200px" style="height: 100%;">
			<left-nav></left-nav>
		</el-aside>
		
		<el-container>
		  <el-main style="background-color: #F5F7FB;">
			  <router-view></router-view>
		  </el-main>
		  <el-footer></el-footer>
		</el-container>
		
	  </el-container>
	  
	</el-container>

</template>

<script>
import TopNav from '../components/TopNav.vue'
import LeftNav from '../components/LeftNav.vue'


export default {
  name: 'Home',
  components: {
    TopNav,
	LeftNav
  }
}
</script>

<style>
	.el-aside{
		height: 100%;
	}
</style>
