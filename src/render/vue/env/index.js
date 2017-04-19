import '../styles/reset.css'
import '../styles/base.css'

// import 'lazyimg'
import '../../browser/render/gesture'

import '../../../shared/arrayFrom'
import '../../../shared/objectAssign'
import '../../../shared/objectSetPrototypeOf'

import 'core-js/modules/es6.object.to-string'
import 'core-js/modules/es6.string.iterator'
import 'core-js/modules/web.dom.iterable'
import 'core-js/modules/es6.promise'

import modules from '../modules'
import jud from './jud'

// register built-in modules.
jud.install(modules)

export function setVue (vue) {
  if (!vue) {
    throw new Error('[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.')
  }
  jud.__vue__ = vue
  console.log(`[Vue Render] install Vue ${vue.version}.`)
}

window.jud = jud
window.global = window

export default jud
