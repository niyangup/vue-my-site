import eventBus from "@/eventBus";
import debounce from "@/utils/debounce";
import defaultsGif from "@/assets/default.gif"


/**
 * 图片懒加载
 * 使用自定义指令的方式实现 v-lazy= url
 *
 * 当图片在(滑动到)视口范围内才开始加载
 *
 */


const imgs = []

function handleImg(img) {
    img.dom.src = defaultsGif
    const height = document.documentElement.clientHeight
    const rect = img.dom.getBoundingClientRect()
    const imgHeight = rect.height || 150

    //在视口范围内才加载
    if (imgHeight - rect.top > 0 || rect.top < height) {
        const tempImg = new Image()
        tempImg.onload = function () {
            img.dom.src = img.src
        }
        tempImg.src = img.src
        imgs.splice(imgs.indexOf(img), 1)
    }
}

eventBus.$on("mainScroll", debounce(function () {
    for (const img of imgs) {
        handleImg(img)
    }
}, 50))


export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value,
        }
        imgs.push(img)
        handleImg(img)
    },
    unbind(el) {
        const index = imgs.findIndex(value => value.dom === el)
        if (index !== -1) {
            imgs.splice(index, 1)
        }
    }
}
