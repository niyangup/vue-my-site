import loadingUrl from '@/assets/loading.svg'
import style from './loading.module.less'

export default {
    bind(el, binding) {
        handleLoading(el, binding.value)
    },
    update(el, binding) {
        handleLoading(el, binding.value)
    },
}

function getLoadingImg(el) {
    return el.querySelector('img[data-role=loading]')
}

function createLoadingImg() {
    const img = document.createElement('img')
    img.dataset.role = 'loading'
    img.src = loadingUrl
    img.classList.add(style.loading)
    return img
}

function handleLoading(el, flag) {
    const currentImg = getLoadingImg(el)
    if (flag) {
        if (!currentImg) {
            const img = createLoadingImg()
            el.appendChild(img)
        }
    } else {
        currentImg.remove()
    }
}
