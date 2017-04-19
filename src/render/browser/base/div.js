'use strict'

function init (Jud) {
  const Component = Jud.Component

  function Div (data, nodeType) {
    Component.call(this, data, nodeType)
    this.node.classList.add('jud-container')
  }
  Div.prototype = Object.create(Component.prototype)

  Jud.registerComponent('div', Div)
  Jud.registerComponent('container', Div)
}

export default { init }
