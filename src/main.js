import Vue from 'vue';
import App from './App.vue';

Vue.directive('event', {
  bind(el, binding, VNode) {
    const eventType = binding.arg;
    const callbackName = binding.expression;
    const callback = VNode.context[callbackName] || callbackName;

    el.addEventListener(eventType, callback);
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
});