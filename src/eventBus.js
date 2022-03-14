export default class EventBus {
    #listener = new Map()

    static $on(name, handler) {

        if (!this.#listener.get(name)) {
            this.#listener[name] = new Set()
        }
        this.#listener[name].add(handler)
    }

    static $off(name, handler) {
        if (this.#listener.get(name)) {
            if (this.#listener[name].has(handler)) {
                this.#listener[name].delete(handler)
            }
        }
    }


    static $emit(name, ...args) {
        if (this.#listener.get(name)) {
            for (const handle of this.#listener.get(name)) {
                handle(...args)
            }
        }
    }


}
