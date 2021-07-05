import axios from "axios";

import showMessage from "../utils/showMessage";

const ins = axios.create();

/**
 * axios的拦截器
 */
ins.interceptors.response.use(function (resp) {
    // 如果返回的数据响应码是错误的，返回数据为null
    if(resp.data.code !== 0) {
        showMessage({
            content:resp.data.msg,
            type:'error'
        })
        return null;
    }
    return resp.data.data;
})

export default ins;