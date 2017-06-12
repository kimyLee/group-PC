
import xhr from './index'

export default {
  login: xhr.post.bind(null, '/api/user/signIn'),
  checkLogin: xhr.get.bind(null, '/api/user/checkLogin'),
  register: xhr.post.bind(null, '/api/user/signUp'),
  getuserinfo: xhr.get.bind(null, '/api/user/getUserInfo'),
  gettask: xhr.get.bind(null, '/api/task/getTask'),
  getflow: xhr.get.bind(null, '/api/task/getFlow'),
  addtask: xhr.post.bind(null, '/api/task/addTask')
}
