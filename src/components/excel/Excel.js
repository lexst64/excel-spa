import { $ } from '@core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const root = $.create('div', 'excel')
        this.components = this.components.map((Component) => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            // // debug
            // if (component.name) {
            //     window['c' + component.name] = component
            // }
            $el.html(component.toHTML())
            root.append($el)
            return component
        })
        return root
    }

    deleteComponent(compName) {
        compName = compName.toLowerCase()
        this.components = this.components.filter((Comp) => {
            return Comp.name.toLowerCase() !== compName
        })
        this.render()
    }

    render() {
        this.$el.clear()
        this.$el.append(this.getRoot())
        this.components.forEach((comp) => comp.init())
    }
}