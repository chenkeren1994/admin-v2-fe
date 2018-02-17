/**
 * Created by seal on 2/12/18.
 */

class MUtil {
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    if (res.status === 0) {
                        typeof resolve === 'function' && resolve(res.data, res.msg)
                    }
                    else if (res.status === 10){
                        this.doLogin()
                    }
                    else {
                        typeof reject === 'function' && reject(res.msg || res.data)
                    }
                },
                error: err => {
                    typeof reject === 'function' && reject(err.statusText)
                }
            })
        })
    }
    doLogin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
    //获取url参数
    getUrlParam(name) {
        let queryString = window.location.search.split('?')[1] || ''
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
        let result = queryString.match(reg)
        return result ? decodeURIComponent(result[2]) : null
    }
    //错误提示
    errorTips(errMsg) {
        alert(errMsg || '好像哪里不对了~')
    }
    setStorage(name, data) {
        let dataType = typeof data
        if (dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify(data))
        }
        else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0 ) {
            window.localStorage.setItem(name, data)
        }
        else {
            alert('该类型不能用于本地存储！')
        }
    }
    getStorage(name) {
        let data = window.localStorage.getItem(name)
        if(data) {
            return JSON.parse(data)
        }
        else {
            return ''
        }
    }
    removeStorage(name) {
        window.localStorage.removeItem(name)
    }
}
export default MUtil