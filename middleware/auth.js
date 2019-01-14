import Cookies from 'universal-cookie'

export default ({ req, route, redirect }) => {
  console.log(route.path);
  // '/'または'/home'を参照された場合は認証をスキップ
  if (['/'].includes(route.path) || ['/home'].includes(route.path)) {
    return
  }
  const cookies = req ? new Cookies(req.headers.cookies) : new Cookies()
  const credential = cookies.get('credential')

  // もしcredentialが存在して、かつ、loginページにアクセスしている場合はトップページに飛ばす
  if (credential && route.path === '/login') {
    return redirect('/home')
  }
  // もしcredentialが存在せず、かつ、ログインページにアクセスしている場合はログインページに飛ばす
  if (!credential && route.path !== '/login') {
    return redirect('/login')
  }
}