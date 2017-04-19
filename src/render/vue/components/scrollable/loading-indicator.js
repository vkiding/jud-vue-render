import { extractComponentStyle } from '../../core'

const _css = `
.jud-refresh-indicator,
.jud-loading-indicator {
  width: 1.0rem;
  height: 1.0rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  overflow: visible;
  background: none;
}
.jud-refresh-indicator:before,
.jud-loading-indicator:before {
  display: block;
  content: '';
  font-size: 0.16rem;
  width: 1em;
  height: 1em;
  left: -60%;
  top: 40%;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: jud-spinner 1.1s infinite ease;
          animation: jud-spinner 1.1s infinite ease;
  -webkit-transform: translate3d(1.0rem, 0, 0);
          transform: translate3d(1.0rem, 0, 0);
}
`

export default {
  render (createElement) {
    this.judType = 'loading-indicator'
    return createElement('mark', {
      attrs: { 'jud-type': 'loading-indicator' },
      staticClass: 'jud-loading-indicator jud-ct',
      staticStyle: extractComponentStyle(this)
    })
  },
  _css
}
