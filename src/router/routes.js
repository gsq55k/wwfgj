/**
 * 该文件为自定义文件，用来分离route中的routes内容
 */

const routes = [
  {//首页
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  }
]

export default routes;