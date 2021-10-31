import request from "./request";

/**
 * 分页获取博客
 * @param {*} page  当前页码 
 * @param {*} limit 每页显示的文章数量
 * @param {*} categoryid 所属分类，-1表示全部
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await request.get('/api/blog', {
        // 地址栏中的参数可以在axios中这样配置
        params: {
            page,
            limit,
            categoryid
        }
    });
}

/**
 * 获取博客分类
 * @returns 
 */
export async function getBlogCategories() {
    return await request.get('/api/blogtype');
}

/**
 * 获取单个博客
 * @returns 
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}


/**
 * 提交评论
 * @param { nickName, content, blogId} data 
 * @returns 
 */
export async function submitComment(data) {
    return await request.post('/api/comment', data);
}

/**
 * 分页获取评论
 * @param { page, limit, blogid} params 
 * @returns 
 */
export async function getComment(params = { page: 1, limit: 10, blogid: 1 }) {
    return await request.get('/api/comment', {
        params
    })
}

