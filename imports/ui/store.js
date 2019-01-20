import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 20
  },
  getters: {
  count: state => {
    return state.count
  }
}
});
