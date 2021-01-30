/**
 * 该文件为自定义文件，用来分离route中的routes内容
 */

const routes = [
  {//首页
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index'),
	children:[
		{
		  path: 'home',//默认此页
		  name: 'Home',
		  component: () => import('@/views/Home')
		},
		{
		  path: 'account',//个人中心
		  name: 'Account',
		  component: () => import('@/views/Account')
		}
	],
  },
  {
    path: '/register',//注册页面
    name: 'Register',
    component: () => import('@/views/Register')
  },
  {
    path: '/login',//登录页面
    name: 'Login',
    component:  () => import('@/views/Login')
  },
  {
    path: '/forgetpwd',//忘记密码页面
    name: 'ForgetPwd',
    component:  () => import('@/views/ForgetPwd')
  }

]

export default routes;