import packages from './packer'

// install the apis and components as packages.
export default {
  init (Jud) {
    if (typeof packages !== 'object') {
      return
    }
    for (const k in packages) {
      Jud.install(packages[k])
    }
    // packages.forEach(pkg => Jud.install(pkg))
  }
}
