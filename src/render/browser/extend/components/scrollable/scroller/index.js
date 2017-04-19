'use strict'

import scrollableModule from '../scrollable'

function init (Jud) {
  const Scrollable = scrollableModule.init(Jud)
  function Scroller (data, nodeType) {
    Scrollable.call(this, data, nodeType)
  }
  const extend = Jud.utils.extend

  Scroller.prototype = Object.create(Scrollable.prototype)
  extend(Scroller.prototype, {
    create () {
      const node = Scrollable.prototype.create.call(this)
      node.classList.add('scroller-wrap')
      this.scrollElement.classList.add('scroller-element')
      return node
    }
  })

  Jud.registerComponent('scroller', Scroller)
}

export default { init }
