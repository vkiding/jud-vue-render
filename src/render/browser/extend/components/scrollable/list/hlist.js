'use strict'

import listModule from './list'

function init (Jud) {
  const List = listModule.init(Jud)

  function Hlist (data, nodeType) {
    data.attr.direction = 'h'
    List.call(this, data, nodeType)
  }

  Hlist.prototype = Object.create(List.prototype)

  Jud.registerComponent('hlist', Hlist)
}

export default { init }
