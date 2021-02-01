/**
 * 该文件为自定义文件，用来分离route中的routes内容
 */

const routes = [
  {//首页
    path: '/',
    name: '',
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
		},
		{
		  path: 'help',//帮助中心
		  name: '帮助中心',
		  component: () => import('@/views/Help'),
		  children:[
			  
		  ]
		},
		{
		  path: 'detail',//帮助中心详情
		  name: '详情',
		  component: () => import('@/views/HelpDetail')
		},
		{
		  path: 'repair',//报修维护
		  name: '报修维护',
		  component: () => import('@/views/Repair')
		},
		{
		  path: 'sharing',//合租模式
		  name: '合租模式',
		  component: () => import('@/views/Sharing')
		},
		{
		  path: 'short',//短租模式
		  name: '短租模式',
		  component: () => import('@/views/Short')
		},
		{
		  path: 'jizhonggongyu',//集中公寓
		  name: '集中公寓',
		  component: () => import('@/views/Jizhonggongyu')
		},
		{
		  path: 'jizhongchaobiao',//集中公寓
		  name: '集中抄表',
		  component: () => import('@/views/Jizhongchaobiao')
		},
		{
		  path: 'peizhizhongxin',//集中公寓
		  name: '配置中心',
		  component: () => import('@/views/Peizhizhongxin')
		},
		{
		  path: 'ruzhudengji',//集中公寓
		  name: '入住登记',
		  component: () => import('@/views/Ruzhudengji')
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