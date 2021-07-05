import Mock from "mockjs";

import qs from 'querystring';


Mock.mock('/api/blogtype', 'get', {
    code: 0,
    msg: "",
    // 分类总数
    "data|20": [{
        "id|+1": 1,
        name: "分类@id",
        "articleCount|100-200": 0,
    }]
})

Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (options) {
    const limit = qs.parse(options.url).limit;
    return Mock.mock({
        code: 0,
        msg: "",
        "data|200-300": {
            "total|2000-3000": 0,
            [`rows|${limit}`]: [
                {
                    "id|+1": 1,
                    title: "@ctitle",
                    description: "@cparagraph(1, 10)",
                    category: {
                        "id|+1": 1,
                        name: "分类@id"
                    },
                    "scanNumber|0-2000": 0,
                    "commentNumber|0-50": 0,
                    thumb: "@image( '300x250', '#000000', '#ffffff', '.png', random-image )",
                    createDate: +(Mock.Random.date('T'))
                }
            ]
        }
    });
});
