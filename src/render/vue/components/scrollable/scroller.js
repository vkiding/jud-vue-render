import { extractComponentStyle } from '../../core'
import { scrollable } from '../../mixins'
// import { validateStyles } from '../../validator'
import { extend } from '../../utils'
import listMixin from './list/listMixin'

export default {
  mixins: [scrollable, listMixin],
  props: {
    scrollDirection: {
      type: [String],
      default: 'vertical',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    },
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    },
    // TODO: support loadmore retry
    loadmoreretry: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass () {
      const classArray = ['jud-scroller', 'jud-scroller-wrapper', 'jud-ct']
      if (this.scrollDirection === 'horizontal') {
        classArray.push('jud-scroller-horizontal')
      }
      else {
        classArray.push('jud-scroller-vertical')
      }
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren (h) {
      const slots = this.$slots.default || []
      this._cells = slots.filter(vnode => {
        if (!vnode.tag || !vnode.componentOptions) return false
        return true
      })
      return [
        h('html:div', {
          ref: 'inner',
          staticClass: 'jud-scroller-inner jud-ct'
        }, this._cells)
      ]
    },
    scrollTo (vnode) {
      if (vnode && vnode.$el) {
        // TODO: add animation
        this.$el.scrollTop = vnode.$el.offsetTop
      }
    }
  },

  render (createElement) {
    this.judType = 'scroller'

    /* istanbul ignore next */
    // if (process.env.NODE_ENV === 'development') {
    //   validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    this._cells = this.$slots.default || []
    this.$nextTick(() => {
      this.updateLayout()
    })

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'jud-type': 'scroller' },
      on: extend(this._createEventMap(), {
        scroll: this.handleScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      }),
      staticClass: this.wrapperClass,
      staticStyle: extractComponentStyle(this)
    }, this.createChildren(createElement))
  }
}
