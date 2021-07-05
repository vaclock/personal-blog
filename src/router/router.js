import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Message from "@/views/Message";
import Project from "@/views/Project";

export default [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'blog',
        path: '/blog',
        component: Blog
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