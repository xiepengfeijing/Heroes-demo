import Vue from 'vue';
import VueRouter from 'vue-router';
import HeroList from '../views/heroes/list.vue';
import WeaponList from '../views/weapons/list.vue';
import EquipList from '../views/equips/list.vue';

import HeroAdd from '../views/heroes/add.vue'
//注册组件
Vue.use(VueRouter);

const router = new VueRouter({
    linkExactActiveClass:"active",
    routes:[
        {name:'home', path:'/', redirect:'/heroes'},
        { name:'heroes', path:'/heroes', component: HeroList},
        { name:'weapons', path:'/weapons', component: WeaponList},
        { name:'equips', path:'/equips', component: EquipList},
        { name:'heroadd', path:'heroes/add',component:HeroAdd}
    ]
})

export default router;