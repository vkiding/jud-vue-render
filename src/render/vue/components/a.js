import { extractComponentStyle } from '../core'
// import { validateStyles } from '../validator'

const _css = `
.jud-a {
  text-decoration: none;
}
`

export default {
  name: 'jud-a',
  props: {
    href: String
  },
  render (createElement) {
    /* istanbul ignore next */
    // if (process.env.NODE_ENV === 'development') {
    //   validateStyles('a', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('html:a', {
      attrs: {
        'jud-type': 'a',
        href: this.href
      },
      on: this._createEventMap(),
      staticClass: 'jud-a jud-ct',
      staticStyle: extractComponentStyle(this)
    }, this._trimTextNodeChildren(this.$slots.default))
  },
  _css
}
