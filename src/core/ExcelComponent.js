import { DOMListener } from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }

    /**
     * @return {string} returns component tamplate
     */
    toHTML() {
        return ''
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
    }
}
