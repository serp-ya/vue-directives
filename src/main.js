import Vue from 'vue';
import App from './App.vue';

Vue.directive('event', {
  bind(el, binding) {
    const { arg: eventType, value: callback } = binding;

    if (typeof callback === 'function') {
      el.addEventListener(eventType, callback);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
});