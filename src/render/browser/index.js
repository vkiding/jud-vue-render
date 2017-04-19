'use strict'

import Jud from './render/index'

import root from './base/root'
import div from './base/div'
import droot from './base/droot'

// install the extended apis and components.
import extensions from './extend'

Jud.install(root)
Jud.install(div)
Jud.install(droot)

Jud.install(extensions)

global.registerComponents([
  { type: 'input', methods: ['focus', 'blur'] }
])

export default Jud
