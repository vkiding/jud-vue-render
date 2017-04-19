'use strict'

import listModule from './list'

function init (Jud) {
  const List = listModule.init(Jud)

  function Vlist (data, nodeType) {
    data.attr.direction = 'v'
    List.call(this, data, nodeType)
  }
  Vlist.prototype = Object.create(List.prototype)

  Jud.registerComponent('list', Vlist)
  Jud.registerComponent('vlist', Vlist)
}

export default { init }
