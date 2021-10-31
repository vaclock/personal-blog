import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Detail from "@/views/Blog/components/Detail";

export default [{
    name: 'home',
    path: '/',
    component: Home
},
{
    name: 'article',
    path: '/article',
    component: Blog
},
{
    name: 'categoryArticle',
    path: '/article/cate/:categoryId',
    component: Blog
},
{
    name: 'blogDetail',
    path:'/article/:blogId',
    component: Detail
},
{
    name: 'about',
    path: '/about',
    component: About
},
{
    name: 'message',
    path: '/message',
    component: Message
},
{
    name: 'project',
    path: '/project',
    component: Project
}
]