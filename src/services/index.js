/**
 * Created by duoyi on 2017/3/29.
 */
import axios from 'axios'

const domain = location.host.indexOf('localhost') >= 0 ? '/api' : 'http://localhost:8080'

// 统一处理
function handleAll (data) {
  if (!data.data || data.data.ret) {
    let errorCode = data.data ? (data.data.msg || '网络错误') : '网络错误'
    errorCode = typeof errorCode === 'object' ? '网络错误，请检查服务器' : errorCode
    // alert(errorCode)
    return Promise.reject(errorCode)
  }
  return Promise.resolve(data.data)
}

function get (url, query = {t: new Date().getTime()}) {
  return axios.get(domain + url, {params: query}).then(handleAll)
}
function post (url, query) {
  return axios.post(domain + url, query).then(handleAll)
}
function put (url, query) {
  return axios.put(domain + url, query).then(handleAll)
}
function del (url, query) {
  return axios({
    headers: { 'Content-Type': 'application/json' },
    method: 'delete',
    url: domain + url,
    data: query
  }).then(handleAll)
}

export default {
  get,
  post,
  put,
  del
}

