import request from "./request";

async function getBanners() {
    // 将得到的响应数据作为状态数据传递给该函数返回的Promise对象
    const resp = await request.get('/api')
    return resp;
}

export default getBanners;