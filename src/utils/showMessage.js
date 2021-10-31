import styles from "./showMessage.module.less";
import Icon from "@/components/Icon";
import getComponentRootDom from "./getComponentRootDom";
/**
 * 显示一个弹出框，在传入的容器中居中显示
 * @param {string} content 弹出框的内容
 * @param {string} type 弹出框的内容，只能为 "info" "success" "warn" "error"
 * @param {number} duration 弹出框显示ms数
 * @param {function} callback 弹出框消失之后指执行的回调函数
 * @param {htmlElement} container 在哪个容器中显示
 */
function showMessage({ content, type = "info", duration = 2000, callback, container = document.body } = {}) {
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon, { type });

    div.innerHTML = `<span class=${styles.icon}>${iconDom.innerHTML}</span><p>${content}</p>`
    div.className = `${styles.message} ${styles[`message-${type}`]}`;

    if (container !== document.body && getComputedStyle(container).position === 'static') {
        container.style.position = 'relative';
    };
    container.appendChild(div);

    div.offsetHeight;
    div.style.opacity = 1;
    div.style.transform = 'translate(-50%, -50%) translatey(0px)';

    setTimeout(() => {
        div.style.transform = 'translate(-50%, -50%) translatey(-50px)';
        div.style.opacity = 0;
        div.addEventListener('transitionend', () => {
            div.remove();
        }, {
            once: true
        })
        callback();
    }, duration);
}
export default showMessage;