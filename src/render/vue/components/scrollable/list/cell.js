// import { validateStyles } from '../../../validator'
import { extractComponentStyle } from '../../../core'

export default {
  render (createElement) {
    /* istanbul ignore next */
    // if (process.env.NODE_ENV === 'development') {
    //   validateStyles('cell', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('section', {
      attrs: { 'jud-type': 'cell' },
      on: this._createEventMap(),
      staticClass: 'jud-cell jud-ct',
      staticStyle: extractComponentStyle(this)
    }, this.$slots.default)
  }
}
