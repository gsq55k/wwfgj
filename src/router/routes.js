/**
 * 该文件为自定义文件，用来分离route中的routes内容
 */

const routes = [
  {//首页
    path: '/',
    name: '首页',
    component: () => import('@/views/Index'),
	children:[
		{
		  path: 'home',//默认此页
		  name: '工作台',
		  component: () => import('@/views/Home')
		},
		{
		  path: 'account',//个人中心
		  name: '个人中心',
		  component: () => import('@/views/Account')
		}
	],
  },
  {
    path: '/register',//注册页面
    name: '注册',
    component: () => import('@/views/Register')
  },
  {
    path: '/login',//登录页面
    name: '登录',
    component:  () => import('@/views/Login')
  },
  {
    path: '/forgetpwd',//忘记密码页面
    name: '忘记密码',
    component:  () => import('@/views/ForgetPwd')
  }

]

export default routes;