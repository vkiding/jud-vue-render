'use strict'

import list from './list'
import scroller from './scroller'
import refresh from './refresh'
import loading from './loading'

export default {
  init: function (Jud) {
    Jud.install(list)
    Jud.install(scroller)
    Jud.install(refresh)
    Jud.install(loading)
  }
}

/* eslint-disable */
;
/* eslint-enable */
