import Vue from "vue";

function getComponentRootDom (com, props) {
    const vm = new Vue({
        render:h=>h(com, {props})
    });
    vm.$mount();
    return vm.$el;
}

export default getComponentRootDom;