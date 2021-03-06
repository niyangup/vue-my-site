import VueRouter from "vue-router";
import Home from "@/views/Home/Home";
import About from "@/views/About/About";
import Message from "@/views/Message/Message";
import Project from "@/views/Project/Project";
import Blog from "@/views/Blog/Blog";
import BlogDetail from "@/views/Blog/BlogDetail";

const router = new VueRouter({
    routes: [
        {name: 'Home', path: '/', component: Home},
        {name: 'About', path: '/about', component: About},
        {name: 'Message', path: '/message', component: Message},
        {name: 'Project', path: '/project', component: Project},
        {name: 'Blog', path: '/article', component: Blog},
        {name: 'CategoryBlog', path: '/article/cate/:id', component: Blog},
        {name: 'BlogDetail', path: '/article/:id', component: BlogDetail},
    ],
    mode: 'history',
})

export default router
