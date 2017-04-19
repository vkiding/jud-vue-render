'use strict'

import Vlist from './vlist'
import Hlist from './hlist'

function init (Jud) {
  Jud.install(Vlist)
  Jud.install(Hlist)
}

export default { init }
