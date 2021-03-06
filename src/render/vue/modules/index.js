// modules from render/browesr
import event from '../../browser/extend/api/event'
import geolocation from '../../browser/extend/api/geolocation'
import pageInfo from '../../browser/extend/api/pageInfo'
import storage from '../../browser/extend/api/storage'
import stream from '../../browser/extend/api/stream'
import clipboard from '../../browser/extend/api/clipboard'

// custom modules
import animation from './animation'
import dom from './dom'
import modal from './modal'
import navigator from './navigator'
import webview from './webview'

const legacyModules = {
  event,
  geolocation,
  pageInfo,
  storage,
  stream,
  clipboard
}

const modules = {
  animation,
  dom,
  navigator,
  webview
}

export default {
  init (jud) {
    for (const k in legacyModules) {
      jud.install(legacyModules[k])
    }
    jud.install(modal)
    for (const k in modules) {
      jud.registerModule(k, modules[k])
    }
  }
}
