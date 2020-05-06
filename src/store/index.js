import Vue from 'vue'
import Vuex from 'vuex'
import {spellModule} from './spell'
import {searchModule} from './search'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        spell : spellModule,
        search : searchModule
    }
})