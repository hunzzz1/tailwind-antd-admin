import axios from 'axios'

// import { getToken, removeToken } from '@/utils/auth'
import router from '../router'


const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // 请求超时
})

//请求拦截
service.interceptors.request.use(
    (config) => {
        // 请求前处理
        if (store.getters.token) {
            // 设置headers key
            config.headers['Authorization'] = getToken()
        }
        return config
    },
    (error) => {
        // 请求错误
        return Promise.reject(error)
    }
)

// http resp
service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            console.log(error)
            if (error.response.status === 400) {
            }
            if (error.response.status === 401) {
                console.log(error.response.status)
                store.commit('SET_TOKEN','')
                store.commit('SET_ROLES', [])
                removeToken()
                store.dispatch('user/resetToken').then(()=>{})
                router.push(('/login'))
            }
            if (error.response.status === 429) {
                console.log(error.response.status)
            }
        }
        // message.error(error.message || 'Error', 5000)
        return Promise.reject(error);
    }

);
// 响应拦截
// service.interceptors.response.use(
// 	// 获取响应状态
// 	(response) => {
// 		const res = response.data
//
// 		if (res.code !== 200) {
// 			message.error(res.message || 'Error')
//
// 			// 508: 非法token; 512: 其他用户已登录; 514: Token国企;
// 			if (res.code === 508 || res.code === 512 || res.code === 514) {
// 				// 重新登录
// 				Modal.confirm({
// 					title: '确认注销',
// 					content: '您已经注销，您可以取消以留在此页面，也可以重新登录',
// 					okText: '重新登录',
// 					cancelText: '取消',
// 					onOk() {
// 						store.dispatch('user/resetToken').then(() => {
// 							location.reload()
// 						})
// 					},
// 					onCancel() {}
// 				})
// 			}
// 			return Promise.reject(new Error(res.message || 'Error'))
// 		} else {
// 			return res
// 		}
// 	},
// 	(error) => {
// 		message.error(res.message || 'Error', 5000)
// 		return Promise.reject(error)
// 	}
// )

export function get(url, params) {
    return new Promise((resolve, reject) => {
        service.get(url, {params: params}).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        service.post(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

export function put(url, params) {
    return new Promise((resolve, reject) => {
        service.put(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

export function del(url, params) {
    return new Promise((resolve, reject) => {
        service.delete(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

export default service;
