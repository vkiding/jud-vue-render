import { extractComponentStyle } from '../../core'
import { extend, extendKeys } from '../../utils'

const _css = `
.jud-indicator {
  position: absolute;
  z-index: 10;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-orient: horizontal;
  margin: 0;
  padding: 0;
}

.jud-indicator-item {
  display: inline-block;
  position: relative;
  border-radius: 50%;
  width: 0.266667rem;
  height: 0.266667rem;
  background-color: #BBBBBB;
}
.jud-indicator-item + .jud-indicator-item {
  margin-left: 0.133333rem;
}

.jud-indicator-item-active {
  background-color: blue;
}
`

function getIndicatorItemStyle (spec, isActive) {
  const style = {}
  style['background-color'] = spec[isActive ? 'itemSelectedColor' : 'itemColor']
  style['width'] = style['height'] = spec['itemSize']
  return style
}

function _render (context, h) {
  const children = []
  const mergedStyle = extractComponentStyle(context)
  // const mergedStyle = context._getComponentStyle(context.$vnode.data)
  // context.$vnode.data.cached = {}
  // extendKeys(context.$vnode.data.cached, mergedStyle, ['width', 'height'])
  const indicatorSpecStyle = extendKeys(
      {},
      mergedStyle,
      ['itemColor', 'itemSelectedColor', 'itemSize']
    )
  for (let i = 0; i < Number(context.count); ++i) {
    const classNames = ['jud-indicator-item jud-el']
    let isActive = false
    if (i === Number(context.active)) {
      classNames.push('jud-indicator-item-active')
      isActive = true
    }
    children.push(h('mark', {
      staticClass: classNames.join(' '),
      staticStyle: getIndicatorItemStyle(indicatorSpecStyle, isActive)
    }))
  }
  context.$nextTick(function () {
    _reLayout(this, _getVirtualRect(this, mergedStyle), _getLtbr(this, mergedStyle))
  })
  return h('nav', {
    attrs: { 'jud-type': 'indicator' },
    staticClass: 'jud-indicator jud-ct',
    staticStyle: mergedStyle
  }, children)
}

/**
 * get indicator's virtual rect (width, height), which is the .
 */
function _getVirtualRect (context, mergedStyle) {
  const ct = context._getParentRect()
  const rect = ['width', 'height'].reduce((pre, key) => {
    const msv = mergedStyle && mergedStyle[key]
    pre[key] = msv ? parseFloat(msv) : ct[key]
    return pre
  }, {})
  return rect
}

/**
 * get indicator's ltbr values (without units).
 */
function _getLtbr (context, mergedStyle) {
  return ['left', 'top', 'bottom', 'right'].reduce((pre, key) => {
    const msv = mergedStyle && mergedStyle[key]
    // undefined, null, or '0px' -> o
    pre[key] = msv && parseFloat(msv) || 0
    return pre
  }, {})
}

/**
 * get indicator's rect (width, height).
 */
function _getIndicatorRect (el) {
  let width, height
  if (el.children.length === 1) {
    width = height = window.getComputedStyle(el.children[0])
  }
  else {
    const itemComputedStyle = window.getComputedStyle(el.children[1])
    const padding = parseFloat(itemComputedStyle.marginLeft)
    height = parseFloat(itemComputedStyle.height)
    width = el.children.length * (height + padding) - padding
  }
  return { width, height }
}

/**
 * calculate and reset indicator's width, height, and ltbr.
 * @param {object} virtualRect. width and height of indicator's virtual rect box.
 * @param {object} ltbr. the user specified left, top, bottom, right pixels (without units).
 */
function _reLayout (context, virtualRect, ltbr) {
  const el = context.$el
  const rect = _getIndicatorRect(el)
  const rectWithPx = Object.keys(rect).reduce((pre, key) => {
    pre[key] = rect[key] + 'px'
    return pre
  }, {})
  extend(el.style, rectWithPx)
  const axisMap = [
    { dir: ltbr.left ? 'left' : ltbr.right ? 'right' : 'left', scale: 'width' },
    { dir: ltbr.top ? 'top' : ltbr.bottom ? 'bottom' : 'top', scale: 'height' }
  ]
  Object.keys(axisMap).forEach(key => {
    const { dir, scale } = axisMap[key]
    el.style[dir] = ltbr[dir] + virtualRect[scale] / 2 - rect[scale] / 2 + 'px'
  })
}

export default {
  name: 'indicator',
  methods: {
    show: function () {
      this.$el.style.visibility = 'visible'
    }
  },
  props: {
    count: [Number, String],
    active: [Number, String]
  },
  render (createElement) {
    return _render(this, createElement)
  },
  _css
}
