'use strict'

function getProto (Jud) {
  const Component = Jud.Component
  return {
    create () {
      const node = document.createElement('a')
      node.classList.add('jud-container')
      node.style.textDecoration = 'none'
      return node
    },

    bindEvents (evts) {
      // event handler for click event will be processed
      // before the url redirection.
      Component.prototype.bindEvents.call(this, evts)
      this.node.addEventListener('click', function (evt) {
        if (evt._alreadyFired && evt.target !== this.node) {
          // if the event target is this.node, then this is
          // just another click event handler for the same
          // target, not a handler for a bubbling up event,
          // otherwise it is a bubbling up event, and it
          // should be disregarded.
          return
        }
        evt._alreadyFired = true
        location.href = this.href
      }.bind(this))
    }
  }
}

const attr = {
  href: function (val) {
    if (!val) {
      return console.warn('[web-render] href of <a> should not be a null value.')
    }
    this.href = val
    this.node.setAttribute('data-href', val)
  }
}

function init (Jud) {
  const Component = Jud.Component
  const extend = Jud.utils.extend

  // attrs:
  //   - href
  function A (data) {
    Component.call(this, data)
  }

  A.prototype = Object.create(Component.prototype)
  extend(A.prototype, getProto(Jud))
  extend(A.prototype, { attr })

  Jud.registerComponent('a', A)
}

export default { init }

