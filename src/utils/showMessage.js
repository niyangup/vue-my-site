import Vue from "vue";
import Icon from "@/components/Icon";

import style from './showMessage.module.less'

export default function (options) {
    const content = options.content || ''
    const type = options.type || 'info'
    const duration = options.duration || 2000
    const container = options.container || document.body


    const el = getComponentRootDom(Icon, {
        type
    })

    const div = document.createElement('div')
    div.innerHTML = `<span class="${style.icon}">${el.outerHTML}</span> <div>${content}</div> `

    div.classList.add(style.message)
    div.classList.add(style[`message-${type}`])

    if (getComputedStyle(container).position === 'static') {
        container.style.position = 'relative'
    }
    container.appendChild(div)
    div.clientHeight

    div.style.opacity = '1'
    div.style.transform = `translate(-50%, -50%)`
    setTimeout(() => {
        div.style.opacity = '0'
        div.style.transform = `translate(-50%, -50%) translateY(-15px)`
        div.addEventListener('transitionend', function () {
            this.remove()
            options.callback && options.callback()
        }, {once: true})
    }, duration)

}

function getComponentRootDom(component, props) {
    const vue = new Vue({
        render: h => h(component, {
            props
        })
    })
    vue.$mount()
    return vue.$el
}
