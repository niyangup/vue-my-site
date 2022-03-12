import VueRouter from "vue-router";
import Home from "@/views/Home/Home";
import About from "@/views/About/About";
import Message from "@/views/Message/Message";
import Project from "@/views/Project/Project";
import Blog from "@/views/Blog/Blog";

const router = new VueRouter({
    routes: [
        {name: 'Home', path: '/', component: Home},
        {name: 'About', path: '/about', component: About},
        {name: 'Message', path: '/message', component: Message},
        {name: 'Project', path: '/project', component: Project},
        {name: 'Blog', path: '/article', component: Blog},
        {name: 'CategoryBlog', path: '/article/cate/:id', component: Blog},
    ],
    mode: 'hash',
})

export default router
