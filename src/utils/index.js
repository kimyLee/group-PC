/**
 * Created by kimmy on 2017/6/11.
 */
export default {
  getRoute (route) {
    // 路由对象默认只读不能修改， 此方法用于获取复制路由对象
    let router = Object.assign({}, route)
    return {
      path: router.path,
      name: router.name,
      query: router.query,
      params: router.params
    }
  }
}
