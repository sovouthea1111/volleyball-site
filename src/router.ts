import {createRouter, createWebHistory} from 'vue-router';
import HomeSection from "@/pages/HomeSection.vue";
import ContactSection from "@/pages/ContactSection.vue";
import AboutUs from './pages/AboutUs.vue';
import MatchSection from './pages/MatchSection.vue';
import TeamSection from "@/pages/TeamSection.vue";
import TrainingSection from "@/pages/TrainingSection.vue";


const routes = [
    {
        path: '/#',
        name: 'Home',
        component: HomeSection,
        meta: {
            title: 'Home Page',
        },
    },
    {
        path: '/#about-us',
        name: '',
        component: AboutUs,
        meta: {
            title: 'About Page',
        },
    },
    {
        path: '/#match',
        name: 'Match',
        component: MatchSection,
        meta: {
            title: 'Match Page',
        },
    },
    {
        path: '/#team',
        name: 'Team',
        component: TeamSection,
        meta: {
            title: 'Project Page',
        },
    },
    {
        path: '/#training',
        name: 'Training',
        component: TrainingSection,
        meta: {
            title: 'Project Page',
        },
    },
    {
        path: '/#contact-us',
        name: 'ContactUs',
        component: ContactSection,
        meta: {
            title: 'ContactUs Page',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {top: 0};
        }
    },
});

router.beforeEach((to, from, next) => {
    const defaultTitle = 'My App';
    const title = to.meta?.title;
    if (typeof title === 'string') {
        document.title = title;
    } else {
        document.title = defaultTitle;
    }
    next();
});

export default router;
