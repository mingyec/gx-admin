import axios from 'axios'

var instance = axios.create({
    methods: 'post',
    headers: {
        'X-Custom-Headers': 'foobar'
    },
    timeout: 5000
})

export default {
    //登录
    login(data) {
        return axios.get('/api/login', {
            params: data
        })
    },
    //获取用户列表
    getCompanyList(config) {
        return axios.get('/api/companyList')
    },
    //新增客户
    addNewUsername(config) {
        return axios.post('/api/newUsername', {
            params: config
        })
    }
}