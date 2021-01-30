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
		}
	],
  },
  {
    path: 'register',//注册页面
    name: 'Register',
    component: () => import('@/views/Register')
  }

]

export default routes;