import Home from '@/pages/Home'
import Blogs from '@/pages/Blogs'
import Projects from '@/pages/Projects'
import Support from "@/pages/Support"
import Contact from "@/pages/Contact"
import Publication from "@/pages/Publication"
import Skills from "@/pages/about/Skills"
import Education from "@/pages/about/Education"
import Work from "@/pages/about/Work"
import Interest from "@/pages/about/Interest"
import Award from "@/pages/about/Award"
import Certificate from "@/pages/about/Certificate"
import Quotes from "@/pages/about/quotes"
import Services from "@/pages/Services"
import Gallery from "@/pages/Gallery"

const routes  = [
    {
       path: '/',
       name: 'index',
       component: Home,
       meta: {
           title: "Muhammad Umer Farooq",
           metaTags: [
                {
                    name: 'description',
                    content: 'Muhammad Umer Farooqq portfolio website.'
                },
                {
                    name: 'og:description',
                    content: 'Muhammad Umer Farooqq portfolio website.'
                },
                {
                    name: 'keywords',
                    content: 'Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio'
                },
                {
                    name: 'og:keywords',
                    content: 'Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio'
                }
           ]
       }
    }, 
    {
        path: '/blogs',
        name: 'blogs',
        component: Blogs,
        meta: {
            title: "Blogs",
            metaTags: [
                {
                    name: 'description',
                    content: 'Here you find blogs written by Muhammad Umer Farooq.'
                },
                {
                    name: 'og:description',
                    content: 'Here you find blogs written by Muhammad Umer Farooq.'
                },
                {
                    name: 'keywords',
                    content: 'Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio,blogs,vlogs'
                },
                {
                    name: 'og:keywords',
                    content: 'Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio,blogs,vlogs'
                }
           ]
        }
    },
    {
        path: '/services',
        name: 'services',
        component: Services,
        meta: {
            title: "Services",
            metaTags: [
                {
                    name: 'description',
                    content: 'Here you find services offered by Muhammad Umer Farooq.'
                },
                {
                    name: 'og:description',
                    content: 'Here you find services offered by Muhammad Umer Farooq.'
                },
                {
                    name: 'keywords',
                    content: 'Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio,sevices'
                },
                {
                    name: 'og:keywords',
                    content: 'Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio,sevices'
                }
           ]
        }
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
        meta: {
            title: "Projects",
            metaTags: [
                {
                    name: 'description',
                    content: 'Here you find projects by Muhammad Umer Farooq.'
                },
                {
                    name: 'og:description',
                    content: 'Here you find projects by Muhammad Umer Farooq.'
                },
                {
                    name: 'keywords',
                    content: 'Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio,projects'
                },
                {
                    name: 'og:keywords',
                    content: 'Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio,projects'
                }
           ]
        }
    }, 
    {
        path: '/donate',
        name: 'donate',
        component: Support,
        meta: {
            title: "Support",
            metaTags: [
                {
                    name: 'description',
                    content: 'If you want to support Muhammad Umer Farooq, you\'re right place.'
                },
                {
                    name: 'og:description',
                    content: 'If you want to support Muhammad Umer Farooq, you\'re right place.'
                },
                {
                    name: 'keywords',
                    content: 'donate,support,Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio'
                },
                {
                    name: 'og:keywords',
                    content: 'donate,support,Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio'
                }
           ]
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
            title: "Contact",
            metaTags: [
                {
                    name: 'description',
                    content: 'You can contact to Umer from here, just fill the form.'
                },
                {
                    name: 'og:description',
                    content: 'You can contact to Umer from here, just fill the form.'
                },
                {
                    name: 'keywords',
                    content: 'contact,Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio'
                },
                {
                    name: 'og:keywords',
                    content: 'contact,Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio'
                }
           ]
        }
    }, 
    {
        path: '/skills',
        name: 'skill',
        component: Skills,
        meta: {
            title: "Skills",
            metaTags: [
                {
                    name: 'description',
                    content: 'Umer have many skills sets which can be found in this page.'
                },
                {
                    name: 'og:description',
                    content: 'Umer have many skills sets which can be found in this page.'
                },
                {
                    name: 'keywords',
                    content: 'skills,Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio'
                },
                {
                    name: 'og:keywords',
                    content: 'skills,Muhammad,Umer,Farooq,Lablnet,lablnet,Malik,portfolio'
                }
           ]
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
            title: "Work Experience"
        }
    },
    {
        path: '/interests',
        name: 'interests',
        component: Interest,
        meta: {
            title: "Interest"
        }
    },
    {
        path: '/awards',
        name: 'award',
        component: Award,
        meta: {
            title: "Award"
        }
    },
    {
        path: '/certificates',
        name: 'certificate',
        component: Certificate,
        meta: {
            title: "Certificate"
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: Home,
        meta: {
            title: "Muhammad Umer Farooq"
        }
    },
    {
        path: '/quotes',
        name: 'quotes',
        component: Quotes,
        meta: {
            title: "Quotes"
        }
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery,
        meta: {
            title: "Gallery"
        }
    }
]

export default routes;
