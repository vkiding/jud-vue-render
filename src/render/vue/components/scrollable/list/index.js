import { extractComponentStyle } from '../../../core'
import { scrollable } from '../../../mixins'
// import { validateStyles } from '../../../validator'
import { extend } from '../../../utils'
import listMixin from './listMixin'

export default {
  name: 'list',
  mixins: [scrollable, listMixin],
  props: {
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass () {
      const classArray = ['jud-list', 'jud-list-wrapper', 'jud-ct']
      this._refresh && classArray.push('with-refresh')
      this._loading && classArray.push('with-loading')
      return classArray.join(' ')
    }
  },

  methods: {
    resetLoadmore () {
      this._availableToFireLoadmore = true
    },
    createChildren (h) {
      const slots = this.$slots.default || []
      this._cells = slots.filter(vnode => {
        if (!vnode.tag || !vnode.componentOptions) return false
        return true
      })
      return [
        h('html:div', {
          ref: 'inner',
          staticClass: 'jud-list-inner jud-ct'
        }, this._cells)
      ]
    }
  },

  render (createElement) {
    this.judType = 'list'

    /* istanbul ignore next */
    // if (process.env.NODE_ENV === 'development') {
    //   validateStyles('list', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this.$nextTick(() => {
      this.updateLayout()
    })

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'jud-type': 'list' },
      staticClass: this.wrapperClass,
      on: extend(this._createEventMap(), {
        scroll: this.handleListScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      }),
      staticStyle: extractComponentStyle(this)
    }, this.createChildren(createElement))
  }
}
