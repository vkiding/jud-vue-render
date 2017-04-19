'use strict'

const pageInfo = {

  setTitle: function (title) {
    title = title || 'Jud HTML5'
    try {
      title = decodeURIComponent(title)
    }
    catch (e) {}
    document.title = title
  }
}

const meta = {
  pageInfo: [{
    name: 'setTitle',
    args: ['string']
  }]
}

export default {
  init: function (Jud) {
    Jud.registerApiModule('pageInfo', pageInfo, meta)
  }
}
