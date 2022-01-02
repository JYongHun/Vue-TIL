import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'

export default createRouter({
    //Hash, Histroy mod
    // https://google.com/#/ssearch 
    // 해시모드로해야지 특정페이지에서 새로고침했을때 페이지를 찾을수 없다 표시가됨
    // 이걸 안쓰려면 Histroy 모드로 해야되는데 서버작업이 필요함
    history: createWebHashHistory(),
    
    //pages
    // https://google.com/
    routes: [
        {
            //가장 메인페이지로 이동한다
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
})