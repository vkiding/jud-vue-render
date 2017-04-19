'use strict'

const event = {
  /**
   * openUrl
   * @param  {string} url
   */
  openURL: function (url) {
    location.href = url
  }

}

const meta = {
  event: [{
    name: 'openURL',
    args: ['string']
  }]
}

export default {
  init: function (Jud) {
    Jud.registerApiModule('event', event, meta)
  }
}
