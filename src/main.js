import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Layout from "./components/Layout.vue";
import UserRegister from "./components/User/UserRegister.vue";
import UserLogin from "./components/User/UserLogin.vue";
import ConstructionUser from "./components/ContentUser/ConstructionUser.vue";
import NavbarHome from "./components/HomeComponents/NavbarHome.vue";
import FooterHome from "./components/HomeComponents/FooterHome.vue";
import Member from "./components/ContentUser/Member.vue";
import NavbarComponents from "./components/UserComponents/NavbarComponents.vue";
import UserFooter from "./components/UserComponents/UserFooter.vue";
import UserProfile from "./components/User/UserProfile.vue";
import SidebarUser from "./components/UserComponents/SidebarUser.vue";
import UserLogout from "./components/User/UserLogout.vue";
import EmployeeList from "./components/ContentHome/EmployeeList.vue";
import ButtonBack from "./components/Utilities/UtilitiesHome/ButtonBack.vue";
import SlideImage from "./components/ContentHome/SlideImage.vue";
import Example from "./components/Example.vue";
import EquipmentList from "./components/ContentHome/EquipmentList.vue";
import VehicleList from "./components/ContentHome/VehicleList.vue";
import UserRegisterCopy from "./components/User/UserRegisterCopy.vue";
import SidebarHome from "./components/HomeComponents/SidebarHome.vue";
import Home from "./components/ContentHome/Home.vue";
import Dashboard from "./components/User/Dashboard.vue";
import ConstructionList from "./components/ContentHome/ConstructionList.vue";
import './style.css'
import ProgressBar from "./components/HomeComponents/ProgressBar.vue";
import ConstructionDetail from "./components/ContentHome/ConstructionDetail.vue";
import ButtonBackConstruction from "./components/Utilities/UtilitiesHome/ButtonBackConstruction.vue";
import ProgressBarDetail from "./components/HomeComponents/ProgressBarDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return { top: 0, left: 0 }
    },
    routes: [
        {
            component: Example,
            path: "/example",
        },

        {
            component: Layout,
            children: [
                // Page for Users
                {
                    path: "/register",
                    component: UserRegister
                },
                {
                    path: "/login",
                    component: UserLogin
                },
                {
                    path: "/register-copy",
                    component: UserRegisterCopy
                },
                {
                    component: Dashboard,
                    path: "/dashboard",
                    meta: {requiresAuth: true}
                },
                {
                    component: UserProfile,
                    path: "/dashboard/profile",
                    meta: {requiresAuth: true}
                },
                {
                    component: ConstructionUser,
                    path: "/dashboard/construction",
                    meta: {requiresAuth: true}
                },
                {
                    component: Member,
                    path: "/dashboard/member",
                    meta: {requiresAuth: true}
                },

                // Page for Public
                {
                    component: Home,
                    path: "/home",
                },
                {
                    component: ConstructionList,
                    path: "/home/construction",
                },
                {
                    component: ConstructionDetail,
                    path: "/home/construction/:id",
                },
                {
                    component: EmployeeList,
                    path: "/home/employee",
                },
                {
                    component: EquipmentList,
                    path: "/home/equipment",
                },
                {
                    component: VehicleList,
                    path: "/home/vehicle",
                },
            ]
        },

        {
            component: UserLogout,
            path: "/users/logout",
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token")

    if (to.meta.requiresAuth && !token) {
        next("/login") // belum login 竊・lempar ke login
    } else if (to.path === "/login" && token) {
        next("/dashboard") // sudah login 竊・jangan balik ke login
    } else {
        next()
    }
})


// Home Components
const app = createApp(App)
app.component('BaseNavbarHome', NavbarHome)
app.component('BaseFooterHome', FooterHome)
app.component('BaseSlideImage', SlideImage)
app.component('BaseSideBarHome', SidebarHome)
app.component('BaseProgressBar', ProgressBar)
app.component('BaseProgressBarDetail', ProgressBarDetail)

// User Components
app.component('UserNavbar', NavbarComponents)
app.component('UserFooter', UserFooter)
app.component('BaseSidebar', SidebarUser)

//Utilities
app.component('BaseButtonBack', ButtonBack)
app.component('BaseButtonBackConstruction', ButtonBackConstruction)

app.use(router).mount('#app')


