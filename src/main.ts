import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from "@/router";
import { VueRecaptchaPlugin } from 'vue-recaptcha';
import './assets/fonts.css'
import './index.css'

const head = createHead()

createApp(App)
    .use(head)
    .use(router)
    .use(VueRecaptchaPlugin, {
        v2SiteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    })
    .mount('#app')
