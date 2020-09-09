import App from '../App.vue'

import Home from '@/pages/Home.vue'
import Support from "@/pages/Support"
import Contact from "@/pages/Contact"
import Publication from "@/pages/Publication"
import Skills from "@/pages/about/Skills"
import Education from "@/pages/about/Education"
import Work from "@/pages/about/Work"

const routes  = [
    {
       path: '/',
       name: 'index',
       component: Home,
       meta: {
           title: "Home"
       }
    }, 
    {
        path: '/donate',
        name: 'donate',
        component: Support,
        meta: {
            title: "Support"
        }
    }, 
    {
        path: '/publication',
        name: 'publication',
        component: Publication,
        meta: {
            title: "Publication"
        }
    }, 
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {
            title: "Contact"
        }
    }, 
    {
        path: '/skills',
        name: 'skill',
        component: Skills,
        meta: {
            title: "Skills"
        }
    },
    {
        path: '/education',
        name: 'education',
        component: Education,
        meta: {
            title: "Education"
        }
    },
    {
        path: '/experince',
        name: 'experince',
        component: Work,
        meta: {
            title: "Education"
        }
    },
]

export default routes;