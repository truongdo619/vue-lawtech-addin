import Vue from 'vue'
import Router from 'vue-router'
import CurSpell from '../views/spell/CurSpell'
import FullSpell from '../views/spell/FullSpell'
import HomeSpell from '../views/spell/Home'
import HomeSearch from '../views/search/Home'
import SearchDetail from '../views/search/Detail'
import SearchList from '../views/search/List'
import HomeMention from '../views/mention/Home'
import MentionList from '../views/mention/List'
import HomeTemplate from '../views/template/index'
import TemplateCreator from '../views/template_creator/index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/v2/spell/home',
            name: 'HomeSpell',
            component: HomeSpell
        },
        {
            path: '/v2/spell/curlist',
            name: 'CurSpell',
            component: CurSpell
        },
        {
            path: '/v2/spell/fulllist',
            name: 'FullSpell',
            component: FullSpell
        },
        {
            path: '/v2/search/home',
            name: 'HomeSearch',
            component: HomeSearch
        },
        {
            path: '/v2/search/list',
            name: 'SearchList',
            component: SearchList
        },
        {
            path: '/v2/search/detail',
            name: 'SearchDetail',
            component: SearchDetail
        },
        {
            path: '/v2/mention/home',
            name: 'HomeMention',
            component: HomeMention
        },
        {
            path: '/v2/mention/list',
            name: 'MentionList',
            component: MentionList
        },
        {
            path: '/v2/template/home',
            name: 'HomeTemplate',
            component: HomeTemplate
        },
        {
            path: '/v2/template/creator',
            name: 'TemplateCreator',
            component: TemplateCreator
        }
    ]
})