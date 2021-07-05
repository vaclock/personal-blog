import imgUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

function createImg() {
    const img = document.createElement('img');
    img.src = imgUrl;
    img.dataset.role = 'loading';
    return img;
}

/**
 * 在某个dom元素中查找有没有加载的img
 * @param {HTMLElement} el 
 */
function findImg(el) {
    return el.querySelector('img[data-role="loading"]');
}
export default function (el, binding) {
    const curImg = findImg(el);
    if (!curImg) {
        // 没有找到
        if (binding.value) {
            const img = createImg();
            img.className = styles.loading;
            el.appendChild(img);
        }
    } else {
        // 找到了
        if (binding.value === false) {
            // 只能使用寻找的curImg，不能使用创建的img,因为创建的img还未插入el;
            curImg.remove();
        }
    }
}