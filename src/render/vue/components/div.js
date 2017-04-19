// import { validateStyles } from '../validator'
import { extractComponentStyle } from '../core'

const _css = `
body > .jud-div {
  min-height: 100%;
}
`

export default {
  name: 'jud-div',
  render (createElement) {
    /* istanbul ignore next */
    // if (process.env.NODE_ENV === 'development') {
    //   validateStyles('div', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('html:div', {
      attrs: { 'jud-type': 'div' },
      on: this._createEventMap(),
      staticClass: 'jud-div jud-ct',
      staticStyle: extractComponentStyle(this)
    }, this._trimTextNodeChildren(this.$slots.default))
  },
  _css
}
