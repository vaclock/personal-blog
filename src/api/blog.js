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
        params: {
            page,
            limit,
            categoryid
        }
    });
}

export async function getBlogtype() {
    return await request.get('/api/blogtype');
}