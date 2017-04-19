import { extractComponentStyle } from '../core'
import { createEvent } from '../utils'
// import { validateStyles } from '../validator'

const _css = `
.jud-web {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
}
`

export default {
  props: {
    src: String
  },
  methods: {
    // TODO: check cross-origin
    goBack () {
      if (this.$el) {
        this.$el.contentWindow.history.back()
      }
    },
    goForward () {
      if (this.$el) {
        this.$el.contentWindow.history.forward()
      }
    },
    reload () {
      if (this.$el) {
        this.$el.contentWindow.history.reload()
      }
    }
  },

  mounted () {
    if (this.$el) {
      this.$emit('pagestart', createEvent(this.$el, 'pagestart', { url: this.src }))
      this.$el.addEventListener('load', event => {
        this.$emit('pagefinish', createEvent(this.$el, 'pagefinish', { url: this.src }))
      })
    }
  },

  render (createElement) {
    /* istanbul ignore next */
    // if (process.env.NODE_ENV === 'development') {
    //   validateStyles('web', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    return createElement('iframe', {
      attrs: {
        'jud-type': 'web',
        src: this.src
      },
      on: this._createEventMap(['error']),
      staticClass: 'jud-web jud-el',
      staticStyle: extractComponentStyle(this)
    })
  },
  _css
}
