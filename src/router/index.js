import {createRouter, createWebHashHistory} from 'vue-router'
import GlobalFeedView from '@/views/GlobalFeedView'
import RegisterView from "@/views/RegisterView";
import LoginView from "@/views/LoginView";
import YourFeedView from "@/views/YourFeedView";
import TagFeedView from "@/views/TagFeedView";
import ArticleView from "@/views/ArticleView";
import CreateArticle from "@/views/CreateArticle";
import EditArticle from "@/views/EditArticle";
import SettingsView from "@/views/SettingsView";
import UserProfileView from "@/views/UserProfileView";

const routes = [

    {
        path: "/register",
        name: "register",
        component: RegisterView
    },
    {
        path: "/login",
        name: "login",
        component: LoginView
    },
    {
        path: '/',
        name: 'globalFeed',
        component: GlobalFeedView
    },
    {
        path: '/feed',
        name: 'yourFeed',
        component: YourFeedView
    },
    {
        path: '/tags/:slug',
        name: 'tag',
        component: TagFeedView
    },
    {
        path: '/articles/new',
        name: 'createArticle',
        component: CreateArticle
    },
    {
        path: '/articles/:slug',
        name: 'article',
        component: ArticleView
    },
    {
        path: '/articles/:slug/edit',
        name: 'editArticle',
        component: EditArticle
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsView
    },
    {
        path: '/profiles/:slug',
        name: 'userProfile',
        component: UserProfileView
    },
    {
        path: '/profiles/:slug/favorites',
        name: 'userProfileFavorites',
        component: UserProfileView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router