'use strict'

const proto = {
  create () {
    const node = document.createElement('input')
    const uuid = Math.floor(10000000000000 * Math.random()) + Date.now()
    this.className = 'jud-ipt-' + uuid
    this.styleId = 'jud-style-' + uuid
    node.classList.add(this.className)
    node.setAttribute('type', 'date')
    node.type = 'date'
    // For the consistency of input component's width.
    // The date and time type of input will have a bigger width
    // when the 'box-sizing' is not set to 'border-box'
    node.classList.add('jud-element')
    return node
  }
}

const attr = {
  disabled: function (val) {
    this.node.disabled = val && val !== 'false'
  }
}

function init (Jud) {
  const Atomic = Jud.Atomic
  const extend = Jud.utils.extend

  // attrs:
  //   - value
  //   - disabled
  function Datepicker (data) {
    Atomic.call(this, data)
  }
  Datepicker.prototype = Object.create(Atomic.prototype)
  extend(Datepicker.prototype, proto)
  extend(Datepicker.prototype, { attr })

  Jud.registerComponent('datepicker', Datepicker)
}

export default { init }

