console.log('START JUD VUE RENDER: 0.11.5, Build 2017-04-06 19:30.');


(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.JudVueRender = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
__$styleInject(".jud-root,\n.jud-root * {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.jud-root,\n.jud-root *,\n.jud-root *::before,\n.jud-root *::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n.jud-root a,\n.jud-root button,\n.jud-root [role=\"button\"],\n.jud-root input,\n.jud-root label,\n.jud-root select,\n.jud-root textarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\n.jud-root p,\n.jud-root ol,\n.jud-root ul,\n.jud-root dl {\n  margin: 0;\n  padding: 0;\n}\n\n.jud-root li {\n  list-style: none;\n}\n\n.jud-root figure {\n  margin: 0;\n}\n\n.jud-root textarea {\n  resize: none;\n}\n",undefined);

__$styleInject(".jud-root * {\n  border-width: 0;\n  border-color: inherit;\n  border-style: solid;\n}\n\n.jud-flex-ct {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.jud-ct {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  flex-basis: auto;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.jud-ct.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n\n.jud-el {\n  display: block;\n  box-sizing: border-box;\n  position: relative;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  flex-basis: auto;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\nbody > .jud-list,\nbody > .jud-scroller {\n  max-height: 100%;\n}\n\n.jud-list-wrapper,\n.jud-scroller-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n.jud-list-wrapper {\n  overflow-y: scroll !important;\n}\n\n.jud-list-inner,\n.jud-scroller-inner {\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n}\n\n.jud-scroller-inner::-webkit-scrollbar {\n    width: 0;\n}\n\n.jud-scroller-wrapper.jud-scroller-vertical {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.jud-scroller-wrapper.jud-scroller-horizontal {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.jud-scroller-horizontal .jud-scroller-inner {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-orient: horizontal;\n  height: 100%;\n}\n\n.iossticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n}\n\n.jud-cell {\n  width: 100%;\n}\n\n.jud-refresh,\n.jud-loading {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  overflow: hidden;\n}\n\n@-webkit-keyframes jud-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n\n@keyframes jud-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n",undefined);

/* eslint-disable */

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el
    }
    el = el.parentNode;
  }
  return null
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, true, true);

  if (typeof extra === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2)
    + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2)
    + Math.pow(x2 - x1, 2)));
  var translate = [
    x3
    - scale * x1 * Math.cos(rotate)
    + scale * y1 * Math.sin(rotate),
    y3
    - scale * y1 * Math.cos(rotate)
    - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [
      [scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]],
      [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]],
      [0, 0, 1]
    ]
  }
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {

  if (Object.keys(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, false);
    docEl.addEventListener('touchend', touchendHandler, false);
    docEl.addEventListener('touchcancel', touchcancelHandler, false);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for jud
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        }
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if (Object.keys(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time =  Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time)
      / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time)
      / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2)
      + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical
      ? displacementY >= 0 ? 'down' : 'up'
      : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing')
        && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if (Object.keys(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(
      position[0][0],
      position[0][1],
      position[1][0],
      position[1][1],
      current[0][0],
      current[0][1],
      current[1][0],
      current[1][1]
    );
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      fireEvent(gesture.element, 'tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY
        + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && (now - gesture.lastTime) < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, false);
  isInitialized = true;
}

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number'){ __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number'){ __e = core; } // eslint-disable-line no-undef
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function(it){
  if(!isObject(it)){ throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!isObject$2(it)){ return it; }
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject       = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive    = _toPrimitive;
var dP$1             = Object.defineProperty;

var f$1 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE){ try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ } }
  if('get' in Attributes || 'set' in Attributes){ throw TypeError('Accessors not supported!'); }
  if('value' in Attributes){ O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f$1
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var dP         = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global    = _global
  , hide      = _hide
  , has       = _has
  , SRC       = _uid('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_core.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction){ has(val, 'name') || hide(val, 'name', key); }
  if(O[key] === val){ return; }
  if(isFunction){ has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key]){ O[key] = val; }
      else { hide(O, key, val); }
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function(it){
  if(typeof it != 'function'){ throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined){ return fn; }
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var global$1    = _global;
var core      = _core;
var hide      = _hide;
var redefine  = _redefine;
var ctx       = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function(type, name, source){
  var IS_FORCED = type & $export$1.F
    , IS_GLOBAL = type & $export$1.G
    , IS_STATIC = type & $export$1.S
    , IS_PROTO  = type & $export$1.P
    , IS_BIND   = type & $export$1.B
    , target    = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL){ source = name; }
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target){ redefine(target, key, out, type & $export$1.U); }
    // export
    if(exports[key] != out){ hide(exports, key, exp); }
    if(IS_PROTO && expProto[key] != out){ expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library` 
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function(it){
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined){ throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function(it){
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength  = _toLength;
var toIndex   = _toIndex;
var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject$1($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el){ while(length > index){
      value = O[index++];
      if(value != value){ return true; }
    // Array#toIndex ignores holes, Array#includes - not
    } } else { for(;length > index; index++){ if(IS_INCLUDES || index in O){
      if(O[index] === el){ return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store  = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid    = _uid;
var _sharedKey = function(key){
  return shared[key] || (shared[key] = uid(key));
};

var has          = _has;
var toIObject    = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O){ if(key != IE_PROTO){ has(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while(names.length > i){ if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function(it){
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = _objectKeys;
var gOPS     = _objectGops;
var pIE      = _objectPie;
var toObject = _toObject;
var IObject  = _iobject;
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments$1[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j){ if(isEnum.call(S, key = keys[j++])){ T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', {assign: _objectAssign});

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , uid        = _uid
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
var ARG = cof$1(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test    = {};
test[_wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2   = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined$2(that))
      , i = toInteger$2(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l){ return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = false;

var _iterators = {};

var dP$2       = _objectDp;
var anObject$2 = _anObject;
var getKeys$1  = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  anObject$2(O);
  var keys   = getKeys$1(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i){ dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1    = _anObject;
var dPs         = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = enumBugKeys$1.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--){ delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$2 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has$2(it = stat ? it : it.prototype, TAG$1)){ def(it, TAG$1, {configurable: true, value: tag}); }
};

var create$1         = _objectCreate;
var descriptor     = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create$1(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3         = _has;
var toObject$1    = _toObject;
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject$1(O);
  if(has$3(O, IE_PROTO$2)){ return O[IE_PROTO$2]; }
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY        = _library;
var $export$2        = _export;
var redefine$1       = _redefine;
var hide$1           = _hide;
var has$1            = _has;
var Iterators      = _iterators;
var $iterCreate    = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto){ return proto[kind]; }
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has$1(IteratorPrototype, ITERATOR)){ hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED){ for(key in methods){
      if(!(key in proto)){ redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length){ return {value: undefined, done: true}; }
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined){ _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

var addToUnscopables = _addToUnscopables;
var step             = _iterStep;
var Iterators$2        = _iterators;
var toIObject$2        = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  ){ return step(0, index); }
  if(kind == 'values'){ return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators    = es6_array_iterator;
var redefine$2      = _redefine;
var global$3        = _global;
var hide$2          = _hide;
var Iterators$1     = _iterators;
var wks           = _wks;
var ITERATOR$1      = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues   = Iterators$1.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global$3[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR$1]){ hide$2(proto, ITERATOR$1, ArrayValues); }
    if(!proto[TO_STRING_TAG]){ hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    for(key in $iterators){ if(!proto[key]){ redefine$2(proto, key, $iterators[key], true); } }
  }
}

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined){ anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3  = _iterators;
var ITERATOR$2   = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2   = _classof;
var ITERATOR$3  = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined){ return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx         = _ctx
  , call        = _iterCall
  , isArrayIter = _isArrayIter
  , anObject    = _anObject
  , toLength    = _toLength
  , getIterFn   = core_getIteratorMethod
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function'){ throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn)){ for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN){ return result; }
  } } else { for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN){ return result; }
  } }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4  = _anObject;
var aFunction$2 = _aFunction;
var SPECIES   = _wks('species');
var _speciesConstructor = function(O, D){
  var C = anObject$4(O).constructor, S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var ctx$2                = _ctx;
var invoke             = _invoke;
var html               = _html;
var cel                = _domCreate;
var global$5             = _global;
var process$1            = global$5.process;
var setTask            = global$5.setImmediate;
var clearTask          = global$5.clearImmediate;
var MessageChannel     = global$5.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var arguments$1 = arguments;

    var args = [], i = 1;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_cof(process$1) == 'process'){
    defer = function(id){
      process$1.nextTick(ctx$2(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts){
    defer = function(id){
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};

var global$6    = _global;
var macrotask = _task.set;
var Observer  = global$6.MutationObserver || global$6.WebKitMutationObserver;
var process$2   = global$6.process;
var Promise$1   = global$6.Promise;
var isNode$1    = _cof(process$2) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$2.domain)){ parent.exit(); }
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head){ notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if(parent){ parent.enter(); }
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$6, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last){ last.next = task; }
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

var redefine$3 = _redefine;
var _redefineAll = function(target, src, safe){
  for(var key in src){ redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7      = _global;
var dP$3          = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1     = _wks('species');

var _setSpecies = function(KEY){
  var C = global$7[KEY];
  if(DESCRIPTORS && C && !C[SPECIES$1]){ dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  }); }
};

var ITERATOR$4     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING){ return false; }
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$4]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$4] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

var LIBRARY$1            = _library;
var global$4             = _global;
var ctx$1                = _ctx;
var classof$1            = _classof;
var $export$3            = _export;
var isObject$3           = _isObject;
var aFunction$1          = _aFunction;
var anInstance         = _anInstance;
var forOf              = _forOf;
var speciesConstructor = _speciesConstructor;
var task               = _task.set;
var microtask          = _microtask();
var PROMISE            = 'Promise';
var TypeError$1          = global$4.TypeError;
var process            = global$4.process;
var $Promise           = global$4[PROMISE];
var process            = global$4.process;
var isNode             = classof$1(process) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined){ throw TypeError$1('Bad Promise constructor'); }
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject  = aFunction$1(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n){ return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2){ onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if(handler === true){ result = value; }
          else {
            if(domain){ domain.enter(); }
            result = handler(value);
            if(domain){ domain.exit(); }
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i){ run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h){ onUnhandled(promise); }
  });
};
var onUnhandled = function(promise){
  task.call(global$4, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global$4.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$4.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt){ throw abrupt.error; }
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1){ return false; }
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise)){ return false; }
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$4, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global$4.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a){ promise._a = promise._c.slice(); }
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value){ throw TypeError$1("Promise can't be resolved itself"); }
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a){ this._a.push(reaction); }
      if(this._s){ notify(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject  = ctx$1($reject, promise, 1);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, {Promise: $Promise});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this)){ return x; }
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled){ return; }
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  }
});

var event = {
  /**
   * openUrl
   * @param  {string} url
   */
  openURL: function (url) {
    location.href = url;
  }

};

var meta = {
  event: [{
    name: 'openURL',
    args: ['string']
  }]
};

var event$1 = {
  init: function (Jud) {
    Jud.registerApiModule('event', event, meta);
  }
};

var supportGeolocation = 'geolocation' in navigator;
var errorMsg = "[h5-render]: browser doesn't support geolocation.";

var geolocation = {
  // options:
  //   - enableHighAccuracy optional, value is true or false, false by default.
  //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
  //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
  getCurrentPosition: function getCurrentPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  // options: the same with `getCurrentPosition`.
  watchPosition: function watchPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos, true); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      var id = navigator.geolocation.watchPosition(function (pos) {
        pos.watchId = id;
        successCb(pos);
      }, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  clearWatch: function clearWatch (watchId) {
    if (supportGeolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
    else {
      console.warn(errorMsg);
    }
  }
};

var meta$1 = {
  geolocation: [{
    name: 'getCurrentPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'watchPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'clearWatch',
    args: ['string']
  }]
};

var geolocation$1 = {
  init: function init (Jud) {
    Jud.registerApiModule('geolocation', geolocation, meta$1);
  }
};

var pageInfo = {

  setTitle: function (title) {
    title = title || 'Jud HTML5';
    try {
      title = decodeURIComponent(title);
    }
    catch (e) {}
    document.title = title;
  }
};

var meta$2 = {
  pageInfo: [{
    name: 'setTitle',
    args: ['string']
  }]
};

var pageInfo$1 = {
  init: function (Jud) {
    Jud.registerApiModule('pageInfo', pageInfo, meta$2);
  }
};

/* global localStorage */
var supportLocalStorage = typeof localStorage !== 'undefined';
var SUCCESS = 'success';
var FAILED = 'failed';
var INVALID_PARAM = 'invalid_param';
var UNDEFINED = 'undefined';

var storage = {

  /**
   * When passed a key name and value, will add that key to the storage,
   * or update that key's value if it already exists.
   * @param {string} key
   * @param {string} value
   * @param {function} callbackId
   */
  setItem: function (key, value, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key || !value) {
      sender.performCallback(callbackId, {
        result: 'failed',
        data: INVALID_PARAM
      });
      return
    }
    try {
      localStorage.setItem(key, value);
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: UNDEFINED
      });
    }
    catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      sender.performCallback(callbackId, {
        result: FAILED,
        data: UNDEFINED
      });
    }
  },

  /**
   * When passed a key name, will return that key's value.
   * @param {string} key
   * @param {function} callbackId
   */
  getItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    var val = localStorage.getItem(key);
    sender.performCallback(callbackId, {
      result: val ? SUCCESS : FAILED,
      data: val || UNDEFINED
    });
  },

  /**
   *When passed a key name, will remove that key from the storage.
   * @param {string} key
   * @param {function} callbackId
   */
  removeItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    localStorage.removeItem(key);
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: UNDEFINED
    });
  },

  /**
   * Returns an integer representing the number of data items stored in the Storage object.
   * @param {function} callbackId
   */
  length: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var len = localStorage.length;
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: len
    });
  },

  /**
   * Returns an array that contains all keys stored in Storage object.
   * @param {function} callbackId
   */
  getAllKeys: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var _arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      _arr.push(localStorage.key(i));
    }
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: _arr
    });
  }
};

var meta$3 = {
  storage: [{
    name: 'setItem',
    args: ['string', 'string', 'function']
  }, {
    name: 'getItem',
    args: ['string', 'function']
  }, {
    name: 'removeItem',
    args: ['string', 'function']
  }, {
    name: 'length',
    args: ['function']
  }, {
    name: 'getAllKeys',
    args: ['function']
  }]
};

var storage$1 = {
  init: function (Jud) {
    Jud.registerApiModule('storage', storage, meta$3);
  }
};

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){var b={};Object.defineProperty(this,"params",{set:function(a){if("object"==typeof a){for(var c in b){ delete b[c]; }for(var c in a){ b[c]=a[c]; }}},get:function(){return b},enumerable:!0}),Object.defineProperty(this,"search",{set:function(a){if("string"==typeof a){0===a.indexOf("?")&&(a=a.substr(1));var c=a.split("&");for(var d in b){ delete b[d]; }for(var e=0;e<c.length;e++){var f=c[e].split("=");if(void 0!==f[1]&&(f[1]=f[1].toString()),f[0]){ try{b[decodeURIComponent(f[0])]=decodeURIComponent(f[1]);}catch(g){b[f[0]]=f[1];} }}}},get:function(){var a=[];for(var c in b){ if(void 0!==b[c]){ if(""!==b[c]){ try{a.push(encodeURIComponent(c)+"="+encodeURIComponent(b[c]));}catch(d){a.push(c+"="+b[c]);} }else { try{a.push(encodeURIComponent(c));}catch(d){a.push(c);} } } }return a.length?"?"+a.join("&"):""},enumerable:!0});var c;Object.defineProperty(this,"hash",{set:function(a){"string"==typeof a&&(a&&a.indexOf("#")<0&&(a="#"+a),c=a||"");},get:function(){return c},enumerable:!0}),this.set=function(a){a=a||"";var b;if(!(b=a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i")))){ throw new Error("Wrong uri scheme."); }this.protocol=b[1]||("object"==typeof location?location.protocol:""),this.username=b[2]||"",this.password=b[3]||"",this.hostname=this.host=b[4],this.port=b[5]||"",this.pathname=b[6]||"/",this.search=b[7]||"",this.hash=b[8]||"",this.origin=this.protocol+"//"+this.hostname;},this.toString=function(){var a=this.protocol+"//";return this.username&&(a+=this.username,this.password&&(a+=":"+this.password),a+="@"),a+=this.host,this.port&&"80"!==this.port&&(a+=":"+this.port),this.pathname&&(a+=this.pathname),this.search&&(a+=this.search),this.hash&&(a+=this.hash),a},a&&this.set(a.toString());}b.httpurl=function(a){return new c(a)};}(window,window.lib||(window.lib={}));

var index$1 = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$2(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$3 = shouldUseNative() ? Object.assign : function (target, source) {
	var arguments$1 = arguments;

	var from;
	var to = toObject$2(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments$1[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var strictUriEncode = index$1;
var objectAssign = index$3;

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);

				key = key.replace(/\[\]$/, '');

				if (!result || accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

var extract = function (str) {
	return str.split('?')[1] || '';
};

var parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

var stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var index = {
	extract: extract,
	parse: parse,
	stringify: stringify
};

/* global lib, XMLHttpRequest */
/* deps: httpurl */

var utils;

var jsonpCnt = 0;
var ERROR_STATE = -1;

function _jsonp (config, callback, progressCallback) {
  var cbName = 'jsonp_' + (++jsonpCnt);
  var url;

  if (!config.url) {
    console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
  }

  global[cbName] = (function (cb) {
    return function (response) {
      callback({
        status: 200,
        ok: true,
        statusText: 'OK',
        data: response
      });
      delete global[cb];
    }
  })(cbName);

  var script = document.createElement('script');
  try {
    url = lib.httpurl(config.url);
  }
  catch (err) {
    console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: '
      + config.url);
  }
  url.params.callback = cbName;
  script.type = 'text/javascript';
  script.src = url.toString();
  // script.onerror is not working on IE or safari.
  // but they are not considered here.
  script.onerror = (function (cb) {
    return function (err) {
      console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
      callback({
        status: ERROR_STATE,
        ok: false,
        statusText: '',
        data: ''
      });
      delete global[cb];
    }
  })(cbName);
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(script, null);
}

function _xhr (config, callback, progressCallback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = config.type;
  xhr.open(config.method, config.url, true);

  // cors cookie support
  if (config.withCredentials === true) {
    xhr.withCredentials = true;
  }

  var headers = config.headers || {};
  for (var k in headers) {
    xhr.setRequestHeader(k, headers[k]);
  }

  xhr.onload = function (res) {
    callback({
      status: xhr.status,
      ok: xhr.status >= 200 && xhr.status < 300,
      statusText: xhr.statusText,
      data: xhr.response,
      headers: xhr.getAllResponseHeaders().split('\n')
        .reduce(function (obj, headerStr) {
          var headerArr = headerStr.match(/(.+): (.+)/);
          if (headerArr) {
            obj[headerArr[1]] = headerArr[2];
          }
          return obj
        }, {})
    });
  };

  if (progressCallback) {
    xhr.onprogress = function (e) {
      progressCallback({
        readyState: xhr.readyState,
        status: xhr.status,
        length: e.loaded,
        total: e.total,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders().split('\n')
          .reduce(function (obj, headerStr) {
            var headerArr = headerStr.match(/(.+): (.+)/);
            if (headerArr) {
              obj[headerArr[1]] = headerArr[2];
            }
            return obj
          }, {})
      });
    };
  }

  xhr.onerror = function (err) {
    console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
    callback({
      status: ERROR_STATE,
      ok: false,
      statusText: '',
      data: ''
    });
  };

  xhr.send(config.body || null);
}

var stream = {

  /**
   * sendHttp
   * @deprecated
   * Note: This API is deprecated. Please use stream.fetch instead.
   * send a http request through XHR.
   * @param  {obj} params
   *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
   *  - url: url requested
   * @param  {string} callbackId
   */
  sendHttp: function (param, callbackId) {
    if (typeof param === 'string') {
      try {
        param = JSON.parse(param);
      }
      catch (e) {
        return
      }
    }
    if (typeof param !== 'object' || !param.url) {
      return console.error(
        '[h5-render] invalid config or invalid config.url for sendHttp API')
    }

    var sender = this.sender;
    var method = param.method || 'GET';
    var xhr = new XMLHttpRequest();
    xhr.open(method, param.url, true);
    xhr.onload = function () {
      sender.performCallback(callbackId, this.responseText);
    };
    xhr.onerror = function (error) {
      return console.error('[h5-render] unexpected error in sendHttp API', error)
      // sender.performCallback(
      //   callbackId,
      //   new Error('unexpected error in sendHttp API')
      // )
    };
    xhr.send();
  },

  /**
   * fetch
   * use stream.fetch to request for a json file, a plain text file or
   * a arraybuffer for a file stream. (You can use Blob and FileReader
   * API implemented by most modern browsers to read a arraybuffer.)
   * @param  {object} options config options
   *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
   *   - headers {obj}
   *   - url {string}
   *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
   *   - withCredentials {boolean}
   *   - body
   *   - type {string} 'json' | 'jsonp' | 'text'
   * @param  {string} callbackId
   * @param  {string} progressCallbackId
   */
  fetch: function (options, callbackId, progressCallbackId) {
    var DEFAULT_METHOD = 'GET';
    var DEFAULT_MODE = 'cors';
    var DEFAULT_TYPE = 'text';

    var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
    var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
    var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

    // const fallback = false  // fallback from 'fetch' API to XHR.
    var sender = this.sender;

    var config = utils.extend({}, options);

    // validate options.method
    if (typeof config.method === 'undefined') {
      config.method = DEFAULT_METHOD;
      console.warn('[h5-render] options.method for \'fetch\' API has been set to '
        + 'default value \'' + config.method + '\'');
    }
    else if (methodOptions.indexOf((config.method + '')
        .toUpperCase()) === -1) {
      return console.error('[h5-render] options.method \''
        + config.method
        + '\' for \'fetch\' API should be one of '
        + methodOptions + '.')
    }

    // validate options.url
    if (!config.url) {
      return console.error('[h5-render] options.url should be set for \'fetch\' API.')
    }

    // validate body content for method 'GET'.
    if (config.method.toUpperCase() === 'GET') {
      var body = config.body;
      if (utils.isPlainObject(body)) {
        body = index.stringify(body);
      }
      var url = config.url;
      var hashIdx = url.indexOf('#');
      hashIdx <= -1 && (hashIdx = url.length);
      var hash = url.substr(hashIdx);
      hash && (hash = '#' + hash);
      url = url.substring(0, hashIdx);
      url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body + hash;
      config.url = url;
    }

    // validate options.mode
    if (typeof config.mode === 'undefined') {
      config.mode = DEFAULT_MODE;
    }
    else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.mode \''
        + config.mode
        + '\' for \'fetch\' API should be one of '
        + modeOptions + '.')
    }

    // validate options.type
    if (typeof config.type === 'undefined') {
      config.type = DEFAULT_TYPE;
      console.warn('[h5-render] options.type for \'fetch\' API has been set to '
        + 'default value \'' + config.type + '\'.');
    }
    else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.type \''
          + config.type
          + '\' for \'fetch\' API should be one of '
          + typeOptions + '.')
    }

    // validate options.headers
    config.headers = config.headers || {};
    if (!utils.isPlainObject(config.headers)) {
      return console.error('[h5-render] options.headers should be a plain object')
    }

    // validate options.timeout
    config.timeout = parseInt(config.timeout, 10) || 2500;

    var _callArgs = [config, function (res) {
      sender.performCallback(callbackId, res);
    }];
    if (progressCallbackId) {
      _callArgs.push(function (res) {
        // Set 'keepAlive' to true for sending continuous callbacks
        sender.performCallback(progressCallbackId, res, true);
      });
    }

    if (config.type === 'jsonp') {
      _jsonp.apply(this, _callArgs);
    }
    else {
      _xhr.apply(this, _callArgs);
    }
  }

};

var meta$4 = {
  stream: [{
    name: 'sendHttp',
    args: ['object', 'function']
  }, {
    name: 'fetch',
    args: ['object', 'function', 'function']
  }]
};

var stream$1 = {
  init: function (Jud) {
    utils = Jud.utils;
    Jud.registerApiModule('stream', stream, meta$4);
  }
};

/**

AUCTION:
taskQueue
Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.

works in Chrome Firefox Opera. but not in Safari.
@see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility

Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.

So look out your app behavior, when downgrade to html5 render.
Any idea is welcome.
**/

var JUD_CLIPBOARD_ID = '__jud_clipboard_id__';

var clipboard = {

  getString: function (callbackId) {
    // not supported in html5
    console.log('clipboard.getString() is not supported now.');
  },

  setString: function (text) {
    // not support safari
    if (typeof text === 'string' && text !== '' && document.execCommand) {
      var tempInput = element();
      tempInput.value = text;

      tempInput.select();
      document.execCommand('copy');
      // var out = document.execCommand('copy');
      // console.log("execCommand out is " + out);
      tempInput.value = '';
      tempInput.blur();
    }
    else {
      console.log('only support string input now');
    }
  }

};

function element () {
  var tempInput = document.getElementById(JUD_CLIPBOARD_ID);
  if (!tempInput) {
    tempInput = document.createElement('input');
    tempInput.setAttribute('id', JUD_CLIPBOARD_ID);
    tempInput.style.cssText = 'height:1px;width:1px;border:none;';
    // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
    document.body.appendChild(tempInput);
  }
  return tempInput
}

var meta$5 = {
  clipboard: [{
    name: 'getString',
    args: ['function']
  }, {
    name: 'setString',
    args: ['string']
  }]
};

var clipboard$1 = {
  init: function (Jud) {
    Jud.registerApiModule('clipboard', clipboard, meta$5);
  }
};

// 

/**
 * Mix properties into target object.
 * the rightest object's value has the highest priority.
 */
function extend (to) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  if (!args || args.length <= 0) { return to }
  args.forEach(function (from) {
    if (typeof from !== 'object') { return }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to
}

/**
 * Mix specified properties into target object.
 */
function extendKeys (to, from, keys) {
  if ( from === void 0 ) from = {};

  (keys || []).forEach(function (key) {
    from && (to[key] = from[key]);
  });
  return to
}

/**
 * Extract specified properties from src to target object.
 */
function extractKeys (to, from, keys) {
  if ( from === void 0 ) from = {};

  if (!from) { return to }
  (keys || []).forEach(function (key) {
    from && (to[key] = from[key]);
    from && (delete from[key]);
  });
  return to
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */
function bind (fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

/**
 * Only call the func the last time before it's not that frequently called.
 */
function debounce (func, wait) {
  var timerId;
  function later () {
    timerId = null;
    func.apply(null);
  }
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

/**
 * Only call the func the first time before a series frequently function calls happen.
 */
function depress (func, wait) {
  var timerId;
  function later () {
    timerId = null;
  }
  return function () {
    if (!timerId) {
      func.apply();
    }
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

/**
 * Only call the func every time after a wait milliseconds if it's too frequently called.
 */
function throttle (func, wait, callLastTime) {
  var last = 0;
  var lastTimer = null;
  var lastTimeDuration = wait + (wait > 25 ? wait : 25);  // plus half wait time.
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    var time = new Date().getTime();
    if (time - last > wait) {
      if (callLastTime) {
        lastTimer && clearTimeout(lastTimer);
        lastTimer = setTimeout(function () {
          lastTimer = null;
          func.apply(context, args);
        }, lastTimeDuration);
      }
      func.apply(context, args);
      last = time;
    }
  }
}

// import { extend } from './func'

function extend$1 (to) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  if (!args || args.length <= 0) { return to }
  args.forEach(function (from) {
    if (typeof from !== 'object') { return }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createEvent (context, type, props) {
  var event = new Event(type, { bubbles: false });
  // event.preventDefault()
  // event.stopPropagation()

  extend$1(event, props);

  Object.defineProperty(event, 'target', {
    enumerable: true,
    value: context || null
  });

  return event
}

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createCustomEvent (context, type, props) {
  // compatibility: http://caniuse.com/#search=customevent
  // const event = new CustomEvent(type)
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, false, true, {});
  // event.preventDefault()
  // event.stopPropagation()

  extend$1(event, props);

  // TODO: event.target is readonly
  Object.defineProperty(event, 'target', {
    enumerable: true,
    value: context || null
  });

  return event
}

/**
 * dispatch a event on a dom element.
 * @param  {HTMLElement} dom
 * @param  {Event} event
 */
function dispatchEvent (dom, event) {
  dom.dispatchEvent(event);
}

function mapFormEvents (context) {
  var eventMap = {};['input', 'change', 'focus', 'blur'].forEach(function (type) {
    eventMap[type] = function (event) {
      if (context.$el) {
        event.value = context.$el.value;
      }
      context.$emit(type, event);
    };
  });
  return eventMap
}

function getParentScroller (vnode) {
  if (!vnode) { return null }
  if (vnode.judType === 'scroller' || vnode.judType === 'list') {
    return vnode
  }
  return getParentScroller(vnode.$parent)
}

function hasIntersection (rect, ctRect) {
  return (rect.left < ctRect.right && rect.right > ctRect.left)
    && (rect.top < ctRect.bottom && rect.bottom > ctRect.top)
}

/**
 * [isElementVisible description]
 * @param  {HTMLElement}  el    a dom element.
 * @param  {HTMLElement}  container  optional, the container of this el.
 */
function isElementVisible (el, container) {
  var bodyRect = {
    top: 0,
    left: 0,
    bottom: window.innerHeight,
    right: window.innerWidth
  };
  var ctRect = (container === document.body)
    ? bodyRect : container
    ? container.getBoundingClientRect() : bodyRect;
  return hasIntersection(
    el.getBoundingClientRect(),
    ctRect)
}

function isComponentVisible (component) {
  if (component.$el) {
    var scroller = getParentScroller(component);
    if (scroller && scroller.$el) {
      return hasIntersection(
        component.$el.getBoundingClientRect(),
        scroller.$el.getBoundingClientRect()
      )
    }
    else {
      return isElementVisible(component.$el)
    }
  }
  return false
}

// TODO: improve the efficiency
function watchAppear (context) {
  if (!context) { return null }

  context.$nextTick(function () {
    if ((context.$options && context.$options._parentListeners)
      || (context.$vnode && context.$vnode.data && context.$vnode.data.on)) {
      var on = extend({}, context.$options._parentListeners, context.$vnode.data.on);
      if (on.appear || on.disappear) {
        var scroller = getParentScroller(context);
        var isWindow = false;
        var container = window;
        if (scroller && scroller.$el) {
          container = scroller.$el;
        }
        else {
          isWindow = true;
        }
        var lastScrollTop = container.scrollTop || window.pageYOffset;

        context._visible = isElementVisible(context.$el, isWindow ? document.body : container);
        if (context._visible && on.appear) {
          if (on.appear.fn) {
            on.appear = on.appear.fn;
          }
          on.appear(createEvent(context.$el, 'appear', { direction: null }));
        }
        var handler = throttle(function (event) {
          var visible = isElementVisible(context.$el, isWindow ? document.body : container);
          var listener = null;
          var type = null;
          if (visible !== context._visible) {
            context._visible = visible;
            if (visible) {
              listener = on.appear;
              type = 'appear';
            }
            else {
              listener = on.disappear;
              type = 'disappear';
            }
            if (listener && listener.fn) {
              listener = listener.fn;
            }
            var scrollTop = container.scrollTop || window.pageYOffset;
            listener && listener(createEvent(context.$el, type, {
              direction: scrollTop < lastScrollTop ? 'down'
                : scrollTop > lastScrollTop ? 'up' : null
            }));
            lastScrollTop = scrollTop;
          }
        }, 25, true);

        container.addEventListener('scroll', handler, false);
      }
    }
  });
}

// 
/**
 * @fileOverview: perf data recorder.
 */

// performance tracker for jud.
var perf = window._jud_perf = {
  earliestBeforeCreates: [],
  latestMounts: [],
  earliestBeforeUpdates: [],
  latestUpdates: [],
  latestRenderFinishes: [],
  createTime: [],
  updateTime: [],
  renderTime: [],
  entries: [],
  time: {},
  firstAllMountedTime: null
};

var tmp = {};

var IMG_REC_INDENT = 500;  // record loading events after 500ms towards last recording.

var earliestBeforeUpdateTime = 0;
var earliestBeforeCreateTime = 0;

function getNow () {
  return performance.now ? performance.now() : new Date().getTime()
}

function getEntries () {
  return performance.getEntries
    ? performance.getEntries()
    : [{ responseEnd: getNow() - IMG_REC_INDENT }]
}

/**
 * get first screen time.
 */
var debouncedTagImg = debounce(function () {
  var entries = getEntries();
  var len = entries.length;
  var i = 0;
  var end = 0;
  while (i < len) {
    var responseEnd = entries[i].responseEnd;
    end = end < responseEnd ? responseEnd : end;
    perf.entries.push({
      requestStart: entries[i].requestStart,
      responseEnd: responseEnd
    });
    i++;
  }
  perf.latestRenderFinishes.push(end);
  var start = Math.max(earliestBeforeCreateTime, earliestBeforeUpdateTime);
  perf.renderTime.push({
    start: start,
    end: end,
    duration: end - start
  });

  var num = perf.renderTime.length;
  perf[("screenTime" + num)] = end;
  window.jud.emit('renderfinish', end);
  {
    console.log(("screenTime[" + num + "]: " + end + " ms."));
    console.log('_jud_perf:', window._jud_perf);
  }
}, IMG_REC_INDENT);

function tagImg () {
  debouncedTagImg();
}

/**
 * recording the earliest 'beforeCreate' time.
 */
var depressedTagBeforeCreate = depress(function () {
  var now = getNow();
  earliestBeforeCreateTime = now;
  perf.earliestBeforeCreates.push(now);
}, 25);

function tagBeforeCreate () {
  depressedTagBeforeCreate();
}

/**
 * recording the latest 'mounted' time.
 */
var debouncedTagMounted = debounce(function () {
  var now = getNow();
  perf.latestMounts.push(now);
  perf.createTime.push({
    start: earliestBeforeCreateTime,
    end: now,
    duration: now - earliestBeforeCreateTime
  });

  if (!perf.firstAllMountedTime) {
    perf.firstAllMountedTime = now;
    {
      console.log(("first all mounted time: " + now + " ms."));
    }
  }
}, 25);

function tagMounted () {
  debouncedTagMounted();
}

/**
 * recording the earliest 'beforeUpdate' time.
 */
var depressedTagBeforeUpdate = depress(function () {
  var now = getNow();
  earliestBeforeUpdateTime = now;
  perf.earliestBeforeUpdates.push(now);
}, 25);

function tagBeforeUpdate () {
  depressedTagBeforeUpdate();
}

/**
 * recording the latest 'updated' time.
 */
var debouncedTagUpdated = debounce(function () {
  var now = getNow();
  perf.latestUpdates.push(now);
  perf.updateTime.push({
    start: earliestBeforeUpdateTime,
    end: now,
    duration: now - earliestBeforeUpdateTime
  });
}, 25);

function tagUpdated () {
  debouncedTagUpdated();
}

function tagBegin (name) {
  tmp[name] = getNow();
}

function tagEnd (name) {
  var pre = perf.time[name];
  if (!pre) {
    pre = 0;
  }
  perf.time[name] = pre + getNow() - tmp[name];
}

// 

var SCREEN_REC_LIMIT = 3;  // just record the first 3 times for screen-render finishing.
var doRecord = true;

function preLoadImg (src,
    loadCallback,
    errorCallback) {
  var img = new Image();
  img.onload = loadCallback ? loadCallback.bind(img) : null;
  img.onerror = errorCallback ? errorCallback.bind(img) : null;
  img.src = src;
}

function applySrc (item, src, placeholderSrc) {
  if (!src) { return }
  function finallCb () {
    item.removeAttribute('img-src');
    if (doRecord) {
      if (window._jud_perf.renderTime.length < SCREEN_REC_LIMIT) {
        tagImg(); // tag lastest img onload time.
      }
      else {
        doRecord = false;
      }
    }
  }
  preLoadImg(src, function (evt) {
    item.style.backgroundImage = "url(" + (src || '') + ")";
    var ref = this;
    var naturalWidth = ref.width;
    var naturalHeight = ref.height;
    dispatchEvent(item, createEvent(item, 'load', { naturalWidth: naturalWidth, naturalHeight: naturalHeight }));
    finallCb();
  }, function (evt) {
    dispatchEvent(item, createEvent(item, 'error'));
    if (placeholderSrc) {
      preLoadImg(placeholderSrc, function () {
        item.style.backgroundImage = "url(" + (placeholderSrc || '') + ")";
      });
    }
    finallCb();
  });
}

function fireLazyload (el, ignoreVisibility) {
  if (Array.isArray(el)) {
    return el.forEach(function (ct) { return fireLazyload(ct); })
  }
  el = el || document.body;
  if (!el) { return }
  var imgs = (el || document.body).querySelectorAll('[img-src]');
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    if (typeof ignoreVisibility === 'boolean' && ignoreVisibility) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
    else if (isElementVisible(img, el)) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
    // In somecases there are images out of the screen in x-axis. There
    // should not be a break point in these cases.
    // else {
    //   // alreay out of view, no need to compare any more.
    //   break
    // }
  }
}

/**
 * cache a throttle lazyload function for every container element
 * once for different wait times separate.
 *   the architecture of this cache:
 *      cache: {
 *        el.id: {
 *          wait: throttledFunction () { ... }
 *        }
 *      }
 */
var cache = {};
var _uid$2 = 1;
function getThrottleLazyload (wait, el) {
  if ( wait === void 0 ) wait = 16;
  if ( el === void 0 ) el = document.body;

  var id = +(el && el.dataset.throttleId);
  if (isNaN(id) || id <= 0) {
    id = _uid$2++;
    el && el.setAttribute('data-throttle-id', id + '');
  }

  !cache[id] && (cache[id] = {});
  var throttled = cache[id][wait] ||
    (cache[id][wait] = throttle(
      fireLazyload.bind(this, el),
      parseFloat(wait),
      // true for callLastTime.
      // to trigger once more time after the last throttled function called with a little more delay.
      true)
    );
  return throttled
}

// 

/**
 * viewport priority:
 *
 * 1. meta jud-viewport (developer custom)
 * 2. setViewport(config) := config.width (private code) @deprecated
 * 3. 750 (buid time)
 *
 */
var isInited = false;
var DEFAULT_VIEWPORT_WIDTH = 750;

/**
 * get viewport width from jud-viewport meta.
 */
var envViewportWidth = parseInt(750);
var width = !isNaN(envViewportWidth) && envViewportWidth > 0
  ? envViewportWidth
  : DEFAULT_VIEWPORT_WIDTH;

var wxViewportMeta = document.querySelector('meta[name="jud-viewport"]');
var metaWidth = wxViewportMeta && parseInt(wxViewportMeta.getAttribute('content'));
if (metaWidth && !isNaN(metaWidth) && metaWidth > 0) {
  width = metaWidth;
}

var dpr = 0;
var deRect = null;
var screenWidth = 0;
var screenHeight = 0;

var info = {
  dpr: dpr,
  scale: 0,
  rem: 0,
  deviceWidth: 0,
  deviceHeight: 0
};

/**
 * set root font-size for rem units. If already been set, just skip this.
 */
function setRootFont (width) {
  var doc = window.document;
  var rem = width / 10;
  if (!doc.documentElement) { return }
  var rootFontSize = doc.documentElement.style.fontSize;
  if (!rootFontSize) {
    doc.documentElement.style.fontSize = rem + 'px';
    info.rem = rem;
  }
}

function setMetaViewport (width) {
  if (!wxViewportMeta) {
    wxViewportMeta = document.createElement('meta');
    wxViewportMeta.setAttribute('name', 'jud-viewport');
  }
  else {
    var metaWidth = parseInt(wxViewportMeta.getAttribute('content'));
    if (metaWidth === width) {
      return
    }
  }
  wxViewportMeta.setAttribute('content', width + '');
}

/**
 * export viewport info.
 */
function init$2 (viewportWidth) {
  if ( viewportWidth === void 0 ) viewportWidth = width;

  if (!isInited) {
    isInited = true;

    var doc = window.document;
    if (!doc) {
      console.error('[vue-render] window.document is undfined.');
      return
    }
    if (!doc.documentElement) {
      console.error('[vue-render] document.documentElement is undfined.');
      return
    }

    dpr = info.dpr = window.devicePixelRatio;
    deRect = doc.documentElement.getBoundingClientRect();
    screenWidth = deRect.width;
    screenHeight = deRect.height;

    // set root font for rem.
    setRootFont(screenWidth);
    setMetaViewport(viewportWidth);

    /**
     * why not to use window.screen.width to get screenWidth ? Because in some
     * old webkit browser on android system it get the device pixel width, which
     * is the screenWidth multiply by the device pixel ratio.
     * e.g. ip6 -> get 375 for virtual screen width.
     */
    var scale = screenWidth / viewportWidth;
    /**
     * 1. if set initial/maximum/mimimum-scale some how the page will have a bounce
     * effect when user drag the page towards horizontal axis.
     * 2. Due to compatibility reasons, not to use viewport meta anymore. Just bring
     * a parameter scale into the style value processing.
     */

    // const contents = [
    //   `width=${viewportWidth}`,
    //   `initial-scale=${scale}`,
    //   `maximum-scale=${scale}`,
    //   `minimum-scale=${scale}`,
    //   `user-scalable=no`
    // ]

    // let meta = doc.querySelector('meta[name="viewport"]')
    // if (!meta) {
    //   meta = doc.createElement('meta')
    //   meta.setAttribute('name', 'viewport')
    //   document.querySelector('head').appendChild(meta)
    // }
    // meta.setAttribute('content', contents.join(','))

    extend(info, {
      scale: scale,
      deviceWidth: screenWidth * dpr,
      deviceHeight: screenHeight * dpr
    });
  }

  return info
}

/**
 * reset viewport width and scale.
 * @return new scale.
 */


function getViewportInfo () {
  return info
}

var capitalizeString_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];
});

var prefixProperty_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = capitalizeString_1;

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];
});

var prefixValue_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];
});

var addNewValuesOnly_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];
});

var isObject_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];
});

var createPrefixer_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = prefixProperty_1;

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = prefixValue_1;

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = addNewValuesOnly_1;

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = isObject_1;

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];
});

var staticData = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  plugins: [],
  prefixMap: { "appearance": ["Webkit", "Moz"], "userSelect": ["Webkit", "Moz", "ms"], "textEmphasisPosition": ["Webkit"], "textEmphasis": ["Webkit"], "textEmphasisStyle": ["Webkit"], "textEmphasisColor": ["Webkit"], "boxDecorationBreak": ["Webkit"], "clipPath": ["Webkit"], "maskImage": ["Webkit"], "maskMode": ["Webkit"], "maskRepeat": ["Webkit"], "maskPosition": ["Webkit"], "maskClip": ["Webkit"], "maskOrigin": ["Webkit"], "maskSize": ["Webkit"], "maskComposite": ["Webkit"], "mask": ["Webkit"], "maskBorderSource": ["Webkit"], "maskBorderMode": ["Webkit"], "maskBorderSlice": ["Webkit"], "maskBorderWidth": ["Webkit"], "maskBorderOutset": ["Webkit"], "maskBorderRepeat": ["Webkit"], "maskBorder": ["Webkit"], "maskType": ["Webkit"], "textDecorationStyle": ["Webkit"], "textDecorationSkip": ["Webkit"], "textDecorationLine": ["Webkit"], "textDecorationColor": ["Webkit"], "filter": ["Webkit"], "fontFeatureSettings": ["Webkit"], "breakAfter": ["Webkit", "Moz", "ms"], "breakBefore": ["Webkit", "Moz", "ms"], "breakInside": ["Webkit", "Moz", "ms"], "columnCount": ["Webkit", "Moz"], "columnFill": ["Webkit", "Moz"], "columnGap": ["Webkit", "Moz"], "columnRule": ["Webkit", "Moz"], "columnRuleColor": ["Webkit", "Moz"], "columnRuleStyle": ["Webkit", "Moz"], "columnRuleWidth": ["Webkit", "Moz"], "columns": ["Webkit", "Moz"], "columnSpan": ["Webkit", "Moz"], "columnWidth": ["Webkit", "Moz"], "flex": ["Webkit"], "flexBasis": ["Webkit"], "flexDirection": ["Webkit"], "flexGrow": ["Webkit"], "flexFlow": ["Webkit"], "flexShrink": ["Webkit"], "flexWrap": ["Webkit"], "alignContent": ["Webkit"], "alignItems": ["Webkit"], "alignSelf": ["Webkit"], "justifyContent": ["Webkit"], "order": ["Webkit"], "transform": ["Webkit"], "transformOrigin": ["Webkit"], "transformOriginX": ["Webkit"], "transformOriginY": ["Webkit"], "backfaceVisibility": ["Webkit"], "perspective": ["Webkit"], "perspectiveOrigin": ["Webkit"], "transformStyle": ["Webkit"], "transformOriginZ": ["Webkit"], "animation": ["Webkit"], "animationDelay": ["Webkit"], "animationDirection": ["Webkit"], "animationFillMode": ["Webkit"], "animationDuration": ["Webkit"], "animationIterationCount": ["Webkit"], "animationName": ["Webkit"], "animationPlayState": ["Webkit"], "animationTimingFunction": ["Webkit"], "backdropFilter": ["Webkit"], "fontKerning": ["Webkit"], "scrollSnapType": ["Webkit", "ms"], "scrollSnapPointsX": ["Webkit", "ms"], "scrollSnapPointsY": ["Webkit", "ms"], "scrollSnapDestination": ["Webkit", "ms"], "scrollSnapCoordinate": ["Webkit", "ms"], "shapeImageThreshold": ["Webkit"], "shapeImageMargin": ["Webkit"], "shapeImageOutside": ["Webkit"], "hyphens": ["Webkit", "Moz", "ms"], "flowInto": ["Webkit", "ms"], "flowFrom": ["Webkit", "ms"], "regionFragment": ["Webkit", "ms"], "textAlignLast": ["Moz"], "tabSize": ["Moz"], "wrapFlow": ["ms"], "wrapThrough": ["ms"], "wrapMargin": ["ms"], "gridTemplateColumns": ["ms"], "gridTemplateRows": ["ms"], "gridTemplateAreas": ["ms"], "gridTemplate": ["ms"], "gridAutoColumns": ["ms"], "gridAutoRows": ["ms"], "gridAutoFlow": ["ms"], "grid": ["ms"], "gridRowStart": ["ms"], "gridColumnStart": ["ms"], "gridRowEnd": ["ms"], "gridRow": ["ms"], "gridColumn": ["ms"], "gridColumnEnd": ["ms"], "gridColumnGap": ["ms"], "gridRowGap": ["ms"], "gridArea": ["ms"], "gridGap": ["ms"], "textSizeAdjust": ["Webkit", "ms"], "transitionDelay": ["Webkit"], "transitionDuration": ["Webkit"], "transitionProperty": ["Webkit"], "transitionTimingFunction": ["Webkit"] }
};
module.exports = exports["default"];
});

var cursor_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var isPrefixedValue_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;

var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];
});

var crossFade_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];
});

var filter_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];
});

var flex_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: true,
  'inline-flex': true
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value];
  }
}
module.exports = exports['default'];
});

var flexboxOld_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];
});

var gradient_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var imageSet_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];
});

var position_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];
});

var sizing_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache$1 = {};

function hyphenateStyleName(string) {
    return string in cache$1
    ? cache$1[string]
    : cache$1[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

var index$6 = hyphenateStyleName;

var hyphenateProperty_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = index$6;

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];
});

var transition_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = hyphenateProperty_1;

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = capitalizeString_1;

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];
});

var index$5 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPrefixer = createPrefixer_1;

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _staticData = staticData;

var _staticData2 = _interopRequireDefault(_staticData);

var _cursor = cursor_1;

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = crossFade_1;

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = filter_1;

var _filter2 = _interopRequireDefault(_filter);

var _flex = flex_1;

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = flexboxOld_1;

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = gradient_1;

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = imageSet_1;

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = position_1;

var _position2 = _interopRequireDefault(_position);

var _sizing = sizing_1;

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = transition_1;

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

exports.default = (0, _createPrefixer2.default)({
  prefixMap: _staticData2.default.prefixMap,
  plugins: plugins
});
module.exports = exports['default'];
});

var addPrefix = unwrapExports(index$5);

// 

var noUnitsNumberKeys = [
  'flex',
  'opacity',
  'zIndex',
  'fontWeight',
  'lines'
];

/**
 * remove comments from a cssText.
 */
function trimComment (cssText) {
  return cssText.replace(/(?:\/\*)[^*]*\*\//g, '')
}

var support = null;

function supportSticky () {
  if (support !== null) {
    return support
  }
  var element = window.document.createElement('div');
  var elementStyle = element.style;
  elementStyle.cssText = 'position:-webkit-sticky;position:sticky;';
  support = elementStyle.position.indexOf('sticky') !== -1;
  return support
}

var regPercentage = /^[+-]?\d+(\.\d+)?%$/;
function isPercentage (val) {
  return regPercentage.test(val)
}

var regUnitsNum = /^([+-]?\d+(?:\.\d+)?)([p,w]x)?$/; // support units: px, wx.
function normalizeUnitsNum (val) {
  var match = val.match(regUnitsNum);
  if (!match) { return '' }
  var unit = 'px'; // px by default.
  if (match[2]) {
    unit = match[2];
  }
  return parseScale(parseFloat(match[1]), unit)
}

function parseScale (val, unit) {
  var ref = getViewportInfo();
  var scale = ref.scale;
  var dpr = ref.dpr;
  var unitScaleMap = {
    px: scale,
    wx: scale * dpr
  };
  return val * unitScaleMap[unit] + 'px'
}

function normalizeString (styleKey, styleVal) {
  if (isPercentage(styleVal)) {
    return styleVal
  }

  // 1. test if is a regular scale css. e.g. `width: 100px;`
  var unitsNum = normalizeUnitsNum(styleVal);
  if (unitsNum) { return unitsNum }

  // 2. test if is a translate scale. e.g. `transform: translate2d(1px, 2px);`
  var regTranslateString = /translate[^(]*\([\d ,.pwx]+\)/i; // unit support: wx, px.
  if (styleKey.match(/transform/i) && regTranslateString.test(styleVal)) {
    var val = styleVal.replace(regTranslateString, function (translate) {
      var reg = /([+-]?\d+(?:\.\d+)?)([p,w]x)?(?![dD])/g;
      return translate.replace(reg, function (m, $1, $2) {
        var unit = $2 || 'px';
        return parseScale($1, unit)
      })
    });
    return val
  }

  // 3. test if is a border style. e.g. `border: 1px solid red;`
  var regBorderKey = /^border(?:-(?:top|bottom|left|right))?$/;
  var regBorderVal = /^([+-]?\d+(?:\.\d+)?)([p ,w]x)?\s+/;
  if (regBorderKey.test(styleKey) && regBorderVal.test(styleVal)) {
    var reg = /^([+-]?\d+(?:\.\d+)?)([p,w]x)?/;
    var val$1 = styleVal.replace(reg, function (m, $1, $2) {
      var unit = $2 || 'px';
      return parseScale($1, unit)
    });
    return val$1
  }

  // otherwise
  return styleVal
}

function autoPrefix (style) {
  return addPrefix(style)
}

function normalizeNumber (styleKey, styleVal) {
  var ref = getViewportInfo();
  var scale = ref.scale;
  return styleVal * scale + 'px'
}

/**
 * normalize style to adapte to current viewport by multiply current scale.
 * @param  {object} style: should be camelCase.
 */
function normalizeStyle (style) {
  var res = {};
  for (var key in style) {
    var val = style[key];
    if (noUnitsNumberKeys.indexOf(key) > -1) {
      res[key] = val;
      continue
    }
    switch (typeof val) {
      case 'string':
        res[key] = normalizeString(key, val);
        break
      case 'number':
        res[key] = normalizeNumber(key, val);
        break
      default:
        res[key] = val;
        break
    }
  }
  return res
}

// 

var toString$2 = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString$2.call(obj) === OBJECT_STRING
}

var ARRAY_STRING = '[object Array]';
function isArray (arr) {
  return toString$2.call(arr) === ARRAY_STRING
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c.toUpperCase(); })
});

function camelizeKeys (obj) {
  var res = {};
  for (var key in obj) {
    res[camelize(key)] = obj[key];
  }
  return res
}

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

function hyphenateKeys (obj) {
  var res = {};
  for (var key in obj) {
    res[hyphenate(key)] = obj[key];
  }
  return res
}

var vendorsReg = /webkit-|moz-|o-|ms-/;
function hyphenateStyleKeys (obj) {
  var res = {};
  for (var key in obj) {
    var hk = hyphenate(key).replace(vendorsReg, function ($0) {
      return '-' + $0
    });
    res[hk] = obj[key];
  }
  return res
}

function camelToKebab (name) {
  if (!name) { return '' }
  return name.replace(/([A-Z])/g, function (g, g1) {
    return ("-" + (g1.toLowerCase()))
  })
}

function appendCss (css, cssId, replace) {
  var style = document.getElementById(cssId);
  if (style && replace) {
    style.parentNode.removeChild(style);
    style = null;
  }
  if (!style) {
    style = document.createElement('style');
    style.type = 'text/css';
    cssId && (style.id = cssId);
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.appendChild(document.createTextNode(css));
}

function nextFrame (callback) {
  var runner = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || (function (cb) { return setTimeout(cb, 16); });
  runner(callback);
}

function toCSSText (object) {
  if (!object) { return }
  var obj = hyphenateStyleKeys(object);
  var cssText = '';
  for (var key in obj) {
    cssText += key + ":" + (obj[key]) + ";";
  }
  return cssText
}


var utils$1 = Object.freeze({
	cached: cached,
	camelize: camelize,
	camelizeKeys: camelizeKeys,
	capitalize: capitalize,
	hyphenate: hyphenate,
	hyphenateKeys: hyphenateKeys,
	hyphenateStyleKeys: hyphenateStyleKeys,
	camelToKebab: camelToKebab,
	appendCss: appendCss,
	nextFrame: nextFrame,
	toCSSText: toCSSText,
	extend: extend,
	extendKeys: extendKeys,
	extractKeys: extractKeys,
	bind: bind,
	debounce: debounce,
	depress: depress,
	throttle: throttle,
	createEvent: createEvent,
	createCustomEvent: createCustomEvent,
	dispatchEvent: dispatchEvent,
	mapFormEvents: mapFormEvents,
	getParentScroller: getParentScroller,
	hasIntersection: hasIntersection,
	isElementVisible: isElementVisible,
	isComponentVisible: isComponentVisible,
	watchAppear: watchAppear,
	applySrc: applySrc,
	fireLazyload: fireLazyload,
	getThrottleLazyload: getThrottleLazyload,
	trimComment: trimComment,
	supportSticky: supportSticky,
	isPercentage: isPercentage,
	normalizeUnitsNum: normalizeUnitsNum,
	normalizeString: normalizeString,
	autoPrefix: autoPrefix,
	normalizeNumber: normalizeNumber,
	normalizeStyle: normalizeStyle,
	isPlainObject: isPlainObject,
	isArray: isArray
});

function transitionOnce (vnode, config, callback) {
  var duration = config.duration || 1000; // ms
  var timing = config.timingFunction || 'ease';
  var delay = config.delay || 0;  // ms

  // TODO: parse transition properties
  var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

  var dom = vnode.$el;
  var transitionEndHandler = function (event) {
    event.stopPropagation();
    dom.removeEventListener('webkitTransitionEnd', transitionEndHandler);
    dom.removeEventListener('transitionend', transitionEndHandler);
    dom.style.transition = '';
    dom.style.webkitTransition = '';
    callback();
  };

  dom.style.transition = transitionValue;
  dom.style.webkitTransition = transitionValue;
  dom.addEventListener('webkitTransitionEnd', transitionEndHandler);
  dom.addEventListener('transitionend', transitionEndHandler);

  nextFrame(function () {
    dom.style.cssText
      += toCSSText(autoPrefix(normalizeStyle(camelizeKeys(config.styles))) || {});
  });
}

var animation = {
  /**
   * transition
   * @param  {String} vnode
   * @param  {Object} config
   * @param  {String} callback
   */
  transition: function transition (vnode, config, callback) {
    if (!config.styles) { return }
    return transitionOnce(vnode, config, function () {
      callback && callback();
    })
  }
};

function getParentScroller$1 (vnode) {
  if (!vnode) { return null }
  if (vnode.judType === 'scroller' || vnode.judType === 'list') {
    return vnode
  }
  return getParentScroller$1(vnode.$parent)
}

function now () {
  var now = window.performance && window.performance.now
      ? window.performance.now.bind(window.performance) : Date.now;
  return now()
}

function scrollElement (dSuffix, position) {
  this[("scroll" + dSuffix)] = position;
}

/**
 * self invoked function that, given a context, steps through scrolling
 * @method step
 * @param {Object} context
 */
function step$1 (context) {
  // call method again on next available frame
  context.frame = window.requestAnimationFrame(step$1.bind(window, context));

  var time = now();
  var elapsed = (time - context.startTime) / 468;

  // avoid elapsed times higher than one
  elapsed = elapsed > 1 ? 1 : elapsed;

  // apply easing to elapsed time
  var value = ease(elapsed);

  var currentPosition = context.startPosition + (context.position - context.startPosition) * value;

  context.method.call(context.scrollable, context.dSuffix, currentPosition);

  // return when end points have been reached
  if (currentPosition === context.position) {
    window.cancelAnimationFrame(context.frame);
    return
  }
}

/**
 * returns result of applying ease math function to a number
 * @method ease
 * @param {Number} k
 * @returns {Number}
 */
function ease (k) {
  return 0.5 * (1 - Math.cos(Math.PI * k))
}

var dom = {
  /**
   * scrollToElement
   * @param  {String} vnode
   * @param  {Object} options {offset:Number}
   *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
   */
  scrollToElement: function (vnode, options) {
    var scroller = getParentScroller$1(vnode);
    var scrollDirection = scroller.scrollDirection || 'vertical';

    if (scroller && scroller.$el && vnode.$el) {
      // if it's a list, then the listVnode.scrollDirection is undefined. just
      // assum it is the default value 'vertical'.
      var dSuffix = ({
        horizontal: 'Left',
        vertical: 'Top'
      })[scrollDirection];
      var offset = vnode.$el[("offset" + dSuffix)];

      if (options) {
        offset += Number(options.offset) || 0;
        offset *= jud.config.env.scale; /* adapt offset to different screen scales. */
      }
      else {
        console.warn('[Vue Render] The second parameter of "scrollToElement" is required, '
          + 'otherwise it may not works well on native.');
      }

      step$1({
        scrollable: scroller.$el,
        startTime: now(),
        frame: null,
        startPosition: scroller.$el[("scroll" + dSuffix)],
        position: offset,
        method: scrollElement,
        dSuffix: dSuffix
      });
    }
  },

  /**
   * getComponentRect
   * @param {String} vnode
   * @param {Function} callback
   */
  getComponentRect: function (vnode, callback) {
    var info = { result: false };

    if (vnode && vnode === 'viewport') {
      info.result = true;
      info.size = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        top: 0,
        left: 0,
        right: document.documentElement.clientWidth,
        bottom: document.documentElement.clientHeight
      };
    }
    else if (vnode && vnode.$el) {
      info.result = true;
      info.size = vnode.$el.getBoundingClientRect();
    }

    var message = info.result ? info : {
      result: false,
      errMsg: 'Illegal parameter'
    };

    callback && callback(message);
    return message
  },

  /**
   * for adding fontFace
   * @param {string} key fontFace
   * @param {object} styles rules
   */
  addRule: function (key, styles) {
    key = camelToKebab(key);
    var stylesText = '';
    for (var k in styles) {
      if (styles.hasOwnProperty(k)) {
        stylesText += camelToKebab(k) + ':' + styles[k] + ';';
      }
    }
    var styleText = "@" + key + "{" + stylesText + "}";
    appendCss(styleText, 'dom-added-rules');
  }
};

var queue$1 = [];
var isProcessing = false;
var toastWin;
var TOAST_WIN_CLASS_NAME = 'jud-toast';

var DEFAULT_DURATION = 0.8;

function showToastWindow (msg, callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    toastWin = document.createElement('div');
    toastWin.classList.add(TOAST_WIN_CLASS_NAME, 'hide');
    document.body.appendChild(toastWin);
  }
  toastWin.textContent = msg;
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.remove('hide');
  }, 0);
}

function hideToastWindow (callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    return
  }
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.add('hide');
  }, 0);
}

var toast = {
  push: function (msg, duration) {
    queue$1.push({
      msg: msg,
      duration: duration || DEFAULT_DURATION
    });
    this.show();
  },

  show: function () {
    var that = this;

    // All messages had been toasted already, so remove the toast window,
    if (!queue$1.length) {
      toastWin && toastWin.parentNode.removeChild(toastWin);
      toastWin = null;
      return
    }

    // the previous toast is not ended yet.
    if (isProcessing) {
      return
    }
    isProcessing = true;

    var toastInfo = queue$1.shift();
    showToastWindow(toastInfo.msg, function () {
      setTimeout(function () {
        hideToastWindow(function () {
          isProcessing = false;
          that.show();
        });
      }, toastInfo.duration * 1000);
    });
  }
};

// there will be only one instance of modal.
var MODAL_WRAP_CLASS = 'jud-modal-wrap';
var MODAL_NODE_CLASS = 'jud-modal-node';

function Modal () {
  this.wrap = document.querySelector(MODAL_WRAP_CLASS);
  this.node = document.querySelector(MODAL_NODE_CLASS);
  if (!this.wrap) {
    this.createWrap();
  }
  if (!this.node) {
    this.createNode();
  }
  this.clearNode();
  this.createNodeContent();
  this.bindEvents();
}

Modal.prototype = {

  show: function () {
    this.wrap.style.display = 'block';
    this.node.classList.remove('hide');
  },

  destroy: function () {
    document.body.removeChild(this.wrap);
    document.body.removeChild(this.node);
    this.wrap = null;
    this.node = null;
  },

  createWrap: function () {
    this.wrap = document.createElement('div');
    this.wrap.className = MODAL_WRAP_CLASS;
    document.body.appendChild(this.wrap);
  },

  createNode: function () {
    this.node = document.createElement('div');
    this.node.classList.add(MODAL_NODE_CLASS, 'hide');
    document.body.appendChild(this.node);
  },

  clearNode: function () {
    this.node.innerHTML = '';
  },

  createNodeContent: function () {

    // do nothing.
    // child classes can override this method.
  },

  bindEvents: function () {
    this.wrap.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
};

var CONTENT_CLASS = 'content';
var MSG_CLASS = 'content-msg';
var BUTTON_GROUP_CLASS = 'btn-group';
var BUTTON_CLASS = 'btn';

function Alert (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  Modal.call(this);
  this.node.classList.add('jud-alert');
}

Alert.prototype = Object.create(Modal.prototype);

Alert.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS);
  this.node.appendChild(buttonGroup);
  var button = document.createElement('div');
  button.classList.add(BUTTON_CLASS, 'alert-ok');
  button.appendChild(document.createTextNode(this.okTitle));
  buttonGroup.appendChild(button);
};

Alert.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var button = this.node.querySelector('.' + BUTTON_CLASS);
  button.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback();
  }.bind(this));
};

var CONTENT_CLASS$1 = 'content';
var MSG_CLASS$1 = 'content-msg';
var BUTTON_GROUP_CLASS$1 = 'btn-group';
var BUTTON_CLASS$1 = 'btn';

function Confirm (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('jud-confirm');
}

Confirm.prototype = Object.create(Modal.prototype);

Confirm.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$1);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$1);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
  this.node.appendChild(buttonGroup);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Confirm.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
  btnOk.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.okTitle);
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.cancelTitle);
  }.bind(this));
};

var CONTENT_CLASS$2 = 'content';
var MSG_CLASS$2 = 'content-msg';
var BUTTON_GROUP_CLASS$2 = 'btn-group';
var BUTTON_CLASS$2 = 'btn';
var INPUT_WRAP_CLASS = 'input-wrap';
var INPUT_CLASS = 'input';

function Prompt (config) {
  this.msg = config.message || '';
  this.defaultMsg = config.default || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('jud-prompt');
}

Prompt.prototype = Object.create(Modal.prototype);

Prompt.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$2);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$2);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var inputWrap = document.createElement('div');
  inputWrap.classList.add(INPUT_WRAP_CLASS);
  content.appendChild(inputWrap);
  var input = document.createElement('input');
  input.classList.add(INPUT_CLASS);
  input.type = 'text';
  input.autofocus = true;
  input.placeholder = this.defaultMsg;
  inputWrap.appendChild(input);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Prompt.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
  var that = this;
  btnOk.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.okTitle,
      data: val
    });
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.cancelTitle,
      data: val
    });
  }.bind(this));
};

var _css = "\n.jud-toast {\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  z-index: 1999999999;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 50%;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.6;\n  -webkit-transition: all 0.4s ease-in-out;\n          transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\n\n.jud-toast.hide {\n  opacity: 0;\n}\n\n.jud-alert .jud-alert-ok {\n  width: 100%;\n}\n\n.jud-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.jud-confirm .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\n.jud-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.jud-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.jud-modal-node.hide {\n  display: none;\n}\n\n.jud-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 0.013333rem solid #ddd;\n}\n\n.jud-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.jud-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.jud-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.jud-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.jud-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.426667rem;\n  border: 0.013333rem solid #999;\n}\n\n.jud-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.jud-prompt .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n";

// TODO: rewrite the modal styles
var modal = {

  // duration: default is 0.8 seconds.
  toast: function (config) {
    toast.push(config.message, config.duration);
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - callback
  alert: function (config, callback) {
    config.callback = function () {
      callback && callback();
    };
    new Alert(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  confirm: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Confirm(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  prompt: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Prompt(config).show();
  }
};

var modal$1 = {
  init: function (Jud) {
    Jud.utils.appendCss(_css, 'jud-mud-modal');
    Jud.registerModule('modal', modal);
  }
};

/**
 * Navigator module
 */

// TODO: config.animated
var navigator$1 = {
  push: function (config, callback) {
    window.location.href = config.url;
    callback && callback();
  },

  pop: function (config, callback) {
    window.history.back();
    callback && callback();
  }
};

/**
 * Webview module
 */

var webview = {
  goBack: function goBack (vnode) {
    if (vnode && typeof vnode.goBack === 'function') {
      vnode.goBack();
    }
  },
  goForward: function goForward (vnode) {
    if (vnode && typeof vnode.goForward === 'function') {
      vnode.goForward();
    }
  },
  reload: function reload (vnode) {
    if (vnode && typeof vnode.reload === 'function') {
      vnode.reload();
    }
  }
};

// modules from render/browesr
// custom modules
var legacyModules = {
  event: event$1,
  geolocation: geolocation$1,
  pageInfo: pageInfo$1,
  storage: storage$1,
  stream: stream$1,
  clipboard: clipboard$1
};

var modules = {
  animation: animation,
  dom: dom,
  navigator: navigator$1,
  webview: webview
};

var modules$1 = {
  init: function init (jud) {
    for (var k in legacyModules) {
      jud.install(legacyModules[k]);
    }
    jud.install(modal$1);
    for (var k$1 in modules) {
      jud.registerModule(k$1, modules[k$1]);
    }
  }
};

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){Object.defineProperty(this,"val",{value:a.toString(),enumerable:!0}),this.gt=function(a){return c.compare(this,a)>0},this.gte=function(a){return c.compare(this,a)>=0},this.lt=function(a){return c.compare(this,a)<0},this.lte=function(a){return c.compare(this,a)<=0},this.eq=function(a){return 0===c.compare(this,a)};}b.env=b.env||{},c.prototype.toString=function(){return this.val},c.prototype.valueOf=function(){for(var a=this.val.split("."),b=[],c=0;c<a.length;c++){var d=parseInt(a[c],10);isNaN(d)&&(d=0);var e=d.toString();e.length<5&&(e=Array(6-e.length).join("0")+e),b.push(e),1===b.length&&b.push(".");}return parseFloat(b.join(""))},c.compare=function(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d){ return-1; }if(d>e){ return 1 }}return 0},b.version=function(a){return new c(a)};}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.location.search.replace(/^\?/,"");if(b.env.params={},c){ for(var d=c.split("&"),e=0;e<d.length;e++){d[e]=d[e].split("=");try{b.env.params[d[e][0]]=decodeURIComponent(d[e][1]);}catch(f){b.env.params[d[e][0]]=d[e][1];}} }}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;if(c=d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)){ b.env.os={name:"Windows Phone",isWindowsPhone:!0,version:c[1]}; }else if(d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))){ b.env.os={version:c[1]},d.match(/Mobile\s+Safari/)?(b.env.os.name="Android",b.env.os.isAndroid=!0):(b.env.os.name="AndroidPad",b.env.os.isAndroidPad=!0); }else if(c=d.match(/(iPhone|iPad|iPod)/)){var e=c[1];c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.os={name:e,isIPhone:"iPhone"===e||"iPod"===e,isIPad:"iPad"===e,isIOS:!0,version:c[1].split("_").join(".")};}else { b.env.os={name:"unknown",version:"0.0.0"}; }b.version&&(b.env.os.version=b.version(b.env.os.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;(c=d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/))?b.env.browser={name:"UC",isUC:!0,version:c[1]}:(c=d.match(/MQQBrowser\/([\d\.]+)/))?b.env.browser={name:"QQ",isQQ:!0,version:c[1]}:(c=d.match(/Firefox\/([\d\.]+)/))?b.env.browser={name:"Firefox",isFirefox:!0,version:c[1]}:(c=d.match(/MSIE\s([\d\.]+)/))||(c=d.match(/IEMobile\/([\d\.]+)/))?(b.env.browser={version:c[1]},d.match(/IEMobile/)?(b.env.browser.name="IEMobile",b.env.browser.isIEMobile=!0):(b.env.browser.name="IE",b.env.browser.isIE=!0),d.match(/Android|iPhone/)&&(b.env.browser.isIELikeWebkit=!0)):(c=d.match(/(?:Chrome|CriOS)\/([\d\.]+)/))?(b.env.browser={name:"Chrome",isChrome:!0,version:c[1]},d.match(/Version\/[\d+\.]+\s*Chrome/)&&(b.env.browser.name="Chrome Webview",b.env.browser.isWebview=!0)):d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))?b.env.browser={name:"Android",isAndroid:!0,version:c[1]}:d.match(/iPhone|iPad|iPod/)?d.match(/Safari/)?(c=d.match(/Version\/([\d\.]+)/),b.env.browser={name:"Safari",isSafari:!0,version:c[1]}):(c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.browser={name:"iOS Webview",isWebview:!0,version:c[1].replace(/\_/g,".")}):b.env.browser={name:"unknown",version:"0.0.0"},b.version&&(b.env.browser.version=b.version(b.env.browser.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.navigator.userAgent;c.match(/Weibo/i)?b.env.thirdapp={appname:"Weibo",isWeibo:!0}:c.match(/MicroMessenger/i)?b.env.thirdapp={appname:"Weixin",isWeixin:!0}:b.env.thirdapp=!1;}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d,e=a.navigator.userAgent;(d=e.match(/WindVane[\/\s]([\d\.\_]+)/))&&(c=d[1]);var f=!1,g="",h="",i="";(d=e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i))&&(f=!0,g=d[1],i=d[2],h=g.indexOf("-PD")>0?b.env.os.isIOS?"iPad":b.env.os.isAndroid?"AndroidPad":b.env.os.name:b.env.os.name),!g&&e.indexOf("TBIOS")>0&&(g="TB"),f?b.env.jdapp={windvane:b.version(c||"0.0.0"),appname:g||"unkown",version:b.version(i||"0.0.0"),platform:h||b.env.os.name}:b.env.jdapp=!1,b.env.jdiPhoneApp=b.env.jdapp;}(window,window.lib||(window.lib={}));

/**
 * get JUDEnvironment info.
 * @param  {object} viewportInfo: info about viewport.
 * @param  {object} envInfo: info parsed from lib.env.
 */
function initEnv (viewportInfo, envInfo) {
  var env = {
    platform: 'Web',
    judVersion: '0.11.5',
    userAgent: navigator.userAgent,
    appName: envInfo.jdapp ? envInfo.jdapp.appname : navigator.appName,
    appVersion: envInfo.jdapp ? envInfo.jdapp.version.val : null,
    osName: envInfo.browser ? envInfo.browser.name : null,
    osVersion: envInfo.browser ? envInfo.browser.version.val : null,
    deviceModel: envInfo.os.name || null
  };
  /**
   * viewportInfo: scale, deviceWidth, deviceHeight. dpr
   */
  return extend(env, viewportInfo)
}

// const viewportInfo = initViewport()

// 750 by default currently
// const scale = viewportInfo.scale

// const units = {
//   REM: 12 * scale,
//   VW: viewportInfo.deviceWidth / 100,
//   VH: viewportInfo.deviceHeight / 100,
//   VMIN: Math.min(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
//   VMAX: Math.max(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
//   CM: 96 / 2.54 * scale,
//   MM: 96 / 25.4 * scale,
//   Q: 96 / 25.4 / 4 * scale,
//   IN: 96 * scale,
//   PT: 96 / 72 * scale,
//   PC: 96 / 6 * scale,
//   PX: scale
// }

// Object.freeze(units)
// Object.freeze(env)

// window.CSS_UNIT = units
window.JUDEnvironment = initEnv(init$2(), window.lib.env);

/* global Vue */

var judModules = {};

var jud$3 = {
  __vue__: null,
  utils: utils$1,
  // units: window.CSS_UNIT,
  config: {
    env: window.JUDEnvironment,
    bundleUrl: location.href
  },

  requireModule: function requireModule (moduleName) {
    return judModules[moduleName]
  },

  registerModule: function registerModule () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return (ref = this).registerApiModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  require: function require () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    console.log("[Vue Render] \"jud.require\" is deprecated, please use \"jud.requireModule\" instead.");
    return (ref = this).requireModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  // TODO: rename to registerModule
  registerApiModule: function registerApiModule (name, module, meta) {
    var this$1 = this;

    if (!judModules[name]) {
      judModules[name] = {};
    }
    for (var key in module) {
      if (module.hasOwnProperty(key)) {
        judModules[name][key] = bind(module[key], this$1);
      }
    }
  },

  registerComponent: function registerComponent (name, component) {
    if (!this.__vue__) {
      return console.log('[Vue Render] Vue is not found. Please import Vue.js before register a component.')
    }
    if (component._css) {
      var css = component._css.replace(/\b[+-]?[\d.]+rem;?\b/g, function (m) {
        return parseFloat(m) * 75 * jud$3.config.env.scale + 'px'
      });
      appendCss(css, ("jud-cmp-" + name));
      delete component._css;
    }
    this.__vue__.component(name, component);
  },

  // @deprecated
  getRoot: function getRoot () {},

  // @deprecated
  sender: {
    performCallback: function performCallback (callback, data, keepAlive) {
      if (typeof callback === 'function') {
        return callback(data)
      }
      return null
    }
  },

  // @deprecated
  install: function install (module) {
    module.init(this);
  }
}; ['on', 'once', 'off', 'emit'].forEach(function (method) {
  jud$3[method] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (!this._vue) {
      this._vue = new Vue();
    }
    return (ref = this._vue)[("$" + method)].apply(ref, args)
    var ref;
  };
});

// import 'lazyimg'
// register built-in modules.
jud$3.install(modules$1);

function setVue (vue) {
  if (!vue) {
    throw new Error('[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.')
  }
  jud$3.__vue__ = vue;
  console.log(("[Vue Render] install Vue " + (vue.version) + "."));
}

window.jud = jud$3;
window.global = window;

/* istanbul ignore next */
/**
 * get scoped class style map from stylesheets in <head>.
 */
function getHeadStyleMap () {
  {
    tagBegin('getHeadStyleMap');
  }
  var needToRemoveStyleSheetNodes = [];
  var res = Array.from(document.styleSheets || [])
    .reduce(function (pre, styleSheet) {
      /**
       * why not using styleSheet.rules || styleSheet.cssRules to get css rules ?
       * because jud's components defined non-standard style attributes, which is
       * auto ignored when access rule.cssText.
       */
      if (!styleSheet.cssRules) {
        /**
         * no rules. just ignore this. probably a link stylesheet.
         */
        return pre
      }
      var strArr = trimComment(styleSheet.ownerNode.textContent.trim()).split(/}/);
      var len = strArr.length;
      var rules = [];
      for (var i = 0; i < len; i++) {
        var str = strArr[i];
        if (!str || str.match(/^\s*$/)) {
          continue
        }
        /**
         * should match these cases:
         * .a[data-v-xxx] { color: red }
         * .a[data-v-xxx], .b[data-v-xxx] { color: red; }
         *
         * should not match these cases:
         * .a { color: red; }
         * etc.
         */
        var match = str.match(/((?:,?\s*\.[\w-]+\[data-v-\w+\](?::\w+)?)+)\s*({[^}]+)/);
        if (!match) {
          // not the vue static class styles map. so acquire no rules for this styleSheet.
          // just jump through this styleSheet and go to analyzing next.
          return pre
        }
        var clsNms = match[1].split(',').map(function (n) { return n.trim(); });
        var cssText = match[2].replace(/[{}]/g, '').trim();
        var clsNmsIdx = 0;
        var clsNmsLen = clsNms.length;
        while (clsNmsIdx < clsNmsLen) {
          rules.push({
            selectorText: clsNms[clsNmsIdx],
            cssText: cssText
          });
          clsNmsIdx++;
        }
      }
      Array.from(rules).forEach(function (rule) {
        var selector = rule.selectorText || '';
        pre[selector] = trimComment(rule.cssText).split(';')
          .reduce(function (styleObj, statement) {
            statement = statement.trim();
            if (statement && statement.indexOf('/*') <= -1) {
              var resArr = statement.split(':').map(function (part) { return part.trim(); });
              styleObj[resArr[0]] = resArr[1];
            }
            return styleObj
          }, {});
      });
      /**
       * remove this styleSheet node since it's in the styleMap already. And this style
       * should only be fetched and used from styleMap to generate the final combined
       * component style, not from the stylesheet itself.
       */
      needToRemoveStyleSheetNodes.push(styleSheet.ownerNode);
      return pre
    }, {});
  needToRemoveStyleSheetNodes.forEach(function (node) {
    node.parentNode.removeChild(node);
  });
  {
    tagEnd('getHeadStyleMap');
  }
  return res
}

function getScopeIds (context) {
  var arr = [];
  var ctx = context;
  var scopeId;
  while (ctx) {
    scopeId = ctx.$options._scopeId;
    scopeId && arr.push(scopeId);
    ctx = ctx.$options.parent;
  }
  return arr
}

/**
 * get style in <style scoped> tags for this component.
 */
function getScopeStyle (context, classNames) {
  var scopeIds = getScopeIds(context);
  var style = {};
  var styleMap = jud.styleMap;
  var map;
  var cls;
  var clsNmsIdx;
  var scpIdsIdx;
  var clsNmsLen = classNames.length;
  var scpIdsLen = scopeIds.length;
  if (clsNmsLen <= 0) {
    return {}
  }
  clsNmsIdx = 0;
  while (clsNmsIdx < clsNmsLen) {
    scpIdsIdx = 0;
    while (scpIdsIdx < scpIdsLen) {
      cls = "." + (classNames[clsNmsIdx]) + "[" + (scopeIds[scpIdsIdx]) + "]";
      map = styleMap[cls];
      if (!map) {
        scpIdsIdx++;
        continue
      }
      for (var k in map) {
        style[k] = map[k];
      }
      scpIdsIdx++;
    }
    clsNmsIdx++;
  }
  return style
}

/**
 * get style merged with static styles, binding styles, and scoped class styles,
 * with keys in camelcase.
 */
function getComponentStyle (context) {
  if (!context.$vnode) {
    {
      return console.error('[vue-render] getComponentStyle failed: no $vnode in context.')
    }
    return {}
  }
  var cached$$1 = context.$vnode.data.cached;
  var data = context.$vnode.data;
  var staticClassNames = (typeof data.staticClass === 'string') ? data.staticClass.split(' ') : (data.staticClass || []);
  var classNames = (typeof data.class === 'string') ? data.class.split(' ') : (data.class || []);
  var clsNms = staticClassNames.concat(classNames);
  var style = getScopeStyle(context, clsNms);
  var res = extend(style, cached$$1, data.staticStyle, data.style);
  context.$vnode.data.cached = res;
  return addPrefix(normalizeStyle(camelizeKeys(res)))
}

function extractComponentStyle (context) {
  var style = getComponentStyle(context);
  if (style) {
    delete context.$vnode.data.staticStyle;
    delete context.$vnode.data.style;
  }
  return style
}

/**
 * get { width, height } (size) of current component from components' styles.
 */

// import { validateStyles } from '../validator'
var _css$1 = "\n.jud-switch {\n  border: 0.013333rem solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.333333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n          transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n\n.jud-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  box-shadow: #64bd63 0 0 0 0.533333rem inset;\n}\n\n.jud-switch-checked.jud-switch-disabled {\n  background-color: #A0CCA0;\n  box-shadow: #A0CCA0 0 0 0 0.533333rem inset;\n}\n\n.jud-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.jud-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n          transition: background-color 0.4s, left 0.2s;\n}\n\n.jud-switch-checked > .jud-switch-inner {\n  left: 0.533333rem;\n}\n";

var _switch = {
  props: {
    checked: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data () {
    return {
      isChecked: (this.checked !== 'false' && this.checked !== false),
      isDisabled: (this.disabled !== 'false' && this.disabled !== false)
    }
  },
  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['jud-switch'];
      this.isChecked && classArray.push('jud-switch-checked');
      this.isDisabled && classArray.push('jud-switch-disabled');
      return classArray.join(' ')
    }
  },
  methods: {
    toggle: function toggle () {
      // TODO: handle the events
      if (!this.isDisabled) {
        this.isChecked = !this.isChecked;
        this.$emit('change', { value: this.isChecked });
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('switch', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('span', {
      attrs: { 'jud-type': 'switch' },
      on: {
        click: function (event) {
          this$1.$emit('click', event);
          this$1.toggle();
        }
      },
      staticClass: this.wrapperClass,
      staticStyle: extractComponentStyle(this)
    }, [createElement('small', { staticClass: 'jud-switch-inner' })])
  },
  _css: _css$1
};

// import { validateStyles } from '../validator'

var _css$2 = "\n.jud-a {\n  text-decoration: none;\n}\n";

var a = {
  name: 'jud-a',
  props: {
    href: String
  },
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('a', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('html:a', {
      attrs: {
        'jud-type': 'a',
        href: this.href
      },
      on: this._createEventMap(),
      staticClass: 'jud-a jud-ct',
      staticStyle: extractComponentStyle(this)
    }, this._trimTextNodeChildren(this.$slots.default))
  },
  _css: _css$2
};

// import { validateStyles } from '../validator'
var _css$3 = "\nbody > .jud-div {\n  min-height: 100%;\n}\n";

var div = {
  name: 'jud-div',
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('div', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('html:div', {
      attrs: { 'jud-type': 'div' },
      on: this._createEventMap(),
      staticClass: 'jud-div jud-ct',
      staticStyle: extractComponentStyle(this)
    }, this._trimTextNodeChildren(this.$slots.default))
  },
  _css: _css$3
};

var _css$4 = "\n.jud-image, .jud-img {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n";
/**
 * get resize (stetch|cover|contain) related styles.
 */
function getResizeStyle (context) {
  var stretch = '100% 100%';
  var resize = context.resize || stretch;
  var bgSize = ['cover', 'contain', stretch].indexOf(resize) > -1 ? resize : stretch;
  // compatibility: http://caniuse.com/#search=background-size
  return { 'background-size': bgSize }
}

function preProcessSrc (context, url, mergedStyle) {
  // somehow the merged style in _prerender hook is gone.
  // just return the original src.
  if (!mergedStyle || !mergedStyle.width || !mergedStyle.height) {
    return url
  }
  var width = mergedStyle.width;
  var height = mergedStyle.height;
  return context.processImgSrc && context.processImgSrc(url, {
    width: parseFloat(width),
    height: parseFloat(height),
    quality: context.quality,
    sharpen: context.sharpen,
    original: context.original
  }) || url
}

var image = {
  props: {
    src: String,
    placeholder: String,
    resize: String,
    quality: String,
    sharpen: String,
    original: [String, Boolean]
  },

  updated: function updated () {
    this._fireLazyload();
  },

  mounted: function mounted () {
    this._fireLazyload();
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('image', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    // const style = this._normalizeInlineStyles(this.$vnode.data)
    var resizeStyle = getResizeStyle(this);
    var style = extractComponentStyle(this);
    return createElement('figure', {
      attrs: {
        'jud-type': 'image',
        'img-src': preProcessSrc(this, this.src, style),
        'img-placeholder': preProcessSrc(this, this.placeholder, style)
      },
      on: this._createEventMap(['load', 'error']),
      staticClass: 'jud-image jud-el',
      staticStyle: extend(style, resizeStyle)
    })
  },
  _css: _css$4
};

var supportedEvents = [
  'click', 'longpress', 'appear', 'disappear' ];

var scrollableTypes = ['scroller', 'list'];

var lazyloadWatched = false;
function watchLazyload () {
  lazyloadWatched = true
  ; [
    'scroll' ].forEach(function (evt) {
    window.addEventListener(evt, getThrottleLazyload(25, document.body));
  });
}

var base$1 = {
  beforeCreate: function beforeCreate () {
    if (!lazyloadWatched) {
      watchLazyload();
    }
    {
      tagBeforeCreate();
    }
  },

  mounted: function mounted () {
    if (!jud._root) {
      jud._root = this.$root.$el;
      jud._root.classList.add('jud-root');
    }
    watchAppear(this);
    {
      tagMounted();
    }
  },

  beforeUpdate: function beforeUpdate () {
    {
      tagBeforeUpdate();
    }
  },

  updated: function updated () {
    {
      tagUpdated();
    }
  },

  methods: {
    _getScopeIds: function _getScopeIds () {
      var arr = [];
      var ctx = this;
      var scopeId;
      while (ctx) {
        scopeId = ctx.$options._scopeId;
        scopeId && arr.push(scopeId);
        ctx = ctx.$options.parent;
      }
      return arr
    },

    _getParentScroller: function _getParentScroller () {
      var parent = this;
      while (parent && scrollableTypes.indexOf(parent.$options._componentTag) <= -1) {
        parent = parent.$options.parent;
      }
      return parent
    },

    _createEventMap: function _createEventMap (extras) {
      var this$1 = this;
      if ( extras === void 0 ) extras = [];

      var eventMap = {};
      supportedEvents.concat(extras).forEach(function (name) {
        eventMap[name] = function (event) { return this$1.$emit(name, event); };
      });
      return eventMap
    },

    _fireLazyload: function _fireLazyload (el) {
      {
        tagBegin('base._fireLazyload');
      }
      getThrottleLazyload(16)();
      {
        tagEnd('base._fireLazyload');
      }
    },

    _trimTextNodeChildren: function _trimTextNodeChildren (children) {
      if (Array.isArray(children)) {
        return children.filter(function (vnode) { return !!vnode.tag; })
      }
      return children
    }
  }
};

var warned = false;
var warnInfo = "[vue-render] after v0.11.3 there's no need to add $processStyle in vue-loader config anymore.";

var style = {
  beforeCreate: function beforeCreate () {
    // get static class style map from document's styleSheets.
    if (!jud.styleMap) {
      jud.styleMap = getHeadStyleMap();
    }
  },

  methods: {
    $processStyle: function $processStyle (style) {
      if (!warned) {
        warned = true;
        console.warn(warnInfo);
      }
      return style
    },

    _extractComponentStyle: function _extractComponentStyle () {
      return extractComponentStyle(this)
    },

    /**
     * get style from class, staticClass, style and staticStyle.
     * merge styles priority: high -> low
     *  1. data.style (bound style).
     *  2. data.staticStyle (inline styles).
     *  3. data.class style (bound class names).
     *  4. data.staticClass style (scoped styles or static classes).
     */
    _getComponentStyle: function _getComponentStyle (data) {
      return getComponentStyle(this)
    },

    _getParentRect: function _getParentRect () {
      var parentElm = this.$options._parentElm;
      return parentElm && parentElm.getBoundingClientRect()
    }
  }
};

var throttleScroll;
function getThrottledScroll (context) {
  if (!throttleScroll) {
    var wrapper = context.$refs.wrapper;
    var inner = context.$refs.inner;
    var preOffset = (context.scrollDirection === 'horizontal'
        ? wrapper.scrollLeft
        : wrapper.scrollTop)
      || 0;
    throttleScroll = throttle(function (evt) {
      var offset = context.scrollDirection === 'horizontal'
        ? wrapper.scrollLeft
        : wrapper.scrollTop;
      var indent = parseInt(context.offsetAccuracy);
      function triggerScroll () {
        var rect = inner.getBoundingClientRect();
        evt.contentSize = { width: rect.width, height: rect.height };
        evt.contentOffset = {
          x: wrapper.scrollLeft,
          /**
           * positive direciton for y-axis is down.
           * so should use negative operation on scrollTop.
           *
           *  (0,0)---------------> x
           *       |
           *       |
           *       |
           *       |
           *       v y
           *
           */
          y: -wrapper.scrollTop
        };
        context.$emit('scroll', evt);
      }
      if (indent
        && !isNaN(indent)
        && indent > 0
        && Math.abs(offset - preOffset) >= indent) {
        triggerScroll();
        preOffset = offset;
      }
      else if (!indent || isNaN(indent) || indent <= 0) {
        triggerScroll();
      }
    }, 16, true);
  }
  return throttleScroll
}

var scrollable = {
  props: {
    offsetAccuracy: [Number, String]
  },
  methods: {
    updateLayout: function updateLayout () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    handleScroll: function handleScroll (event) {
      getThrottleLazyload(25, this.$el, 'scroll')();
      getThrottledScroll(this)(event);
      if (this.reachBottom()) {
        this.$emit('loadmore', event);
      }
    },

    reachTop: function reachTop () {
      var wrapper = this.$refs.wrapper;
      return (!!wrapper) && (wrapper.scrollTop <= 0)
    },

    reachBottom: function reachBottom () {
      var wrapper = this.$refs.wrapper;
      var inner = this.$refs.inner;
      var offset = Number(this.loadmoreoffset) || 0;

      if (wrapper && inner) {
        var innerHeight = inner.getBoundingClientRect().height;
        var wrapperHeight = wrapper.getBoundingClientRect().height;
        return wrapper.scrollTop >= innerHeight - wrapperHeight - offset
      }
      return false
    },

    handleTouchStart: function handleTouchStart (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._loading || this._refresh) {
        var touch = event.changedTouches[0];
        this._touchParams = {
          reachTop: this.reachTop(),
          reachBottom: this.reachBottom(),
          startTouchEvent: touch,
          startX: touch.pageX,
          startY: touch.pageY,
          timeStamp: event.timeStamp
        };
      }
    },

    handleTouchMove: function handleTouchMove (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          this._touchParams.offsetY = offsetY;
          if (reachTop && this._refresh) {
            this._refresh.pullingDown(offsetY);
          }
          else if (reachBottom && this._loading) {
            this._loading.pullingUp(-offsetY);
          }
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          if (reachTop && this._refresh) {
            this._refresh.pullingEnd();
          }
          else if (reachBottom && this._loading) {
            this._loading.pullingEnd();
          }
        }
      }
      delete this._touchParams;
    }
  }
};

// 

// input and textare has some common api and event
var findEnterKeyType = function (key) {
  var keys = ['default', 'go', 'next', 'search', 'send'];
  if (keys.indexOf(key) > -1) {
    return key
  }
  return 'done'
};

var inputCommon = {
  methods: {
    focus: function focus () {
      this.$el && this.$el.focus();
    },
    blur: function blur () {
      this.$el && this.$el.blur();
    },
    // support enter key event
    createKeyboardEvent: function createKeyboardEvent (events) {
      var customKeyType = this.returnKeyType;
      var self = this;
      if (this._events['return']) {
        var keyboardEvents = {
          'keyup': function (ev) {
            var code = ev.keyCode;
            var key = ev.key;
            if (code === 13) {
              if (key.toLowerCase() === 'tab') {
                key = 'next';
              }
              var rightKeyType = findEnterKeyType(customKeyType);
              ev.returnKeyType = rightKeyType;
              ev.value = ev.target.value;
              self.$emit('return', ev);
            }
          }
        };
        events = extend(events, keyboardEvents);
      }
      return events
    }
  }
};

/**
 * @fileOverview Input component.
 * Support v-model only if vue version is large than 2.2.0
 */
// import { validateStyles } from '../validator'

var _css$5 = "\n.jud-input, .jud-textarea {\n  font-size: 0.426667rem;\n}\n.jud-input:focus, .jud-textarea:focus {\n  outline: none;\n}\n";

var input = {
  mixins: [inputCommon],
  props: {
    type: {
      type: String,
      default: 'text',
      validator: function validator (value) {
        return [
          'email', 'number', 'password', 'search', 'tel', 'text', 'url' ].indexOf(value) !== -1
      }
    },
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    maxlength: [String, Number],
    returnKeyType: String
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('input', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var events = extend(this._createEventMap(), mapFormEvents(this));
    return createElement('html:input', {
      attrs: {
        'jud-type': 'input',
        type: this.type,
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        maxlength: this.maxlength,
        'returnKeyType': this.returnKeyType
      },
      domProps: {
        value: this.value
      },
      on: this.createKeyboardEvent(events),
      staticClass: 'jud-input jud-el',
      staticStyle: extractComponentStyle(this)
    })
  },
  _css: _css$5
};

// import { validateStyles } from '../../validator'
var header = {
  data: function data () {
    return {
      sticky: false,
      initTop: 0,
      placeholder: null,
      supportSticky: supportSticky()
    }
  },

  mounted: function mounted () {
    this.initTop = this.$el.offsetTop;
    this.placeholder = window.document.createElement('div');
  },

  updated: function updated () {
    if (!this.sticky) {
      this.initTop = this.$el.offsetTop;
    }
  },

  methods: {
    addSticky: function addSticky () {
      this.sticky = true;
      this.placeholder.style.display = 'block';
      this.placeholder.style.width = this.$el.offsetWidth + 'px';
      this.placeholder.style.height = this.$el.offsetHeight + 'px';
      this.$el.parentNode.insertBefore(this.placeholder, this.$el);
    },

    removeSticky: function removeSticky () {
      this.sticky = false;
      try {
        this.$el.parentNode.removeChild(this.placeholder);
      }
      catch (e) {
      }
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('header', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('html:header', {
      attrs: { 'jud-type': 'header' },
      on: this._createEventMap(),
      ref: 'header',
      staticClass: 'jud-header jud-ct',
      class: { sticky: this.sticky, iossticky: this.supportSticky },
      staticStyle: extractComponentStyle(this)
    }, this.$slots.default)
  }
};

var listMixin = {
  methods: {
    handleListScroll: function handleListScroll (event) {
      this.handleScroll(event);

      if (supportSticky()) {
        return
      }

      var scrollTop = this.$el.scrollTop;
      var h = this.$children.filter(function (vm) { return vm.$refs.header; });

      if (h.length <= 0) {
        return
      }

      for (var i = 0; i < h.length; i++) {
        if (h[i].initTop < scrollTop) {
          h[i].addSticky();
        }
        else {
          h[i].removeSticky();
        }
      }
    }
  }
};

// import { validateStyles } from '../../../validator'
var index$8 = {
  name: 'list',
  mixins: [scrollable, listMixin],
  props: {
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['jud-list', 'jud-list-wrapper', 'jud-ct'];
      this._refresh && classArray.push('with-refresh');
      this._loading && classArray.push('with-loading');
      return classArray.join(' ')
    }
  },

  methods: {
    resetLoadmore: function resetLoadmore () {
      this._availableToFireLoadmore = true;
    },
    createChildren: function createChildren (h) {
      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        return true
      });
      return [
        h('html:div', {
          ref: 'inner',
          staticClass: 'jud-list-inner jud-ct'
        }, this._cells)
      ]
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.judType = 'list';

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('list', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this.$nextTick(function () {
      this$1.updateLayout();
    });

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'jud-type': 'list' },
      staticClass: this.wrapperClass,
      on: extend(this._createEventMap(), {
        scroll: this.handleListScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      }),
      staticStyle: extractComponentStyle(this)
    }, this.createChildren(createElement))
  }
};

// import { validateStyles } from '../../../validator'
var cell = {
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('cell', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('section', {
      attrs: { 'jud-type': 'cell' },
      on: this._createEventMap(),
      staticClass: 'jud-cell jud-ct',
      staticStyle: extractComponentStyle(this)
    }, this.$slots.default)
  }
};

// import { validateStyles } from '../../validator'
var scroller = {
  mixins: [scrollable, listMixin],
  props: {
    scrollDirection: {
      type: [String],
      default: 'vertical',
      validator: function validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    },
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    },
    // TODO: support loadmore retry
    loadmoreretry: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['jud-scroller', 'jud-scroller-wrapper', 'jud-ct'];
      if (this.scrollDirection === 'horizontal') {
        classArray.push('jud-scroller-horizontal');
      }
      else {
        classArray.push('jud-scroller-vertical');
      }
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren: function createChildren (h) {
      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        return true
      });
      return [
        h('html:div', {
          ref: 'inner',
          staticClass: 'jud-scroller-inner jud-ct'
        }, this._cells)
      ]
    },
    scrollTo: function scrollTo (vnode) {
      if (vnode && vnode.$el) {
        // TODO: add animation
        this.$el.scrollTop = vnode.$el.offsetTop;
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.judType = 'scroller';

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    this._cells = this.$slots.default || [];
    this.$nextTick(function () {
      this$1.updateLayout();
    });

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'jud-type': 'scroller' },
      on: extend(this._createEventMap(), {
        scroll: this.handleScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      }),
      staticClass: this.wrapperClass,
      staticStyle: extractComponentStyle(this)
    }, this.createChildren(createElement))
  }
};

var _css$7 = "\n.jud-indicator {\n  position: absolute;\n  z-index: 10;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  margin: 0;\n  padding: 0;\n}\n\n.jud-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.266667rem;\n  height: 0.266667rem;\n  background-color: #BBBBBB;\n}\n.jud-indicator-item + .jud-indicator-item {\n  margin-left: 0.133333rem;\n}\n\n.jud-indicator-item-active {\n  background-color: blue;\n}\n";

function getIndicatorItemStyle (spec, isActive) {
  var style = {};
  style['background-color'] = spec[isActive ? 'itemSelectedColor' : 'itemColor'];
  style['width'] = style['height'] = spec['itemSize'];
  return style
}

function _render (context, h) {
  var children = [];
  var mergedStyle = extractComponentStyle(context);
  // const mergedStyle = context._getComponentStyle(context.$vnode.data)
  // context.$vnode.data.cached = {}
  // extendKeys(context.$vnode.data.cached, mergedStyle, ['width', 'height'])
  var indicatorSpecStyle = extendKeys(
      {},
      mergedStyle,
      ['itemColor', 'itemSelectedColor', 'itemSize']
    );
  for (var i = 0; i < Number(context.count); ++i) {
    var classNames = ['jud-indicator-item jud-el'];
    var isActive = false;
    if (i === Number(context.active)) {
      classNames.push('jud-indicator-item-active');
      isActive = true;
    }
    children.push(h('mark', {
      staticClass: classNames.join(' '),
      staticStyle: getIndicatorItemStyle(indicatorSpecStyle, isActive)
    }));
  }
  context.$nextTick(function () {
    _reLayout(this, _getVirtualRect(this, mergedStyle), _getLtbr(this, mergedStyle));
  });
  return h('nav', {
    attrs: { 'jud-type': 'indicator' },
    staticClass: 'jud-indicator jud-ct',
    staticStyle: mergedStyle
  }, children)
}

/**
 * get indicator's virtual rect (width, height), which is the .
 */
function _getVirtualRect (context, mergedStyle) {
  var ct = context._getParentRect();
  var rect = ['width', 'height'].reduce(function (pre, key) {
    var msv = mergedStyle && mergedStyle[key];
    pre[key] = msv ? parseFloat(msv) : ct[key];
    return pre
  }, {});
  return rect
}

/**
 * get indicator's ltbr values (without units).
 */
function _getLtbr (context, mergedStyle) {
  return ['left', 'top', 'bottom', 'right'].reduce(function (pre, key) {
    var msv = mergedStyle && mergedStyle[key];
    // undefined, null, or '0px' -> o
    pre[key] = msv && parseFloat(msv) || 0;
    return pre
  }, {})
}

/**
 * get indicator's rect (width, height).
 */
function _getIndicatorRect (el) {
  var width, height;
  if (el.children.length === 1) {
    width = height = window.getComputedStyle(el.children[0]);
  }
  else {
    var itemComputedStyle = window.getComputedStyle(el.children[1]);
    var padding = parseFloat(itemComputedStyle.marginLeft);
    height = parseFloat(itemComputedStyle.height);
    width = el.children.length * (height + padding) - padding;
  }
  return { width: width, height: height }
}

/**
 * calculate and reset indicator's width, height, and ltbr.
 * @param {object} virtualRect. width and height of indicator's virtual rect box.
 * @param {object} ltbr. the user specified left, top, bottom, right pixels (without units).
 */
function _reLayout (context, virtualRect, ltbr) {
  var el = context.$el;
  var rect = _getIndicatorRect(el);
  var rectWithPx = Object.keys(rect).reduce(function (pre, key) {
    pre[key] = rect[key] + 'px';
    return pre
  }, {});
  extend(el.style, rectWithPx);
  var axisMap = [
    { dir: ltbr.left ? 'left' : ltbr.right ? 'right' : 'left', scale: 'width' },
    { dir: ltbr.top ? 'top' : ltbr.bottom ? 'bottom' : 'top', scale: 'height' }
  ];
  Object.keys(axisMap).forEach(function (key) {
    var ref = axisMap[key];
    var dir = ref.dir;
    var scale = ref.scale;
    el.style[dir] = ltbr[dir] + virtualRect[scale] / 2 - rect[scale] / 2 + 'px';
  });
}

var indicator = {
  name: 'indicator',
  methods: {
    show: function () {
      this.$el.style.visibility = 'visible';
    }
  },
  props: {
    count: [Number, String],
    active: [Number, String]
  },
  render: function render (createElement) {
    return _render(this, createElement)
  },
  _css: _css$7
};

var TRANSITION_TIME = 200;

// trigger scroll event frequency.
// const scrollDam = 16

var slideMixin = {
  methods: {
    // get standard index
    normalizeIndex: function normalizeIndex (index) {
      var newIndex = (index + this.frameCount) % this.frameCount;
      return Math.min(Math.max(newIndex, 0), this.frameCount - 1)
    },

    slideTo: function slideTo (index) {
      var this$1 = this;

      var newIndex = this.normalizeIndex(index);
      var inner = this.$refs.inner;
      var step = this._cells.length <= 1 ? 0 : this.currentIndex - index;
      this.innerOffset += Math.sign(step) * this.wrapperWidth;
      if (inner) {
        // const match = (inner.style.transform || inner.style.webkitTransform).match(/(\d+)px/)
        // const currentOffset = parseFloat(match[1])
        // TODO: will-change | set styles together
        inner.style.webkitTransition = "-webkit-transform .2s ease-in-out";
        inner.style.transition = "transform .2s ease-in-out";
        inner.style.webkitTransform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
        inner.style.transform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
        setTimeout(function () {
          inner.style.webkitTransition = '';
          inner.style.transition = '';
        }, TRANSITION_TIME);
      }
      // TODO: emit scroll event.
      // nextFrame()

      if (newIndex !== this.currentIndex) {
        this.currentIndex = newIndex;
        // replace $el with { attr, style } is a legacy usage. Is it necessary to
        // do this ? Or just tell devers to use inline functions to access attrs ?
        this.$emit('change', createEvent(this.$el, 'change', {
          index: this.currentIndex
        }));
        setTimeout(function () { this$1.reorder(); }, TRANSITION_TIME);
      }
    },

    reorder: function reorder () {
      var this$1 = this;

      var removeClone = function (clone, prevElm) {
        // switch current page.
        var curTransform = "translate3d(" + (-this$1.innerOffset) + "px, 0, 0)";
        prevElm.style.transform = curTransform;
        prevElm.style.webkitTransform = curTransform;
        // remove clone node.
        clone && clone.parentElement.removeChild(clone);
      };

      this.$nextTick(function () {
        if (this$1._cells.length <= 1) {
          return
        }

        var lastPrev = this$1._prevElm;
        var prevIndex = this$1.normalizeIndex(this$1.currentIndex - 1);
        var nextIndex = this$1.normalizeIndex(this$1.currentIndex + 1);
        var prevElm = this$1._prevElm = this$1._cells[prevIndex].elm;
        var nextElm = this$1._cells[nextIndex].elm;
        var currentElm = this$1._cells[this$1.currentIndex].elm;

        // put current slide on the top.
        currentElm.style.zIndex = 1;

        // clone prevCell if there are only tow slides.
        if (this$1._cells.length === 2) {
          this$1._clonePrev && removeClone(this$1._clonePrev, lastPrev);
          this$1._clonePrev = prevElm.cloneNode(true);
          this$1._clonePrev.classList.add('jud-slide-clone-prev');
          prevElm.parentElement.insertBefore(this$1._clonePrev, currentElm);
          if (!this$1._prevFired) {
            fireLazyload(this$1._clonePrev, true);
            this$1._prevFired = true;
          }
          prevElm = this$1._clonePrev;
        }

        var prevOffset = -this$1.wrapperWidth - this$1.innerOffset;
        prevElm.style.webkitTransform = "translate3d(" + prevOffset + "px, 0, 0)";
        prevElm.style.transform = "translate3d(" + prevOffset + "px, 0, 0)";
        var nextOffset = this$1.wrapperWidth - this$1.innerOffset;
        nextElm.style.webkitTransform = "translate3d(" + nextOffset + "px, 0, 0)";
        nextElm.style.transform = "translate3d(" + nextOffset + "px, 0, 0)";
      });
    },

    next: function next () {
      this.slideTo(this.currentIndex + 1);
    },

    prev: function prev () {
      this.slideTo(this.currentIndex - 1);
    },

    handleTouchStart: function handleTouchStart (event) {
      event.stopPropagation();
      var touch = event.changedTouches[0];
      this._touchParams = {
        originalTransform: this.$refs.inner.style.webkitTransform || this.$refs.inner.style.transform,
        startTouchEvent: touch,
        startX: touch.pageX,
        startY: touch.pageY,
        timeStamp: event.timeStamp
      };
    },

    handleTouchMove: function handleTouchMove (event) {
      event.stopPropagation();
      var tp = this._touchParams;
      if (!tp) { return }
      var ref = this._touchParams;
      var startX = ref.startX;
      var startY = ref.startY;
      var touch = event.changedTouches[0];
      var offsetX = touch.pageX - startX;
      var offsetY = touch.pageY - startY;
      tp.offsetX = offsetX;
      tp.offsetY = offsetY;
      var isV = tp.isVertical;
      if (typeof isV === 'undefined') {
        isV = tp.isVertical = Math.abs(offsetX) < Math.abs(offsetY);
        if (!isV) {
          this.$emit('scrollstart', createEvent(this.$el, 'scrollstart', {}));
        }
      }
      // vertical scroll. just ignore it.
      if (isV) {
        return
      }
      // horizontal scroll. trigger scroll event.
      event.preventDefault();
      var inner = this.$refs.inner;
      if (inner && offsetX) {
        // TODO: add throttle.
        this.$emit('scroll', createEvent(this.$el, 'scroll', {
          offsetXRatio: offsetX / this.wrapperWidth
        }));
        inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
        inner.style.webkitTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      event.stopPropagation();
      var tp = this._touchParams;
      if (!tp) { return }
      var isV = tp.isVertical;
      if (typeof isV === 'undefined') {
        return
      }
      var inner = this.$refs.inner;
      var offsetX = tp.offsetX;
      if (inner) {
        this.$emit('scrollend', createEvent(this.$el, 'scrollend'));
        // TODO: test the velocity if it's less than 0.2.
        var reset = Math.abs(offsetX / this.wrapperWidth) < 0.2;
        var direction = offsetX > 0 ? 1 : -1;
        var newIndex = reset ? this.currentIndex : (this.currentIndex - direction);
        this.slideTo(newIndex);
      }
      delete this._touchParams;
    }
  }
};

// import { validateStyles } from '../../validator'
var _css$6 = "\n.jud-slider-wrapper {\n  overflow: hidden;\n}\n\n.jud-slider-inner {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.jud-slider-cell {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden;\n}\n";

var index$9 = {
  mixins: [slideMixin],
  props: {
    'auto-play': {
      type: [String, Boolean],
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    }
  },

  data: function data () {
    return {
      currentIndex: 0,
      frameCount: 0
    }
  },

  methods: {
    computeWrapperSize: function computeWrapperSize () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    updateLayout: function updateLayout () {
      this.computeWrapperSize();
      var inner = this.$refs.inner;
      if (inner) {
        inner.style.width = this.wrapperWidth * this.frameCount + 'px';
      }
    },

    formatChildren: function formatChildren (createElement) {
      var children = this.$slots.default || [];
      var indicatorVnode;
      var cells = children.filter(function (vnode) {
        if (!vnode.tag) { return false }
        if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
          indicatorVnode = vnode;
          return false
        }
        return true
      }).map(function (vnode) {
        return createElement('li', {
          ref: 'cells',
          staticClass: 'jud-slider-cell'
        }, [vnode])
      });
      if (indicatorVnode) {
        indicatorVnode.data.attrs = indicatorVnode.data.attrs || {};
        indicatorVnode.data.attrs.count = cells.length;
        indicatorVnode.data.attrs.active = this.currentIndex;
        this._indicator = createElement(indicator, indicatorVnode.data);
      }
      return cells
    }
  },

  created: function created () {
    var this$1 = this;

    this.judType = 'slider';
    this.currentIndex = 0;
    this.innerOffset = 0;
    this._indicator = null;
    this.$nextTick(function () {
      this$1.updateLayout();
    });
  },

  beforeUpdate: function beforeUpdate () {
    this.updateLayout();
    this.reorder();
  },

  updated: function updated () {
    fireLazyload(this.$el, true);
  },

  mounted: function mounted () {
    if (this.autoPlay && this.autoPlay !== 'false') {
      var interval = Number(this.interval);
      this._lastSlideTime = Date.now();

      var autoPlayFn = bind(function () {
        clearTimeout(this._autoPlayTimer);
        var now = Date.now();
        var nextTick = interval - now + this._lastSlideTime;
        nextTick = nextTick > 100 ? nextTick : interval;

        this.next();
        this._lastSlideTime = now;
        this._autoPlayTimer = setTimeout(autoPlayFn, nextTick);
      }, this);

      this._autoPlayTimer = setTimeout(autoPlayFn, interval);
    }

    this.reorder();
    fireLazyload(this.$el, true);
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this._cells = this.formatChildren(createElement);
    this.frameCount = this._cells.length;

    return createElement(
      'nav',
      {
        ref: 'wrapper',
        attrs: { 'jud-type': 'slider' },
        staticClass: 'jud-slider jud-slider-wrapper jud-ct',
        on: extend(this._createEventMap(['scroll', 'scrollstart', 'scrollend']), {
          touchstart: this.handleTouchStart,
          touchmove: throttle(bind(this.handleTouchMove, this), 25),
          touchend: this.handleTouchEnd
        }),
        staticStyle: extractComponentStyle(this)
      },
      [
        createElement('ul', {
          ref: 'inner',
          staticClass: 'jud-slider-inner jud-ct'
        }, this._cells),
        this._indicator
      ]
    )
  },
  // export default css styles for this component.
  _css: _css$6
};

var _css$8 = "\n.jud-refresh-indicator,\n.jud-loading-indicator {\n  width: 1.0rem;\n  height: 1.0rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.jud-refresh-indicator:before,\n.jud-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  width: 1em;\n  height: 1em;\n  left: -60%;\n  top: 40%;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: jud-spinner 1.1s infinite ease;\n          animation: jud-spinner 1.1s infinite ease;\n  -webkit-transform: translate3d(1.0rem, 0, 0);\n          transform: translate3d(1.0rem, 0, 0);\n}\n";

var LoadingIndicator = {
  render: function render (createElement) {
    this.judType = 'loading-indicator';
    return createElement('mark', {
      attrs: { 'jud-type': 'loading-indicator' },
      staticClass: 'jud-loading-indicator jud-ct',
      staticStyle: extractComponentStyle(this)
    })
  },
  _css: _css$8
};

var refresh = {
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      lastDy: 0,
      viewHeight: 0,
      height: -1
    }
  },
  mounted: function mounted () {
    this.viewHeight = this.$el.offsetHeight;
    if (this.display === 'hide') {
      this.height = 0;
    }
    else {
      this.height = this.viewHeight;
    }
  },
  updated: function updated () {
  },
  watch: {
    height: function height (val) {
      this.$el.style.height = val * jud.config.env.scale + 'px';
    },
    display: function display (val) {
      if (val === 'hide') {
        this.height = 0;
      }
      else {
        this.height = this.viewHeight;
      }
    }
  },
  methods: {
    pulling: function pulling (offsetY) {
      if ( offsetY === void 0 ) offsetY = 0;

      this.height = offsetY;
      this.$emit('pullingdown', createEvent(this, 'pullingdown', {
        dy: offsetY - this.lastDy,
        pullingDistance: offsetY,
        viewHeight: this.viewHeight
      }));
      this.lastDy = offsetY;
    },
    pullingDown: function pullingDown (offsetY) {
      this.$el.style.transition = "height 0s";
      this.pulling(offsetY);
    },
    pullingEnd: function pullingEnd () {
      this.$el.style.transition = "height .2s";
      if (this.height >= this.viewHeight) {
        this.pulling(this.viewHeight);
        this.$emit('refresh');
      }
      else {
        this.pulling(0);
      }
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    this.$parent._refresh = this;
    return createElement('aside', {
      ref: 'refresh',
      attrs: { 'jud-type': 'refresh' },
      staticClass: 'jud-refresh jud-ct',
      staticStyle: extractComponentStyle(this)
    }, this.getChildren())
  }
};

var loading = {
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      height: -1,
      viewHeight: 0
    }
  },
  mounted: function mounted () {
    this.viewHeight = this.$el.offsetHeight;
    if (this.display === 'hide') {
      this.height = 0;
    }
    else {
      this.height = this.viewHeight;
    }
  },
  updated: function updated () {
  },
  watch: {
    height: function height (val) {
      this.$el.style.height = val * jud.config.env.scale + 'px';
    },
    display: function display (val) {
      if (val === 'hide') {
        this.height = 0;
      }
      else {
        this.height = this.viewHeight;
      }
    }
  },
  methods: {
    pulling: function pulling (offsetY) {
      if ( offsetY === void 0 ) offsetY = 0;

      this.height = offsetY;
    },
    pullingUp: function pullingUp (offsetY) {
      this.$el.style.transition = "height 0s";
      this.pulling(offsetY);
    },
    pullingEnd: function pullingEnd () {
      this.$el.style.transition = "height .2s";
      if (this.height >= this.viewHeight) {
        this.pulling(this.viewHeight);
        this.$emit('loading');
      }
      else {
        this.pulling(0);
      }
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    this.$parent._loading = this;
    return createElement('aside', {
      ref: 'loading',
      attrs: { 'jud-type': 'loading' },
      staticClass: 'jud-loading jud-ct',
      staticStyle: extractComponentStyle(this)
    }, this.getChildren())
  }
};

/**
 * @fileOverview Impl of text component.
 *
 * Notes about the style 'height' and 'lines':
 * if the computed value of 'height' is bigger than 'lines', than the text will
 * be clipped according to the 'lines'. Otherwise, it'll be the 'height'.
 */

var _css$9 = "\n.jud-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;  /* not using 'pre': support auto line feed. */\n  font-size: 0.426667rem;\n  word-wrap: break-word;\n  overflow: hidden; /* it'll be clipped if the height is not high enough. */\n}\n";

/**
 * Get text special styles (lines and text-overflow).
 */
function getTextSpecStyle (ms) {
  if ( ms === void 0 ) ms = {};

  var lines = parseInt(ms.lines) || 0;
  var overflow = ms['text-overflow'] || 'ellipsis';
  if (lines > 0) {
    return {
      overflow: 'hidden',
      'text-overflow': overflow,
      '-webkit-line-clamp': lines
    }
  }
}

var text = {
  props: {
    lines: [Number, String],
    value: [String]
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('text', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var style = extractComponentStyle(this);
    var textSpecStyle = getTextSpecStyle(style);
    return createElement('p', {
      attrs: { 'jud-type': 'text' },
      on: this._createEventMap(),
      staticClass: 'jud-text jud-el',
      staticStyle: extend(style, textSpecStyle)
    }, this.$slots.default || [this.value])
  },
  _css: _css$9
};

// import { validateStyles } from '../validator'

var _css$10 = "\n.jud-textarea {\n  font-size: 0.426667rem\n}\n.jud-textarea:focus {\n  outline: none;\n}\n";

var textarea = {
  mixins: [inputCommon],
  props: {
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    rows: {
      type: [String, Number],
      default: 2
    },
    returnKeyType: String
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var events = extend(this._createEventMap(), mapFormEvents(this));
    return createElement('html:textarea', {
      attrs: {
        'jud-type': 'textarea',
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        rows: this.rows,
        'return-key-type': this.returnKeyType
      },
      domProps: {
        value: this.value
      },
      on: this.createKeyboardEvent(events),
      staticClass: 'jud-textarea jud-el',
      staticStyle: extractComponentStyle(this)
    })
  },
  _css: _css$10
};

// import { validateStyles } from '../validator'
var video = {
  props: {
    src: String,
    playStatus: {
      type: String,
      default: 'pause',
      validator: function validator (value) {
        return ['play', 'pause'].indexOf(value) !== -1
      }
    },

    autoplay: {
      type: [String, Boolean],
      default: false
    },
    autoPlay: {
      type: [String, Boolean],
      default: false
    },

    playsinline: {
      type: [String, Boolean],
      default: false
    },
    controls: {
      type: [String, Boolean],
      default: false
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('video', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    // TODO: support playStatus
    return createElement('html:video', {
      attrs: {
        'jud-type': 'video',
        autoplay: (this.autoplay !== 'false' && this.autoplay !== false),
        autoPlay: (this.autoplay !== 'false' && this.autoplay !== false),
        controls: this.controls,
        src: this.src
      },
      on: this._createEventMap(['start', 'pause', 'finish', 'fail']),
      staticClass: 'jud-video jud-el',
      staticStyle: extractComponentStyle(this)
    })
  }
};

// import { validateStyles } from '../validator'

var _css$11 = "\n.jud-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n}\n";

var web = {
  props: {
    src: String
  },
  methods: {
    // TODO: check cross-origin
    goBack: function goBack () {
      if (this.$el) {
        this.$el.contentWindow.history.back();
      }
    },
    goForward: function goForward () {
      if (this.$el) {
        this.$el.contentWindow.history.forward();
      }
    },
    reload: function reload () {
      if (this.$el) {
        this.$el.contentWindow.history.reload();
      }
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    if (this.$el) {
      this.$emit('pagestart', createEvent(this.$el, 'pagestart', { url: this.src }));
      this.$el.addEventListener('load', function (event) {
        this$1.$emit('pagefinish', createEvent(this$1.$el, 'pagefinish', { url: this$1.src }));
      });
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('web', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    return createElement('iframe', {
      attrs: {
        'jud-type': 'web',
        src: this.src
      },
      on: this._createEventMap(['error']),
      staticClass: 'jud-web jud-el',
      staticStyle: extractComponentStyle(this)
    })
  },
  _css: _css$11
};

// import indicator from './warning'
// import refresh from './warning'
// import loading from './warning'



var components = Object.freeze({
	switch: _switch,
	a: a,
	div: div,
	container: div,
	image: image,
	img: image,
	input: input,
	header: header,
	list: index$8,
	cell: cell,
	scroller: scroller,
	slider: index$9,
	indicator: indicator,
	refresh: refresh,
	loading: loading,
	LoadingIndicator: LoadingIndicator,
	text: text,
	textarea: textarea,
	video: video,
	web: web
});

// import semver from 'semver'
// import styleMixin from './mixins/style'

/**
 * init jud.
 * @param  {Vue$2} Vue: Vue Constructor.
 * @param  {object} options: extend jud plugins.
 *         - components.
 *         - modules.
 */
function init$1 (Vue/*, options = {}*/) {
  setVue(Vue);

  Vue.prototype.$getConfig = function () {
    console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "jud.config" instead.');
    return jud$3.config
  };

  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) { return htmlRegex.test(tag); };
  Vue.config.parsePlatformTagName = function (tag) { return tag.replace(htmlRegex, ''); };

  // register sdk components.
  for (var name in components) {
    jud$3.registerComponent(name, components[name]);
  }

  /* istanbul ignore next */
  // if ("development" === 'development') {
  //   if (semver.lt(Vue.version, '2.1.5')) {
  //     console.warn(`[Vue Render] The version of Vue should be ` +
  //       `greater than 2.1.5, current is ${Vue.version}.`)
  //   }
  //   console.info(`[Vue Render] Registered components: `
  //     + `[${Object.keys(components).join(', ')}].`)
  Vue.mixin(base$1);
  Vue.mixin(style);
  // }
}

// auto init in dist mode.
if (typeof window !== 'undefined' && window.Vue) {
  init$1(window.Vue);
}

return jud$3;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2h0bWw1L3JlbmRlci9icm93c2VyL3JlbmRlci9nZXN0dXJlLmpzIiwiLi4vLi4vLi4vaHRtbDUvc2hhcmVkL2FycmF5RnJvbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwiLi4vLi4vLi4vaHRtbDUvc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9ldmVudC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci9icm93c2VyL2V4dGVuZC9hcGkvZ2VvbG9jYXRpb24uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvYnJvd3Nlci9leHRlbmQvYXBpL3BhZ2VJbmZvLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdG9yYWdlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0dHB1cmwvYnVpbGQvaHR0cHVybC5jb21tb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL25vZGVfbW9kdWxlcy9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdHJlYW0uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvYnJvd3Nlci9leHRlbmQvYXBpL2NsaXBib2FyZC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvZnVuYy5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvZXZlbnQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvcGVyZi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvbGF6eWxvYWQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2Vudi92aWV3cG9ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvY2FwaXRhbGl6ZVN0cmluZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvcHJlZml4UHJvcGVydHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL3ByZWZpeFZhbHVlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9hZGROZXdWYWx1ZXNPbmx5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9pc09iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL2NyZWF0ZVByZWZpeGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvc3RhdGljRGF0YS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvY3Vyc29yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jcm9zc0ZhZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ZpbHRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmxleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmxleGJveE9sZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZ3JhZGllbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ltYWdlU2V0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9wb3NpdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvc2l6aW5nLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1pbi1qcy11dGlscy9saWIvaHlwaGVuYXRlUHJvcGVydHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3RyYW5zaXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9pbmRleC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvc3R5bGUuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL3R5cGUuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL2FuaW1hdGlvbi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9kb20uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvbW9kYWwvdG9hc3QuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvbW9kYWwvbW9kYWwuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvbW9kYWwvYWxlcnQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvbW9kYWwvY29uZmlybS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC9wcm9tcHQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvbW9kYWwvc3R5bGUuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvbW9kYWwvaW5kZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvbmF2aWdhdG9yLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL3dlYnZpZXcuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZW52ZC9idWlsZC9lbnZkLmNvbW1vbi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvZW52L3d4LWVudi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvZW52L3dlZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2Vudi9pbmRleC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29yZS9zdHlsZS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zd2l0Y2guanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvYS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9kaXYuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvaW1hZ2UuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21peGlucy9iYXNlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9taXhpbnMvc3R5bGUuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21peGlucy9zY3JvbGxhYmxlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9taXhpbnMvaW5wdXQtY29tbW9uLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2lucHV0LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvaGVhZGVyLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvbGlzdC9saXN0TWl4aW4uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9saXN0L2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvbGlzdC9jZWxsLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvc2Nyb2xsZXIuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2xpZGVyL2luZGljYXRvci5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVNaXhpbi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zbGlkZXIvaW5kZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9sb2FkaW5nLWluZGljYXRvci5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL3JlZnJlc2guanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9sb2FkaW5nLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3RleHQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdmlkZW8uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvd2ViLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGlzSW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG4vLyBtYWpvciBldmVudHMgc3VwcG9ydGVkOlxuLy8gICBwYW5zdGFydFxuLy8gICBwYW5tb3ZlXG4vLyAgIHBhbmVuZFxuLy8gICBzd2lwZVxuLy8gICBsb25ncHJlc3Ncbi8vIGV4dHJhIGV2ZW50cyBzdXBwb3J0ZWQ6XG4vLyAgIGR1YWx0b3VjaHN0YXJ0XG4vLyAgIGR1YWx0b3VjaFxuLy8gICBkdWFsdG91Y2hlbmRcbi8vICAgdGFwXG4vLyAgIGRvdWJsZXRhcFxuLy8gICBwcmVzc2VuZFxuXG52YXIgZG9jID0gd2luZG93LmRvY3VtZW50XG52YXIgZG9jRWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbnZhciBnZXN0dXJlcyA9IHt9XG52YXIgbGFzdFRhcCA9IG51bGxcblxuLyoqXG4gKiBmaW5kIHRoZSBjbG9zZXN0IGNvbW1vbiBhbmNlc3RvclxuICogaWYgdGhlcmUncyBubyBvbmUsIHJldHVybiBudWxsXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWwxIGZpcnN0IGVsZW1lbnRcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsMiBzZWNvbmQgZWxlbWVudFxuICogQHJldHVybiB7RWxlbWVudH0gICAgIGNvbW1vbiBhbmNlc3RvclxuICovXG5mdW5jdGlvbiBnZXRDb21tb25BbmNlc3RvcihlbDEsIGVsMikge1xuICB2YXIgZWwgPSBlbDFcbiAgd2hpbGUgKGVsKSB7XG4gICAgaWYgKGVsLmNvbnRhaW5zKGVsMikgfHwgZWwgPT0gZWwyKSB7XG4gICAgICByZXR1cm4gZWxcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBmaXJlIGEgSFRNTEV2ZW50XG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCB3aGljaCBlbGVtZW50IHRvIGZpcmUgYSBldmVudCBvblxuICogQHBhcmFtICB7c3RyaW5nfSAgdHlwZSAgICB0eXBlIG9mIGV2ZW50XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBleHRyYSAgIGV4dHJhIGRhdGEgZm9yIHRoZSBldmVudCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZmlyZUV2ZW50KGVsZW1lbnQsIHR5cGUsIGV4dHJhKSB7XG4gIHZhciBldmVudCA9IGRvYy5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpXG4gIGV2ZW50LmluaXRFdmVudCh0eXBlLCB0cnVlLCB0cnVlKVxuXG4gIGlmICh0eXBlb2YgZXh0cmEgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgcCBpbiBleHRyYSkge1xuICAgICAgZXZlbnRbcF0gPSBleHRyYVtwXVxuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudClcbn1cblxuLyoqXG4gKiBjYWxjIHRoZSB0cmFuc2Zvcm1cbiAqIGFzc3VtZSA0IHBvaW50cyBBQkNEIG9uIHRoZSBjb29yZGluYXRlIHN5c3RlbVxuICogPiByb3RhdGXvvJphbmdsZSByb3RhdGluZyBmcm9tIEFCIHRvIENEXG4gKiA+IHNjYWxl77yac2NhbGUgcmF0aW8gZnJvbSBBQiB0byBDRFxuICogPiB0cmFuc2xhdGXvvJp0cmFuc2xhdGUgc2hpZnQgZnJvbSBBIHRvIENcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHgxIGFic2Npc3NhIG9mIEFcbiAqIEBwYXJhbSAge251bWJlcn0geTEgb3JkaW5hdGUgb2YgQVxuICogQHBhcmFtICB7bnVtYmVyfSB4MiBhYnNjaXNzYSBvZiBCXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHkyIG9yZGluYXRlIG9mIEJcbiAqIEBwYXJhbSAge251bWJlcn0geDMgYWJzY2lzc2Egb2YgQ1xuICogQHBhcmFtICB7bnVtYmVyfSB5MyBvcmRpbmF0ZSBvZiBDXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHg0IGFic2Npc3NhIG9mIERcbiAqIEBwYXJhbSAge251bWJlcn0geTQgb3JkaW5hdGUgb2YgRFxuICogQHJldHVybiB7b2JqZWN0fSAgICB0cmFuc2Zvcm0gb2JqZWN0IGxpa2VcbiAqICAge3JvdGF0ZSwgc2NhbGUsIHRyYW5zbGF0ZVsyXSwgbWF0cml4WzNdWzNdfVxuICovXG5mdW5jdGlvbiBjYWxjKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIHg0LCB5NCkge1xuICB2YXIgcm90YXRlID0gTWF0aC5hdGFuMih5NCAtIHkzLCB4NCAtIHgzKSAtIE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSlcbiAgdmFyIHNjYWxlID0gTWF0aC5zcXJ0KChNYXRoLnBvdyh5NCAtIHkzLCAyKVxuICAgICsgTWF0aC5wb3coeDQgLSB4MywgMikpIC8gKE1hdGgucG93KHkyIC0geTEsIDIpXG4gICAgKyBNYXRoLnBvdyh4MiAtIHgxLCAyKSkpXG4gIHZhciB0cmFuc2xhdGUgPSBbXG4gICAgeDNcbiAgICAtIHNjYWxlICogeDEgKiBNYXRoLmNvcyhyb3RhdGUpXG4gICAgKyBzY2FsZSAqIHkxICogTWF0aC5zaW4ocm90YXRlKSxcbiAgICB5M1xuICAgIC0gc2NhbGUgKiB5MSAqIE1hdGguY29zKHJvdGF0ZSlcbiAgICAtIHNjYWxlICogeDEgKiBNYXRoLnNpbihyb3RhdGUpXVxuXG4gIHJldHVybiB7XG4gICAgcm90YXRlOiByb3RhdGUsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICAgIG1hdHJpeDogW1xuICAgICAgW3NjYWxlICogTWF0aC5jb3Mocm90YXRlKSwgLXNjYWxlICogTWF0aC5zaW4ocm90YXRlKSwgdHJhbnNsYXRlWzBdXSxcbiAgICAgIFtzY2FsZSAqIE1hdGguc2luKHJvdGF0ZSksIHNjYWxlICogTWF0aC5jb3Mocm90YXRlKSwgdHJhbnNsYXRlWzFdXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfVxufVxuXG4vKipcbiAqIHRha2Ugb3ZlciB0aGUgdG91Y2hzdGFydCBldmVudHMuIEFkZCBuZXcgdG91Y2hlcyB0byB0aGUgZ2VzdHVyZXMuXG4gKiBJZiB0aGVyZSBpcyBubyBwcmV2aW91cyByZWNvcmRzLCB0aGVuIGJpbmQgdG91Y2htb3ZlLCB0b2NoZW5kXG4gKiBhbmQgdG91Y2hjYW5jZWwgZXZlbnRzLlxuICogbmV3IHRvdWNoZXMgaW5pdGlhbGl6ZWQgd2l0aCBzdGF0ZSAndGFwcGluZycsIGFuZCB3aXRoaW4gNTAwIG1pbGxpc2Vjb25kc1xuICogaWYgdGhlIHN0YXRlIGlzIHN0aWxsIHRhcHBpbmcsIHRoZW4gdHJpZ2dlciBnZXN0dXJlICdwcmVzcycuXG4gKiBJZiB0aGVyZSBhcmUgdHdvIHRvdWNoZSBwb2ludHMsIHRoZW4gdGhlICdkdWFsdG91Y2hzdGFydCcgaXMgdHJpZ2dlcmQuIFRoZVxuICogbm9kZSBvZiB0aGUgdG91Y2ggZ2VzdHVyZSBpcyB0aGVpciBjbG9lc3QgY29tbW9uIGFuY2VzdG9yLlxuICpcbiAqIEBldmVudFxuICogQHBhcmFtICB7ZXZlbnR9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHRvdWNoc3RhcnRIYW5kbGVyKGV2ZW50KSB7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT09IDApIHtcbiAgICBkb2NFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoZW5kSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaGNhbmNlbEhhbmRsZXIsIGZhbHNlKVxuICB9XG5cbiAgLy8gcmVjb3JkIGV2ZXJ5IHRvdWNoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIHZhciB0b3VjaFJlY29yZCA9IHt9XG5cbiAgICBmb3IgKHZhciBwIGluIHRvdWNoKSB7XG4gICAgICB0b3VjaFJlY29yZFtwXSA9IHRvdWNoW3BdXG4gICAgfVxuXG4gICAgdmFyIGdlc3R1cmUgPSB7XG4gICAgICBzdGFydFRvdWNoOiB0b3VjaFJlY29yZCxcbiAgICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICAgIHN0YXR1czogJ3RhcHBpbmcnLFxuICAgICAgZWxlbWVudDogZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC50YXJnZXQsXG4gICAgICBwcmVzc2luZ0hhbmRsZXI6IHNldFRpbWVvdXQoZnVuY3Rpb24gKGVsZW1lbnQsIHRvdWNoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAndGFwcGluZycpIHtcbiAgICAgICAgICAgIGdlc3R1cmUuc3RhdHVzID0gJ3ByZXNzaW5nJ1xuXG4gICAgICAgICAgICBmaXJlRXZlbnQoZWxlbWVudCwgJ2xvbmdwcmVzcycsIHtcbiAgICAgICAgICAgICAgLy8gYWRkIHRvdWNoIGRhdGEgZm9yIHdlZXhcbiAgICAgICAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNsZWFyVGltZW91dChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcilcbiAgICAgICAgICBnZXN0dXJlLnByZXNzaW5nSGFuZGxlciA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfShldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50LnRhcmdldCwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0pLCA1MDApXG4gICAgfVxuICAgIGdlc3R1cmVzW3RvdWNoLmlkZW50aWZpZXJdID0gZ2VzdHVyZVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT0gMikge1xuICAgIHZhciBlbGVtZW50cyA9IFtdXG5cbiAgICBmb3IgKHZhciBwIGluIGdlc3R1cmVzKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGdlc3R1cmVzW3BdLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KGdldENvbW1vbkFuY2VzdG9yKGVsZW1lbnRzWzBdLCBlbGVtZW50c1sxXSksICdkdWFsdG91Y2hzdGFydCcsIHtcbiAgICAgIHRvdWNoZXM6IHNsaWNlLmNhbGwoZXZlbnQudG91Y2hlcyksXG4gICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiB0YWtlIG92ZXIgdG91Y2htb3ZlIGV2ZW50cywgYW5kIGhhbmRsZSBwYW4gYW5kIGR1YWwgcmVsYXRlZCBnZXN0dXJlcy5cbiAqXG4gKiAxLiB0cmF2ZXJzZSBldmVyeSB0b3VjaCBwb2ludO+8mlxuICogPiBpZiAndGFwcGluZycgYW5kIHRoZSBzaGlmdCBpcyBvdmVyIDEwIHBpeGxlcywgdGhlbiBpdCdzIGEgJ3Bhbm5pbmcnLlxuICogMi4gaWYgdGhlcmUgYXJlIHR3byB0b3VjaCBwb2ludHMsIHRoZW4gY2FsYyB0aGUgdHJhbmZvcm0gYW5kIHRyaWdnZXJcbiAqICAgJ2R1YWx0b3VjaCcuXG4gKlxuICogQGV2ZW50XG4gKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gdG91Y2htb3ZlSGFuZGxlcihldmVudCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB2YXIgZ2VzdHVyZSA9IGdlc3R1cmVzW3RvdWNoLmlkZW50aWZpZXJdXG5cbiAgICBpZiAoIWdlc3R1cmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghZ2VzdHVyZS5sYXN0VG91Y2gpIHtcbiAgICAgIGdlc3R1cmUubGFzdFRvdWNoID0gZ2VzdHVyZS5zdGFydFRvdWNoXG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS5sYXN0VGltZSkge1xuICAgICAgZ2VzdHVyZS5sYXN0VGltZSA9IGdlc3R1cmUuc3RhcnRUaW1lXG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS52ZWxvY2l0eVgpIHtcbiAgICAgIGdlc3R1cmUudmVsb2NpdHlYID0gMFxuICAgIH1cbiAgICBpZiAoIWdlc3R1cmUudmVsb2NpdHlZKSB7XG4gICAgICBnZXN0dXJlLnZlbG9jaXR5WSA9IDBcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLmR1cmF0aW9uKSB7XG4gICAgICBnZXN0dXJlLmR1cmF0aW9uID0gMFxuICAgIH1cblxuICAgIHZhciB0aW1lID0gIERhdGUubm93KCkgLSBnZXN0dXJlLmxhc3RUaW1lXG4gICAgdmFyIHZ4ID0gKHRvdWNoLmNsaWVudFggLSBnZXN0dXJlLmxhc3RUb3VjaC5jbGllbnRYKSAvIHRpbWVcbiAgICB2YXIgdnkgPSAodG91Y2guY2xpZW50WSAtIGdlc3R1cmUubGFzdFRvdWNoLmNsaWVudFkpIC8gdGltZVxuXG4gICAgdmFyIFJFQ09SRF9EVVJBVElPTiA9IDcwXG4gICAgaWYgKHRpbWUgPiBSRUNPUkRfRFVSQVRJT04pIHtcbiAgICAgIHRpbWUgPSBSRUNPUkRfRFVSQVRJT05cbiAgICB9XG4gICAgaWYgKGdlc3R1cmUuZHVyYXRpb24gKyB0aW1lID4gUkVDT1JEX0RVUkFUSU9OKSB7XG4gICAgICBnZXN0dXJlLmR1cmF0aW9uID0gUkVDT1JEX0RVUkFUSU9OIC0gdGltZVxuICAgIH1cblxuICAgIGdlc3R1cmUudmVsb2NpdHlYID0gKGdlc3R1cmUudmVsb2NpdHlYICogZ2VzdHVyZS5kdXJhdGlvbiArIHZ4ICogdGltZSlcbiAgICAgIC8gKGdlc3R1cmUuZHVyYXRpb24gKyB0aW1lKVxuICAgIGdlc3R1cmUudmVsb2NpdHlZID0gKGdlc3R1cmUudmVsb2NpdHlZICogZ2VzdHVyZS5kdXJhdGlvbiArIHZ5ICogdGltZSlcbiAgICAgIC8gKGdlc3R1cmUuZHVyYXRpb24gKyB0aW1lKVxuICAgIGdlc3R1cmUuZHVyYXRpb24gKz0gdGltZVxuXG4gICAgZ2VzdHVyZS5sYXN0VG91Y2ggPSB7fVxuXG4gICAgZm9yICh2YXIgcCBpbiB0b3VjaCkge1xuICAgICAgZ2VzdHVyZS5sYXN0VG91Y2hbcF0gPSB0b3VjaFtwXVxuICAgIH1cbiAgICBnZXN0dXJlLmxhc3RUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgdmFyIGRpc3BsYWNlbWVudFggPSB0b3VjaC5jbGllbnRYIC0gZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFhcbiAgICB2YXIgZGlzcGxhY2VtZW50WSA9IHRvdWNoLmNsaWVudFkgLSBnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WVxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyhkaXNwbGFjZW1lbnRYLCAyKVxuICAgICAgKyBNYXRoLnBvdyhkaXNwbGFjZW1lbnRZLCAyKSlcbiAgICB2YXIgaXNWZXJ0aWNhbCA9ICEoTWF0aC5hYnMoZGlzcGxhY2VtZW50WCkgPiBNYXRoLmFicyhkaXNwbGFjZW1lbnRZKSlcbiAgICB2YXIgZGlyZWN0aW9uID0gaXNWZXJ0aWNhbFxuICAgICAgPyBkaXNwbGFjZW1lbnRZID49IDAgPyAnZG93bicgOiAndXAnXG4gICAgICA6IGRpc3BsYWNlbWVudFggPj0gMCA/ICdyaWdodCcgOiAnbGVmdCdcblxuICAgIC8vIG1hZ2ljIG51bWJlciAxMDogbW92aW5nIDEwcHggbWVhbnMgcGFuLCBub3QgdGFwXG4gICAgaWYgKChnZXN0dXJlLnN0YXR1cyA9PT0gJ3RhcHBpbmcnIHx8IGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKVxuICAgICAgICAmJiBkaXN0YW5jZSA+IDEwKSB7XG4gICAgICBnZXN0dXJlLnN0YXR1cyA9ICdwYW5uaW5nJ1xuICAgICAgZ2VzdHVyZS5pc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbFxuICAgICAgZ2VzdHVyZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb25cblxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3BhbnN0YXJ0Jywge1xuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoZXM6IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgIGNoYW5nZWRUb3VjaGVzOiBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnQsXG4gICAgICAgIGlzVmVydGljYWw6IGdlc3R1cmUuaXNWZXJ0aWNhbCxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIGdlc3R1cmUucGFuVGltZSA9IERhdGUubm93KClcblxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3Bhbm1vdmUnLCB7XG4gICAgICAgIGRpc3BsYWNlbWVudFg6IGRpc3BsYWNlbWVudFgsXG4gICAgICAgIGRpc3BsYWNlbWVudFk6IGRpc3BsYWNlbWVudFksXG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudCxcbiAgICAgICAgaXNWZXJ0aWNhbDogZ2VzdHVyZS5pc1ZlcnRpY2FsLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PSAyKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gW11cbiAgICB2YXIgY3VycmVudCA9IFtdXG4gICAgdmFyIGVsZW1lbnRzID0gW11cbiAgICB2YXIgdHJhbnNmb3JtXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LnRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbaV1cbiAgICAgIHZhciBnZXN0dXJlID0gZ2VzdHVyZXNbdG91Y2guaWRlbnRpZmllcl1cbiAgICAgIHBvc2l0aW9uLnB1c2goW2dlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRYLCBnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WV0pXG4gICAgICBjdXJyZW50LnB1c2goW3RvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFldKVxuICAgIH1cblxuICAgIGZvciAodmFyIHAgaW4gZ2VzdHVyZXMpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZ2VzdHVyZXNbcF0uZWxlbWVudClcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0gPSBjYWxjKFxuICAgICAgcG9zaXRpb25bMF1bMF0sXG4gICAgICBwb3NpdGlvblswXVsxXSxcbiAgICAgIHBvc2l0aW9uWzFdWzBdLFxuICAgICAgcG9zaXRpb25bMV1bMV0sXG4gICAgICBjdXJyZW50WzBdWzBdLFxuICAgICAgY3VycmVudFswXVsxXSxcbiAgICAgIGN1cnJlbnRbMV1bMF0sXG4gICAgICBjdXJyZW50WzFdWzFdXG4gICAgKVxuICAgIGZpcmVFdmVudChnZXRDb21tb25BbmNlc3RvcihlbGVtZW50c1swXSwgZWxlbWVudHNbMV0pLCAnZHVhbHRvdWNoJywge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogaGFuZGxlIHRvdWNoZW5kIGV2ZW50XG4gKlxuICogMS4gaWYgdGhlcmUgYXJlIHRvdyB0b3VjaCBwb2ludHMsIHRoZW4gdHJpZ2dlciAnZHVhbHRvdWNoZW5kJ+WmglxuICpcbiAqIDIuIHRyYXZlcnNlIGV2ZXJ5IHRvdWNoIHBpb25077yaXG4gKiA+IGlmIHRhcHBpbmcsIHRoZW4gdHJpZ2dlciAndGFwJy5cbiAqIElmIHRoZXJlIGlzIGEgdGFwIDMwMCBtaWxsaXNlY29uZHMgYmVmb3JlLCB0aGVuIGl0J3MgYSAnZG91YmxldGFwJy5cbiAqID4gaWYgcGFkZGluZywgdGhlbiBkZWNpZGUgdG8gdHJpZ2dlciAncGFuZW5kJyBvciAnc3dpcGUnXG4gKiA+IGlmIHByZXNzaW5nLCB0aGVuIHRyaWdnZXIgJ3ByZXNzZW5kJy5cbiAqXG4gKiAzLiByZW1vdmUgbGlzdGVuZXJzLlxuICpcbiAqIEBldmVudFxuICogQHBhcmFtICB7ZXZlbnR9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHRvdWNoZW5kSGFuZGxlcihldmVudCkge1xuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09IDIpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXVxuICAgIGZvciAodmFyIHAgaW4gZ2VzdHVyZXMpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZ2VzdHVyZXNbcF0uZWxlbWVudClcbiAgICB9XG4gICAgZmlyZUV2ZW50KGdldENvbW1vbkFuY2VzdG9yKGVsZW1lbnRzWzBdLCBlbGVtZW50c1sxXSksICdkdWFsdG91Y2hlbmQnLCB7XG4gICAgICB0b3VjaGVzOiBzbGljZS5jYWxsKGV2ZW50LnRvdWNoZXMpLFxuICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICB9KVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgdmFyIGlkID0gdG91Y2guaWRlbnRpZmllclxuICAgIHZhciBnZXN0dXJlID0gZ2VzdHVyZXNbaWRdXG5cbiAgICBpZiAoIWdlc3R1cmUpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIpXG4gICAgICBnZXN0dXJlLnByZXNzaW5nSGFuZGxlciA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICd0YXBwaW5nJykge1xuICAgICAgZ2VzdHVyZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAndGFwJywge1xuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICB9KVxuXG4gICAgICBpZiAobGFzdFRhcCAmJiBnZXN0dXJlLnRpbWVzdGFtcCAtIGxhc3RUYXAudGltZXN0YW1wIDwgMzAwKSB7XG4gICAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdkb3VibGV0YXAnLCB7XG4gICAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGxhc3RUYXAgPSBnZXN0dXJlXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpXG4gICAgICB2YXIgZHVyYXRpb24gPSBub3cgLSBnZXN0dXJlLnN0YXJ0VGltZVxuICAgICAgdmFyIGRpc3BsYWNlbWVudFggPSB0b3VjaC5jbGllbnRYIC0gZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFhcbiAgICAgIHZhciBkaXNwbGFjZW1lbnRZID0gdG91Y2guY2xpZW50WSAtIGdlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRZXG5cbiAgICAgIHZhciB2ZWxvY2l0eSA9IE1hdGguc3FydChnZXN0dXJlLnZlbG9jaXR5WSAqIGdlc3R1cmUudmVsb2NpdHlZXG4gICAgICAgICsgZ2VzdHVyZS52ZWxvY2l0eVggKiBnZXN0dXJlLnZlbG9jaXR5WClcbiAgICAgIHZhciBpc1N3aXBlID0gdmVsb2NpdHkgPiAwLjUgJiYgKG5vdyAtIGdlc3R1cmUubGFzdFRpbWUpIDwgMTAwXG4gICAgICB2YXIgZXh0cmEgPSB7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgaXNTd2lwZTogaXNTd2lwZSxcbiAgICAgICAgdmVsb2NpdHlYOiBnZXN0dXJlLnZlbG9jaXR5WCxcbiAgICAgICAgdmVsb2NpdHlZOiBnZXN0dXJlLnZlbG9jaXR5WSxcbiAgICAgICAgZGlzcGxhY2VtZW50WDogZGlzcGxhY2VtZW50WCxcbiAgICAgICAgZGlzcGxhY2VtZW50WTogZGlzcGxhY2VtZW50WSxcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50LFxuICAgICAgICBpc1ZlcnRpY2FsOiBnZXN0dXJlLmlzVmVydGljYWwsXG4gICAgICAgIGRpcmVjdGlvbjogZ2VzdHVyZS5kaXJlY3Rpb25cbiAgICAgIH1cblxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3BhbmVuZCcsIGV4dHJhKVxuICAgICAgaWYgKGlzU3dpcGUpIHtcbiAgICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3N3aXBlJywgZXh0cmEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKSB7XG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncHJlc3NlbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVsZXRlIGdlc3R1cmVzW2lkXVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT09IDApIHtcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoZW5kSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaGNhbmNlbEhhbmRsZXIsIGZhbHNlKVxuICB9XG59XG5cbi8qKlxuICogaGFuZGxlIHRvdWNoY2FuY2VsXG4gKlxuICogMS4gaWYgdGhlcmUgYXJlIHR3byB0b3VjaCBwb2ludHMsIHRoZW4gdHJpZ2dlciAnZHVhbHRvdWNoZW5kJ1xuICpcbiAqIDIuIHRyYXZlcnNlIGV2ZXJ0eSB0b3VjaCBwb2ludDpcbiAqID4gaWYgcGFubm5pZywgdGhlbiB0cmlnZ2VyICdwYW5lbmQnXG4gKiA+IGlmIHByZXNzaW5nLCB0aGVuIHRyaWdnZXIgJ3ByZXNzZW5kJ1xuICpcbiAqIDMuIHJlbW92ZSBsaXN0ZW5lcnNcbiAqXG4gKiBAZXZlbnRcbiAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICovXG5mdW5jdGlvbiB0b3VjaGNhbmNlbEhhbmRsZXIoZXZlbnQpIHtcblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PSAyKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW11cbiAgICBmb3IgKHZhciBwIGluIGdlc3R1cmVzKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGdlc3R1cmVzW3BdLmVsZW1lbnQpXG4gICAgfVxuICAgIGZpcmVFdmVudChnZXRDb21tb25BbmNlc3RvcihlbGVtZW50c1swXSwgZWxlbWVudHNbMV0pLCAnZHVhbHRvdWNoZW5kJywge1xuICAgICAgdG91Y2hlczogc2xpY2UuY2FsbChldmVudC50b3VjaGVzKSxcbiAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgfSlcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIHZhciBpZCA9IHRvdWNoLmlkZW50aWZpZXJcbiAgICB2YXIgZ2VzdHVyZSA9IGdlc3R1cmVzW2lkXVxuXG4gICAgaWYgKCFnZXN0dXJlKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKVxuICAgICAgZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdwYW5lbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKSB7XG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncHJlc3NlbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgIH0pXG4gICAgfVxuICAgIGRlbGV0ZSBnZXN0dXJlc1tpZF1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09PSAwKSB7XG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2htb3ZlSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaGVuZEhhbmRsZXIsIGZhbHNlKVxuICAgIGRvY0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hjYW5jZWxIYW5kbGVyLCBmYWxzZSlcbiAgfVxufVxuXG5pZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgZG9jRWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoc3RhcnRIYW5kbGVyLCBmYWxzZSlcbiAgaXNJbml0aWFsaXplZCA9IHRydWVcbn1cblxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gUHJvZHVjdGlvbiBzdGVwcyBvZiBFQ01BLTI2MiwgRWRpdGlvbiA2LCAyMi4xLjIuMVxuLy8gUmVmZXJlbmNlOiBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtYXJyYXkuZnJvbVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICghQXJyYXkuZnJvbSkge1xuICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgdmFyIGlzQ2FsbGFibGUgPSBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgICB9O1xuICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmIChudW1iZXIgPT09IDAgfHwgIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuICAgIH07XG4gICAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSk7XG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobGVuLCAwKSwgbWF4U2FmZUludGVnZXIpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgbGVuZ3RoIHByb3BlcnR5IG9mIHRoZSBmcm9tIG1ldGhvZCBpcyAxLlxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgICAgLy8gMS4gTGV0IEMgYmUgdGhlIHRoaXMgdmFsdWUuXG4gICAgICB2YXIgQyA9IHRoaXM7XG5cbiAgICAgIC8vIDIuIExldCBpdGVtcyBiZSBUb09iamVjdChhcnJheUxpa2UpLlxuICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0KGFycmF5TGlrZSk7XG5cbiAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cbiAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIElmIG1hcGZuIGlzIHVuZGVmaW5lZCwgdGhlbiBsZXQgbWFwcGluZyBiZSBmYWxzZS5cbiAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWQ7XG4gICAgICB2YXIgVDtcbiAgICAgIGlmICh0eXBlb2YgbWFwRm4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDUuIGVsc2VcbiAgICAgICAgLy8gNS4gYSBJZiBJc0NhbGxhYmxlKG1hcGZuKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbTogd2hlbiBwcm92aWRlZCwgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDUuIGIuIElmIHRoaXNBcmcgd2FzIHN1cHBsaWVkLCBsZXQgVCBiZSB0aGlzQXJnOyBlbHNlIGxldCBUIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgVCA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAxMC4gTGV0IGxlblZhbHVlIGJlIEdldChpdGVtcywgXCJsZW5ndGhcIikuXG4gICAgICAvLyAxMS4gTGV0IGxlbiBiZSBUb0xlbmd0aChsZW5WYWx1ZSkuXG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKTtcblxuICAgICAgLy8gMTMuIElmIElzQ29uc3RydWN0b3IoQykgaXMgdHJ1ZSwgdGhlblxuICAgICAgLy8gMTMuIGEuIExldCBBIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2Qgb2YgQyB3aXRoIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW0gbGVuLlxuICAgICAgLy8gMTQuIGEuIEVsc2UsIExldCBBIGJlIEFycmF5Q3JlYXRlKGxlbikuXG4gICAgICB2YXIgQSA9IGlzQ2FsbGFibGUoQykgPyBPYmplY3QobmV3IEMobGVuKSkgOiBuZXcgQXJyYXkobGVuKTtcblxuICAgICAgLy8gMTYuIExldCBrIGJlIDAuXG4gICAgICB2YXIgayA9IDA7XG4gICAgICAvLyAxNy4gUmVwZWF0LCB3aGlsZSBrIDwgbGVu4oCmIChhbHNvIHN0ZXBzIGEgLSBoKVxuICAgICAgdmFyIGtWYWx1ZTtcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIGtWYWx1ZSA9IGl0ZW1zW2tdO1xuICAgICAgICBpZiAobWFwRm4pIHtcbiAgICAgICAgICBBW2tdID0gdHlwZW9mIFQgPT09ICd1bmRlZmluZWQnID8gbWFwRm4oa1ZhbHVlLCBrKSA6IG1hcEZuLmNhbGwoVCwga1ZhbHVlLCBrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBW2tdID0ga1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGsgKz0gMTtcbiAgICAgIH1cbiAgICAgIC8vIDE4LiBMZXQgcHV0U3RhdHVzIGJlIFB1dChBLCBcImxlbmd0aFwiLCBsZW4sIHRydWUpLlxuICAgICAgQS5sZW5ndGggPSBsZW47XG4gICAgICAvLyAyMC4gUmV0dXJuIEEuXG4gICAgICByZXR1cm4gQTtcbiAgICB9O1xuICB9KCkpO1xufVxuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uLzU1OTM1NTRcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoIU9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YgPSAoZnVuY3Rpb24oT2JqZWN0LCBtYWdpYykge1xuICAgIHZhciBzZXQ7XG4gICAgZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgIHNldC5jYWxsKE8sIHByb3RvKTtcbiAgICAgIHJldHVybiBPO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gdGhpcyB3b3JrcyBhbHJlYWR5IGluIEZpcmVmb3ggYW5kIFNhZmFyaVxuICAgICAgc2V0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCBtYWdpYykuc2V0O1xuICAgICAgc2V0LmNhbGwoe30sIG51bGwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gSUUgPCAxMSBjYW5ub3QgYmUgc2hpbW1lZFxuICAgICAgICBPYmplY3QucHJvdG90eXBlICE9PSB7fVttYWdpY10gfHxcbiAgICAgICAgLy8gbmVpdGhlciBjYW4gYW55IGJyb3dzZXIgdGhhdCBhY3R1YWxseVxuICAgICAgICAvLyBpbXBsZW1lbnRlZCBfX3Byb3RvX18gY29ycmVjdGx5XG4gICAgICAgIC8vIChhbGwgYnV0IG9sZCBWOCB3aWxsIHJldHVybiBoZXJlKVxuICAgICAgICB7X19wcm90b19fOiBudWxsfS5fX3Byb3RvX18gPT09IHZvaWQgMFxuICAgICAgICAvLyB0aGlzIGNhc2UgbWVhbnMgbnVsbCBvYmplY3RzIGNhbm5vdCBiZSBwYXNzZWRcbiAgICAgICAgLy8gdGhyb3VnaCBzZXRQcm90b3R5cGVPZiBpbiBhIHJlbGlhYmxlIHdheVxuICAgICAgICAvLyB3aGljaCBtZWFucyBoZXJlIGEgKipTaGFtKiogaXMgbmVlZGVkIGluc3RlYWRcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBub2RlanMgMC44IGFuZCAwLjEwIGFyZSAoYnVnZ3kgYW5kLi4pIGZpbmUgaGVyZVxuICAgICAgLy8gcHJvYmFibHkgQ2hyb21lIG9yIHNvbWUgb2xkIE1vYmlsZSBzdG9jayBicm93c2VyXG4gICAgICBzZXQgPSBmdW5jdGlvbihwcm90bykge1xuICAgICAgICB0aGlzW21hZ2ljXSA9IHByb3RvO1xuICAgICAgfTtcbiAgICAgIC8vIHBsZWFzZSBub3RlIHRoYXQgdGhpcyB3aWxsICoqbm90Kiogd29ya1xuICAgICAgLy8gaW4gdGhvc2UgYnJvd3NlcnMgdGhhdCBkbyBub3QgaW5oZXJpdFxuICAgICAgLy8gX19wcm90b19fIGJ5IG1pc3Rha2UgZnJvbSBPYmplY3QucHJvdG90eXBlXG4gICAgICAvLyBpbiB0aGVzZSBjYXNlcyB3ZSBzaG91bGQgcHJvYmFibHkgdGhyb3cgYW4gZXJyb3JcbiAgICAgIC8vIG9yIGF0IGxlYXN0IGJlIGluZm9ybWVkIGFib3V0IHRoZSBpc3N1ZVxuICAgICAgc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPSBzZXRQcm90b3R5cGVPZihcbiAgICAgICAgc2V0UHJvdG90eXBlT2Yoe30sIG51bGwpLFxuICAgICAgICBPYmplY3QucHJvdG90eXBlXG4gICAgICApIGluc3RhbmNlb2YgT2JqZWN0O1xuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IHRydWUgbWVhbnMgaXQgd29ya3MgYXMgbWVhbnRcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSBmYWxzZSBtZWFucyBpdCdzIG5vdCAxMDAlIHJlbGlhYmxlXG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdW5kZWZpbmVkXG4gICAgICAvLyBvclxuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT0gIG51bGwgbWVhbnMgaXQncyBub3QgYSBwb2x5ZmlsbFxuICAgICAgLy8gd2hpY2ggbWVhbnMgaXQgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICAgIC8vIHdlIGNhbiBldmVuIGRlbGV0ZSBPYmplY3QucHJvdG90eXBlLl9fcHJvdG9fXztcbiAgICB9XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mO1xuICB9KE9iamVjdCwgJ19fcHJvdG9fXycpKTtcbn1cbiIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTsiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBldmVudCA9IHtcbiAgLyoqXG4gICAqIG9wZW5VcmxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAgICovXG4gIG9wZW5VUkw6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsXG4gIH1cblxufVxuXG5jb25zdCBtZXRhID0ge1xuICBldmVudDogW3tcbiAgICBuYW1lOiAnb3BlblVSTCcsXG4gICAgYXJnczogWydzdHJpbmcnXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnZXZlbnQnLCBldmVudCwgbWV0YSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHN1cHBvcnRHZW9sb2NhdGlvbiA9ICdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yXG5jb25zdCBlcnJvck1zZyA9IGBbaDUtcmVuZGVyXTogYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgZ2VvbG9jYXRpb24uYFxuXG5jb25zdCBnZW9sb2NhdGlvbiA9IHtcbiAgLy8gb3B0aW9uczpcbiAgLy8gICAtIGVuYWJsZUhpZ2hBY2N1cmFjeSBvcHRpb25hbCwgdmFsdWUgaXMgdHJ1ZSBvciBmYWxzZSwgZmFsc2UgYnkgZGVmYXVsdC5cbiAgLy8gICAtIHRpbWVvdXQgW25vbmUtbmF0aXZlXSBvcHRpb25hbCwgdmFsdWUgaXMgYSBudW1iZXIgKG1pbGxpc2Vjb25kcyksIGRlZmF1bHQgdmF1bGUgaXMgRklORklOSVRZLlxuICAvLyAgIC0gbWF4aW11bUFnZSBbbm9uZS1uYXRpdmVdIG9wdGlvbmFsLCB2YWx1ZSBpcyBhIG51bWJlciAobWlsbGlzZWNvbmRzKSwgZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICBnZXRDdXJyZW50UG9zaXRpb24gKHN1Y2Nlc3NDYklkLCBlcnJvckNiSWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdWNjZXNzQ2IgPSBwb3MgPT4gdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKHN1Y2Nlc3NDYklkLCBwb3MpXG4gICAgY29uc3QgZXJyb3JDYiA9IGVyciA9PiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soZXJyb3JDYklkLCBlcnIpXG4gICAgaWYgKHN1cHBvcnRHZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzQ2IsIGVycm9yQ2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yTXNnKVxuICAgICAgZXJyb3JDYihuZXcgRXJyb3IoZXJyb3JNc2cpKVxuICAgIH1cbiAgfSxcblxuICAvLyBvcHRpb25zOiB0aGUgc2FtZSB3aXRoIGBnZXRDdXJyZW50UG9zaXRpb25gLlxuICB3YXRjaFBvc2l0aW9uIChzdWNjZXNzQ2JJZCwgZXJyb3JDYklkLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3VjY2Vzc0NiID0gcG9zID0+IHRoaXMuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhzdWNjZXNzQ2JJZCwgcG9zLCB0cnVlKVxuICAgIGNvbnN0IGVycm9yQ2IgPSBlcnIgPT4gdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGVycm9yQ2JJZCwgZXJyKVxuICAgIGlmIChzdXBwb3J0R2VvbG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IGlkID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24ocG9zID0+IHtcbiAgICAgICAgcG9zLndhdGNoSWQgPSBpZFxuICAgICAgICBzdWNjZXNzQ2IocG9zKVxuICAgICAgfSwgZXJyb3JDYiwgb3B0aW9ucylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3JNc2cpXG4gICAgICBlcnJvckNiKG5ldyBFcnJvcihlcnJvck1zZykpXG4gICAgfVxuICB9LFxuXG4gIGNsZWFyV2F0Y2ggKHdhdGNoSWQpIHtcbiAgICBpZiAoc3VwcG9ydEdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh3YXRjaElkKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvck1zZylcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgZ2VvbG9jYXRpb246IFt7XG4gICAgbmFtZTogJ2dldEN1cnJlbnRQb3NpdGlvbicsXG4gICAgYXJnczogWydmdW5jdGlvbicsICdmdW5jdGlvbicsICdvYmplY3QnXVxuICB9LCB7XG4gICAgbmFtZTogJ3dhdGNoUG9zaXRpb24nLFxuICAgIGFyZ3M6IFsnZnVuY3Rpb24nLCAnZnVuY3Rpb24nLCAnb2JqZWN0J11cbiAgfSwge1xuICAgIG5hbWU6ICdjbGVhcldhdGNoJyxcbiAgICBhcmdzOiBbJ3N0cmluZyddXG4gIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ2dlb2xvY2F0aW9uJywgZ2VvbG9jYXRpb24sIG1ldGEpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYWdlSW5mbyA9IHtcblxuICBzZXRUaXRsZTogZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgdGl0bGUgPSB0aXRsZSB8fCAnV2VleCBIVE1MNSdcbiAgICB0cnkge1xuICAgICAgdGl0bGUgPSBkZWNvZGVVUklDb21wb25lbnQodGl0bGUpXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcbiAgfVxufVxuXG5jb25zdCBtZXRhID0ge1xuICBwYWdlSW5mbzogW3tcbiAgICBuYW1lOiAnc2V0VGl0bGUnLFxuICAgIGFyZ3M6IFsnc3RyaW5nJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ3BhZ2VJbmZvJywgcGFnZUluZm8sIG1ldGEpXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBsb2NhbFN0b3JhZ2UgKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBzdXBwb3J0TG9jYWxTdG9yYWdlID0gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCdcbmNvbnN0IFNVQ0NFU1MgPSAnc3VjY2VzcydcbmNvbnN0IEZBSUxFRCA9ICdmYWlsZWQnXG5jb25zdCBJTlZBTElEX1BBUkFNID0gJ2ludmFsaWRfcGFyYW0nXG5jb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJ1xuXG5jb25zdCBzdG9yYWdlID0ge1xuXG4gIC8qKlxuICAgKiBXaGVuIHBhc3NlZCBhIGtleSBuYW1lIGFuZCB2YWx1ZSwgd2lsbCBhZGQgdGhhdCBrZXkgdG8gdGhlIHN0b3JhZ2UsXG4gICAqIG9yIHVwZGF0ZSB0aGF0IGtleSdzIHZhbHVlIGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICBzZXRJdGVtOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgY2FsbGJhY2tJZCkge1xuICAgIGlmICghc3VwcG9ydExvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5lcnJvcigneW91ciBicm93c2VyIGlzIG5vdCBzdXBwb3J0IGxvY2FsU3RvcmFnZSB5ZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuICAgIGlmICgha2V5IHx8ICF2YWx1ZSkge1xuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICAgIHJlc3VsdDogJ2ZhaWxlZCcsXG4gICAgICAgIGRhdGE6IElOVkFMSURfUEFSQU1cbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpXG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgICAgcmVzdWx0OiBTVUNDRVNTLFxuICAgICAgICBkYXRhOiBVTkRFRklORURcbiAgICAgIH0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAvLyBhY2NlcHQgYW55IGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nIGEgc3RvcmFnZSBhdHRlbXB0IGFzIGEgcXVvdGEgZXJyb3JcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgICByZXN1bHQ6IEZBSUxFRCxcbiAgICAgICAgZGF0YTogVU5ERUZJTkVEXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogV2hlbiBwYXNzZWQgYSBrZXkgbmFtZSwgd2lsbCByZXR1cm4gdGhhdCBrZXkncyB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICBnZXRJdGVtOiBmdW5jdGlvbiAoa2V5LCBjYWxsYmFja0lkKSB7XG4gICAgaWYgKCFzdXBwb3J0TG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd5b3VyIGJyb3dzZXIgaXMgbm90IHN1cHBvcnQgbG9jYWxTdG9yYWdlIHlldC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuc2VuZGVyXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgICByZXN1bHQ6IEZBSUxFRCxcbiAgICAgICAgZGF0YTogSU5WQUxJRF9QQVJBTVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICByZXN1bHQ6IHZhbCA/IFNVQ0NFU1MgOiBGQUlMRUQsXG4gICAgICBkYXRhOiB2YWwgfHwgVU5ERUZJTkVEXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICpXaGVuIHBhc3NlZCBhIGtleSBuYW1lLCB3aWxsIHJlbW92ZSB0aGF0IGtleSBmcm9tIHRoZSBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrSWRcbiAgICovXG4gIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrSWQpIHtcbiAgICBpZiAoIXN1cHBvcnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3lvdXIgYnJvd3NlciBpcyBub3Qgc3VwcG9ydCBsb2NhbFN0b3JhZ2UgeWV0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBpZiAoIWtleSkge1xuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICAgIHJlc3VsdDogRkFJTEVELFxuICAgICAgICBkYXRhOiBJTlZBTElEX1BBUkFNXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgIHJlc3VsdDogU1VDQ0VTUyxcbiAgICAgIGRhdGE6IFVOREVGSU5FRFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBkYXRhIGl0ZW1zIHN0b3JlZCBpbiB0aGUgU3RvcmFnZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrSWRcbiAgICovXG4gIGxlbmd0aDogZnVuY3Rpb24gKGNhbGxiYWNrSWQpIHtcbiAgICBpZiAoIXN1cHBvcnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3lvdXIgYnJvd3NlciBpcyBub3Qgc3VwcG9ydCBsb2NhbFN0b3JhZ2UgeWV0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBjb25zdCBsZW4gPSBsb2NhbFN0b3JhZ2UubGVuZ3RoXG4gICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICByZXN1bHQ6IFNVQ0NFU1MsXG4gICAgICBkYXRhOiBsZW5cbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIGtleXMgc3RvcmVkIGluIFN0b3JhZ2Ugb2JqZWN0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICBnZXRBbGxLZXlzOiBmdW5jdGlvbiAoY2FsbGJhY2tJZCkge1xuICAgIGlmICghc3VwcG9ydExvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5lcnJvcigneW91ciBicm93c2VyIGlzIG5vdCBzdXBwb3J0IGxvY2FsU3RvcmFnZSB5ZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuICAgIGNvbnN0IF9hcnIgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfYXJyLnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSlcbiAgICB9XG4gICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICByZXN1bHQ6IFNVQ0NFU1MsXG4gICAgICBkYXRhOiBfYXJyXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBtZXRhID0ge1xuICBzdG9yYWdlOiBbe1xuICAgIG5hbWU6ICdzZXRJdGVtJyxcbiAgICBhcmdzOiBbJ3N0cmluZycsICdzdHJpbmcnLCAnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ2dldEl0ZW0nLFxuICAgIGFyZ3M6IFsnc3RyaW5nJywgJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdyZW1vdmVJdGVtJyxcbiAgICBhcmdzOiBbJ3N0cmluZycsICdmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAnbGVuZ3RoJyxcbiAgICBhcmdzOiBbJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdnZXRBbGxLZXlzJyxcbiAgICBhcmdzOiBbJ2Z1bmN0aW9uJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ3N0b3JhZ2UnLCBzdG9yYWdlLCBtZXRhKVxuICB9XG59XG4iLCIodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpICYmICh3aW5kb3cgPSB7Y3RybDoge30sIGxpYjoge319KTshd2luZG93LmN0cmwgJiYgKHdpbmRvdy5jdHJsID0ge30pOyF3aW5kb3cubGliICYmICh3aW5kb3cubGliID0ge30pOyFmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7dmFyIGI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYXJhbXNcIix7c2V0OmZ1bmN0aW9uKGEpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IodmFyIGMgaW4gYilkZWxldGUgYltjXTtmb3IodmFyIGMgaW4gYSliW2NdPWFbY119fSxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYn0sZW51bWVyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2VhcmNoXCIse3NldDpmdW5jdGlvbihhKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7MD09PWEuaW5kZXhPZihcIj9cIikmJihhPWEuc3Vic3RyKDEpKTt2YXIgYz1hLnNwbGl0KFwiJlwiKTtmb3IodmFyIGQgaW4gYilkZWxldGUgYltkXTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyl7dmFyIGY9Y1tlXS5zcGxpdChcIj1cIik7aWYodm9pZCAwIT09ZlsxXSYmKGZbMV09ZlsxXS50b1N0cmluZygpKSxmWzBdKXRyeXtiW2RlY29kZVVSSUNvbXBvbmVudChmWzBdKV09ZGVjb2RlVVJJQ29tcG9uZW50KGZbMV0pfWNhdGNoKGcpe2JbZlswXV09ZlsxXX19fX0sZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9W107Zm9yKHZhciBjIGluIGIpaWYodm9pZCAwIT09YltjXSlpZihcIlwiIT09YltjXSl0cnl7YS5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChjKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYltjXSkpfWNhdGNoKGQpe2EucHVzaChjK1wiPVwiK2JbY10pfWVsc2UgdHJ5e2EucHVzaChlbmNvZGVVUklDb21wb25lbnQoYykpfWNhdGNoKGQpe2EucHVzaChjKX1yZXR1cm4gYS5sZW5ndGg/XCI/XCIrYS5qb2luKFwiJlwiKTpcIlwifSxlbnVtZXJhYmxlOiEwfSk7dmFyIGM7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJoYXNoXCIse3NldDpmdW5jdGlvbihhKXtcInN0cmluZ1wiPT10eXBlb2YgYSYmKGEmJmEuaW5kZXhPZihcIiNcIik8MCYmKGE9XCIjXCIrYSksYz1hfHxcIlwiKX0sZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGVudW1lcmFibGU6ITB9KSx0aGlzLnNldD1mdW5jdGlvbihhKXthPWF8fFwiXCI7dmFyIGI7aWYoIShiPWEubWF0Y2gobmV3IFJlZ0V4cChcIl4oW2EtejAtOS1dKzopP1svXXsyfSg/OihbXkAvOj9dKykoPzo6KFteQC86XSspKT9AKT8oW146Lz8jXSspKD86WzpdKFswLTldKykpPyhbL11bXj8jO10qKT8oPzpbP10oW14jXSopKT8oWyNdW14/XSopPyRcIixcImlcIikpKSl0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyB1cmkgc2NoZW1lLlwiKTt0aGlzLnByb3RvY29sPWJbMV18fChcIm9iamVjdFwiPT10eXBlb2YgbG9jYXRpb24/bG9jYXRpb24ucHJvdG9jb2w6XCJcIiksdGhpcy51c2VybmFtZT1iWzJdfHxcIlwiLHRoaXMucGFzc3dvcmQ9YlszXXx8XCJcIix0aGlzLmhvc3RuYW1lPXRoaXMuaG9zdD1iWzRdLHRoaXMucG9ydD1iWzVdfHxcIlwiLHRoaXMucGF0aG5hbWU9Yls2XXx8XCIvXCIsdGhpcy5zZWFyY2g9Yls3XXx8XCJcIix0aGlzLmhhc2g9Yls4XXx8XCJcIix0aGlzLm9yaWdpbj10aGlzLnByb3RvY29sK1wiLy9cIit0aGlzLmhvc3RuYW1lfSx0aGlzLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5wcm90b2NvbCtcIi8vXCI7cmV0dXJuIHRoaXMudXNlcm5hbWUmJihhKz10aGlzLnVzZXJuYW1lLHRoaXMucGFzc3dvcmQmJihhKz1cIjpcIit0aGlzLnBhc3N3b3JkKSxhKz1cIkBcIiksYSs9dGhpcy5ob3N0LHRoaXMucG9ydCYmXCI4MFwiIT09dGhpcy5wb3J0JiYoYSs9XCI6XCIrdGhpcy5wb3J0KSx0aGlzLnBhdGhuYW1lJiYoYSs9dGhpcy5wYXRobmFtZSksdGhpcy5zZWFyY2gmJihhKz10aGlzLnNlYXJjaCksdGhpcy5oYXNoJiYoYSs9dGhpcy5oYXNoKSxhfSxhJiZ0aGlzLnNldChhLnRvU3RyaW5nKCkpfWIuaHR0cHVybD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IGMoYSl9fSh3aW5kb3csd2luZG93LmxpYnx8KHdpbmRvdy5saWI9e30pKTs7bW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cubGliWydodHRwdXJsJ107IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0fSk7XG59O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJpY3RVcmlFbmNvZGUgPSByZXF1aXJlKCdzdHJpY3QtdXJpLWVuY29kZScpO1xudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0c3dpdGNoIChvcHRzLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0J1snLFxuXHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdCddJ1xuXHRcdFx0XHRdLmpvaW4oJycpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRlbmNvZGUoaW5kZXgsIG9wdHMpLFxuXHRcdFx0XHRcdCddPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCc9Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0dmFyIHJlc3VsdDtcblxuXHRzd2l0Y2ggKG9wdHMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdHJlc3VsdCA9IC9cXFsoXFxkKilcXF0kLy5leGVjKGtleSk7XG5cblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCpcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldW3Jlc3VsdFsxXV0gPSB2YWx1ZTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0cmVzdWx0ID0gLyhcXFtcXF0pJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0IHx8IGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikge1xuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdHMpIHtcblx0aWYgKG9wdHMuZW5jb2RlKSB7XG5cdFx0cmV0dXJuIG9wdHMuc3RyaWN0ID8gc3RyaWN0VXJpRW5jb2RlKHZhbHVlKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGtleXNTb3J0ZXIoaW5wdXQpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0LnNvcnQoKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGtleXNTb3J0ZXIoT2JqZWN0LmtleXMoaW5wdXQpKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKGEpIC0gTnVtYmVyKGIpO1xuXHRcdH0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gaW5wdXRba2V5XTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gc3RyLnNwbGl0KCc/JylbMV0gfHwgJyc7XG59O1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHN0ciwgb3B0cykge1xuXHRvcHRzID0gb2JqZWN0QXNzaWduKHthcnJheUZvcm1hdDogJ25vbmUnfSwgb3B0cyk7XG5cblx0dmFyIGZvcm1hdHRlciA9IHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdHMpO1xuXG5cdC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBubyBwcm90b3R5cGVcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmcvaXNzdWVzLzQ3XG5cdHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJyk7XG5cblx0aWYgKCFzdHIpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0c3RyLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcblx0XHR2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuXHRcdC8vIEZpcmVmb3ggKHByZSA0MCkgZGVjb2RlcyBgJTNEYCB0byBgPWBcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9wdWxsLzM3XG5cdFx0dmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0dmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0cy5qb2luKCc9JykgOiB1bmRlZmluZWQ7XG5cblx0XHQvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblxuXHRcdGZvcm1hdHRlcihkZWNvZGVVUklDb21wb25lbnQoa2V5KSwgdmFsLCByZXQpO1xuXHR9KTtcblxuXHRyZXR1cm4gT2JqZWN0LmtleXMocmV0KS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuXHRcdHZhciB2YWwgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWwpICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHZhbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn07XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0ZW5jb2RlOiB0cnVlLFxuXHRcdHN0cmljdDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnXG5cdH07XG5cblx0b3B0cyA9IG9iamVjdEFzc2lnbihkZWZhdWx0cywgb3B0cyk7XG5cblx0dmFyIGZvcm1hdHRlciA9IGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRzKTtcblxuXHRyZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHR2YWwuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG5cdFx0XHRcdGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXN1bHQucHVzaChmb3JtYXR0ZXIoa2V5LCB2YWwyLCByZXN1bHQubGVuZ3RoKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdHMpICsgJz0nICsgZW5jb2RlKHZhbCwgb3B0cyk7XG5cdH0pLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4Lmxlbmd0aCA+IDA7XG5cdH0pLmpvaW4oJyYnKSA6ICcnO1xufTtcbiIsIi8qIGdsb2JhbCBsaWIsIFhNTEh0dHBSZXF1ZXN0ICovXG4vKiBkZXBzOiBodHRwdXJsICovXG5cbid1c2Ugc3RyaWN0J1xuXG5sZXQgdXRpbHNcblxuaW1wb3J0ICdodHRwdXJsJ1xuaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZydcblxubGV0IGpzb25wQ250ID0gMFxuY29uc3QgRVJST1JfU1RBVEUgPSAtMVxuXG5mdW5jdGlvbiBfanNvbnAgKGNvbmZpZywgY2FsbGJhY2ssIHByb2dyZXNzQ2FsbGJhY2spIHtcbiAgY29uc3QgY2JOYW1lID0gJ2pzb25wXycgKyAoKytqc29ucENudClcbiAgbGV0IHVybFxuXG4gIGlmICghY29uZmlnLnVybCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIGNvbmZpZy51cmwgc2hvdWxkIGJlIHNldCBpbiBfanNvbnAgZm9yIFxcJ2ZldGNoXFwnIEFQSS4nKVxuICB9XG5cbiAgZ2xvYmFsW2NiTmFtZV0gPSAoZnVuY3Rpb24gKGNiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgb2s6IHRydWUsXG4gICAgICAgIHN0YXR1c1RleHQ6ICdPSycsXG4gICAgICAgIGRhdGE6IHJlc3BvbnNlXG4gICAgICB9KVxuICAgICAgZGVsZXRlIGdsb2JhbFtjYl1cbiAgICB9XG4gIH0pKGNiTmFtZSlcblxuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICB0cnkge1xuICAgIHVybCA9IGxpYi5odHRwdXJsKGNvbmZpZy51cmwpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIGludmFsaWQgY29uZmlnLnVybCBpbiBfanNvbnAgZm9yIFxcJ2ZldGNoXFwnIEFQSTogJ1xuICAgICAgKyBjb25maWcudXJsKVxuICB9XG4gIHVybC5wYXJhbXMuY2FsbGJhY2sgPSBjYk5hbWVcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICBzY3JpcHQuc3JjID0gdXJsLnRvU3RyaW5nKClcbiAgLy8gc2NyaXB0Lm9uZXJyb3IgaXMgbm90IHdvcmtpbmcgb24gSUUgb3Igc2FmYXJpLlxuICAvLyBidXQgdGhleSBhcmUgbm90IGNvbnNpZGVyZWQgaGVyZS5cbiAgc2NyaXB0Lm9uZXJyb3IgPSAoZnVuY3Rpb24gKGNiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIHVuZXhwZWN0ZWQgZXJyb3IgaW4gX2pzb25wIGZvciBcXCdmZXRjaFxcJyBBUEknLCBlcnIpXG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHN0YXR1czogRVJST1JfU1RBVEUsXG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzVGV4dDogJycsXG4gICAgICAgIGRhdGE6ICcnXG4gICAgICB9KVxuICAgICAgZGVsZXRlIGdsb2JhbFtjYl1cbiAgICB9XG4gIH0pKGNiTmFtZSlcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgaGVhZC5pbnNlcnRCZWZvcmUoc2NyaXB0LCBudWxsKVxufVxuXG5mdW5jdGlvbiBfeGhyIChjb25maWcsIGNhbGxiYWNrLCBwcm9ncmVzc0NhbGxiYWNrKSB7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHhoci5yZXNwb25zZVR5cGUgPSBjb25maWcudHlwZVxuICB4aHIub3Blbihjb25maWcubWV0aG9kLCBjb25maWcudXJsLCB0cnVlKVxuXG4gIC8vIGNvcnMgY29va2llIHN1cHBvcnRcbiAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgPT09IHRydWUpIHtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICB9XG5cbiAgY29uc3QgaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gIGZvciAoY29uc3QgayBpbiBoZWFkZXJzKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgaGVhZGVyc1trXSlcbiAgfVxuXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgY2FsbGJhY2soe1xuICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgb2s6IHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDAsXG4gICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgIGRhdGE6IHhoci5yZXNwb25zZSxcbiAgICAgIGhlYWRlcnM6IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5zcGxpdCgnXFxuJylcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAob2JqLCBoZWFkZXJTdHIpIHtcbiAgICAgICAgICBjb25zdCBoZWFkZXJBcnIgPSBoZWFkZXJTdHIubWF0Y2goLyguKyk6ICguKykvKVxuICAgICAgICAgIGlmIChoZWFkZXJBcnIpIHtcbiAgICAgICAgICAgIG9ialtoZWFkZXJBcnJbMV1dID0gaGVhZGVyQXJyWzJdXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgfSwge30pXG4gICAgfSlcbiAgfVxuXG4gIGlmIChwcm9ncmVzc0NhbGxiYWNrKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcHJvZ3Jlc3NDYWxsYmFjayh7XG4gICAgICAgIHJlYWR5U3RhdGU6IHhoci5yZWFkeVN0YXRlLFxuICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgIGxlbmd0aDogZS5sb2FkZWQsXG4gICAgICAgIHRvdGFsOiBlLnRvdGFsLFxuICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnNwbGl0KCdcXG4nKVxuICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgaGVhZGVyU3RyKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJBcnIgPSBoZWFkZXJTdHIubWF0Y2goLyguKyk6ICguKykvKVxuICAgICAgICAgICAgaWYgKGhlYWRlckFycikge1xuICAgICAgICAgICAgICBvYmpbaGVhZGVyQXJyWzFdXSA9IGhlYWRlckFyclsyXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICAgIH0sIHt9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSB1bmV4cGVjdGVkIGVycm9yIGluIF94aHIgZm9yIFxcJ2ZldGNoXFwnIEFQSScsIGVycilcbiAgICBjYWxsYmFjayh7XG4gICAgICBzdGF0dXM6IEVSUk9SX1NUQVRFLFxuICAgICAgb2s6IGZhbHNlLFxuICAgICAgc3RhdHVzVGV4dDogJycsXG4gICAgICBkYXRhOiAnJ1xuICAgIH0pXG4gIH1cblxuICB4aHIuc2VuZChjb25maWcuYm9keSB8fCBudWxsKVxufVxuXG5jb25zdCBzdHJlYW0gPSB7XG5cbiAgLyoqXG4gICAqIHNlbmRIdHRwXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIE5vdGU6IFRoaXMgQVBJIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2Ugc3RyZWFtLmZldGNoIGluc3RlYWQuXG4gICAqIHNlbmQgYSBodHRwIHJlcXVlc3QgdGhyb3VnaCBYSFIuXG4gICAqIEBwYXJhbSAge29ian0gcGFyYW1zXG4gICAqICAtIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnIHwgJ0hFQUQnIHwgJ1BBVENIJyxcbiAgICogIC0gdXJsOiB1cmwgcmVxdWVzdGVkXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2FsbGJhY2tJZFxuICAgKi9cbiAgc2VuZEh0dHA6IGZ1bmN0aW9uIChwYXJhbSwgY2FsbGJhY2tJZCkge1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJhbSA9IEpTT04ucGFyc2UocGFyYW0pXG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwYXJhbSAhPT0gJ29iamVjdCcgfHwgIXBhcmFtLnVybCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdbaDUtcmVuZGVyXSBpbnZhbGlkIGNvbmZpZyBvciBpbnZhbGlkIGNvbmZpZy51cmwgZm9yIHNlbmRIdHRwIEFQSScpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBjb25zdCBtZXRob2QgPSBwYXJhbS5tZXRob2QgfHwgJ0dFVCdcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIHhoci5vcGVuKG1ldGhvZCwgcGFyYW0udXJsLCB0cnVlKVxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHRoaXMucmVzcG9uc2VUZXh0KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIHVuZXhwZWN0ZWQgZXJyb3IgaW4gc2VuZEh0dHAgQVBJJywgZXJyb3IpXG4gICAgICAvLyBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKFxuICAgICAgLy8gICBjYWxsYmFja0lkLFxuICAgICAgLy8gICBuZXcgRXJyb3IoJ3VuZXhwZWN0ZWQgZXJyb3IgaW4gc2VuZEh0dHAgQVBJJylcbiAgICAgIC8vIClcbiAgICB9XG4gICAgeGhyLnNlbmQoKVxuICB9LFxuXG4gIC8qKlxuICAgKiBmZXRjaFxuICAgKiB1c2Ugc3RyZWFtLmZldGNoIHRvIHJlcXVlc3QgZm9yIGEganNvbiBmaWxlLCBhIHBsYWluIHRleHQgZmlsZSBvclxuICAgKiBhIGFycmF5YnVmZmVyIGZvciBhIGZpbGUgc3RyZWFtLiAoWW91IGNhbiB1c2UgQmxvYiBhbmQgRmlsZVJlYWRlclxuICAgKiBBUEkgaW1wbGVtZW50ZWQgYnkgbW9zdCBtb2Rlcm4gYnJvd3NlcnMgdG8gcmVhZCBhIGFycmF5YnVmZmVyLilcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIGNvbmZpZyBvcHRpb25zXG4gICAqICAgLSBtZXRob2Q6ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJyB8ICdIRUFEJyB8ICdQQVRDSCdcbiAgICogICAtIGhlYWRlcnMge29ian1cbiAgICogICAtIHVybCB7c3RyaW5nfVxuICAgKiAgIC0gbW9kZSB7c3RyaW5nfSAnY29ycycgfCAnbm8tY29ycycgfCAnc2FtZS1vcmlnaW4nIHwgJ25hdmlnYXRlJ1xuICAgKiAgIC0gd2l0aENyZWRlbnRpYWxzIHtib29sZWFufVxuICAgKiAgIC0gYm9keVxuICAgKiAgIC0gdHlwZSB7c3RyaW5nfSAnanNvbicgfCAnanNvbnAnIHwgJ3RleHQnXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2FsbGJhY2tJZFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHByb2dyZXNzQ2FsbGJhY2tJZFxuICAgKi9cbiAgZmV0Y2g6IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFja0lkLCBwcm9ncmVzc0NhbGxiYWNrSWQpIHtcbiAgICBjb25zdCBERUZBVUxUX01FVEhPRCA9ICdHRVQnXG4gICAgY29uc3QgREVGQVVMVF9NT0RFID0gJ2NvcnMnXG4gICAgY29uc3QgREVGQVVMVF9UWVBFID0gJ3RleHQnXG5cbiAgICBjb25zdCBtZXRob2RPcHRpb25zID0gWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJywgJ0hFQUQnLCAnUEFUQ0gnXVxuICAgIGNvbnN0IG1vZGVPcHRpb25zID0gWydjb3JzJywgJ25vLWNvcnMnLCAnc2FtZS1vcmlnaW4nLCAnbmF2aWdhdGUnXVxuICAgIGNvbnN0IHR5cGVPcHRpb25zID0gWyd0ZXh0JywgJ2pzb24nLCAnanNvbnAnLCAnYXJyYXlidWZmZXInXVxuXG4gICAgLy8gY29uc3QgZmFsbGJhY2sgPSBmYWxzZSAgLy8gZmFsbGJhY2sgZnJvbSAnZmV0Y2gnIEFQSSB0byBYSFIuXG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcblxuICAgIGNvbnN0IGNvbmZpZyA9IHV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucylcblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMubWV0aG9kXG4gICAgaWYgKHR5cGVvZiBjb25maWcubWV0aG9kID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1ldGhvZCA9IERFRkFVTFRfTUVUSE9EXG4gICAgICBjb25zb2xlLndhcm4oJ1toNS1yZW5kZXJdIG9wdGlvbnMubWV0aG9kIGZvciBcXCdmZXRjaFxcJyBBUEkgaGFzIGJlZW4gc2V0IHRvICdcbiAgICAgICAgKyAnZGVmYXVsdCB2YWx1ZSBcXCcnICsgY29uZmlnLm1ldGhvZCArICdcXCcnKVxuICAgIH1cbiAgICBlbHNlIGlmIChtZXRob2RPcHRpb25zLmluZGV4T2YoKGNvbmZpZy5tZXRob2QgKyAnJylcbiAgICAgICAgLnRvVXBwZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIG9wdGlvbnMubWV0aG9kIFxcJydcbiAgICAgICAgKyBjb25maWcubWV0aG9kXG4gICAgICAgICsgJ1xcJyBmb3IgXFwnZmV0Y2hcXCcgQVBJIHNob3VsZCBiZSBvbmUgb2YgJ1xuICAgICAgICArIG1ldGhvZE9wdGlvbnMgKyAnLicpXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUgb3B0aW9ucy51cmxcbiAgICBpZiAoIWNvbmZpZy51cmwpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSBvcHRpb25zLnVybCBzaG91bGQgYmUgc2V0IGZvciBcXCdmZXRjaFxcJyBBUEkuJylcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBib2R5IGNvbnRlbnQgZm9yIG1ldGhvZCAnR0VUJy5cbiAgICBpZiAoY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSAnR0VUJykge1xuICAgICAgbGV0IGJvZHkgPSBjb25maWcuYm9keVxuICAgICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QoYm9keSkpIHtcbiAgICAgICAgYm9keSA9IHFzLnN0cmluZ2lmeShib2R5KVxuICAgICAgfVxuICAgICAgbGV0IHVybCA9IGNvbmZpZy51cmxcbiAgICAgIGxldCBoYXNoSWR4ID0gdXJsLmluZGV4T2YoJyMnKVxuICAgICAgaGFzaElkeCA8PSAtMSAmJiAoaGFzaElkeCA9IHVybC5sZW5ndGgpXG4gICAgICBsZXQgaGFzaCA9IHVybC5zdWJzdHIoaGFzaElkeClcbiAgICAgIGhhc2ggJiYgKGhhc2ggPSAnIycgKyBoYXNoKVxuICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCBoYXNoSWR4KVxuICAgICAgdXJsICs9IChjb25maWcudXJsLmluZGV4T2YoJz8nKSA8PSAtMSA/ICc/JyA6ICcmJykgKyBib2R5ICsgaGFzaFxuICAgICAgY29uZmlnLnVybCA9IHVybFxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMubW9kZVxuICAgIGlmICh0eXBlb2YgY29uZmlnLm1vZGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubW9kZSA9IERFRkFVTFRfTU9ERVxuICAgIH1cbiAgICBlbHNlIGlmIChtb2RlT3B0aW9ucy5pbmRleE9mKChjb25maWcubW9kZSArICcnKS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSBvcHRpb25zLm1vZGUgXFwnJ1xuICAgICAgICArIGNvbmZpZy5tb2RlXG4gICAgICAgICsgJ1xcJyBmb3IgXFwnZmV0Y2hcXCcgQVBJIHNob3VsZCBiZSBvbmUgb2YgJ1xuICAgICAgICArIG1vZGVPcHRpb25zICsgJy4nKVxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMudHlwZVxuICAgIGlmICh0eXBlb2YgY29uZmlnLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcudHlwZSA9IERFRkFVTFRfVFlQRVxuICAgICAgY29uc29sZS53YXJuKCdbaDUtcmVuZGVyXSBvcHRpb25zLnR5cGUgZm9yIFxcJ2ZldGNoXFwnIEFQSSBoYXMgYmVlbiBzZXQgdG8gJ1xuICAgICAgICArICdkZWZhdWx0IHZhbHVlIFxcJycgKyBjb25maWcudHlwZSArICdcXCcuJylcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZU9wdGlvbnMuaW5kZXhPZigoY29uZmlnLnR5cGUgKyAnJykudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gb3B0aW9ucy50eXBlIFxcJydcbiAgICAgICAgICArIGNvbmZpZy50eXBlXG4gICAgICAgICAgKyAnXFwnIGZvciBcXCdmZXRjaFxcJyBBUEkgc2hvdWxkIGJlIG9uZSBvZiAnXG4gICAgICAgICAgKyB0eXBlT3B0aW9ucyArICcuJylcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBvcHRpb25zLmhlYWRlcnNcbiAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KGNvbmZpZy5oZWFkZXJzKSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIG9wdGlvbnMuaGVhZGVycyBzaG91bGQgYmUgYSBwbGFpbiBvYmplY3QnKVxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMudGltZW91dFxuICAgIGNvbmZpZy50aW1lb3V0ID0gcGFyc2VJbnQoY29uZmlnLnRpbWVvdXQsIDEwKSB8fCAyNTAwXG5cbiAgICBjb25zdCBfY2FsbEFyZ3MgPSBbY29uZmlnLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHJlcylcbiAgICB9XVxuICAgIGlmIChwcm9ncmVzc0NhbGxiYWNrSWQpIHtcbiAgICAgIF9jYWxsQXJncy5wdXNoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgLy8gU2V0ICdrZWVwQWxpdmUnIHRvIHRydWUgZm9yIHNlbmRpbmcgY29udGludW91cyBjYWxsYmFja3NcbiAgICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhwcm9ncmVzc0NhbGxiYWNrSWQsIHJlcywgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnanNvbnAnKSB7XG4gICAgICBfanNvbnAuYXBwbHkodGhpcywgX2NhbGxBcmdzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIF94aHIuYXBwbHkodGhpcywgX2NhbGxBcmdzKVxuICAgIH1cbiAgfVxuXG59XG5cbmNvbnN0IG1ldGEgPSB7XG4gIHN0cmVhbTogW3tcbiAgICBuYW1lOiAnc2VuZEh0dHAnLFxuICAgIGFyZ3M6IFsnb2JqZWN0JywgJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdmZXRjaCcsXG4gICAgYXJnczogWydvYmplY3QnLCAnZnVuY3Rpb24nLCAnZnVuY3Rpb24nXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgdXRpbHMgPSBXZWV4LnV0aWxzXG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnc3RyZWFtJywgc3RyZWFtLCBtZXRhKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuLyoqXG5cbkFVQ1RJT046XG50YXNrUXVldWVcbkNsaXBib2FyZC5zZXRTdHJpbmcoKSAgTk9XIG5vdCB3b3JrcywgZmFjaW5nIHRvIHVzZXItYWN0IGxvc2Ugb2YgdGFza1F1ZXVlLlxuXG53b3JrcyBpbiBDaHJvbWUgRmlyZWZveCBPcGVyYS4gYnV0IG5vdCBpbiBTYWZhcmkuXG5Ac2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9leGVjQ29tbWFuZCNCcm93c2VyX2NvbXBhdGliaWxpdHlcblxuQ2xpcGJvYXJkLmdldFN0cmluZygpIHVuaW1wbGVtZW50ZWQuIFRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGRvIHBhc3RlIGZyb20gY2xpcGJvYXJkIHRvIGpzIHZhcmlhYmxlLlxuXG5TbyBsb29rIG91dCB5b3VyIGFwcCBiZWhhdmlvciwgd2hlbiBkb3duZ3JhZGUgdG8gaHRtbDUgcmVuZGVyLlxuQW55IGlkZWEgaXMgd2VsY29tZS5cbioqL1xuXG5jb25zdCBXRUVYX0NMSVBCT0FSRF9JRCA9ICdfX3dlZXhfY2xpcGJvYXJkX2lkX18nXG5cbmNvbnN0IGNsaXBib2FyZCA9IHtcblxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uIChjYWxsYmFja0lkKSB7XG4gICAgLy8gbm90IHN1cHBvcnRlZCBpbiBodG1sNVxuICAgIGNvbnNvbGUubG9nKCdjbGlwYm9hcmQuZ2V0U3RyaW5nKCkgaXMgbm90IHN1cHBvcnRlZCBub3cuJylcbiAgfSxcblxuICBzZXRTdHJpbmc6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgLy8gbm90IHN1cHBvcnQgc2FmYXJpXG4gICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJyAmJiB0ZXh0ICE9PSAnJyAmJiBkb2N1bWVudC5leGVjQ29tbWFuZCkge1xuICAgICAgY29uc3QgdGVtcElucHV0ID0gZWxlbWVudCgpXG4gICAgICB0ZW1wSW5wdXQudmFsdWUgPSB0ZXh0XG5cbiAgICAgIHRlbXBJbnB1dC5zZWxlY3QoKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICAgICAgLy8gdmFyIG91dCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImV4ZWNDb21tYW5kIG91dCBpcyBcIiArIG91dCk7XG4gICAgICB0ZW1wSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgdGVtcElucHV0LmJsdXIoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbmx5IHN1cHBvcnQgc3RyaW5nIGlucHV0IG5vdycpXG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gZWxlbWVudCAoKSB7XG4gIGxldCB0ZW1wSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChXRUVYX0NMSVBCT0FSRF9JRClcbiAgaWYgKCF0ZW1wSW5wdXQpIHtcbiAgICB0ZW1wSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBXRUVYX0NMSVBCT0FSRF9JRClcbiAgICB0ZW1wSW5wdXQuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6MXB4O3dpZHRoOjFweDtib3JkZXI6bm9uZTsnXG4gICAgLy8gdGVtcElucHV0LnN0eWxlLmNzc1RleHQgPSBcImhlaWdodDo0MHB4O3dpZHRoOjMwMHB4O2JvcmRlcjpzb2xpZDtcIlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcElucHV0KVxuICB9XG4gIHJldHVybiB0ZW1wSW5wdXRcbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgY2xpcGJvYXJkOiBbe1xuICAgIG5hbWU6ICdnZXRTdHJpbmcnLFxuICAgIGFyZ3M6IFsnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ3NldFN0cmluZycsXG4gICAgYXJnczogWydzdHJpbmcnXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnY2xpcGJvYXJkJywgY2xpcGJvYXJkLCBtZXRhKVxuICB9XG59XG4iLCIvLyBAZmxvd1xuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqIHRoZSByaWdodGVzdCBvYmplY3QncyB2YWx1ZSBoYXMgdGhlIGhpZ2hlc3QgcHJpb3JpdHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQgKHRvOiB7fSwgLi4uYXJnczogQXJyYXk8e30+KToge30ge1xuICBpZiAoIWFyZ3MgfHwgYXJncy5sZW5ndGggPD0gMCkgeyByZXR1cm4gdG8gfVxuICBhcmdzLmZvckVhY2goZnJvbSA9PiB7XG4gICAgaWYgKHR5cGVvZiBmcm9tICE9PSAnb2JqZWN0JykgeyByZXR1cm4gfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGZyb20pIHtcbiAgICAgIHRvW2tleV0gPSBmcm9tW2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIE1peCBzcGVjaWZpZWQgcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRLZXlzICh0bzoge30sIGZyb206IHt9ID0ge30sIGtleXM6IEFycmF5PHN0cmluZz4pOiB7fSB7XG4gIChrZXlzIHx8IFtdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgZnJvbSAmJiAodG9ba2V5XSA9IGZyb21ba2V5XSlcbiAgfSlcbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogRXh0cmFjdCBzcGVjaWZpZWQgcHJvcGVydGllcyBmcm9tIHNyYyB0byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEtleXMgKHRvOiB7fSwgZnJvbToge30gPSB7fSwga2V5czogQXJyYXk8c3RyaW5nPikge1xuICBpZiAoIWZyb20pIHsgcmV0dXJuIHRvIH1cbiAgKGtleXMgfHwgW10pLmZvckVhY2goa2V5ID0+IHtcbiAgICBmcm9tICYmICh0b1trZXldID0gZnJvbVtrZXldKVxuICAgIGZyb20gJiYgKGRlbGV0ZSBmcm9tW2tleV0pXG4gIH0pXG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIFNpbXBsZSBiaW5kLCBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kIChmbjogRnVuY3Rpb24sIGN0eDogbWl4ZWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhOiBtaXhlZCkge1xuICAgIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuLyoqXG4gKiBPbmx5IGNhbGwgdGhlIGZ1bmMgdGhlIGxhc3QgdGltZSBiZWZvcmUgaXQncyBub3QgdGhhdCBmcmVxdWVudGx5IGNhbGxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlIChmdW5jOiBGdW5jdGlvbiwgd2FpdDogbnVtYmVyKSB7XG4gIGxldCB0aW1lcklkXG4gIGZ1bmN0aW9uIGxhdGVyICgpIHtcbiAgICB0aW1lcklkID0gbnVsbFxuICAgIGZ1bmMuYXBwbHkobnVsbClcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcklkKVxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuICB9XG59XG5cbi8qKlxuICogT25seSBjYWxsIHRoZSBmdW5jIHRoZSBmaXJzdCB0aW1lIGJlZm9yZSBhIHNlcmllcyBmcmVxdWVudGx5IGZ1bmN0aW9uIGNhbGxzIGhhcHBlbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlc3MgKGZ1bmM6IEZ1bmN0aW9uLCB3YWl0OiBudW1iZXIpIHtcbiAgbGV0IHRpbWVySWRcbiAgZnVuY3Rpb24gbGF0ZXIgKCkge1xuICAgIHRpbWVySWQgPSBudWxsXG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRpbWVySWQpIHtcbiAgICAgIGZ1bmMuYXBwbHkoKVxuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGltZXJJZClcbiAgICB0aW1lcklkID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcbiAgfVxufVxuXG4vKipcbiAqIE9ubHkgY2FsbCB0aGUgZnVuYyBldmVyeSB0aW1lIGFmdGVyIGEgd2FpdCBtaWxsaXNlY29uZHMgaWYgaXQncyB0b28gZnJlcXVlbnRseSBjYWxsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZSAoZnVuYzogRnVuY3Rpb24sIHdhaXQ6IG51bWJlciwgY2FsbExhc3RUaW1lOiBib29sZWFuKSB7XG4gIGxldCBsYXN0ID0gMFxuICBsZXQgbGFzdFRpbWVyID0gbnVsbFxuICBjb25zdCBsYXN0VGltZUR1cmF0aW9uID0gd2FpdCArICh3YWl0ID4gMjUgPyB3YWl0IDogMjUpICAvLyBwbHVzIGhhbGYgd2FpdCB0aW1lLlxuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3M6IEFycmF5PG1peGVkPikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgaWYgKHRpbWUgLSBsYXN0ID4gd2FpdCkge1xuICAgICAgaWYgKGNhbGxMYXN0VGltZSkge1xuICAgICAgICBsYXN0VGltZXIgJiYgY2xlYXJUaW1lb3V0KGxhc3RUaW1lcilcbiAgICAgICAgbGFzdFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGFzdFRpbWVyID0gbnVsbFxuICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgICAgfSwgbGFzdFRpbWVEdXJhdGlvbilcbiAgICAgIH1cbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGxhc3QgPSB0aW1lXG4gICAgfVxuICB9XG59XG4iLCIvLyBpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuL2Z1bmMnXG5cbmZ1bmN0aW9uIGV4dGVuZCAodG8sIC4uLmFyZ3MpIHtcbiAgaWYgKCFhcmdzIHx8IGFyZ3MubGVuZ3RoIDw9IDApIHsgcmV0dXJuIHRvIH1cbiAgYXJncy5mb3JFYWNoKGZyb20gPT4ge1xuICAgIGlmICh0eXBlb2YgZnJvbSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tKSB7XG4gICAgICB0b1trZXldID0gZnJvbVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBDcmVhdGUgRXZlbnQuXG4gKiBAcGFyYW0ge0RPTVN0cmluZ30gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFdmVudCAoY29udGV4dCwgdHlwZSwgcHJvcHMpIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwgeyBidWJibGVzOiBmYWxzZSB9KVxuICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgZXh0ZW5kKGV2ZW50LCBwcm9wcylcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY29udGV4dCB8fCBudWxsXG4gIH0pXG5cbiAgcmV0dXJuIGV2ZW50XG59XG5cbi8qKlxuICogQ3JlYXRlIEN1c3RvbSBFdmVudC5cbiAqIEBwYXJhbSB7RE9NU3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50IChjb250ZXh0LCB0eXBlLCBwcm9wcykge1xuICAvLyBjb21wYXRpYmlsaXR5OiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1jdXN0b21ldmVudFxuICAvLyBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlKVxuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gIGV2ZW50LmluaXRDdXN0b21FdmVudCh0eXBlLCBmYWxzZSwgdHJ1ZSwge30pXG4gIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICBleHRlbmQoZXZlbnQsIHByb3BzKVxuXG4gIC8vIFRPRE86IGV2ZW50LnRhcmdldCBpcyByZWFkb25seVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY29udGV4dCB8fCBudWxsXG4gIH0pXG5cbiAgcmV0dXJuIGV2ZW50XG59XG5cbi8qKlxuICogZGlzcGF0Y2ggYSBldmVudCBvbiBhIGRvbSBlbGVtZW50LlxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGRvbVxuICogQHBhcmFtICB7RXZlbnR9IGV2ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50IChkb20sIGV2ZW50KSB7XG4gIGRvbS5kaXNwYXRjaEV2ZW50KGV2ZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwRm9ybUV2ZW50cyAoY29udGV4dCkge1xuICBjb25zdCBldmVudE1hcCA9IHt9XG4gIDtbJ2lucHV0JywgJ2NoYW5nZScsICdmb2N1cycsICdibHVyJ10uZm9yRWFjaCh0eXBlID0+IHtcbiAgICBldmVudE1hcFt0eXBlXSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmIChjb250ZXh0LiRlbCkge1xuICAgICAgICBldmVudC52YWx1ZSA9IGNvbnRleHQuJGVsLnZhbHVlXG4gICAgICB9XG4gICAgICBjb250ZXh0LiRlbWl0KHR5cGUsIGV2ZW50KVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGV2ZW50TWFwXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWFwRm9ybUV2ZW50c1xufVxuIiwiaW1wb3J0IHsgdGhyb3R0bGUsIGV4dGVuZCB9IGZyb20gJy4vZnVuYydcbmltcG9ydCB7IGNyZWF0ZUV2ZW50IH0gZnJvbSAnLi9ldmVudCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudFNjcm9sbGVyICh2bm9kZSkge1xuICBpZiAoIXZub2RlKSByZXR1cm4gbnVsbFxuICBpZiAodm5vZGUud2VleFR5cGUgPT09ICdzY3JvbGxlcicgfHwgdm5vZGUud2VleFR5cGUgPT09ICdsaXN0Jykge1xuICAgIHJldHVybiB2bm9kZVxuICB9XG4gIHJldHVybiBnZXRQYXJlbnRTY3JvbGxlcih2bm9kZS4kcGFyZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW50ZXJzZWN0aW9uIChyZWN0LCBjdFJlY3QpIHtcbiAgcmV0dXJuIChyZWN0LmxlZnQgPCBjdFJlY3QucmlnaHQgJiYgcmVjdC5yaWdodCA+IGN0UmVjdC5sZWZ0KVxuICAgICYmIChyZWN0LnRvcCA8IGN0UmVjdC5ib3R0b20gJiYgcmVjdC5ib3R0b20gPiBjdFJlY3QudG9wKVxufVxuXG4vKipcbiAqIFtpc0VsZW1lbnRWaXNpYmxlIGRlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbCAgICBhIGRvbSBlbGVtZW50LlxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBjb250YWluZXIgIG9wdGlvbmFsLCB0aGUgY29udGFpbmVyIG9mIHRoaXMgZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRWaXNpYmxlIChlbCwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGJvZHlSZWN0ID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIHJpZ2h0OiB3aW5kb3cuaW5uZXJXaWR0aFxuICB9XG4gIGNvbnN0IGN0UmVjdCA9IChjb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkpXG4gICAgPyBib2R5UmVjdCA6IGNvbnRhaW5lclxuICAgID8gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogYm9keVJlY3RcbiAgcmV0dXJuIGhhc0ludGVyc2VjdGlvbihcbiAgICBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBjdFJlY3QpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudFZpc2libGUgKGNvbXBvbmVudCkge1xuICBpZiAoY29tcG9uZW50LiRlbCkge1xuICAgIGNvbnN0IHNjcm9sbGVyID0gZ2V0UGFyZW50U2Nyb2xsZXIoY29tcG9uZW50KVxuICAgIGlmIChzY3JvbGxlciAmJiBzY3JvbGxlci4kZWwpIHtcbiAgICAgIHJldHVybiBoYXNJbnRlcnNlY3Rpb24oXG4gICAgICAgIGNvbXBvbmVudC4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHNjcm9sbGVyLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBpc0VsZW1lbnRWaXNpYmxlKGNvbXBvbmVudC4kZWwpXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBUT0RPOiBpbXByb3ZlIHRoZSBlZmZpY2llbmN5XG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hBcHBlYXIgKGNvbnRleHQpIHtcbiAgaWYgKCFjb250ZXh0KSByZXR1cm4gbnVsbFxuXG4gIGNvbnRleHQuJG5leHRUaWNrKCgpID0+IHtcbiAgICBpZiAoKGNvbnRleHQuJG9wdGlvbnMgJiYgY29udGV4dC4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzKVxuICAgICAgfHwgKGNvbnRleHQuJHZub2RlICYmIGNvbnRleHQuJHZub2RlLmRhdGEgJiYgY29udGV4dC4kdm5vZGUuZGF0YS5vbikpIHtcbiAgICAgIGNvbnN0IG9uID0gZXh0ZW5kKHt9LCBjb250ZXh0LiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMsIGNvbnRleHQuJHZub2RlLmRhdGEub24pXG4gICAgICBpZiAob24uYXBwZWFyIHx8IG9uLmRpc2FwcGVhcikge1xuICAgICAgICBjb25zdCBzY3JvbGxlciA9IGdldFBhcmVudFNjcm9sbGVyKGNvbnRleHQpXG4gICAgICAgIGxldCBpc1dpbmRvdyA9IGZhbHNlXG4gICAgICAgIGxldCBjb250YWluZXIgPSB3aW5kb3dcbiAgICAgICAgaWYgKHNjcm9sbGVyICYmIHNjcm9sbGVyLiRlbCkge1xuICAgICAgICAgIGNvbnRhaW5lciA9IHNjcm9sbGVyLiRlbFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlzV2luZG93ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBsYXN0U2Nyb2xsVG9wID0gY29udGFpbmVyLnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXRcblxuICAgICAgICBjb250ZXh0Ll92aXNpYmxlID0gaXNFbGVtZW50VmlzaWJsZShjb250ZXh0LiRlbCwgaXNXaW5kb3cgPyBkb2N1bWVudC5ib2R5IDogY29udGFpbmVyKVxuICAgICAgICBpZiAoY29udGV4dC5fdmlzaWJsZSAmJiBvbi5hcHBlYXIpIHtcbiAgICAgICAgICBpZiAob24uYXBwZWFyLmZuKSB7XG4gICAgICAgICAgICBvbi5hcHBlYXIgPSBvbi5hcHBlYXIuZm5cbiAgICAgICAgICB9XG4gICAgICAgICAgb24uYXBwZWFyKGNyZWF0ZUV2ZW50KGNvbnRleHQuJGVsLCAnYXBwZWFyJywgeyBkaXJlY3Rpb246IG51bGwgfSkpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRocm90dGxlKGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCB2aXNpYmxlID0gaXNFbGVtZW50VmlzaWJsZShjb250ZXh0LiRlbCwgaXNXaW5kb3cgPyBkb2N1bWVudC5ib2R5IDogY29udGFpbmVyKVxuICAgICAgICAgIGxldCBsaXN0ZW5lciA9IG51bGxcbiAgICAgICAgICBsZXQgdHlwZSA9IG51bGxcbiAgICAgICAgICBpZiAodmlzaWJsZSAhPT0gY29udGV4dC5fdmlzaWJsZSkge1xuICAgICAgICAgICAgY29udGV4dC5fdmlzaWJsZSA9IHZpc2libGVcbiAgICAgICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyID0gb24uYXBwZWFyXG4gICAgICAgICAgICAgIHR5cGUgPSAnYXBwZWFyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyID0gb24uZGlzYXBwZWFyXG4gICAgICAgICAgICAgIHR5cGUgPSAnZGlzYXBwZWFyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyICYmIGxpc3RlbmVyLmZuKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIuZm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICBsaXN0ZW5lciAmJiBsaXN0ZW5lcihjcmVhdGVFdmVudChjb250ZXh0LiRlbCwgdHlwZSwge1xuICAgICAgICAgICAgICBkaXJlY3Rpb246IHNjcm9sbFRvcCA8IGxhc3RTY3JvbGxUb3AgPyAnZG93bidcbiAgICAgICAgICAgICAgICA6IHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3AgPyAndXAnIDogbnVsbFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG4gICAgICAgICAgfVxuICAgICAgICB9LCAyNSwgdHJ1ZSlcblxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIiwiLy8gQGZsb3dcbi8qKlxuICogQGZpbGVPdmVydmlldzogcGVyZiBkYXRhIHJlY29yZGVyLlxuICovXG5cbmltcG9ydCB7IGRlYm91bmNlLCBkZXByZXNzIH0gZnJvbSAnLi9mdW5jJ1xuXG4vLyBwZXJmb3JtYW5jZSB0cmFja2VyIGZvciB3ZWV4LlxuY29uc3QgcGVyZjoge1xuICBlYXJsaWVzdEJlZm9yZUNyZWF0ZXM6IEFycmF5PG51bWJlcj4sXG4gIGxhdGVzdE1vdW50czogQXJyYXk8bnVtYmVyPixcbiAgZWFybGllc3RCZWZvcmVVcGRhdGVzOiBBcnJheTxudW1iZXI+LFxuICBsYXRlc3RVcGRhdGVzOiBBcnJheTxudW1iZXI+LFxuICBsYXRlc3RSZW5kZXJGaW5pc2hlczogQXJyYXk8bnVtYmVyPixcbiAgLy8gY3JlYXRlVGltZTogZWFybGllc3QgYmVmb3JlQ3JlYXRlIC0+IGxhdGVzdCBtb3VudGVkLlxuICBjcmVhdGVUaW1lOiBBcnJheTx7IHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyIH0+LFxuICAvLyB1cGRhdGVUaW1lOiBlYXJsaWVzdCBiZWZvcmVVcGRhdGUgLT4gbGF0ZXN0IHVwZGF0ZWQuXG4gIHVwZGF0ZVRpbWU6IEFycmF5PHsgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgfT4sXG4gIC8vIHJlbmRlclRpbWU6IGVhcmxpZXN0IGJlZm9yZUNyZWF0ZS9iZWZvcmVVcGRhdGUgLT4gbGF0ZXN0IGltZyBsb2FkZWQuXG4gIHJlbmRlclRpbWU6IEFycmF5PHsgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgfT4sXG4gIGVudHJpZXM6IEFycmF5PHsgcmVxdWVzdFN0YXJ0OiBudW1iZXIsIHJlc3BvbnNlRW5kOiBudW1iZXIgfT4sXG4gIHRpbWU6IHt9LFxuICBmaXJzdEFsbE1vdW50ZWRUaW1lOiA/bnVtYmVyXG59ID0gd2luZG93Ll93ZWV4X3BlcmYgPSB7XG4gIGVhcmxpZXN0QmVmb3JlQ3JlYXRlczogW10sXG4gIGxhdGVzdE1vdW50czogW10sXG4gIGVhcmxpZXN0QmVmb3JlVXBkYXRlczogW10sXG4gIGxhdGVzdFVwZGF0ZXM6IFtdLFxuICBsYXRlc3RSZW5kZXJGaW5pc2hlczogW10sXG4gIGNyZWF0ZVRpbWU6IFtdLFxuICB1cGRhdGVUaW1lOiBbXSxcbiAgcmVuZGVyVGltZTogW10sXG4gIGVudHJpZXM6IFtdLFxuICB0aW1lOiB7fSxcbiAgZmlyc3RBbGxNb3VudGVkVGltZTogbnVsbFxufVxuXG5jb25zdCB0bXAgPSB7fVxuXG5jb25zdCBJTUdfUkVDX0lOREVOVDogbnVtYmVyID0gNTAwICAvLyByZWNvcmQgbG9hZGluZyBldmVudHMgYWZ0ZXIgNTAwbXMgdG93YXJkcyBsYXN0IHJlY29yZGluZy5cblxubGV0IGVhcmxpZXN0QmVmb3JlVXBkYXRlVGltZTogbnVtYmVyID0gMFxubGV0IGVhcmxpZXN0QmVmb3JlQ3JlYXRlVGltZTogbnVtYmVyID0gMFxuXG5mdW5jdGlvbiBnZXROb3cgKCk6IG51bWJlciB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59XG5cbmZ1bmN0aW9uIGdldEVudHJpZXMgKCk6IEFycmF5PGFueT4ge1xuICByZXR1cm4gcGVyZm9ybWFuY2UuZ2V0RW50cmllc1xuICAgID8gcGVyZm9ybWFuY2UuZ2V0RW50cmllcygpXG4gICAgOiBbeyByZXNwb25zZUVuZDogZ2V0Tm93KCkgLSBJTUdfUkVDX0lOREVOVCB9XVxufVxuXG4vKipcbiAqIGdldCBmaXJzdCBzY3JlZW4gdGltZS5cbiAqL1xuY29uc3QgZGVib3VuY2VkVGFnSW1nID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICBjb25zdCBlbnRyaWVzID0gZ2V0RW50cmllcygpXG4gIGNvbnN0IGxlbiA9IGVudHJpZXMubGVuZ3RoXG4gIGxldCBpID0gMFxuICBsZXQgZW5kID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGNvbnN0IHJlc3BvbnNlRW5kID0gZW50cmllc1tpXS5yZXNwb25zZUVuZFxuICAgIGVuZCA9IGVuZCA8IHJlc3BvbnNlRW5kID8gcmVzcG9uc2VFbmQgOiBlbmRcbiAgICBwZXJmLmVudHJpZXMucHVzaCh7XG4gICAgICByZXF1ZXN0U3RhcnQ6IGVudHJpZXNbaV0ucmVxdWVzdFN0YXJ0LFxuICAgICAgcmVzcG9uc2VFbmRcbiAgICB9KVxuICAgIGkrK1xuICB9XG4gIHBlcmYubGF0ZXN0UmVuZGVyRmluaXNoZXMucHVzaChlbmQpXG4gIGNvbnN0IHN0YXJ0ID0gTWF0aC5tYXgoZWFybGllc3RCZWZvcmVDcmVhdGVUaW1lLCBlYXJsaWVzdEJlZm9yZVVwZGF0ZVRpbWUpXG4gIHBlcmYucmVuZGVyVGltZS5wdXNoKHtcbiAgICBzdGFydCxcbiAgICBlbmQsXG4gICAgZHVyYXRpb246IGVuZCAtIHN0YXJ0XG4gIH0pXG5cbiAgY29uc3QgbnVtID0gcGVyZi5yZW5kZXJUaW1lLmxlbmd0aFxuICBwZXJmW2BzY3JlZW5UaW1lJHtudW19YF0gPSBlbmRcbiAgd2luZG93LndlZXguZW1pdCgncmVuZGVyZmluaXNoJywgZW5kKVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBjb25zb2xlLmxvZyhgc2NyZWVuVGltZVske251bX1dOiAke2VuZH0gbXMuYClcbiAgICBjb25zb2xlLmxvZygnX3dlZXhfcGVyZjonLCB3aW5kb3cuX3dlZXhfcGVyZilcbiAgfVxufSwgSU1HX1JFQ19JTkRFTlQpXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdJbWcgKCk6IHZvaWQge1xuICBkZWJvdW5jZWRUYWdJbWcoKVxufVxuXG4vKipcbiAqIHJlY29yZGluZyB0aGUgZWFybGllc3QgJ2JlZm9yZUNyZWF0ZScgdGltZS5cbiAqL1xuY29uc3QgZGVwcmVzc2VkVGFnQmVmb3JlQ3JlYXRlID0gZGVwcmVzcyhmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5vdyA9IGdldE5vdygpXG4gIGVhcmxpZXN0QmVmb3JlQ3JlYXRlVGltZSA9IG5vd1xuICBwZXJmLmVhcmxpZXN0QmVmb3JlQ3JlYXRlcy5wdXNoKG5vdylcbn0sIDI1KVxuXG5leHBvcnQgZnVuY3Rpb24gdGFnQmVmb3JlQ3JlYXRlICgpOiB2b2lkIHtcbiAgZGVwcmVzc2VkVGFnQmVmb3JlQ3JlYXRlKClcbn1cblxuLyoqXG4gKiByZWNvcmRpbmcgdGhlIGxhdGVzdCAnbW91bnRlZCcgdGltZS5cbiAqL1xuY29uc3QgZGVib3VuY2VkVGFnTW91bnRlZCA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgbm93ID0gZ2V0Tm93KClcbiAgcGVyZi5sYXRlc3RNb3VudHMucHVzaChub3cpXG4gIHBlcmYuY3JlYXRlVGltZS5wdXNoKHtcbiAgICBzdGFydDogZWFybGllc3RCZWZvcmVDcmVhdGVUaW1lLFxuICAgIGVuZDogbm93LFxuICAgIGR1cmF0aW9uOiBub3cgLSBlYXJsaWVzdEJlZm9yZUNyZWF0ZVRpbWVcbiAgfSlcblxuICBpZiAoIXBlcmYuZmlyc3RBbGxNb3VudGVkVGltZSkge1xuICAgIHBlcmYuZmlyc3RBbGxNb3VudGVkVGltZSA9IG5vd1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgY29uc29sZS5sb2coYGZpcnN0IGFsbCBtb3VudGVkIHRpbWU6ICR7bm93fSBtcy5gKVxuICAgIH1cbiAgfVxufSwgMjUpXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdNb3VudGVkICgpOiB2b2lkIHtcbiAgZGVib3VuY2VkVGFnTW91bnRlZCgpXG59XG5cbi8qKlxuICogcmVjb3JkaW5nIHRoZSBlYXJsaWVzdCAnYmVmb3JlVXBkYXRlJyB0aW1lLlxuICovXG5jb25zdCBkZXByZXNzZWRUYWdCZWZvcmVVcGRhdGUgPSBkZXByZXNzKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgbm93ID0gZ2V0Tm93KClcbiAgZWFybGllc3RCZWZvcmVVcGRhdGVUaW1lID0gbm93XG4gIHBlcmYuZWFybGllc3RCZWZvcmVVcGRhdGVzLnB1c2gobm93KVxufSwgMjUpXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdCZWZvcmVVcGRhdGUgKCk6IHZvaWQge1xuICBkZXByZXNzZWRUYWdCZWZvcmVVcGRhdGUoKVxufVxuXG4vKipcbiAqIHJlY29yZGluZyB0aGUgbGF0ZXN0ICd1cGRhdGVkJyB0aW1lLlxuICovXG5jb25zdCBkZWJvdW5jZWRUYWdVcGRhdGVkID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICBjb25zdCBub3cgPSBnZXROb3coKVxuICBwZXJmLmxhdGVzdFVwZGF0ZXMucHVzaChub3cpXG4gIHBlcmYudXBkYXRlVGltZS5wdXNoKHtcbiAgICBzdGFydDogZWFybGllc3RCZWZvcmVVcGRhdGVUaW1lLFxuICAgIGVuZDogbm93LFxuICAgIGR1cmF0aW9uOiBub3cgLSBlYXJsaWVzdEJlZm9yZVVwZGF0ZVRpbWVcbiAgfSlcbn0sIDI1KVxuXG5leHBvcnQgZnVuY3Rpb24gdGFnVXBkYXRlZCAoKTogdm9pZCB7XG4gIGRlYm91bmNlZFRhZ1VwZGF0ZWQoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFnQmVnaW4gKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICB0bXBbbmFtZV0gPSBnZXROb3coKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFnRW5kIChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgbGV0IHByZSA9IHBlcmYudGltZVtuYW1lXVxuICBpZiAoIXByZSkge1xuICAgIHByZSA9IDBcbiAgfVxuICBwZXJmLnRpbWVbbmFtZV0gPSBwcmUgKyBnZXROb3coKSAtIHRtcFtuYW1lXVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgaXNFbGVtZW50VmlzaWJsZSB9IGZyb20gJy4vY29tcG9uZW50J1xuaW1wb3J0IHsgY3JlYXRlRXZlbnQsIGRpc3BhdGNoRXZlbnQgfSBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICcuL2Z1bmMnXG5pbXBvcnQgeyB0YWdJbWcgfSBmcm9tICcuL3BlcmYnXG5cbmNvbnN0IFNDUkVFTl9SRUNfTElNSVQgPSAzICAvLyBqdXN0IHJlY29yZCB0aGUgZmlyc3QgMyB0aW1lcyBmb3Igc2NyZWVuLXJlbmRlciBmaW5pc2hpbmcuXG5sZXQgZG9SZWNvcmQgPSB0cnVlXG5cbmZ1bmN0aW9uIHByZUxvYWRJbWcgKHNyYzogc3RyaW5nLFxuICAgIGxvYWRDYWxsYmFjazogPyhFdmVudCkgPT4gdm9pZCxcbiAgICBlcnJvckNhbGxiYWNrOiA/KEV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gIGltZy5vbmxvYWQgPSBsb2FkQ2FsbGJhY2sgPyBsb2FkQ2FsbGJhY2suYmluZChpbWcpIDogbnVsbFxuICBpbWcub25lcnJvciA9IGVycm9yQ2FsbGJhY2sgPyBlcnJvckNhbGxiYWNrLmJpbmQoaW1nKSA6IG51bGxcbiAgaW1nLnNyYyA9IHNyY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTcmMgKGl0ZW06IEhUTUxFbGVtZW50LCBzcmM6ID9zdHJpbmcsIHBsYWNlaG9sZGVyU3JjOiA/c3RyaW5nKTogdm9pZCB7XG4gIGlmICghc3JjKSB7IHJldHVybiB9XG4gIGZ1bmN0aW9uIGZpbmFsbENiICgpIHtcbiAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnaW1nLXNyYycpXG4gICAgaWYgKGRvUmVjb3JkKSB7XG4gICAgICBpZiAod2luZG93Ll93ZWV4X3BlcmYucmVuZGVyVGltZS5sZW5ndGggPCBTQ1JFRU5fUkVDX0xJTUlUKSB7XG4gICAgICAgIHRhZ0ltZygpIC8vIHRhZyBsYXN0ZXN0IGltZyBvbmxvYWQgdGltZS5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkb1JlY29yZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByZUxvYWRJbWcoc3JjLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c3JjIHx8ICcnfSlgXG4gICAgY29uc3QgeyB3aWR0aDogbmF0dXJhbFdpZHRoLCBoZWlnaHQ6IG5hdHVyYWxIZWlnaHQgfSA9IHRoaXNcbiAgICBkaXNwYXRjaEV2ZW50KGl0ZW0sIGNyZWF0ZUV2ZW50KGl0ZW0sICdsb2FkJywgeyBuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQgfSkpXG4gICAgZmluYWxsQ2IoKVxuICB9LCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgZGlzcGF0Y2hFdmVudChpdGVtLCBjcmVhdGVFdmVudChpdGVtLCAnZXJyb3InKSlcbiAgICBpZiAocGxhY2Vob2xkZXJTcmMpIHtcbiAgICAgIHByZUxvYWRJbWcocGxhY2Vob2xkZXJTcmMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGxhY2Vob2xkZXJTcmMgfHwgJyd9KWBcbiAgICAgIH0pXG4gICAgfVxuICAgIGZpbmFsbENiKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpcmVMYXp5bG9hZCAoZWw6IEFycmF5PEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50IHwgbnVsbCwgaWdub3JlVmlzaWJpbGl0eTogP2Jvb2xlYW4pOiB2b2lkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XG4gICAgcmV0dXJuIGVsLmZvckVhY2goY3QgPT4gZmlyZUxhenlsb2FkKGN0KSlcbiAgfVxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmJvZHlcbiAgaWYgKCFlbCkgeyByZXR1cm4gfVxuICBjb25zdCBpbWdzOiBOb2RlTGlzdCA9IChlbCB8fCBkb2N1bWVudC5ib2R5KS5xdWVyeVNlbGVjdG9yQWxsKCdbaW1nLXNyY10nKVxuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGltZyA9IGltZ3NbaV1cbiAgICBpZiAodHlwZW9mIGlnbm9yZVZpc2liaWxpdHkgPT09ICdib29sZWFuJyAmJiBpZ25vcmVWaXNpYmlsaXR5KSB7XG4gICAgICBhcHBseVNyYyhpbWcsIGltZy5nZXRBdHRyaWJ1dGUoJ2ltZy1zcmMnKSwgaW1nLmdldEF0dHJpYnV0ZSgnaW1nLXBsYWNlaG9sZGVyJykpXG4gICAgfVxuICAgIGVsc2UgaWYgKGlzRWxlbWVudFZpc2libGUoaW1nLCBlbCkpIHtcbiAgICAgIGFwcGx5U3JjKGltZywgaW1nLmdldEF0dHJpYnV0ZSgnaW1nLXNyYycpLCBpbWcuZ2V0QXR0cmlidXRlKCdpbWctcGxhY2Vob2xkZXInKSlcbiAgICB9XG4gICAgLy8gSW4gc29tZWNhc2VzIHRoZXJlIGFyZSBpbWFnZXMgb3V0IG9mIHRoZSBzY3JlZW4gaW4geC1heGlzLiBUaGVyZVxuICAgIC8vIHNob3VsZCBub3QgYmUgYSBicmVhayBwb2ludCBpbiB0aGVzZSBjYXNlcy5cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIC8vIGFscmVheSBvdXQgb2Ygdmlldywgbm8gbmVlZCB0byBjb21wYXJlIGFueSBtb3JlLlxuICAgIC8vICAgYnJlYWtcbiAgICAvLyB9XG4gIH1cbn1cblxuLyoqXG4gKiBjYWNoZSBhIHRocm90dGxlIGxhenlsb2FkIGZ1bmN0aW9uIGZvciBldmVyeSBjb250YWluZXIgZWxlbWVudFxuICogb25jZSBmb3IgZGlmZmVyZW50IHdhaXQgdGltZXMgc2VwYXJhdGUuXG4gKiAgIHRoZSBhcmNoaXRlY3R1cmUgb2YgdGhpcyBjYWNoZTpcbiAqICAgICAgY2FjaGU6IHtcbiAqICAgICAgICBlbC5pZDoge1xuICogICAgICAgICAgd2FpdDogdGhyb3R0bGVkRnVuY3Rpb24gKCkgeyAuLi4gfVxuICogICAgICAgIH1cbiAqICAgICAgfVxuICovXG5jb25zdCBjYWNoZSA9IHt9XG5sZXQgX3VpZDogbnVtYmVyID0gMVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRocm90dGxlTGF6eWxvYWQgKHdhaXQ6IG51bWJlciA9IDE2LCBlbDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuYm9keSkge1xuICBsZXQgaWQ6IG51bWJlciA9ICsoZWwgJiYgZWwuZGF0YXNldC50aHJvdHRsZUlkKVxuICBpZiAoaXNOYU4oaWQpIHx8IGlkIDw9IDApIHtcbiAgICBpZCA9IF91aWQrK1xuICAgIGVsICYmIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10aHJvdHRsZS1pZCcsIGlkICsgJycpXG4gIH1cblxuICAhY2FjaGVbaWRdICYmIChjYWNoZVtpZF0gPSB7fSlcbiAgY29uc3QgdGhyb3R0bGVkID0gY2FjaGVbaWRdW3dhaXRdIHx8XG4gICAgKGNhY2hlW2lkXVt3YWl0XSA9IHRocm90dGxlKFxuICAgICAgZmlyZUxhenlsb2FkLmJpbmQodGhpcywgZWwpLFxuICAgICAgcGFyc2VGbG9hdCh3YWl0KSxcbiAgICAgIC8vIHRydWUgZm9yIGNhbGxMYXN0VGltZS5cbiAgICAgIC8vIHRvIHRyaWdnZXIgb25jZSBtb3JlIHRpbWUgYWZ0ZXIgdGhlIGxhc3QgdGhyb3R0bGVkIGZ1bmN0aW9uIGNhbGxlZCB3aXRoIGEgbGl0dGxlIG1vcmUgZGVsYXkuXG4gICAgICB0cnVlKVxuICAgIClcbiAgcmV0dXJuIHRocm90dGxlZFxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMvZnVuYydcblxuLyoqXG4gKiB2aWV3cG9ydCBwcmlvcml0eTpcbiAqXG4gKiAxLiBtZXRhIHdlZXgtdmlld3BvcnQgKGRldmVsb3BlciBjdXN0b20pXG4gKiAyLiBzZXRWaWV3cG9ydChjb25maWcpIDo9IGNvbmZpZy53aWR0aCAocHJpdmF0ZSBjb2RlKSBAZGVwcmVjYXRlZFxuICogMy4gcHJvY2Vzcy5lbnYuVklFV1BPUlRfV0lEVEggKGJ1aWQgdGltZSlcbiAqXG4gKi9cbmxldCBpc0luaXRlZCA9IGZhbHNlXG5jb25zdCBERUZBVUxUX1ZJRVdQT1JUX1dJRFRIID0gNzUwXG5cbi8qKlxuICogZ2V0IHZpZXdwb3J0IHdpZHRoIGZyb20gd2VleC12aWV3cG9ydCBtZXRhLlxuICovXG5jb25zdCBlbnZWaWV3cG9ydFdpZHRoID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuVklFV1BPUlRfV0lEVEgpXG5sZXQgd2lkdGg6IG51bWJlciA9ICFpc05hTihlbnZWaWV3cG9ydFdpZHRoKSAmJiBlbnZWaWV3cG9ydFdpZHRoID4gMFxuICA/IGVudlZpZXdwb3J0V2lkdGhcbiAgOiBERUZBVUxUX1ZJRVdQT1JUX1dJRFRIXG5cbmxldCB3eFZpZXdwb3J0TWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cIndlZXgtdmlld3BvcnRcIl0nKVxuY29uc3QgbWV0YVdpZHRoID0gd3hWaWV3cG9ydE1ldGEgJiYgcGFyc2VJbnQod3hWaWV3cG9ydE1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpXG5pZiAobWV0YVdpZHRoICYmICFpc05hTihtZXRhV2lkdGgpICYmIG1ldGFXaWR0aCA+IDApIHtcbiAgd2lkdGggPSBtZXRhV2lkdGhcbn1cblxubGV0IGRwcjogbnVtYmVyID0gMFxubGV0IGRlUmVjdDogbWl4ZWQgPSBudWxsXG5sZXQgc2NyZWVuV2lkdGg6IG51bWJlciA9IDBcbmxldCBzY3JlZW5IZWlnaHQ6IG51bWJlciA9IDBcblxuY29uc3QgaW5mbzoge1xuICBkcHI6IG51bWJlcixcbiAgc2NhbGU6IG51bWJlcixcbiAgcmVtOiBudW1iZXIsXG4gIGRldmljZVdpZHRoOiBudW1iZXIsXG4gIGRldmljZUhlaWdodDogbnVtYmVyXG59ID0ge1xuICBkcHIsXG4gIHNjYWxlOiAwLFxuICByZW06IDAsXG4gIGRldmljZVdpZHRoOiAwLFxuICBkZXZpY2VIZWlnaHQ6IDBcbn1cblxuLyoqXG4gKiBzZXQgcm9vdCBmb250LXNpemUgZm9yIHJlbSB1bml0cy4gSWYgYWxyZWFkeSBiZWVuIHNldCwganVzdCBza2lwIHRoaXMuXG4gKi9cbmZ1bmN0aW9uIHNldFJvb3RGb250ICh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudFxuICBjb25zdCByZW0gPSB3aWR0aCAvIDEwXG4gIGlmICghZG9jLmRvY3VtZW50RWxlbWVudCkgeyByZXR1cm4gfVxuICBjb25zdCByb290Rm9udFNpemUgPSBkb2MuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplXG4gIGlmICghcm9vdEZvbnRTaXplKSB7XG4gICAgZG9jLmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHJlbSArICdweCdcbiAgICBpbmZvLnJlbSA9IHJlbVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldE1ldGFWaWV3cG9ydCAod2lkdGg6IG51bWJlcik6IHZvaWQge1xuICBpZiAoIXd4Vmlld3BvcnRNZXRhKSB7XG4gICAgd3hWaWV3cG9ydE1ldGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgICB3eFZpZXdwb3J0TWV0YS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnd2VleC12aWV3cG9ydCcpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgbWV0YVdpZHRoID0gcGFyc2VJbnQod3hWaWV3cG9ydE1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpXG4gICAgaWYgKG1ldGFXaWR0aCA9PT0gd2lkdGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICB3eFZpZXdwb3J0TWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB3aWR0aCArICcnKVxufVxuXG4vKipcbiAqIGV4cG9ydCB2aWV3cG9ydCBpbmZvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAodmlld3BvcnRXaWR0aDogbnVtYmVyID0gd2lkdGgpOiA/e1xuICBkcHI6IG51bWJlcixcbiAgc2NhbGU6IG51bWJlcixcbiAgcmVtOiBudW1iZXIsXG4gIGRldmljZVdpZHRoOiBudW1iZXIsXG4gIGRldmljZUhlaWdodDogbnVtYmVyXG59IHtcbiAgaWYgKCFpc0luaXRlZCkge1xuICAgIGlzSW5pdGVkID0gdHJ1ZVxuXG4gICAgY29uc3QgZG9jID0gd2luZG93LmRvY3VtZW50XG4gICAgaWYgKCFkb2MpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1t2dWUtcmVuZGVyXSB3aW5kb3cuZG9jdW1lbnQgaXMgdW5kZmluZWQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1t2dWUtcmVuZGVyXSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgaXMgdW5kZmluZWQuJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGRwciA9IGluZm8uZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW9cbiAgICBkZVJlY3QgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgc2NyZWVuV2lkdGggPSBkZVJlY3Qud2lkdGhcbiAgICBzY3JlZW5IZWlnaHQgPSBkZVJlY3QuaGVpZ2h0XG5cbiAgICAvLyBzZXQgcm9vdCBmb250IGZvciByZW0uXG4gICAgc2V0Um9vdEZvbnQoc2NyZWVuV2lkdGgpXG4gICAgc2V0TWV0YVZpZXdwb3J0KHZpZXdwb3J0V2lkdGgpXG5cbiAgICAvKipcbiAgICAgKiB3aHkgbm90IHRvIHVzZSB3aW5kb3cuc2NyZWVuLndpZHRoIHRvIGdldCBzY3JlZW5XaWR0aCA/IEJlY2F1c2UgaW4gc29tZVxuICAgICAqIG9sZCB3ZWJraXQgYnJvd3NlciBvbiBhbmRyb2lkIHN5c3RlbSBpdCBnZXQgdGhlIGRldmljZSBwaXhlbCB3aWR0aCwgd2hpY2hcbiAgICAgKiBpcyB0aGUgc2NyZWVuV2lkdGggbXVsdGlwbHkgYnkgdGhlIGRldmljZSBwaXhlbCByYXRpby5cbiAgICAgKiBlLmcuIGlwNiAtPiBnZXQgMzc1IGZvciB2aXJ0dWFsIHNjcmVlbiB3aWR0aC5cbiAgICAgKi9cbiAgICBjb25zdCBzY2FsZSA9IHNjcmVlbldpZHRoIC8gdmlld3BvcnRXaWR0aFxuICAgIC8qKlxuICAgICAqIDEuIGlmIHNldCBpbml0aWFsL21heGltdW0vbWltaW11bS1zY2FsZSBzb21lIGhvdyB0aGUgcGFnZSB3aWxsIGhhdmUgYSBib3VuY2VcbiAgICAgKiBlZmZlY3Qgd2hlbiB1c2VyIGRyYWcgdGhlIHBhZ2UgdG93YXJkcyBob3Jpem9udGFsIGF4aXMuXG4gICAgICogMi4gRHVlIHRvIGNvbXBhdGliaWxpdHkgcmVhc29ucywgbm90IHRvIHVzZSB2aWV3cG9ydCBtZXRhIGFueW1vcmUuIEp1c3QgYnJpbmdcbiAgICAgKiBhIHBhcmFtZXRlciBzY2FsZSBpbnRvIHRoZSBzdHlsZSB2YWx1ZSBwcm9jZXNzaW5nLlxuICAgICAqL1xuXG4gICAgLy8gY29uc3QgY29udGVudHMgPSBbXG4gICAgLy8gICBgd2lkdGg9JHt2aWV3cG9ydFdpZHRofWAsXG4gICAgLy8gICBgaW5pdGlhbC1zY2FsZT0ke3NjYWxlfWAsXG4gICAgLy8gICBgbWF4aW11bS1zY2FsZT0ke3NjYWxlfWAsXG4gICAgLy8gICBgbWluaW11bS1zY2FsZT0ke3NjYWxlfWAsXG4gICAgLy8gICBgdXNlci1zY2FsYWJsZT1ub2BcbiAgICAvLyBdXG5cbiAgICAvLyBsZXQgbWV0YSA9IGRvYy5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpXG4gICAgLy8gaWYgKCFtZXRhKSB7XG4gICAgLy8gICBtZXRhID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICAgIC8vICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndmlld3BvcnQnKVxuICAgIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLmFwcGVuZENoaWxkKG1ldGEpXG4gICAgLy8gfVxuICAgIC8vIG1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywgY29udGVudHMuam9pbignLCcpKVxuXG4gICAgZXh0ZW5kKGluZm8sIHtcbiAgICAgIHNjYWxlLFxuICAgICAgZGV2aWNlV2lkdGg6IHNjcmVlbldpZHRoICogZHByLFxuICAgICAgZGV2aWNlSGVpZ2h0OiBzY3JlZW5IZWlnaHQgKiBkcHJcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGluZm9cbn1cblxuLyoqXG4gKiByZXNldCB2aWV3cG9ydCB3aWR0aCBhbmQgc2NhbGUuXG4gKiBAcmV0dXJuIG5ldyBzY2FsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Vmlld3BvcnQgKHZpZXdwb3J0V2lkdGg6IG51bWJlcik6IG51bWJlciB7XG4gIHNldE1ldGFWaWV3cG9ydCh2aWV3cG9ydFdpZHRoKVxuICBjb25zdCBuZXdTY2FsZSA9IHNjcmVlbldpZHRoIC8gdmlld3BvcnRXaWR0aFxuICBpbmZvLnNjYWxlID0gbmV3U2NhbGVcbiAgcmV0dXJuIG5ld1NjYWxlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9ydEluZm8gKCk6IHtcbiAgZHByOiBudW1iZXIsXG4gIHNjYWxlOiBudW1iZXIsXG4gIHJlbTogbnVtYmVyLFxuICBkZXZpY2VXaWR0aDogbnVtYmVyLFxuICBkZXZpY2VIZWlnaHQ6IG51bWJlclxufSB7XG4gIHJldHVybiBpbmZvXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhcGl0YWxpemVTdHJpbmc7XG5mdW5jdGlvbiBjYXBpdGFsaXplU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwcmVmaXhQcm9wZXJ0eTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nID0gcmVxdWlyZSgnLi9jYXBpdGFsaXplU3RyaW5nJyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYXBpdGFsaXplU3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcHJlZml4UHJvcGVydHkocHJlZml4UHJvcGVydGllcywgcHJvcGVydHksIHN0eWxlKSB7XG4gIGlmIChwcmVmaXhQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgIHZhciByZXF1aXJlZFByZWZpeGVzID0gcHJlZml4UHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJlcXVpcmVkUHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHN0eWxlW3JlcXVpcmVkUHJlZml4ZXNbaV0gKyAoMCwgX2NhcGl0YWxpemVTdHJpbmcyLmRlZmF1bHQpKHByb3BlcnR5KV0gPSBzdHlsZVtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZWZpeFZhbHVlO1xuZnVuY3Rpb24gcHJlZml4VmFsdWUocGx1Z2lucywgcHJvcGVydHksIHZhbHVlLCBzdHlsZSwgbWV0YURhdGEpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBsdWdpbnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgcHJvY2Vzc2VkVmFsdWUgPSBwbHVnaW5zW2ldKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIG1ldGFEYXRhKTtcblxuICAgIC8vIHdlIGNhbiBzdG9wIHByb2Nlc3NpbmcgaWYgYSB2YWx1ZSBpcyByZXR1cm5lZFxuICAgIC8vIGFzIGFsbCBwbHVnaW4gY3JpdGVyaWEgYXJlIHVuaXF1ZVxuICAgIGlmIChwcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHByb2Nlc3NlZFZhbHVlO1xuICAgIH1cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZE5ld1ZhbHVlc09ubHk7XG5mdW5jdGlvbiBhZGRJZk5ldyhsaXN0LCB2YWx1ZSkge1xuICBpZiAobGlzdC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICBsaXN0LnB1c2godmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1ZhbHVlc09ubHkobGlzdCwgdmFsdWVzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBhZGRJZk5ldyhsaXN0LCB2YWx1ZXNbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhZGRJZk5ldyhsaXN0LCB2YWx1ZXMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNPYmplY3Q7XG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQcmVmaXhlcjtcblxudmFyIF9wcmVmaXhQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByZWZpeFByb3BlcnR5Jyk7XG5cbnZhciBfcHJlZml4UHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UHJvcGVydHkpO1xuXG52YXIgX3ByZWZpeFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJlZml4VmFsdWUnKTtcblxudmFyIF9wcmVmaXhWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhWYWx1ZSk7XG5cbnZhciBfYWRkTmV3VmFsdWVzT25seSA9IHJlcXVpcmUoJy4uL3V0aWxzL2FkZE5ld1ZhbHVlc09ubHknKTtcblxudmFyIF9hZGROZXdWYWx1ZXNPbmx5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZE5ld1ZhbHVlc09ubHkpO1xuXG52YXIgX2lzT2JqZWN0ID0gcmVxdWlyZSgnLi4vdXRpbHMvaXNPYmplY3QnKTtcblxudmFyIF9pc09iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc09iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVByZWZpeGVyKF9yZWYpIHtcbiAgdmFyIHByZWZpeE1hcCA9IF9yZWYucHJlZml4TWFwLFxuICAgICAgcGx1Z2lucyA9IF9yZWYucGx1Z2lucztcblxuICBmdW5jdGlvbiBwcmVmaXhBbGwoc3R5bGUpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzdHlsZSkge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcGVydHldO1xuXG4gICAgICAvLyBoYW5kbGUgbmVzdGVkIG9iamVjdHNcbiAgICAgIGlmICgoMCwgX2lzT2JqZWN0Mi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gcHJlZml4QWxsKHZhbHVlKTtcbiAgICAgICAgLy8gaGFuZGxlIGFycmF5IHZhbHVlc1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YXIgY29tYmluZWRWYWx1ZSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9ICgwLCBfcHJlZml4VmFsdWUyLmRlZmF1bHQpKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZVtpXSwgc3R5bGUsIHByZWZpeE1hcCk7XG4gICAgICAgICAgKDAsIF9hZGROZXdWYWx1ZXNPbmx5Mi5kZWZhdWx0KShjb21iaW5lZFZhbHVlLCBwcm9jZXNzZWRWYWx1ZSB8fCB2YWx1ZVtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgd2FzIHRvdWNoZWRcbiAgICAgICAgLy8gYnkgYW55IHBsdWdpbiB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uc1xuICAgICAgICBpZiAoY29tYmluZWRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3R5bGVbcHJvcGVydHldID0gY29tYmluZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9wcm9jZXNzZWRWYWx1ZSA9ICgwLCBfcHJlZml4VmFsdWUyLmRlZmF1bHQpKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIHByZWZpeE1hcCk7XG5cbiAgICAgICAgLy8gb25seSBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IHdhcyB0b3VjaGVkXG4gICAgICAgIC8vIGJ5IGFueSBwbHVnaW4gdG8gcHJldmVudCB1bm5lY2Vzc2FyeSBtdXRhdGlvbnNcbiAgICAgICAgaWYgKF9wcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IF9wcm9jZXNzZWRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICgwLCBfcHJlZml4UHJvcGVydHkyLmRlZmF1bHQpKHByZWZpeE1hcCwgcHJvcGVydHksIHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICByZXR1cm4gcHJlZml4QWxsO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHBsdWdpbnM6IFtdLFxuICBwcmVmaXhNYXA6IHsgXCJhcHBlYXJhbmNlXCI6IFtcIldlYmtpdFwiLCBcIk1velwiXSwgXCJ1c2VyU2VsZWN0XCI6IFtcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCJdLCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJ0ZXh0RW1waGFzaXNcIjogW1wiV2Via2l0XCJdLCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IFtcIldlYmtpdFwiXSwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiBbXCJXZWJraXRcIl0sIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IFtcIldlYmtpdFwiXSwgXCJjbGlwUGF0aFwiOiBbXCJXZWJraXRcIl0sIFwibWFza0ltYWdlXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrTW9kZVwiOiBbXCJXZWJraXRcIl0sIFwibWFza1JlcGVhdFwiOiBbXCJXZWJraXRcIl0sIFwibWFza1Bvc2l0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrQ2xpcFwiOiBbXCJXZWJraXRcIl0sIFwibWFza09yaWdpblwiOiBbXCJXZWJraXRcIl0sIFwibWFza1NpemVcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tDb21wb3NpdGVcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tCb3JkZXJNb2RlXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiBbXCJXZWJraXRcIl0sIFwibWFza0JvcmRlck91dHNldFwiOiBbXCJXZWJraXRcIl0sIFwibWFza0JvcmRlclJlcGVhdFwiOiBbXCJXZWJraXRcIl0sIFwibWFza0JvcmRlclwiOiBbXCJXZWJraXRcIl0sIFwibWFza1R5cGVcIjogW1wiV2Via2l0XCJdLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogW1wiV2Via2l0XCJdLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiBbXCJXZWJraXRcIl0sIFwidGV4dERlY29yYXRpb25MaW5lXCI6IFtcIldlYmtpdFwiXSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IFtcIldlYmtpdFwiXSwgXCJmaWx0ZXJcIjogW1wiV2Via2l0XCJdLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogW1wiV2Via2l0XCJdLCBcImJyZWFrQWZ0ZXJcIjogW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sIFwiYnJlYWtCZWZvcmVcIjogW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sIFwiYnJlYWtJbnNpZGVcIjogW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sIFwiY29sdW1uQ291bnRcIjogW1wiV2Via2l0XCIsIFwiTW96XCJdLCBcImNvbHVtbkZpbGxcIjogW1wiV2Via2l0XCIsIFwiTW96XCJdLCBcImNvbHVtbkdhcFwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uUnVsZVwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uUnVsZUNvbG9yXCI6IFtcIldlYmtpdFwiLCBcIk1velwiXSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogW1wiV2Via2l0XCIsIFwiTW96XCJdLCBcImNvbHVtblJ1bGVXaWR0aFwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uc1wiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uU3BhblwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uV2lkdGhcIjogW1wiV2Via2l0XCIsIFwiTW96XCJdLCBcImZsZXhcIjogW1wiV2Via2l0XCJdLCBcImZsZXhCYXNpc1wiOiBbXCJXZWJraXRcIl0sIFwiZmxleERpcmVjdGlvblwiOiBbXCJXZWJraXRcIl0sIFwiZmxleEdyb3dcIjogW1wiV2Via2l0XCJdLCBcImZsZXhGbG93XCI6IFtcIldlYmtpdFwiXSwgXCJmbGV4U2hyaW5rXCI6IFtcIldlYmtpdFwiXSwgXCJmbGV4V3JhcFwiOiBbXCJXZWJraXRcIl0sIFwiYWxpZ25Db250ZW50XCI6IFtcIldlYmtpdFwiXSwgXCJhbGlnbkl0ZW1zXCI6IFtcIldlYmtpdFwiXSwgXCJhbGlnblNlbGZcIjogW1wiV2Via2l0XCJdLCBcImp1c3RpZnlDb250ZW50XCI6IFtcIldlYmtpdFwiXSwgXCJvcmRlclwiOiBbXCJXZWJraXRcIl0sIFwidHJhbnNmb3JtXCI6IFtcIldlYmtpdFwiXSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogW1wiV2Via2l0XCJdLCBcInRyYW5zZm9ybU9yaWdpblhcIjogW1wiV2Via2l0XCJdLCBcInRyYW5zZm9ybU9yaWdpbllcIjogW1wiV2Via2l0XCJdLCBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiBbXCJXZWJraXRcIl0sIFwicGVyc3BlY3RpdmVcIjogW1wiV2Via2l0XCJdLCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IFtcIldlYmtpdFwiXSwgXCJ0cmFuc2Zvcm1TdHlsZVwiOiBbXCJXZWJraXRcIl0sIFwidHJhbnNmb3JtT3JpZ2luWlwiOiBbXCJXZWJraXRcIl0sIFwiYW5pbWF0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25EZWxheVwiOiBbXCJXZWJraXRcIl0sIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiBbXCJXZWJraXRcIl0sIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogW1wiV2Via2l0XCJdLCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25OYW1lXCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25QbGF5U3RhdGVcIjogW1wiV2Via2l0XCJdLCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJiYWNrZHJvcEZpbHRlclwiOiBbXCJXZWJraXRcIl0sIFwiZm9udEtlcm5pbmdcIjogW1wiV2Via2l0XCJdLCBcInNjcm9sbFNuYXBUeXBlXCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6IFtcIldlYmtpdFwiXSwgXCJzaGFwZUltYWdlTWFyZ2luXCI6IFtcIldlYmtpdFwiXSwgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiBbXCJXZWJraXRcIl0sIFwiaHlwaGVuc1wiOiBbXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiXSwgXCJmbG93SW50b1wiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJmbG93RnJvbVwiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJyZWdpb25GcmFnbWVudFwiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJ0ZXh0QWxpZ25MYXN0XCI6IFtcIk1velwiXSwgXCJ0YWJTaXplXCI6IFtcIk1velwiXSwgXCJ3cmFwRmxvd1wiOiBbXCJtc1wiXSwgXCJ3cmFwVGhyb3VnaFwiOiBbXCJtc1wiXSwgXCJ3cmFwTWFyZ2luXCI6IFtcIm1zXCJdLCBcImdyaWRUZW1wbGF0ZUNvbHVtbnNcIjogW1wibXNcIl0sIFwiZ3JpZFRlbXBsYXRlUm93c1wiOiBbXCJtc1wiXSwgXCJncmlkVGVtcGxhdGVBcmVhc1wiOiBbXCJtc1wiXSwgXCJncmlkVGVtcGxhdGVcIjogW1wibXNcIl0sIFwiZ3JpZEF1dG9Db2x1bW5zXCI6IFtcIm1zXCJdLCBcImdyaWRBdXRvUm93c1wiOiBbXCJtc1wiXSwgXCJncmlkQXV0b0Zsb3dcIjogW1wibXNcIl0sIFwiZ3JpZFwiOiBbXCJtc1wiXSwgXCJncmlkUm93U3RhcnRcIjogW1wibXNcIl0sIFwiZ3JpZENvbHVtblN0YXJ0XCI6IFtcIm1zXCJdLCBcImdyaWRSb3dFbmRcIjogW1wibXNcIl0sIFwiZ3JpZFJvd1wiOiBbXCJtc1wiXSwgXCJncmlkQ29sdW1uXCI6IFtcIm1zXCJdLCBcImdyaWRDb2x1bW5FbmRcIjogW1wibXNcIl0sIFwiZ3JpZENvbHVtbkdhcFwiOiBbXCJtc1wiXSwgXCJncmlkUm93R2FwXCI6IFtcIm1zXCJdLCBcImdyaWRBcmVhXCI6IFtcIm1zXCJdLCBcImdyaWRHYXBcIjogW1wibXNcIl0sIFwidGV4dFNpemVBZGp1c3RcIjogW1wiV2Via2l0XCIsIFwibXNcIl0sIFwidHJhbnNpdGlvbkRlbGF5XCI6IFtcIldlYmtpdFwiXSwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogW1wiV2Via2l0XCJdLCBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiBbXCJXZWJraXRcIl0sIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IFtcIldlYmtpdFwiXSB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjdXJzb3I7XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJyddO1xuXG52YXIgdmFsdWVzID0ge1xuICAnem9vbS1pbic6IHRydWUsXG4gICd6b29tLW91dCc6IHRydWUsXG4gIGdyYWI6IHRydWUsXG4gIGdyYWJiaW5nOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2N1cnNvcicgJiYgdmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1ByZWZpeGVkVmFsdWU7XG5cbnZhciByZWdleCA9IC8td2Via2l0LXwtbW96LXwtbXMtLztcblxuZnVuY3Rpb24gaXNQcmVmaXhlZFZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHJlZ2V4LnRlc3QodmFsdWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3Jvc3NGYWRlO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWNyb3NzLWZhZGVcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnJ107XG5mdW5jdGlvbiBjcm9zc0ZhZGUocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YoJ2Nyb3NzLWZhZGUoJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2Nyb3NzLWZhZGVcXCgvZywgcHJlZml4ICsgJ2Nyb3NzLWZhZGUoJyk7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZpbHRlcjtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBodHRwOi8vY2FuaXVzZS5jb20vI2ZlYXQ9Y3NzLWZpbHRlci1mdW5jdGlvblxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICcnXTtcbmZ1bmN0aW9uIGZpbHRlcihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZignZmlsdGVyKCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9maWx0ZXJcXCgvZywgcHJlZml4ICsgJ2ZpbHRlcignKTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleDtcbnZhciB2YWx1ZXMgPSB7XG4gIGZsZXg6IHRydWUsXG4gICdpbmxpbmUtZmxleCc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGZsZXgocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gWyctd2Via2l0LWJveCcsICctbW96LWJveCcsICctbXMtJyArIHZhbHVlICsgJ2JveCcsICctd2Via2l0LScgKyB2YWx1ZSwgdmFsdWVdO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94T2xkO1xudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2p1c3RpZnknLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gIHdyYXA6ICdtdWx0aXBsZSdcbn07XG5cbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkl0ZW1zOiAnV2Via2l0Qm94QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICBmbGV4V3JhcDogJ1dlYmtpdEJveExpbmVzJ1xufTtcblxuZnVuY3Rpb24gZmxleGJveE9sZChwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2ZsZXhEaXJlY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFsdWUuaW5kZXhPZignY29sdW1uJykgPiAtMSkge1xuICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5kZXhPZigncmV2ZXJzZScpID4gLTEpIHtcbiAgICAgIHN0eWxlLldlYmtpdEJveERpcmVjdGlvbiA9ICdyZXZlcnNlJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuV2Via2l0Qm94RGlyZWN0aW9uID0gJ25vcm1hbCc7XG4gICAgfVxuICB9XG4gIGlmIChhbHRlcm5hdGl2ZVByb3BzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgIHN0eWxlW2FsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldXSA9IGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ3JhZGllbnQ7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICcnXTtcblxudmFyIHZhbHVlcyA9IC9saW5lYXItZ3JhZGllbnR8cmFkaWFsLWdyYWRpZW50fHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnR8cmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudC87XG5cbmZ1bmN0aW9uIGdyYWRpZW50KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZXMudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaW1hZ2VTZXQ7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gaHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PWNzcy1pbWFnZS1zZXRcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnJ107XG5mdW5jdGlvbiBpbWFnZVNldChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZignaW1hZ2Utc2V0KCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9pbWFnZS1zZXRcXCgvZywgcHJlZml4ICsgJ2ltYWdlLXNldCgnKTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcG9zaXRpb247XG5mdW5jdGlvbiBwb3NpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAncG9zaXRpb24nICYmIHZhbHVlID09PSAnc3RpY2t5Jykge1xuICAgIHJldHVybiBbJy13ZWJraXQtc3RpY2t5JywgJ3N0aWNreSddO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzaXppbmc7XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJyddO1xuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgbWF4SGVpZ2h0OiB0cnVlLFxuICBtYXhXaWR0aDogdHJ1ZSxcbiAgd2lkdGg6IHRydWUsXG4gIGhlaWdodDogdHJ1ZSxcbiAgY29sdW1uV2lkdGg6IHRydWUsXG4gIG1pbldpZHRoOiB0cnVlLFxuICBtaW5IZWlnaHQ6IHRydWVcbn07XG52YXIgdmFsdWVzID0ge1xuICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAnbWF4LWNvbnRlbnQnOiB0cnVlLFxuICAnZmlsbC1hdmFpbGFibGUnOiB0cnVlLFxuICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAnY29udGFpbi1mbG9hdHMnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBzaXppbmcocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiB2YWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG52YXIgY2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcgaW4gY2FjaGVcbiAgICA/IGNhY2hlW3N0cmluZ11cbiAgICA6IGNhY2hlW3N0cmluZ10gPSBzdHJpbmdcbiAgICAgIC5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJCYnKVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGVTdHlsZU5hbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoeXBoZW5hdGVQcm9wZXJ0eTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUgPSByZXF1aXJlKCdoeXBoZW5hdGUtc3R5bGUtbmFtZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZU5hbWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBoeXBoZW5hdGVQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICByZXR1cm4gKDAsIF9oeXBoZW5hdGVTdHlsZU5hbWUyLmRlZmF1bHQpKHByb3BlcnR5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zaXRpb247XG5cbnZhciBfaHlwaGVuYXRlUHJvcGVydHkgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2h5cGhlbmF0ZVByb3BlcnR5Jyk7XG5cbnZhciBfaHlwaGVuYXRlUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlUHJvcGVydHkpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgdHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICBXZWJraXRUcmFuc2l0aW9uOiB0cnVlLFxuICBXZWJraXRUcmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gIE1velRyYW5zaXRpb246IHRydWUsXG4gIE1velRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZVxufTtcblxuXG52YXIgcHJlZml4TWFwcGluZyA9IHtcbiAgV2Via2l0OiAnLXdlYmtpdC0nLFxuICBNb3o6ICctbW96LScsXG4gIG1zOiAnLW1zLSdcbn07XG5cbmZ1bmN0aW9uIHByZWZpeFZhbHVlKHZhbHVlLCBwcm9wZXJ0eVByZWZpeE1hcCkge1xuICBpZiAoKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8vIG9ubHkgc3BsaXQgbXVsdGkgdmFsdWVzLCBub3QgY3ViaWMgYmV6aWVyc1xuICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSB2YWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbXVsdGlwbGVWYWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgc2luZ2xlVmFsdWUgPSBtdWx0aXBsZVZhbHVlc1tpXTtcbiAgICB2YXIgdmFsdWVzID0gW3NpbmdsZVZhbHVlXTtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0eVByZWZpeE1hcCkge1xuICAgICAgdmFyIGRhc2hDYXNlUHJvcGVydHkgPSAoMCwgX2h5cGhlbmF0ZVByb3BlcnR5Mi5kZWZhdWx0KShwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChzaW5nbGVWYWx1ZS5pbmRleE9mKGRhc2hDYXNlUHJvcGVydHkpID4gLTEgJiYgZGFzaENhc2VQcm9wZXJ0eSAhPT0gJ29yZGVyJykge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSBwcm9wZXJ0eVByZWZpeE1hcFtwcm9wZXJ0eV07XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBwTGVuID0gcHJlZml4ZXMubGVuZ3RoOyBqIDwgcExlbjsgKytqKSB7XG4gICAgICAgICAgLy8gam9pbiBhbGwgcHJlZml4ZXMgYW5kIGNyZWF0ZSBhIG5ldyB2YWx1ZVxuICAgICAgICAgIHZhbHVlcy51bnNoaWZ0KHNpbmdsZVZhbHVlLnJlcGxhY2UoZGFzaENhc2VQcm9wZXJ0eSwgcHJlZml4TWFwcGluZ1twcmVmaXhlc1tqXV0gKyBkYXNoQ2FzZVByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtdWx0aXBsZVZhbHVlc1tpXSA9IHZhbHVlcy5qb2luKCcsJyk7XG4gIH1cblxuICByZXR1cm4gbXVsdGlwbGVWYWx1ZXMuam9pbignLCcpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIHByb3BlcnR5UHJlZml4TWFwKSB7XG4gIC8vIGFsc28gY2hlY2sgZm9yIGFscmVhZHkgcHJlZml4ZWQgdHJhbnNpdGlvbnNcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICB2YXIgb3V0cHV0VmFsdWUgPSBwcmVmaXhWYWx1ZSh2YWx1ZSwgcHJvcGVydHlQcmVmaXhNYXApO1xuICAgIC8vIGlmIHRoZSBwcm9wZXJ0eSBpcyBhbHJlYWR5IHByZWZpeGVkXG4gICAgdmFyIHdlYmtpdE91dHB1dCA9IG91dHB1dFZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gIS8tbW96LXwtbXMtLy50ZXN0KHZhbCk7XG4gICAgfSkuam9pbignLCcpO1xuXG4gICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ1dlYmtpdCcpID4gLTEpIHtcbiAgICAgIHJldHVybiB3ZWJraXRPdXRwdXQ7XG4gICAgfVxuXG4gICAgdmFyIG1vek91dHB1dCA9IG91dHB1dFZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gIS8td2Via2l0LXwtbXMtLy50ZXN0KHZhbCk7XG4gICAgfSkuam9pbignLCcpO1xuXG4gICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ01veicpID4gLTEpIHtcbiAgICAgIHJldHVybiBtb3pPdXRwdXQ7XG4gICAgfVxuXG4gICAgc3R5bGVbJ1dlYmtpdCcgKyAoMCwgX2NhcGl0YWxpemVTdHJpbmcyLmRlZmF1bHQpKHByb3BlcnR5KV0gPSB3ZWJraXRPdXRwdXQ7XG4gICAgc3R5bGVbJ01veicgKyAoMCwgX2NhcGl0YWxpemVTdHJpbmcyLmRlZmF1bHQpKHByb3BlcnR5KV0gPSBtb3pPdXRwdXQ7XG4gICAgcmV0dXJuIG91dHB1dFZhbHVlO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlUHJlZml4ZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVByZWZpeGVyJyk7XG5cbnZhciBfY3JlYXRlUHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUHJlZml4ZXIpO1xuXG52YXIgX3N0YXRpY0RhdGEgPSByZXF1aXJlKCcuL3N0YXRpY0RhdGEnKTtcblxudmFyIF9zdGF0aWNEYXRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRpY0RhdGEpO1xuXG52YXIgX2N1cnNvciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jdXJzb3InKTtcblxudmFyIF9jdXJzb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Vyc29yKTtcblxudmFyIF9jcm9zc0ZhZGUgPSByZXF1aXJlKCcuL3BsdWdpbnMvY3Jvc3NGYWRlJyk7XG5cbnZhciBfY3Jvc3NGYWRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nyb3NzRmFkZSk7XG5cbnZhciBfZmlsdGVyID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZpbHRlcicpO1xuXG52YXIgX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9maWx0ZXIpO1xuXG52YXIgX2ZsZXggPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleCcpO1xuXG52YXIgX2ZsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleCk7XG5cbnZhciBfZmxleGJveE9sZCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94T2xkJyk7XG5cbnZhciBfZmxleGJveE9sZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGV4Ym94T2xkKTtcblxudmFyIF9ncmFkaWVudCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFkaWVudCcpO1xuXG52YXIgX2dyYWRpZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyYWRpZW50KTtcblxudmFyIF9pbWFnZVNldCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9pbWFnZVNldCcpO1xuXG52YXIgX2ltYWdlU2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltYWdlU2V0KTtcblxudmFyIF9wb3NpdGlvbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy9wb3NpdGlvbicpO1xuXG52YXIgX3Bvc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9uKTtcblxudmFyIF9zaXppbmcgPSByZXF1aXJlKCcuL3BsdWdpbnMvc2l6aW5nJyk7XG5cbnZhciBfc2l6aW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpemluZyk7XG5cbnZhciBfdHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy90cmFuc2l0aW9uJyk7XG5cbnZhciBfdHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHBsdWdpbnMgPSBbX2Nyb3NzRmFkZTIuZGVmYXVsdCwgX2N1cnNvcjIuZGVmYXVsdCwgX2ZpbHRlcjIuZGVmYXVsdCwgX2ZsZXhib3hPbGQyLmRlZmF1bHQsIF9ncmFkaWVudDIuZGVmYXVsdCwgX2ltYWdlU2V0Mi5kZWZhdWx0LCBfcG9zaXRpb24yLmRlZmF1bHQsIF9zaXppbmcyLmRlZmF1bHQsIF90cmFuc2l0aW9uMi5kZWZhdWx0LCBfZmxleDIuZGVmYXVsdF07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlUHJlZml4ZXIyLmRlZmF1bHQpKHtcbiAgcHJlZml4TWFwOiBfc3RhdGljRGF0YTIuZGVmYXVsdC5wcmVmaXhNYXAsXG4gIHBsdWdpbnM6IHBsdWdpbnNcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgZ2V0Vmlld3BvcnRJbmZvIH0gZnJvbSAnLi4vZW52L3ZpZXdwb3J0J1xuaW1wb3J0IGFkZFByZWZpeCBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL2luZGV4J1xuXG5jb25zdCBub1VuaXRzTnVtYmVyS2V5cyA9IFtcbiAgJ2ZsZXgnLFxuICAnb3BhY2l0eScsXG4gICd6SW5kZXgnLFxuICAnZm9udFdlaWdodCcsXG4gICdsaW5lcydcbl1cblxuLyoqXG4gKiByZW1vdmUgY29tbWVudHMgZnJvbSBhIGNzc1RleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltQ29tbWVudCAoY3NzVGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNzc1RleHQucmVwbGFjZSgvKD86XFwvXFwqKVteKl0qXFwqXFwvL2csICcnKVxufVxuXG5sZXQgc3VwcG9ydDogYm9vbGVhbiB8IG51bGwgPSBudWxsXG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0U3RpY2t5ICgpOiBib29sZWFuIHtcbiAgaWYgKHN1cHBvcnQgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc3VwcG9ydFxuICB9XG4gIGNvbnN0IGVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgZWxlbWVudFN0eWxlID0gZWxlbWVudC5zdHlsZVxuICBlbGVtZW50U3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjotd2Via2l0LXN0aWNreTtwb3NpdGlvbjpzdGlja3k7J1xuICBzdXBwb3J0ID0gZWxlbWVudFN0eWxlLnBvc2l0aW9uLmluZGV4T2YoJ3N0aWNreScpICE9PSAtMVxuICByZXR1cm4gc3VwcG9ydFxufVxuXG5jb25zdCByZWdQZXJjZW50YWdlID0gL15bKy1dP1xcZCsoXFwuXFxkKyk/JSQvXG5leHBvcnQgZnVuY3Rpb24gaXNQZXJjZW50YWdlICh2YWw6IHN0cmluZykge1xuICByZXR1cm4gcmVnUGVyY2VudGFnZS50ZXN0KHZhbClcbn1cblxuY29uc3QgcmVnVW5pdHNOdW0gPSAvXihbKy1dP1xcZCsoPzpcXC5cXGQrKT8pKFtwLHddeCk/JC8gLy8gc3VwcG9ydCB1bml0czogcHgsIHd4LlxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzTnVtICh2YWw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG1hdGNoID0gdmFsLm1hdGNoKHJlZ1VuaXRzTnVtKVxuICBpZiAoIW1hdGNoKSB7IHJldHVybiAnJyB9XG4gIGxldCB1bml0ID0gJ3B4JyAvLyBweCBieSBkZWZhdWx0LlxuICBpZiAobWF0Y2hbMl0pIHtcbiAgICB1bml0ID0gbWF0Y2hbMl1cbiAgfVxuICByZXR1cm4gcGFyc2VTY2FsZShwYXJzZUZsb2F0KG1hdGNoWzFdKSwgdW5pdClcbn1cblxuZnVuY3Rpb24gcGFyc2VTY2FsZSAodmFsOiBudW1iZXIsIHVuaXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHsgc2NhbGUsIGRwciB9ID0gZ2V0Vmlld3BvcnRJbmZvKClcbiAgY29uc3QgdW5pdFNjYWxlTWFwID0ge1xuICAgIHB4OiBzY2FsZSxcbiAgICB3eDogc2NhbGUgKiBkcHJcbiAgfVxuICByZXR1cm4gdmFsICogdW5pdFNjYWxlTWFwW3VuaXRdICsgJ3B4J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplU3RyaW5nIChzdHlsZUtleTogc3RyaW5nLCBzdHlsZVZhbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGlzUGVyY2VudGFnZShzdHlsZVZhbCkpIHtcbiAgICByZXR1cm4gc3R5bGVWYWxcbiAgfVxuXG4gIC8vIDEuIHRlc3QgaWYgaXMgYSByZWd1bGFyIHNjYWxlIGNzcy4gZS5nLiBgd2lkdGg6IDEwMHB4O2BcbiAgY29uc3QgdW5pdHNOdW0gPSBub3JtYWxpemVVbml0c051bShzdHlsZVZhbClcbiAgaWYgKHVuaXRzTnVtKSB7IHJldHVybiB1bml0c051bSB9XG5cbiAgLy8gMi4gdGVzdCBpZiBpcyBhIHRyYW5zbGF0ZSBzY2FsZS4gZS5nLiBgdHJhbnNmb3JtOiB0cmFuc2xhdGUyZCgxcHgsIDJweCk7YFxuICBjb25zdCByZWdUcmFuc2xhdGVTdHJpbmcgPSAvdHJhbnNsYXRlW14oXSpcXChbXFxkICwucHd4XStcXCkvaSAvLyB1bml0IHN1cHBvcnQ6IHd4LCBweC5cbiAgaWYgKHN0eWxlS2V5Lm1hdGNoKC90cmFuc2Zvcm0vaSkgJiYgcmVnVHJhbnNsYXRlU3RyaW5nLnRlc3Qoc3R5bGVWYWwpKSB7XG4gICAgY29uc3QgdmFsID0gc3R5bGVWYWwucmVwbGFjZShyZWdUcmFuc2xhdGVTdHJpbmcsIGZ1bmN0aW9uICh0cmFuc2xhdGUpIHtcbiAgICAgIGNvbnN0IHJlZyA9IC8oWystXT9cXGQrKD86XFwuXFxkKyk/KShbcCx3XXgpPyg/IVtkRF0pL2dcbiAgICAgIHJldHVybiB0cmFuc2xhdGUucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtLCAkMSwgJDIpIHtcbiAgICAgICAgY29uc3QgdW5pdCA9ICQyIHx8ICdweCdcbiAgICAgICAgcmV0dXJuIHBhcnNlU2NhbGUoJDEsIHVuaXQpXG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHZhbFxuICB9XG5cbiAgLy8gMy4gdGVzdCBpZiBpcyBhIGJvcmRlciBzdHlsZS4gZS5nLiBgYm9yZGVyOiAxcHggc29saWQgcmVkO2BcbiAgY29uc3QgcmVnQm9yZGVyS2V5ID0gL15ib3JkZXIoPzotKD86dG9wfGJvdHRvbXxsZWZ0fHJpZ2h0KSk/JC9cbiAgY29uc3QgcmVnQm9yZGVyVmFsID0gL14oWystXT9cXGQrKD86XFwuXFxkKyk/KShbcCAsd114KT9cXHMrL1xuICBpZiAocmVnQm9yZGVyS2V5LnRlc3Qoc3R5bGVLZXkpICYmIHJlZ0JvcmRlclZhbC50ZXN0KHN0eWxlVmFsKSkge1xuICAgIGNvbnN0IHJlZyA9IC9eKFsrLV0/XFxkKyg/OlxcLlxcZCspPykoW3Asd114KT8vXG4gICAgY29uc3QgdmFsID0gc3R5bGVWYWwucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtLCAkMSwgJDIpIHtcbiAgICAgIGNvbnN0IHVuaXQgPSAkMiB8fCAncHgnXG4gICAgICByZXR1cm4gcGFyc2VTY2FsZSgkMSwgdW5pdClcbiAgICB9KVxuICAgIHJldHVybiB2YWxcbiAgfVxuXG4gIC8vIG90aGVyd2lzZVxuICByZXR1cm4gc3R5bGVWYWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9QcmVmaXggKHN0eWxlOiB7fSk6IHt9IHtcbiAgcmV0dXJuIGFkZFByZWZpeChzdHlsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZU51bWJlciAoc3R5bGVLZXk6IHN0cmluZywgc3R5bGVWYWw6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHsgc2NhbGUgfSA9IGdldFZpZXdwb3J0SW5mbygpXG4gIHJldHVybiBzdHlsZVZhbCAqIHNjYWxlICsgJ3B4J1xufVxuXG4vKipcbiAqIG5vcm1hbGl6ZSBzdHlsZSB0byBhZGFwdGUgdG8gY3VycmVudCB2aWV3cG9ydCBieSBtdWx0aXBseSBjdXJyZW50IHNjYWxlLlxuICogQHBhcmFtICB7b2JqZWN0fSBzdHlsZTogc2hvdWxkIGJlIGNhbWVsQ2FzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlIChzdHlsZToge30pIHtcbiAgY29uc3QgcmVzID0ge31cbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBjb25zdCB2YWwgPSBzdHlsZVtrZXldXG4gICAgaWYgKG5vVW5pdHNOdW1iZXJLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXNba2V5XSA9IHZhbFxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICByZXNba2V5XSA9IG5vcm1hbGl6ZVN0cmluZyhrZXksIHZhbClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJlc1trZXldID0gbm9ybWFsaXplTnVtYmVyKGtleSwgdmFsKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzW2tleV0gPSB2YWxcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuIiwiLy8gQGZsb3dcblxuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqPzogbWl4ZWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gT0JKRUNUX1NUUklOR1xufVxuXG5jb25zdCBBUlJBWV9TVFJJTkcgPSAnW29iamVjdCBBcnJheV0nXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSAoYXJyPzogbWl4ZWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gQVJSQVlfU1RSSU5HXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Z1bmMnXG5leHBvcnQgKiBmcm9tICcuL2V2ZW50J1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnXG5leHBvcnQgKiBmcm9tICcuL2xhenlsb2FkJ1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSdcbmV4cG9ydCAqIGZyb20gJy4vdHlwZSdcblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl1cbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcbiAgfVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbG1pdGVkIHN0cmluZy5cbiAqL1xuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZ1xuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYy50b1VwcGVyQ2FzZSgpKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsaXplS2V5cyAob2JqKSB7XG4gIGNvbnN0IHJlcyA9IHt9XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIHJlc1tjYW1lbGl6ZShrZXkpXSA9IG9ialtrZXldXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pXG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGh5cGhlbmF0ZUtleXMgKG9iaikge1xuICBjb25zdCByZXMgPSB7fVxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICByZXNbaHlwaGVuYXRlKGtleSldID0gb2JqW2tleV1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmNvbnN0IHZlbmRvcnNSZWcgPSAvd2Via2l0LXxtb3otfG8tfG1zLS9cbmV4cG9ydCBmdW5jdGlvbiBoeXBoZW5hdGVTdHlsZUtleXMgKG9iaikge1xuICBjb25zdCByZXMgPSB7fVxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBjb25zdCBoayA9IGh5cGhlbmF0ZShrZXkpLnJlcGxhY2UodmVuZG9yc1JlZywgZnVuY3Rpb24gKCQwKSB7XG4gICAgICByZXR1cm4gJy0nICsgJDBcbiAgICB9KVxuICAgIHJlc1toa10gPSBvYmpba2V5XVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9LZWJhYiAobmFtZSkge1xuICBpZiAoIW5hbWUpIHsgcmV0dXJuICcnIH1cbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAoZywgZzEpIHtcbiAgICByZXR1cm4gYC0ke2cxLnRvTG93ZXJDYXNlKCl9YFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ3NzIChjc3MsIGNzc0lkLCByZXBsYWNlKSB7XG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNzc0lkKVxuICBpZiAoc3R5bGUgJiYgcmVwbGFjZSkge1xuICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpXG4gICAgc3R5bGUgPSBudWxsXG4gIH1cbiAgaWYgKCFzdHlsZSkge1xuICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnXG4gICAgY3NzSWQgJiYgKHN0eWxlLmlkID0gY3NzSWQpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSlcbiAgfVxuICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dEZyYW1lIChjYWxsYmFjaykge1xuICBjb25zdCBydW5uZXIgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHx8IChjYiA9PiBzZXRUaW1lb3V0KGNiLCAxNikpXG4gIHJ1bm5lcihjYWxsYmFjaylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQ1NTVGV4dCAob2JqZWN0KSB7XG4gIGlmICghb2JqZWN0KSB7IHJldHVybiB9XG4gIGNvbnN0IG9iaiA9IGh5cGhlbmF0ZVN0eWxlS2V5cyhvYmplY3QpXG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgY3NzVGV4dCArPSBgJHtrZXl9OiR7b2JqW2tleV19O2BcbiAgfVxuICByZXR1cm4gY3NzVGV4dFxufVxuIiwiaW1wb3J0IHsgbmV4dEZyYW1lLCB0b0NTU1RleHQsIGF1dG9QcmVmaXgsIGNhbWVsaXplS2V5cywgbm9ybWFsaXplU3R5bGUgfSBmcm9tICcuLi91dGlscydcblxuZnVuY3Rpb24gdHJhbnNpdGlvbk9uY2UgKHZub2RlLCBjb25maWcsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGR1cmF0aW9uID0gY29uZmlnLmR1cmF0aW9uIHx8IDEwMDAgLy8gbXNcbiAgY29uc3QgdGltaW5nID0gY29uZmlnLnRpbWluZ0Z1bmN0aW9uIHx8ICdlYXNlJ1xuICBjb25zdCBkZWxheSA9IGNvbmZpZy5kZWxheSB8fCAwICAvLyBtc1xuXG4gIC8vIFRPRE86IHBhcnNlIHRyYW5zaXRpb24gcHJvcGVydGllc1xuICBjb25zdCB0cmFuc2l0aW9uVmFsdWUgPSBgYWxsICR7ZHVyYXRpb259bXMgJHt0aW1pbmd9ICR7ZGVsYXl9bXNgXG5cbiAgY29uc3QgZG9tID0gdm5vZGUuJGVsXG4gIGNvbnN0IHRyYW5zaXRpb25FbmRIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHRyYW5zaXRpb25FbmRIYW5kbGVyKVxuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbkVuZEhhbmRsZXIpXG4gICAgZG9tLnN0eWxlLnRyYW5zaXRpb24gPSAnJ1xuICAgIGRvbS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gJydcbiAgICBjYWxsYmFjaygpXG4gIH1cblxuICBkb20uc3R5bGUudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25WYWx1ZVxuICBkb20uc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9IHRyYW5zaXRpb25WYWx1ZVxuICBkb20uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHRyYW5zaXRpb25FbmRIYW5kbGVyKVxuICBkb20uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25FbmRIYW5kbGVyKVxuXG4gIG5leHRGcmFtZSgoKSA9PiB7XG4gICAgZG9tLnN0eWxlLmNzc1RleHRcbiAgICAgICs9IHRvQ1NTVGV4dChhdXRvUHJlZml4KG5vcm1hbGl6ZVN0eWxlKGNhbWVsaXplS2V5cyhjb25maWcuc3R5bGVzKSkpIHx8IHt9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdm5vZGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBjb25maWdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBjYWxsYmFja1xuICAgKi9cbiAgdHJhbnNpdGlvbiAodm5vZGUsIGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICBpZiAoIWNvbmZpZy5zdHlsZXMpIHsgcmV0dXJuIH1cbiAgICByZXR1cm4gdHJhbnNpdGlvbk9uY2Uodm5vZGUsIGNvbmZpZywgKCkgPT4ge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IGNhbWVsVG9LZWJhYiwgYXBwZW5kQ3NzIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmZ1bmN0aW9uIGdldFBhcmVudFNjcm9sbGVyICh2bm9kZSkge1xuICBpZiAoIXZub2RlKSByZXR1cm4gbnVsbFxuICBpZiAodm5vZGUud2VleFR5cGUgPT09ICdzY3JvbGxlcicgfHwgdm5vZGUud2VleFR5cGUgPT09ICdsaXN0Jykge1xuICAgIHJldHVybiB2bm9kZVxuICB9XG4gIHJldHVybiBnZXRQYXJlbnRTY3JvbGxlcih2bm9kZS4kcGFyZW50KVxufVxuXG5mdW5jdGlvbiBub3cgKCkge1xuICBjb25zdCBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2UgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vd1xuICAgICAgPyB3aW5kb3cucGVyZm9ybWFuY2Uubm93LmJpbmQod2luZG93LnBlcmZvcm1hbmNlKSA6IERhdGUubm93XG4gIHJldHVybiBub3coKVxufVxuXG5mdW5jdGlvbiBzY3JvbGxFbGVtZW50IChkU3VmZml4LCBwb3NpdGlvbikge1xuICB0aGlzW2BzY3JvbGwke2RTdWZmaXh9YF0gPSBwb3NpdGlvblxufVxuXG4vKipcbiAqIHNlbGYgaW52b2tlZCBmdW5jdGlvbiB0aGF0LCBnaXZlbiBhIGNvbnRleHQsIHN0ZXBzIHRocm91Z2ggc2Nyb2xsaW5nXG4gKiBAbWV0aG9kIHN0ZXBcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIHN0ZXAgKGNvbnRleHQpIHtcbiAgLy8gY2FsbCBtZXRob2QgYWdhaW4gb24gbmV4dCBhdmFpbGFibGUgZnJhbWVcbiAgY29udGV4dC5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcC5iaW5kKHdpbmRvdywgY29udGV4dCkpXG5cbiAgY29uc3QgdGltZSA9IG5vdygpXG4gIGxldCBlbGFwc2VkID0gKHRpbWUgLSBjb250ZXh0LnN0YXJ0VGltZSkgLyA0NjhcblxuICAvLyBhdm9pZCBlbGFwc2VkIHRpbWVzIGhpZ2hlciB0aGFuIG9uZVxuICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZFxuXG4gIC8vIGFwcGx5IGVhc2luZyB0byBlbGFwc2VkIHRpbWVcbiAgY29uc3QgdmFsdWUgPSBlYXNlKGVsYXBzZWQpXG5cbiAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gY29udGV4dC5zdGFydFBvc2l0aW9uICsgKGNvbnRleHQucG9zaXRpb24gLSBjb250ZXh0LnN0YXJ0UG9zaXRpb24pICogdmFsdWVcblxuICBjb250ZXh0Lm1ldGhvZC5jYWxsKGNvbnRleHQuc2Nyb2xsYWJsZSwgY29udGV4dC5kU3VmZml4LCBjdXJyZW50UG9zaXRpb24pXG5cbiAgLy8gcmV0dXJuIHdoZW4gZW5kIHBvaW50cyBoYXZlIGJlZW4gcmVhY2hlZFxuICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBjb250ZXh0LnBvc2l0aW9uKSB7XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGNvbnRleHQuZnJhbWUpXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiByZXR1cm5zIHJlc3VsdCBvZiBhcHBseWluZyBlYXNlIG1hdGggZnVuY3Rpb24gdG8gYSBudW1iZXJcbiAqIEBtZXRob2QgZWFzZVxuICogQHBhcmFtIHtOdW1iZXJ9IGtcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGVhc2UgKGspIHtcbiAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBzY3JvbGxUb0VsZW1lbnRcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2bm9kZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMge29mZnNldDpOdW1iZXJ9XG4gICAqICAgcHM6IHNjcm9sbC10byBoYXMgJ2Vhc2UnIGFuZCAnZHVyYXRpb24nKG1zKSBhcyBvcHRpb25zLlxuICAgKi9cbiAgc2Nyb2xsVG9FbGVtZW50OiBmdW5jdGlvbiAodm5vZGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzY3JvbGxlciA9IGdldFBhcmVudFNjcm9sbGVyKHZub2RlKVxuICAgIGNvbnN0IHNjcm9sbERpcmVjdGlvbiA9IHNjcm9sbGVyLnNjcm9sbERpcmVjdGlvbiB8fCAndmVydGljYWwnXG5cbiAgICBpZiAoc2Nyb2xsZXIgJiYgc2Nyb2xsZXIuJGVsICYmIHZub2RlLiRlbCkge1xuICAgICAgLy8gaWYgaXQncyBhIGxpc3QsIHRoZW4gdGhlIGxpc3RWbm9kZS5zY3JvbGxEaXJlY3Rpb24gaXMgdW5kZWZpbmVkLiBqdXN0XG4gICAgICAvLyBhc3N1bSBpdCBpcyB0aGUgZGVmYXVsdCB2YWx1ZSAndmVydGljYWwnLlxuICAgICAgY29uc3QgZFN1ZmZpeCA9ICh7XG4gICAgICAgIGhvcml6b250YWw6ICdMZWZ0JyxcbiAgICAgICAgdmVydGljYWw6ICdUb3AnXG4gICAgICB9KVtzY3JvbGxEaXJlY3Rpb25dXG4gICAgICBsZXQgb2Zmc2V0ID0gdm5vZGUuJGVsW2BvZmZzZXQke2RTdWZmaXh9YF1cblxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb2Zmc2V0ICs9IE51bWJlcihvcHRpb25zLm9mZnNldCkgfHwgMFxuICAgICAgICBvZmZzZXQgKj0gd2VleC5jb25maWcuZW52LnNjYWxlIC8qIGFkYXB0IG9mZnNldCB0byBkaWZmZXJlbnQgc2NyZWVuIHNjYWxlcy4gKi9cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW1Z1ZSBSZW5kZXJdIFRoZSBzZWNvbmQgcGFyYW1ldGVyIG9mIFwic2Nyb2xsVG9FbGVtZW50XCIgaXMgcmVxdWlyZWQsICdcbiAgICAgICAgICArICdvdGhlcndpc2UgaXQgbWF5IG5vdCB3b3JrcyB3ZWxsIG9uIG5hdGl2ZS4nKVxuICAgICAgfVxuXG4gICAgICBzdGVwKHtcbiAgICAgICAgc2Nyb2xsYWJsZTogc2Nyb2xsZXIuJGVsLFxuICAgICAgICBzdGFydFRpbWU6IG5vdygpLFxuICAgICAgICBmcmFtZTogbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbjogc2Nyb2xsZXIuJGVsW2BzY3JvbGwke2RTdWZmaXh9YF0sXG4gICAgICAgIHBvc2l0aW9uOiBvZmZzZXQsXG4gICAgICAgIG1ldGhvZDogc2Nyb2xsRWxlbWVudCxcbiAgICAgICAgZFN1ZmZpeDogZFN1ZmZpeFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIGdldENvbXBvbmVudFJlY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZub2RlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBnZXRDb21wb25lbnRSZWN0OiBmdW5jdGlvbiAodm5vZGUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5mbyA9IHsgcmVzdWx0OiBmYWxzZSB9XG5cbiAgICBpZiAodm5vZGUgJiYgdm5vZGUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgIGluZm8ucmVzdWx0ID0gdHJ1ZVxuICAgICAgaW5mby5zaXplID0ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgYm90dG9tOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHZub2RlICYmIHZub2RlLiRlbCkge1xuICAgICAgaW5mby5yZXN1bHQgPSB0cnVlXG4gICAgICBpbmZvLnNpemUgPSB2bm9kZS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gaW5mby5yZXN1bHQgPyBpbmZvIDoge1xuICAgICAgcmVzdWx0OiBmYWxzZSxcbiAgICAgIGVyck1zZzogJ0lsbGVnYWwgcGFyYW1ldGVyJ1xuICAgIH1cblxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG1lc3NhZ2UpXG4gICAgcmV0dXJuIG1lc3NhZ2VcbiAgfSxcblxuICAvKipcbiAgICogZm9yIGFkZGluZyBmb250RmFjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IGZvbnRGYWNlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZXMgcnVsZXNcbiAgICovXG4gIGFkZFJ1bGU6IGZ1bmN0aW9uIChrZXksIHN0eWxlcykge1xuICAgIGtleSA9IGNhbWVsVG9LZWJhYihrZXkpXG4gICAgbGV0IHN0eWxlc1RleHQgPSAnJ1xuICAgIGZvciAoY29uc3QgayBpbiBzdHlsZXMpIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgc3R5bGVzVGV4dCArPSBjYW1lbFRvS2ViYWIoaykgKyAnOicgKyBzdHlsZXNba10gKyAnOydcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gYEAke2tleX17JHtzdHlsZXNUZXh0fX1gXG4gICAgYXBwZW5kQ3NzKHN0eWxlVGV4dCwgJ2RvbS1hZGRlZC1ydWxlcycpXG4gIH1cbn1cbiIsImNvbnN0IHF1ZXVlID0gW11cbmxldCBpc1Byb2Nlc3NpbmcgPSBmYWxzZVxubGV0IHRvYXN0V2luXG5jb25zdCBUT0FTVF9XSU5fQ0xBU1NfTkFNRSA9ICd3ZWV4LXRvYXN0J1xuXG5jb25zdCBERUZBVUxUX0RVUkFUSU9OID0gMC44XG5cbmZ1bmN0aW9uIHNob3dUb2FzdFdpbmRvdyAobXNnLCBjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHRvYXN0V2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICAgIHRvYXN0V2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgfVxuICBpZiAoIXRvYXN0V2luKSB7XG4gICAgdG9hc3RXaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvYXN0V2luLmNsYXNzTGlzdC5hZGQoVE9BU1RfV0lOX0NMQVNTX05BTUUsICdoaWRlJylcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvYXN0V2luKVxuICB9XG4gIHRvYXN0V2luLnRleHRDb250ZW50ID0gbXNnXG4gIHRvYXN0V2luLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICB0b2FzdFdpbi5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZClcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdG9hc3RXaW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gIH0sIDApXG59XG5cbmZ1bmN0aW9uIGhpZGVUb2FzdFdpbmRvdyAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0b2FzdFdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZClcbiAgICB0b2FzdFdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZClcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gIH1cbiAgaWYgKCF0b2FzdFdpbikge1xuICAgIHJldHVyblxuICB9XG4gIHRvYXN0V2luLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICB0b2FzdFdpbi5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZClcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdG9hc3RXaW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gIH0sIDApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHVzaDogZnVuY3Rpb24gKG1zZywgZHVyYXRpb24pIHtcbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIG1zZzogbXNnLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uIHx8IERFRkFVTFRfRFVSQVRJT05cbiAgICB9KVxuICAgIHRoaXMuc2hvdygpXG4gIH0sXG5cbiAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG5cbiAgICAvLyBBbGwgbWVzc2FnZXMgaGFkIGJlZW4gdG9hc3RlZCBhbHJlYWR5LCBzbyByZW1vdmUgdGhlIHRvYXN0IHdpbmRvdyxcbiAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgdG9hc3RXaW4gJiYgdG9hc3RXaW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2FzdFdpbilcbiAgICAgIHRvYXN0V2luID0gbnVsbFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gdGhlIHByZXZpb3VzIHRvYXN0IGlzIG5vdCBlbmRlZCB5ZXQuXG4gICAgaWYgKGlzUHJvY2Vzc2luZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlzUHJvY2Vzc2luZyA9IHRydWVcblxuICAgIGNvbnN0IHRvYXN0SW5mbyA9IHF1ZXVlLnNoaWZ0KClcbiAgICBzaG93VG9hc3RXaW5kb3codG9hc3RJbmZvLm1zZywgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhpZGVUb2FzdFdpbmRvdyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXNQcm9jZXNzaW5nID0gZmFsc2VcbiAgICAgICAgICB0aGF0LnNob3coKVxuICAgICAgICB9KVxuICAgICAgfSwgdG9hc3RJbmZvLmR1cmF0aW9uICogMTAwMClcbiAgICB9KVxuICB9XG59XG4iLCJcbi8vIHRoZXJlIHdpbGwgYmUgb25seSBvbmUgaW5zdGFuY2Ugb2YgbW9kYWwuXG5jb25zdCBNT0RBTF9XUkFQX0NMQVNTID0gJ3dlZXgtbW9kYWwtd3JhcCdcbmNvbnN0IE1PREFMX05PREVfQ0xBU1MgPSAnd2VleC1tb2RhbC1ub2RlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCAoKSB7XG4gIHRoaXMud3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTU9EQUxfV1JBUF9DTEFTUylcbiAgdGhpcy5ub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNT0RBTF9OT0RFX0NMQVNTKVxuICBpZiAoIXRoaXMud3JhcCkge1xuICAgIHRoaXMuY3JlYXRlV3JhcCgpXG4gIH1cbiAgaWYgKCF0aGlzLm5vZGUpIHtcbiAgICB0aGlzLmNyZWF0ZU5vZGUoKVxuICB9XG4gIHRoaXMuY2xlYXJOb2RlKClcbiAgdGhpcy5jcmVhdGVOb2RlQ29udGVudCgpXG4gIHRoaXMuYmluZEV2ZW50cygpXG59XG5cbk1vZGFsLnByb3RvdHlwZSA9IHtcblxuICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53cmFwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMud3JhcClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubm9kZSlcbiAgICB0aGlzLndyYXAgPSBudWxsXG4gICAgdGhpcy5ub2RlID0gbnVsbFxuICB9LFxuXG4gIGNyZWF0ZVdyYXA6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLndyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMud3JhcC5jbGFzc05hbWUgPSBNT0RBTF9XUkFQX0NMQVNTXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLndyYXApXG4gIH0sXG5cbiAgY3JlYXRlTm9kZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoTU9EQUxfTk9ERV9DTEFTUywgJ2hpZGUnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKVxuICB9LFxuXG4gIGNsZWFyTm9kZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSAnJ1xuICB9LFxuXG4gIGNyZWF0ZU5vZGVDb250ZW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkbyBub3RoaW5nLlxuICAgIC8vIGNoaWxkIGNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuICB9LFxuXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLndyYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnXG5cbmNvbnN0IENPTlRFTlRfQ0xBU1MgPSAnY29udGVudCdcbmNvbnN0IE1TR19DTEFTUyA9ICdjb250ZW50LW1zZydcbmNvbnN0IEJVVFRPTl9HUk9VUF9DTEFTUyA9ICdidG4tZ3JvdXAnXG5jb25zdCBCVVRUT05fQ0xBU1MgPSAnYnRuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydCAoY29uZmlnKSB7XG4gIHRoaXMubXNnID0gY29uZmlnLm1lc3NhZ2UgfHwgJydcbiAgdGhpcy5jYWxsYmFjayA9IGNvbmZpZy5jYWxsYmFja1xuICB0aGlzLm9rVGl0bGUgPSBjb25maWcub2tUaXRsZSB8fCAnT0snXG4gIE1vZGFsLmNhbGwodGhpcylcbiAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ3dlZXgtYWxlcnQnKVxufVxuXG5BbGVydC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1vZGFsLnByb3RvdHlwZSlcblxuQWxlcnQucHJvdG90eXBlLmNyZWF0ZU5vZGVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKENPTlRFTlRfQ0xBU1MpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1zZy5jbGFzc0xpc3QuYWRkKE1TR19DTEFTUylcbiAgbXNnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubXNnKSlcbiAgY29udGVudC5hcHBlbmRDaGlsZChtc2cpXG5cbiAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidXR0b25Hcm91cC5jbGFzc0xpc3QuYWRkKEJVVFRPTl9HUk9VUF9DTEFTUylcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKVxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidXR0b24uY2xhc3NMaXN0LmFkZChCVVRUT05fQ0xBU1MsICdhbGVydC1vaycpXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLm9rVGl0bGUpKVxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChidXR0b24pXG59XG5cbkFsZXJ0LnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBNb2RhbC5wcm90b3R5cGUuYmluZEV2ZW50cy5jYWxsKHRoaXMpXG4gIGNvbnN0IGJ1dHRvbiA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIEJVVFRPTl9DTEFTUylcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKClcbiAgfS5iaW5kKHRoaXMpKVxufVxuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnXG5cbmNvbnN0IENPTlRFTlRfQ0xBU1MgPSAnY29udGVudCdcbmNvbnN0IE1TR19DTEFTUyA9ICdjb250ZW50LW1zZydcbmNvbnN0IEJVVFRPTl9HUk9VUF9DTEFTUyA9ICdidG4tZ3JvdXAnXG5jb25zdCBCVVRUT05fQ0xBU1MgPSAnYnRuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25maXJtIChjb25maWcpIHtcbiAgdGhpcy5tc2cgPSBjb25maWcubWVzc2FnZSB8fCAnJ1xuICB0aGlzLmNhbGxiYWNrID0gY29uZmlnLmNhbGxiYWNrXG4gIHRoaXMub2tUaXRsZSA9IGNvbmZpZy5va1RpdGxlIHx8ICdPSydcbiAgdGhpcy5jYW5jZWxUaXRsZSA9IGNvbmZpZy5jYW5jZWxUaXRsZSB8fCAnQ2FuY2VsJ1xuICBNb2RhbC5jYWxsKHRoaXMpXG4gIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCd3ZWV4LWNvbmZpcm0nKVxufVxuXG5Db25maXJtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9kYWwucHJvdG90eXBlKVxuXG5Db25maXJtLnByb3RvdHlwZS5jcmVhdGVOb2RlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChDT05URU5UX0NMQVNTKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY29udGVudClcblxuICBjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtc2cuY2xhc3NMaXN0LmFkZChNU0dfQ0xBU1MpXG4gIG1zZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLm1zZykpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobXNnKVxuXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnV0dG9uR3JvdXAuY2xhc3NMaXN0LmFkZChCVVRUT05fR1JPVVBfQ0xBU1MpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidXR0b25Hcm91cClcbiAgY29uc3QgYnRuT2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidG5Pay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLm9rVGl0bGUpKVxuICBidG5Pay5jbGFzc0xpc3QuYWRkKCdidG4tb2snLCBCVVRUT05fQ0xBU1MpXG4gIGNvbnN0IGJ0bkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ0bkNhbmNlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmNhbmNlbFRpdGxlKSlcbiAgYnRuQ2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2J0bi1jYW5jZWwnLCBCVVRUT05fQ0xBU1MpXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGJ0bk9rKVxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChidG5DYW5jZWwpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidXR0b25Hcm91cClcbn1cblxuQ29uZmlybS5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgTW9kYWwucHJvdG90eXBlLmJpbmRFdmVudHMuY2FsbCh0aGlzKVxuICBjb25zdCBidG5PayA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIEJVVFRPTl9DTEFTUyArICcuYnRuLW9rJylcbiAgY29uc3QgYnRuQ2FuY2VsID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTICsgJy5idG4tY2FuY2VsJylcbiAgYnRuT2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZXN0cm95KClcbiAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2sodGhpcy5va1RpdGxlKVxuICB9LmJpbmQodGhpcykpXG4gIGJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKVxuICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjayh0aGlzLmNhbmNlbFRpdGxlKVxuICB9LmJpbmQodGhpcykpXG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCdcblxuY29uc3QgQ09OVEVOVF9DTEFTUyA9ICdjb250ZW50J1xuY29uc3QgTVNHX0NMQVNTID0gJ2NvbnRlbnQtbXNnJ1xuY29uc3QgQlVUVE9OX0dST1VQX0NMQVNTID0gJ2J0bi1ncm91cCdcbmNvbnN0IEJVVFRPTl9DTEFTUyA9ICdidG4nXG5jb25zdCBJTlBVVF9XUkFQX0NMQVNTID0gJ2lucHV0LXdyYXAnXG5jb25zdCBJTlBVVF9DTEFTUyA9ICdpbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvbXB0IChjb25maWcpIHtcbiAgdGhpcy5tc2cgPSBjb25maWcubWVzc2FnZSB8fCAnJ1xuICB0aGlzLmRlZmF1bHRNc2cgPSBjb25maWcuZGVmYXVsdCB8fCAnJ1xuICB0aGlzLmNhbGxiYWNrID0gY29uZmlnLmNhbGxiYWNrXG4gIHRoaXMub2tUaXRsZSA9IGNvbmZpZy5va1RpdGxlIHx8ICdPSydcbiAgdGhpcy5jYW5jZWxUaXRsZSA9IGNvbmZpZy5jYW5jZWxUaXRsZSB8fCAnQ2FuY2VsJ1xuICBNb2RhbC5jYWxsKHRoaXMpXG4gIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCd3ZWV4LXByb21wdCcpXG59XG5cblByb21wdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1vZGFsLnByb3RvdHlwZSlcblxuUHJvbXB0LnByb3RvdHlwZS5jcmVhdGVOb2RlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChDT05URU5UX0NMQVNTKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY29udGVudClcblxuICBjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtc2cuY2xhc3NMaXN0LmFkZChNU0dfQ0xBU1MpXG4gIG1zZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLm1zZykpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobXNnKVxuXG4gIGNvbnN0IGlucHV0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGlucHV0V3JhcC5jbGFzc0xpc3QuYWRkKElOUFVUX1dSQVBfQ0xBU1MpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRXcmFwKVxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChJTlBVVF9DTEFTUylcbiAgaW5wdXQudHlwZSA9ICd0ZXh0J1xuICBpbnB1dC5hdXRvZm9jdXMgPSB0cnVlXG4gIGlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5kZWZhdWx0TXNnXG4gIGlucHV0V3JhcC5hcHBlbmRDaGlsZChpbnB1dClcblxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ1dHRvbkdyb3VwLmNsYXNzTGlzdC5hZGQoQlVUVE9OX0dST1VQX0NMQVNTKVxuICBjb25zdCBidG5PayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ0bk9rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMub2tUaXRsZSkpXG4gIGJ0bk9rLmNsYXNzTGlzdC5hZGQoJ2J0bi1vaycsIEJVVFRPTl9DTEFTUylcbiAgY29uc3QgYnRuQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuQ2FuY2VsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuY2FuY2VsVGl0bGUpKVxuICBidG5DYW5jZWwuY2xhc3NMaXN0LmFkZCgnYnRuLWNhbmNlbCcsIEJVVFRPTl9DTEFTUylcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYnRuT2spXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGJ0bkNhbmNlbClcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKVxufVxuXG5Qcm9tcHQucHJvdG90eXBlLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIE1vZGFsLnByb3RvdHlwZS5iaW5kRXZlbnRzLmNhbGwodGhpcylcbiAgY29uc3QgYnRuT2sgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignLicgKyBCVVRUT05fQ0xBU1MgKyAnLmJ0bi1vaycpXG4gIGNvbnN0IGJ0bkNhbmNlbCA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIEJVVFRPTl9DTEFTUyArICcuYnRuLWNhbmNlbCcpXG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIGJ0bk9rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWVcbiAgICB0aGlzLmRlc3Ryb3koKVxuICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjayh7XG4gICAgICByZXN1bHQ6IHRoYXQub2tUaXRsZSxcbiAgICAgIGRhdGE6IHZhbFxuICAgIH0pXG4gIH0uYmluZCh0aGlzKSlcbiAgYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWVcbiAgICB0aGlzLmRlc3Ryb3koKVxuICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjayh7XG4gICAgICByZXN1bHQ6IHRoYXQuY2FuY2VsVGl0bGUsXG4gICAgICBkYXRhOiB2YWxcbiAgICB9KVxuICB9LmJpbmQodGhpcykpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBgXG4ud2VleC10b2FzdCB7XG4gIGZvbnQtc2l6ZTogMC40MjY2NjdyZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjQyNjY2N3JlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxOTk5OTk5OTk5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgYm90dG9tOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcGFkZGluZzogMC4yMTMzMzNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMC4wNjY2NjdyZW07XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4ud2VleC10b2FzdC5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLndlZXgtYWxlcnQgLndlZXgtYWxlcnQtb2sge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlZXgtY29uZmlybSAuYnRuLWdyb3VwIC5idG4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLndlZXgtY29uZmlybSAuYnRuLWdyb3VwIC5idG4uYnRuLW9rIHtcbiAgYm9yZGVyLXJpZ2h0OiAwLjAxMzMzM3JlbSBzb2xpZCAjZGRkO1xufVxuXG4ud2VleC1tb2RhbC13cmFwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ud2VleC1tb2RhbC1ub2RlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk5OTk5O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNi42NjY2NjdyZW07XG4gIG1pbi1oZWlnaHQ6IDIuNjY2NjY3cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjA2NjY2N3JlbTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi53ZWV4LW1vZGFsLW5vZGUuaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi53ZWV4LW1vZGFsLW5vZGUgLmNvbnRlbnQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxLjg2NjY2N3JlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAwLjQyNjY2N3JlbTtcbiAgbGluZS1oZWlnaHQ6IDAuNDI2NjY3cmVtO1xuICBwYWRkaW5nOiAwLjIxMzMzM3JlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC4wMTMzMzNyZW0gc29saWQgI2RkZDtcbn1cblxuLndlZXgtbW9kYWwtbm9kZSAuYnRuLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMC44cmVtO1xuICBmb250LXNpemU6IDAuMzczMzMzcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ud2VleC1tb2RhbC1ub2RlIC5idG4tZ3JvdXAgLmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlZXgtbW9kYWwtbm9kZSAuYnRuLWdyb3VwIC5idG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDAuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDAuOHJlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlZXgtcHJvbXB0IC5pbnB1dC13cmFwIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMTMzMzMzcmVtO1xuICBoZWlnaHQ6IDAuOTZyZW07XG59XG5cbi53ZWV4LXByb21wdCAuaW5wdXQtd3JhcCAuaW5wdXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwLjU2cmVtO1xuICBsaW5lLWhlaWdodDogMC41NnJlbTtcbiAgZm9udC1zaXplOiAwLjQyNjY2N3JlbTtcbiAgYm9yZGVyOiAwLjAxMzMzM3JlbSBzb2xpZCAjOTk5O1xufVxuXG4ud2VleC1wcm9tcHQgLmJ0bi1ncm91cCAuYnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi53ZWV4LXByb21wdCAuYnRuLWdyb3VwIC5idG4uYnRuLW9rIHtcbiAgYm9yZGVyLXJpZ2h0OiAwLjAxMzMzM3JlbSBzb2xpZCAjZGRkO1xufVxuYFxuIiwiaW1wb3J0IHRvYXN0IGZyb20gJy4vdG9hc3QnXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9hbGVydCdcbmltcG9ydCBDb25maXJtIGZyb20gJy4vY29uZmlybSdcbmltcG9ydCBQcm9tcHQgZnJvbSAnLi9wcm9tcHQnXG5pbXBvcnQgX2NzcyBmcm9tICcuL3N0eWxlJ1xuXG4vLyBUT0RPOiByZXdyaXRlIHRoZSBtb2RhbCBzdHlsZXNcbmNvbnN0IG1vZGFsID0ge1xuXG4gIC8vIGR1cmF0aW9uOiBkZWZhdWx0IGlzIDAuOCBzZWNvbmRzLlxuICB0b2FzdDogZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHRvYXN0LnB1c2goY29uZmlnLm1lc3NhZ2UsIGNvbmZpZy5kdXJhdGlvbilcbiAgfSxcblxuICAvLyBjb25maWc6XG4gIC8vICAtIG1lc3NhZ2U6IHN0cmluZ1xuICAvLyAgLSBva1RpdGxlOiB0aXRsZSBvZiBvayBidXR0b25cbiAgLy8gIC0gY2FsbGJhY2tcbiAgYWxlcnQ6IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgY29uZmlnLmNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgIH1cbiAgICBuZXcgQWxlcnQoY29uZmlnKS5zaG93KClcbiAgfSxcblxuICAvLyBjb25maWc6XG4gIC8vICAtIG1lc3NhZ2U6IHN0cmluZ1xuICAvLyAgLSBva1RpdGxlOiB0aXRsZSBvZiBvayBidXR0b25cbiAgLy8gIC0gY2FuY2VsVGl0bGU6IHRpdGxlIG9mIGNhbmNlbCBidXR0b25cbiAgLy8gIC0gY2FsbGJhY2tcbiAgY29uZmlybTogZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICBjb25maWcuY2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh2YWwpXG4gICAgfVxuICAgIG5ldyBDb25maXJtKGNvbmZpZykuc2hvdygpXG4gIH0sXG5cbiAgLy8gY29uZmlnOlxuICAvLyAgLSBtZXNzYWdlOiBzdHJpbmdcbiAgLy8gIC0gb2tUaXRsZTogdGl0bGUgb2Ygb2sgYnV0dG9uXG4gIC8vICAtIGNhbmNlbFRpdGxlOiB0aXRsZSBvZiBjYW5jZWwgYnV0dG9uXG4gIC8vICAtIGNhbGxiYWNrXG4gIHByb21wdDogZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICBjb25maWcuY2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh2YWwpXG4gICAgfVxuICAgIG5ldyBQcm9tcHQoY29uZmlnKS5zaG93KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgV2VleC51dGlscy5hcHBlbmRDc3MoX2NzcywgJ3dlZXgtbXVkLW1vZGFsJylcbiAgICBXZWV4LnJlZ2lzdGVyTW9kdWxlKCdtb2RhbCcsIG1vZGFsKVxuICB9XG59XG4iLCIvKipcbiAqIE5hdmlnYXRvciBtb2R1bGVcbiAqL1xuXG4vLyBUT0RPOiBjb25maWcuYW5pbWF0ZWRcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHVzaDogZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbmZpZy51cmxcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gIH0sXG5cbiAgcG9wOiBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaykge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgfVxufVxuIiwiLyoqXG4gKiBXZWJ2aWV3IG1vZHVsZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ29CYWNrICh2bm9kZSkge1xuICAgIGlmICh2bm9kZSAmJiB0eXBlb2Ygdm5vZGUuZ29CYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2bm9kZS5nb0JhY2soKVxuICAgIH1cbiAgfSxcbiAgZ29Gb3J3YXJkICh2bm9kZSkge1xuICAgIGlmICh2bm9kZSAmJiB0eXBlb2Ygdm5vZGUuZ29Gb3J3YXJkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2bm9kZS5nb0ZvcndhcmQoKVxuICAgIH1cbiAgfSxcbiAgcmVsb2FkICh2bm9kZSkge1xuICAgIGlmICh2bm9kZSAmJiB0eXBlb2Ygdm5vZGUucmVsb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2bm9kZS5yZWxvYWQoKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gbW9kdWxlcyBmcm9tIHJlbmRlci9icm93ZXNyXG5pbXBvcnQgZXZlbnQgZnJvbSAnLi4vLi4vYnJvd3Nlci9leHRlbmQvYXBpL2V2ZW50J1xuaW1wb3J0IGdlb2xvY2F0aW9uIGZyb20gJy4uLy4uL2Jyb3dzZXIvZXh0ZW5kL2FwaS9nZW9sb2NhdGlvbidcbmltcG9ydCBwYWdlSW5mbyBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvcGFnZUluZm8nXG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvc3RvcmFnZSdcbmltcG9ydCBzdHJlYW0gZnJvbSAnLi4vLi4vYnJvd3Nlci9leHRlbmQvYXBpL3N0cmVhbSdcbmltcG9ydCBjbGlwYm9hcmQgZnJvbSAnLi4vLi4vYnJvd3Nlci9leHRlbmQvYXBpL2NsaXBib2FyZCdcblxuLy8gY3VzdG9tIG1vZHVsZXNcbmltcG9ydCBhbmltYXRpb24gZnJvbSAnLi9hbmltYXRpb24nXG5pbXBvcnQgZG9tIGZyb20gJy4vZG9tJ1xuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnXG5pbXBvcnQgbmF2aWdhdG9yIGZyb20gJy4vbmF2aWdhdG9yJ1xuaW1wb3J0IHdlYnZpZXcgZnJvbSAnLi93ZWJ2aWV3J1xuXG5jb25zdCBsZWdhY3lNb2R1bGVzID0ge1xuICBldmVudCxcbiAgZ2VvbG9jYXRpb24sXG4gIHBhZ2VJbmZvLFxuICBzdG9yYWdlLFxuICBzdHJlYW0sXG4gIGNsaXBib2FyZFxufVxuXG5jb25zdCBtb2R1bGVzID0ge1xuICBhbmltYXRpb24sXG4gIGRvbSxcbiAgbmF2aWdhdG9yLFxuICB3ZWJ2aWV3XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCAod2VleCkge1xuICAgIGZvciAoY29uc3QgayBpbiBsZWdhY3lNb2R1bGVzKSB7XG4gICAgICB3ZWV4Lmluc3RhbGwobGVnYWN5TW9kdWxlc1trXSlcbiAgICB9XG4gICAgd2VleC5pbnN0YWxsKG1vZGFsKVxuICAgIGZvciAoY29uc3QgayBpbiBtb2R1bGVzKSB7XG4gICAgICB3ZWV4LnJlZ2lzdGVyTW9kdWxlKGssIG1vZHVsZXNba10pXG4gICAgfVxuICB9XG59XG4iLCIodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpICYmICh3aW5kb3cgPSB7Y3RybDoge30sIGxpYjoge319KTshd2luZG93LmN0cmwgJiYgKHdpbmRvdy5jdHJsID0ge30pOyF3aW5kb3cubGliICYmICh3aW5kb3cubGliID0ge30pOyFmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJ2YWxcIix7dmFsdWU6YS50b1N0cmluZygpLGVudW1lcmFibGU6ITB9KSx0aGlzLmd0PWZ1bmN0aW9uKGEpe3JldHVybiBjLmNvbXBhcmUodGhpcyxhKT4wfSx0aGlzLmd0ZT1mdW5jdGlvbihhKXtyZXR1cm4gYy5jb21wYXJlKHRoaXMsYSk+PTB9LHRoaXMubHQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGMuY29tcGFyZSh0aGlzLGEpPDB9LHRoaXMubHRlPWZ1bmN0aW9uKGEpe3JldHVybiBjLmNvbXBhcmUodGhpcyxhKTw9MH0sdGhpcy5lcT1mdW5jdGlvbihhKXtyZXR1cm4gMD09PWMuY29tcGFyZSh0aGlzLGEpfX1iLmVudj1iLmVudnx8e30sYy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx9LGMucHJvdG90eXBlLnZhbHVlT2Y9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy52YWwuc3BsaXQoXCIuXCIpLGI9W10sYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1wYXJzZUludChhW2NdLDEwKTtpc05hTihkKSYmKGQ9MCk7dmFyIGU9ZC50b1N0cmluZygpO2UubGVuZ3RoPDUmJihlPUFycmF5KDYtZS5sZW5ndGgpLmpvaW4oXCIwXCIpK2UpLGIucHVzaChlKSwxPT09Yi5sZW5ndGgmJmIucHVzaChcIi5cIil9cmV0dXJuIHBhcnNlRmxvYXQoYi5qb2luKFwiXCIpKX0sYy5jb21wYXJlPWZ1bmN0aW9uKGEsYil7YT1hLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpLGI9Yi50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RofHxjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9cGFyc2VJbnQoYVtjXSwxMCksZT1wYXJzZUludChiW2NdLDEwKTtpZih3aW5kb3cuaXNOYU4oZCkmJihkPTApLHdpbmRvdy5pc05hTihlKSYmKGU9MCksZT5kKXJldHVybi0xO2lmKGQ+ZSlyZXR1cm4gMX1yZXR1cm4gMH0sYi52ZXJzaW9uPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgYyhhKX19KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjPWEubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLFwiXCIpO2lmKGIuZW52LnBhcmFtcz17fSxjKWZvcih2YXIgZD1jLnNwbGl0KFwiJlwiKSxlPTA7ZTxkLmxlbmd0aDtlKyspe2RbZV09ZFtlXS5zcGxpdChcIj1cIik7dHJ5e2IuZW52LnBhcmFtc1tkW2VdWzBdXT1kZWNvZGVVUklDb21wb25lbnQoZFtlXVsxXSl9Y2F0Y2goZil7Yi5lbnYucGFyYW1zW2RbZV1bMF1dPWRbZV1bMV19fX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGMsZD1hLm5hdmlnYXRvci51c2VyQWdlbnQ7aWYoYz1kLm1hdGNoKC9XaW5kb3dzXFxzUGhvbmVcXHMoPzpPU1xccyk/KFtcXGRcXC5dKykvKSliLmVudi5vcz17bmFtZTpcIldpbmRvd3MgUGhvbmVcIixpc1dpbmRvd3NQaG9uZTohMCx2ZXJzaW9uOmNbMV19O2Vsc2UgaWYoZC5tYXRjaCgvU2FmYXJpLykmJihjPWQubWF0Y2goL0FuZHJvaWRbXFxzXFwvXShbXFxkXFwuXSspLykpKWIuZW52Lm9zPXt2ZXJzaW9uOmNbMV19LGQubWF0Y2goL01vYmlsZVxccytTYWZhcmkvKT8oYi5lbnYub3MubmFtZT1cIkFuZHJvaWRcIixiLmVudi5vcy5pc0FuZHJvaWQ9ITApOihiLmVudi5vcy5uYW1lPVwiQW5kcm9pZFBhZFwiLGIuZW52Lm9zLmlzQW5kcm9pZFBhZD0hMCk7ZWxzZSBpZihjPWQubWF0Y2goLyhpUGhvbmV8aVBhZHxpUG9kKS8pKXt2YXIgZT1jWzFdO2M9ZC5tYXRjaCgvT1MgKFtcXGRfXFwuXSspIGxpa2UgTWFjIE9TIFgvKSxiLmVudi5vcz17bmFtZTplLGlzSVBob25lOlwiaVBob25lXCI9PT1lfHxcImlQb2RcIj09PWUsaXNJUGFkOlwiaVBhZFwiPT09ZSxpc0lPUzohMCx2ZXJzaW9uOmNbMV0uc3BsaXQoXCJfXCIpLmpvaW4oXCIuXCIpfX1lbHNlIGIuZW52Lm9zPXtuYW1lOlwidW5rbm93blwiLHZlcnNpb246XCIwLjAuMFwifTtiLnZlcnNpb24mJihiLmVudi5vcy52ZXJzaW9uPWIudmVyc2lvbihiLmVudi5vcy52ZXJzaW9uKSl9KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjLGQ9YS5uYXZpZ2F0b3IudXNlckFnZW50OyhjPWQubWF0Y2goLyg/OlVDV0VCfFVDQnJvd3NlclxcLykoW1xcZFxcLl0rKS8pKT9iLmVudi5icm93c2VyPXtuYW1lOlwiVUNcIixpc1VDOiEwLHZlcnNpb246Y1sxXX06KGM9ZC5tYXRjaCgvTVFRQnJvd3NlclxcLyhbXFxkXFwuXSspLykpP2IuZW52LmJyb3dzZXI9e25hbWU6XCJRUVwiLGlzUVE6ITAsdmVyc2lvbjpjWzFdfTooYz1kLm1hdGNoKC9GaXJlZm94XFwvKFtcXGRcXC5dKykvKSk/Yi5lbnYuYnJvd3Nlcj17bmFtZTpcIkZpcmVmb3hcIixpc0ZpcmVmb3g6ITAsdmVyc2lvbjpjWzFdfTooYz1kLm1hdGNoKC9NU0lFXFxzKFtcXGRcXC5dKykvKSl8fChjPWQubWF0Y2goL0lFTW9iaWxlXFwvKFtcXGRcXC5dKykvKSk/KGIuZW52LmJyb3dzZXI9e3ZlcnNpb246Y1sxXX0sZC5tYXRjaCgvSUVNb2JpbGUvKT8oYi5lbnYuYnJvd3Nlci5uYW1lPVwiSUVNb2JpbGVcIixiLmVudi5icm93c2VyLmlzSUVNb2JpbGU9ITApOihiLmVudi5icm93c2VyLm5hbWU9XCJJRVwiLGIuZW52LmJyb3dzZXIuaXNJRT0hMCksZC5tYXRjaCgvQW5kcm9pZHxpUGhvbmUvKSYmKGIuZW52LmJyb3dzZXIuaXNJRUxpa2VXZWJraXQ9ITApKTooYz1kLm1hdGNoKC8oPzpDaHJvbWV8Q3JpT1MpXFwvKFtcXGRcXC5dKykvKSk/KGIuZW52LmJyb3dzZXI9e25hbWU6XCJDaHJvbWVcIixpc0Nocm9tZTohMCx2ZXJzaW9uOmNbMV19LGQubWF0Y2goL1ZlcnNpb25cXC9bXFxkK1xcLl0rXFxzKkNocm9tZS8pJiYoYi5lbnYuYnJvd3Nlci5uYW1lPVwiQ2hyb21lIFdlYnZpZXdcIixiLmVudi5icm93c2VyLmlzV2Vidmlldz0hMCkpOmQubWF0Y2goL1NhZmFyaS8pJiYoYz1kLm1hdGNoKC9BbmRyb2lkW1xcc1xcL10oW1xcZFxcLl0rKS8pKT9iLmVudi5icm93c2VyPXtuYW1lOlwiQW5kcm9pZFwiLGlzQW5kcm9pZDohMCx2ZXJzaW9uOmNbMV19OmQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvKT9kLm1hdGNoKC9TYWZhcmkvKT8oYz1kLm1hdGNoKC9WZXJzaW9uXFwvKFtcXGRcXC5dKykvKSxiLmVudi5icm93c2VyPXtuYW1lOlwiU2FmYXJpXCIsaXNTYWZhcmk6ITAsdmVyc2lvbjpjWzFdfSk6KGM9ZC5tYXRjaCgvT1MgKFtcXGRfXFwuXSspIGxpa2UgTWFjIE9TIFgvKSxiLmVudi5icm93c2VyPXtuYW1lOlwiaU9TIFdlYnZpZXdcIixpc1dlYnZpZXc6ITAsdmVyc2lvbjpjWzFdLnJlcGxhY2UoL1xcXy9nLFwiLlwiKX0pOmIuZW52LmJyb3dzZXI9e25hbWU6XCJ1bmtub3duXCIsdmVyc2lvbjpcIjAuMC4wXCJ9LGIudmVyc2lvbiYmKGIuZW52LmJyb3dzZXIudmVyc2lvbj1iLnZlcnNpb24oYi5lbnYuYnJvd3Nlci52ZXJzaW9uKSl9KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjPWEubmF2aWdhdG9yLnVzZXJBZ2VudDtjLm1hdGNoKC9XZWliby9pKT9iLmVudi50aGlyZGFwcD17YXBwbmFtZTpcIldlaWJvXCIsaXNXZWlibzohMH06Yy5tYXRjaCgvTWljcm9NZXNzZW5nZXIvaSk/Yi5lbnYudGhpcmRhcHA9e2FwcG5hbWU6XCJXZWl4aW5cIixpc1dlaXhpbjohMH06Yi5lbnYudGhpcmRhcHA9ITF9KHdpbmRvdyx3aW5kb3cubGlifHwod2luZG93LmxpYj17fSkpLGZ1bmN0aW9uKGEsYil7Yi5lbnY9Yi5lbnZ8fHt9O3ZhciBjLGQsZT1hLm5hdmlnYXRvci51c2VyQWdlbnQ7KGQ9ZS5tYXRjaCgvV2luZFZhbmVbXFwvXFxzXShbXFxkXFwuXFxfXSspLykpJiYoYz1kWzFdKTt2YXIgZj0hMSxnPVwiXCIsaD1cIlwiLGk9XCJcIjsoZD1lLm1hdGNoKC9BbGlBcHBcXCgoW0EtWlxcLV0rKVxcLyhbXFxkXFwuXSspXFwpL2kpKSYmKGY9ITAsZz1kWzFdLGk9ZFsyXSxoPWcuaW5kZXhPZihcIi1QRFwiKT4wP2IuZW52Lm9zLmlzSU9TP1wiaVBhZFwiOmIuZW52Lm9zLmlzQW5kcm9pZD9cIkFuZHJvaWRQYWRcIjpiLmVudi5vcy5uYW1lOmIuZW52Lm9zLm5hbWUpLCFnJiZlLmluZGV4T2YoXCJUQklPU1wiKT4wJiYoZz1cIlRCXCIpLGY/Yi5lbnYuYWxpYXBwPXt3aW5kdmFuZTpiLnZlcnNpb24oY3x8XCIwLjAuMFwiKSxhcHBuYW1lOmd8fFwidW5rb3duXCIsdmVyc2lvbjpiLnZlcnNpb24oaXx8XCIwLjAuMFwiKSxwbGF0Zm9ybTpofHxiLmVudi5vcy5uYW1lfTpiLmVudi5hbGlhcHA9ITEsYi5lbnYudGFvYmFvQXBwPWIuZW52LmFsaWFwcH0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSk7O21vZHVsZS5leHBvcnRzID0gd2luZG93LmxpYlsnZW52J107IiwiaW1wb3J0ICdlbnZkJ1xuXG5pbXBvcnQgeyBpbml0IGFzIGluaXRWaWV3cG9ydCB9IGZyb20gJy4vdmlld3BvcnQnXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBnZXQgV1hFbnZpcm9ubWVudCBpbmZvLlxuICogQHBhcmFtICB7b2JqZWN0fSB2aWV3cG9ydEluZm86IGluZm8gYWJvdXQgdmlld3BvcnQuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVudkluZm86IGluZm8gcGFyc2VkIGZyb20gbGliLmVudi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRFbnYgKHZpZXdwb3J0SW5mbywgZW52SW5mbykge1xuICBjb25zdCBlbnYgPSB7XG4gICAgcGxhdGZvcm06ICdXZWInLFxuICAgIHdlZXhWZXJzaW9uOiAncHJvY2Vzcy5lbnYuV0VFWF9WRVJTSU9OJyxcbiAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgYXBwTmFtZTogZW52SW5mby5hbGlhcHAgPyBlbnZJbmZvLmFsaWFwcC5hcHBuYW1lIDogbmF2aWdhdG9yLmFwcE5hbWUsXG4gICAgYXBwVmVyc2lvbjogZW52SW5mby5hbGlhcHAgPyBlbnZJbmZvLmFsaWFwcC52ZXJzaW9uLnZhbCA6IG51bGwsXG4gICAgb3NOYW1lOiBlbnZJbmZvLmJyb3dzZXIgPyBlbnZJbmZvLmJyb3dzZXIubmFtZSA6IG51bGwsXG4gICAgb3NWZXJzaW9uOiBlbnZJbmZvLmJyb3dzZXIgPyBlbnZJbmZvLmJyb3dzZXIudmVyc2lvbi52YWwgOiBudWxsLFxuICAgIGRldmljZU1vZGVsOiBlbnZJbmZvLm9zLm5hbWUgfHwgbnVsbFxuICB9XG4gIC8qKlxuICAgKiB2aWV3cG9ydEluZm86IHNjYWxlLCBkZXZpY2VXaWR0aCwgZGV2aWNlSGVpZ2h0LiBkcHJcbiAgICovXG4gIHJldHVybiBleHRlbmQoZW52LCB2aWV3cG9ydEluZm8pXG59XG5cbi8vIGNvbnN0IHZpZXdwb3J0SW5mbyA9IGluaXRWaWV3cG9ydCgpXG5cbi8vIDc1MCBieSBkZWZhdWx0IGN1cnJlbnRseVxuLy8gY29uc3Qgc2NhbGUgPSB2aWV3cG9ydEluZm8uc2NhbGVcblxuLy8gY29uc3QgdW5pdHMgPSB7XG4vLyAgIFJFTTogMTIgKiBzY2FsZSxcbi8vICAgVlc6IHZpZXdwb3J0SW5mby5kZXZpY2VXaWR0aCAvIDEwMCxcbi8vICAgVkg6IHZpZXdwb3J0SW5mby5kZXZpY2VIZWlnaHQgLyAxMDAsXG4vLyAgIFZNSU46IE1hdGgubWluKHZpZXdwb3J0SW5mby5kZXZpY2VXaWR0aCwgdmlld3BvcnRJbmZvLmRldmljZUhlaWdodCkgLyAxMDAsXG4vLyAgIFZNQVg6IE1hdGgubWF4KHZpZXdwb3J0SW5mby5kZXZpY2VXaWR0aCwgdmlld3BvcnRJbmZvLmRldmljZUhlaWdodCkgLyAxMDAsXG4vLyAgIENNOiA5NiAvIDIuNTQgKiBzY2FsZSxcbi8vICAgTU06IDk2IC8gMjUuNCAqIHNjYWxlLFxuLy8gICBROiA5NiAvIDI1LjQgLyA0ICogc2NhbGUsXG4vLyAgIElOOiA5NiAqIHNjYWxlLFxuLy8gICBQVDogOTYgLyA3MiAqIHNjYWxlLFxuLy8gICBQQzogOTYgLyA2ICogc2NhbGUsXG4vLyAgIFBYOiBzY2FsZVxuLy8gfVxuXG4vLyBPYmplY3QuZnJlZXplKHVuaXRzKVxuLy8gT2JqZWN0LmZyZWV6ZShlbnYpXG5cbi8vIHdpbmRvdy5DU1NfVU5JVCA9IHVuaXRzXG53aW5kb3cuV1hFbnZpcm9ubWVudCA9IGluaXRFbnYoaW5pdFZpZXdwb3J0KCksIHdpbmRvdy5saWIuZW52KVxuIiwiLyogZ2xvYmFsIFZ1ZSAqL1xuXG5pbXBvcnQgJy4vd3gtZW52J1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IHdlZXhNb2R1bGVzID0ge31cblxuY29uc3Qgd2VleCA9IHtcbiAgX192dWVfXzogbnVsbCxcbiAgdXRpbHMsXG4gIC8vIHVuaXRzOiB3aW5kb3cuQ1NTX1VOSVQsXG4gIGNvbmZpZzoge1xuICAgIGVudjogd2luZG93LldYRW52aXJvbm1lbnQsXG4gICAgYnVuZGxlVXJsOiBsb2NhdGlvbi5ocmVmXG4gIH0sXG5cbiAgcmVxdWlyZU1vZHVsZSAobW9kdWxlTmFtZSkge1xuICAgIHJldHVybiB3ZWV4TW9kdWxlc1ttb2R1bGVOYW1lXVxuICB9LFxuXG4gIHJlZ2lzdGVyTW9kdWxlICguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJBcGlNb2R1bGUoLi4uYXJncylcbiAgfSxcblxuICAvLyBAZGVwcmVjYXRlZFxuICByZXF1aXJlICguLi5hcmdzKSB7XG4gICAgY29uc29sZS5sb2coYFtWdWUgUmVuZGVyXSBcIndlZXgucmVxdWlyZVwiIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgXCJ3ZWV4LnJlcXVpcmVNb2R1bGVcIiBpbnN0ZWFkLmApXG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZU1vZHVsZSguLi5hcmdzKVxuICB9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIC8vIFRPRE86IHJlbmFtZSB0byByZWdpc3Rlck1vZHVsZVxuICByZWdpc3RlckFwaU1vZHVsZSAobmFtZSwgbW9kdWxlLCBtZXRhKSB7XG4gICAgaWYgKCF3ZWV4TW9kdWxlc1tuYW1lXSkge1xuICAgICAgd2VleE1vZHVsZXNbbmFtZV0gPSB7fVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtb2R1bGUpIHtcbiAgICAgIGlmIChtb2R1bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB3ZWV4TW9kdWxlc1tuYW1lXVtrZXldID0gdXRpbHMuYmluZChtb2R1bGVba2V5XSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVnaXN0ZXJDb21wb25lbnQgKG5hbWUsIGNvbXBvbmVudCkge1xuICAgIGlmICghdGhpcy5fX3Z1ZV9fKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ1tWdWUgUmVuZGVyXSBWdWUgaXMgbm90IGZvdW5kLiBQbGVhc2UgaW1wb3J0IFZ1ZS5qcyBiZWZvcmUgcmVnaXN0ZXIgYSBjb21wb25lbnQuJylcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5fY3NzKSB7XG4gICAgICBjb25zdCBjc3MgPSBjb21wb25lbnQuX2Nzcy5yZXBsYWNlKC9cXGJbKy1dP1tcXGQuXStyZW07P1xcYi9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtKSAqIDc1ICogd2VleC5jb25maWcuZW52LnNjYWxlICsgJ3B4J1xuICAgICAgfSlcbiAgICAgIHV0aWxzLmFwcGVuZENzcyhjc3MsIGB3ZWV4LWNtcC0ke25hbWV9YClcbiAgICAgIGRlbGV0ZSBjb21wb25lbnQuX2Nzc1xuICAgIH1cbiAgICB0aGlzLl9fdnVlX18uY29tcG9uZW50KG5hbWUsIGNvbXBvbmVudClcbiAgfSxcblxuICAvLyBAZGVwcmVjYXRlZFxuICBnZXRSb290ICgpIHt9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIHNlbmRlcjoge1xuICAgIHBlcmZvcm1DYWxsYmFjayAoY2FsbGJhY2ssIGRhdGEsIGtlZXBBbGl2ZSkge1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIGluc3RhbGwgKG1vZHVsZSkge1xuICAgIG1vZHVsZS5pbml0KHRoaXMpXG4gIH1cbn1cblxuOyBbJ29uJywgJ29uY2UnLCAnb2ZmJywgJ2VtaXQnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgd2VleFttZXRob2RdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuX3Z1ZSkge1xuICAgICAgdGhpcy5fdnVlID0gbmV3IFZ1ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl92dWVbYCQke21ldGhvZH1gXSguLi5hcmdzKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCB3ZWV4XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9yZXNldC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9iYXNlLmNzcydcblxuLy8gaW1wb3J0ICdsYXp5aW1nJ1xuaW1wb3J0ICcuLi8uLi9icm93c2VyL3JlbmRlci9nZXN0dXJlJ1xuXG5pbXBvcnQgJy4uLy4uLy4uL3NoYXJlZC9hcnJheUZyb20nXG5pbXBvcnQgJy4uLy4uLy4uL3NoYXJlZC9vYmplY3RBc3NpZ24nXG5pbXBvcnQgJy4uLy4uLy4uL3NoYXJlZC9vYmplY3RTZXRQcm90b3R5cGVPZidcblxuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJ1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZSdcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlJ1xuXG5pbXBvcnQgbW9kdWxlcyBmcm9tICcuLi9tb2R1bGVzJ1xuaW1wb3J0IHdlZXggZnJvbSAnLi93ZWV4J1xuXG4vLyByZWdpc3RlciBidWlsdC1pbiBtb2R1bGVzLlxud2VleC5pbnN0YWxsKG1vZHVsZXMpXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWdWUgKHZ1ZSkge1xuICBpZiAoIXZ1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignW1Z1ZSBSZW5kZXJdIFZ1ZSBub3QgZm91bmQuIFBsZWFzZSBtYWtlIHN1cmUgdnVlIDIueCBydW50aW1lIGlzIGltcG9ydGVkLicpXG4gIH1cbiAgd2VleC5fX3Z1ZV9fID0gdnVlXG4gIGNvbnNvbGUubG9nKGBbVnVlIFJlbmRlcl0gaW5zdGFsbCBWdWUgJHt2dWUudmVyc2lvbn0uYClcbn1cblxud2luZG93LndlZXggPSB3ZWV4XG53aW5kb3cuZ2xvYmFsID0gd2luZG93XG5cbmV4cG9ydCBkZWZhdWx0IHdlZXhcbiIsImltcG9ydCB7XG4gIGNhbWVsaXplS2V5cyxcbiAgLy8gaHlwaGVuYXRlS2V5cyxcbiAgZXh0ZW5kLFxuICB0cmltQ29tbWVudCxcbiAgbm9ybWFsaXplU3R5bGVcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyB0YWdCZWdpbiwgdGFnRW5kIH0gZnJvbSAnLi4vdXRpbHMvcGVyZidcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pbXBvcnQgYWRkUHJlZml4IGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMnXG5cbi8qKlxuICogZ2V0IHNjb3BlZCBjbGFzcyBzdHlsZSBtYXAgZnJvbSBzdHlsZXNoZWV0cyBpbiA8aGVhZD4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWFkU3R5bGVNYXAgKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICB0YWdCZWdpbignZ2V0SGVhZFN0eWxlTWFwJylcbiAgfVxuICBjb25zdCBuZWVkVG9SZW1vdmVTdHlsZVNoZWV0Tm9kZXMgPSBbXVxuICBjb25zdCByZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnN0eWxlU2hlZXRzIHx8IFtdKVxuICAgIC5yZWR1Y2UoKHByZSwgc3R5bGVTaGVldCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiB3aHkgbm90IHVzaW5nIHN0eWxlU2hlZXQucnVsZXMgfHwgc3R5bGVTaGVldC5jc3NSdWxlcyB0byBnZXQgY3NzIHJ1bGVzID9cbiAgICAgICAqIGJlY2F1c2Ugd2VleCdzIGNvbXBvbmVudHMgZGVmaW5lZCBub24tc3RhbmRhcmQgc3R5bGUgYXR0cmlidXRlcywgd2hpY2ggaXNcbiAgICAgICAqIGF1dG8gaWdub3JlZCB3aGVuIGFjY2VzcyBydWxlLmNzc1RleHQuXG4gICAgICAgKi9cbiAgICAgIGlmICghc3R5bGVTaGVldC5jc3NSdWxlcykge1xuICAgICAgICAvKipcbiAgICAgICAgICogbm8gcnVsZXMuIGp1c3QgaWdub3JlIHRoaXMuIHByb2JhYmx5IGEgbGluayBzdHlsZXNoZWV0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHByZVxuICAgICAgfVxuICAgICAgY29uc3Qgc3RyQXJyID0gdHJpbUNvbW1lbnQoc3R5bGVTaGVldC5vd25lck5vZGUudGV4dENvbnRlbnQudHJpbSgpKS5zcGxpdCgvfS8pXG4gICAgICBjb25zdCBsZW4gPSBzdHJBcnIubGVuZ3RoXG4gICAgICBjb25zdCBydWxlcyA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IHN0ckFycltpXVxuICAgICAgICBpZiAoIXN0ciB8fCBzdHIubWF0Y2goL15cXHMqJC8pKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogc2hvdWxkIG1hdGNoIHRoZXNlIGNhc2VzOlxuICAgICAgICAgKiAuYVtkYXRhLXYteHh4XSB7IGNvbG9yOiByZWQgfVxuICAgICAgICAgKiAuYVtkYXRhLXYteHh4XSwgLmJbZGF0YS12LXh4eF0geyBjb2xvcjogcmVkOyB9XG4gICAgICAgICAqXG4gICAgICAgICAqIHNob3VsZCBub3QgbWF0Y2ggdGhlc2UgY2FzZXM6XG4gICAgICAgICAqIC5hIHsgY29sb3I6IHJlZDsgfVxuICAgICAgICAgKiBldGMuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvKCg/Oiw/XFxzKlxcLltcXHctXStcXFtkYXRhLXYtXFx3K1xcXSg/OjpcXHcrKT8pKylcXHMqKHtbXn1dKykvKVxuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgLy8gbm90IHRoZSB2dWUgc3RhdGljIGNsYXNzIHN0eWxlcyBtYXAuIHNvIGFjcXVpcmUgbm8gcnVsZXMgZm9yIHRoaXMgc3R5bGVTaGVldC5cbiAgICAgICAgICAvLyBqdXN0IGp1bXAgdGhyb3VnaCB0aGlzIHN0eWxlU2hlZXQgYW5kIGdvIHRvIGFuYWx5emluZyBuZXh0LlxuICAgICAgICAgIHJldHVybiBwcmVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbHNObXMgPSBtYXRjaFsxXS5zcGxpdCgnLCcpLm1hcChuID0+IG4udHJpbSgpKVxuICAgICAgICBjb25zdCBjc3NUZXh0ID0gbWF0Y2hbMl0ucmVwbGFjZSgvW3t9XS9nLCAnJykudHJpbSgpXG4gICAgICAgIGxldCBjbHNObXNJZHggPSAwXG4gICAgICAgIGNvbnN0IGNsc05tc0xlbiA9IGNsc05tcy5sZW5ndGhcbiAgICAgICAgd2hpbGUgKGNsc05tc0lkeCA8IGNsc05tc0xlbikge1xuICAgICAgICAgIHJ1bGVzLnB1c2goe1xuICAgICAgICAgICAgc2VsZWN0b3JUZXh0OiBjbHNObXNbY2xzTm1zSWR4XSxcbiAgICAgICAgICAgIGNzc1RleHRcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNsc05tc0lkeCsrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEFycmF5LmZyb20ocnVsZXMpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gcnVsZS5zZWxlY3RvclRleHQgfHwgJydcbiAgICAgICAgcHJlW3NlbGVjdG9yXSA9IHRyaW1Db21tZW50KHJ1bGUuY3NzVGV4dCkuc3BsaXQoJzsnKVxuICAgICAgICAgIC5yZWR1Y2UoKHN0eWxlT2JqLCBzdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC50cmltKClcbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnQgJiYgc3RhdGVtZW50LmluZGV4T2YoJy8qJykgPD0gLTEpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzQXJyID0gc3RhdGVtZW50LnNwbGl0KCc6JykubWFwKChwYXJ0KSA9PiBwYXJ0LnRyaW0oKSlcbiAgICAgICAgICAgICAgc3R5bGVPYmpbcmVzQXJyWzBdXSA9IHJlc0FyclsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlT2JqXG4gICAgICAgICAgfSwge30pXG4gICAgICB9KVxuICAgICAgLyoqXG4gICAgICAgKiByZW1vdmUgdGhpcyBzdHlsZVNoZWV0IG5vZGUgc2luY2UgaXQncyBpbiB0aGUgc3R5bGVNYXAgYWxyZWFkeS4gQW5kIHRoaXMgc3R5bGVcbiAgICAgICAqIHNob3VsZCBvbmx5IGJlIGZldGNoZWQgYW5kIHVzZWQgZnJvbSBzdHlsZU1hcCB0byBnZW5lcmF0ZSB0aGUgZmluYWwgY29tYmluZWRcbiAgICAgICAqIGNvbXBvbmVudCBzdHlsZSwgbm90IGZyb20gdGhlIHN0eWxlc2hlZXQgaXRzZWxmLlxuICAgICAgICovXG4gICAgICBuZWVkVG9SZW1vdmVTdHlsZVNoZWV0Tm9kZXMucHVzaChzdHlsZVNoZWV0Lm93bmVyTm9kZSlcbiAgICAgIHJldHVybiBwcmVcbiAgICB9LCB7fSlcbiAgbmVlZFRvUmVtb3ZlU3R5bGVTaGVldE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSlcbiAgfSlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgdGFnRW5kKCdnZXRIZWFkU3R5bGVNYXAnKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjb3BlSWRzIChjb250ZXh0KSB7XG4gIGNvbnN0IGFyciA9IFtdXG4gIGxldCBjdHggPSBjb250ZXh0XG4gIGxldCBzY29wZUlkXG4gIHdoaWxlIChjdHgpIHtcbiAgICBzY29wZUlkID0gY3R4LiRvcHRpb25zLl9zY29wZUlkXG4gICAgc2NvcGVJZCAmJiBhcnIucHVzaChzY29wZUlkKVxuICAgIGN0eCA9IGN0eC4kb3B0aW9ucy5wYXJlbnRcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbi8qKlxuICogZ2V0IHN0eWxlIGluIDxzdHlsZSBzY29wZWQ+IHRhZ3MgZm9yIHRoaXMgY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NvcGVTdHlsZSAoY29udGV4dCwgY2xhc3NOYW1lcykge1xuICBjb25zdCBzY29wZUlkcyA9IGdldFNjb3BlSWRzKGNvbnRleHQpXG4gIGNvbnN0IHN0eWxlID0ge31cbiAgY29uc3Qgc3R5bGVNYXAgPSB3ZWV4LnN0eWxlTWFwXG4gIGxldCBtYXBcbiAgbGV0IGNsc1xuICBsZXQgY2xzTm1zSWR4XG4gIGxldCBzY3BJZHNJZHhcbiAgY29uc3QgY2xzTm1zTGVuID0gY2xhc3NOYW1lcy5sZW5ndGhcbiAgY29uc3Qgc2NwSWRzTGVuID0gc2NvcGVJZHMubGVuZ3RoXG4gIGlmIChjbHNObXNMZW4gPD0gMCkge1xuICAgIHJldHVybiB7fVxuICB9XG4gIGNsc05tc0lkeCA9IDBcbiAgd2hpbGUgKGNsc05tc0lkeCA8IGNsc05tc0xlbikge1xuICAgIHNjcElkc0lkeCA9IDBcbiAgICB3aGlsZSAoc2NwSWRzSWR4IDwgc2NwSWRzTGVuKSB7XG4gICAgICBjbHMgPSBgLiR7Y2xhc3NOYW1lc1tjbHNObXNJZHhdfVske3Njb3BlSWRzW3NjcElkc0lkeF19XWBcbiAgICAgIG1hcCA9IHN0eWxlTWFwW2Nsc11cbiAgICAgIGlmICghbWFwKSB7XG4gICAgICAgIHNjcElkc0lkeCsrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gbWFwKSB7XG4gICAgICAgIHN0eWxlW2tdID0gbWFwW2tdXG4gICAgICB9XG4gICAgICBzY3BJZHNJZHgrK1xuICAgIH1cbiAgICBjbHNObXNJZHgrK1xuICB9XG4gIHJldHVybiBzdHlsZVxufVxuXG4vKipcbiAqIGdldCBzdHlsZSBtZXJnZWQgd2l0aCBzdGF0aWMgc3R5bGVzLCBiaW5kaW5nIHN0eWxlcywgYW5kIHNjb3BlZCBjbGFzcyBzdHlsZXMsXG4gKiB3aXRoIGtleXMgaW4gY2FtZWxjYXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKCFjb250ZXh0LiR2bm9kZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1t2dWUtcmVuZGVyXSBnZXRDb21wb25lbnRTdHlsZSBmYWlsZWQ6IG5vICR2bm9kZSBpbiBjb250ZXh0LicpXG4gICAgfVxuICAgIHJldHVybiB7fVxuICB9XG4gIGNvbnN0IGNhY2hlZCA9IGNvbnRleHQuJHZub2RlLmRhdGEuY2FjaGVkXG4gIGNvbnN0IGRhdGEgPSBjb250ZXh0LiR2bm9kZS5kYXRhXG4gIGNvbnN0IHN0YXRpY0NsYXNzTmFtZXMgPSAodHlwZW9mIGRhdGEuc3RhdGljQ2xhc3MgPT09ICdzdHJpbmcnKSA/IGRhdGEuc3RhdGljQ2xhc3Muc3BsaXQoJyAnKSA6IChkYXRhLnN0YXRpY0NsYXNzIHx8IFtdKVxuICBjb25zdCBjbGFzc05hbWVzID0gKHR5cGVvZiBkYXRhLmNsYXNzID09PSAnc3RyaW5nJykgPyBkYXRhLmNsYXNzLnNwbGl0KCcgJykgOiAoZGF0YS5jbGFzcyB8fCBbXSlcbiAgY29uc3QgY2xzTm1zID0gc3RhdGljQ2xhc3NOYW1lcy5jb25jYXQoY2xhc3NOYW1lcylcbiAgY29uc3Qgc3R5bGUgPSBnZXRTY29wZVN0eWxlKGNvbnRleHQsIGNsc05tcylcbiAgY29uc3QgcmVzID0gZXh0ZW5kKHN0eWxlLCBjYWNoZWQsIGRhdGEuc3RhdGljU3R5bGUsIGRhdGEuc3R5bGUpXG4gIGNvbnRleHQuJHZub2RlLmRhdGEuY2FjaGVkID0gcmVzXG4gIHJldHVybiBhZGRQcmVmaXgobm9ybWFsaXplU3R5bGUoY2FtZWxpemVLZXlzKHJlcykpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdENvbXBvbmVudFN0eWxlIChjb250ZXh0KSB7XG4gIGNvbnN0IHN0eWxlID0gZ2V0Q29tcG9uZW50U3R5bGUoY29udGV4dClcbiAgaWYgKHN0eWxlKSB7XG4gICAgZGVsZXRlIGNvbnRleHQuJHZub2RlLmRhdGEuc3RhdGljU3R5bGVcbiAgICBkZWxldGUgY29udGV4dC4kdm5vZGUuZGF0YS5zdHlsZVxuICB9XG4gIHJldHVybiBzdHlsZVxufVxuXG4vKipcbiAqIGdldCB7IHdpZHRoLCBoZWlnaHQgfSAoc2l6ZSkgb2YgY3VycmVudCBjb21wb25lbnQgZnJvbSBjb21wb25lbnRzJyBzdHlsZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplIChjb250ZXh0KSB7XG4gIGlmICghY29udGV4dC4kdm5vZGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbdnVlLXJlbmRlcl0gZ2V0Q29tcG9uZW50U3R5bGUgZmFpbGVkOiBubyAkdm5vZGUgaW4gY29udGV4dC4nKVxuICAgIH1cbiAgICByZXR1cm4ge31cbiAgfVxuICBjb25zdCBkYXRhID0gY29udGV4dC4kdm5vZGUuZGF0YVxuICBjb25zdCB3aCA9IHt9XG4gIGNvbnN0IGNsYXNzZXMgPSB0eXBlb2YgZGF0YS5jbGFzcyA9PT0gJ3N0cmluZycgPyBkYXRhLmNsYXNzLnNwbGl0KCcgJykgOiAoZGF0YS5jbGFzcyB8fCBbXSlcbiAgY29uc3Qgc3RhdGljQ2xhc3MgPSB0eXBlb2YgZGF0YS5zdGF0aWNDbGFzcyA9PT0gJ3N0cmluZycgPyBkYXRhLnN0YXRpY0NsYXNzLnNwbGl0KCcgJykgOiAoZGF0YS5jbGFzcyB8fCBbXSlcbiAgY29uc3QgY2xzTm1zID0gc3RhdGljQ2xhc3MuY29uY2F0KGNsYXNzZXMpXG4gIGZ1bmN0aW9uIGV4dGVuZFdIRnJvbSAodG8sIGZyb20pIHtcbiAgICBpZiAoIWZyb20pIHsgcmV0dXJuIH1cbiAgICBmcm9tLndpZHRoICYmICh0by53aWR0aCA9IGZyb20ud2lkdGgpXG4gICAgZnJvbS5oZWlnaHQgJiYgKHRvLmhlaWdodCA9IGZyb20uaGVpZ2h0KVxuICB9XG4gIGV4dGVuZFdIRnJvbSh3aCwgdGhpcy5fZ2V0U2NvcGVTdHlsZShjbHNObXMpKVxuICBleHRlbmRXSEZyb20od2gsIGRhdGEuc3RhdGljU3R5bGUpXG4gIGV4dGVuZFdIRnJvbSh3aCwgZGF0YS5zdHlsZSlcbiAgcmV0dXJuIHdoXG59XG4iLCIvLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcbmltcG9ydCB7IGV4dHJhY3RDb21wb25lbnRTdHlsZSB9IGZyb20gJy4uL2NvcmUnXG5cbmNvbnN0IF9jc3MgPSBgXG4ud2VleC1zd2l0Y2gge1xuICBib3JkZXI6IDAuMDEzMzMzcmVtIHNvbGlkICNkZmRmZGY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICBjb2xvcjogIzY0YmQ2MztcbiAgd2lkdGg6IDEuMzMzMzMzcmVtO1xuICBoZWlnaHQ6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogI2RmZGZkZjtcbiAgYm94LXNoYWRvdzogI2RmZGZkZiAwIDAgMCAwIGluc2V0O1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIDAuNHMsIGJveC1zaGFkb3cgMC40cywgYmFja2dyb3VuZC1jb2xvciAxLjJzO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjRzLCBib3gtc2hhZG93IDAuNHMsIGJhY2tncm91bmQtY29sb3IgMS4ycztcbn1cblxuLndlZXgtc3dpdGNoLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiZDYzO1xuICBib3JkZXItY29sb3I6ICM2NGJkNjM7XG4gIGJveC1zaGFkb3c6ICM2NGJkNjMgMCAwIDAgMC41MzMzMzNyZW0gaW5zZXQ7XG59XG5cbi53ZWV4LXN3aXRjaC1jaGVja2VkLndlZXgtc3dpdGNoLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0EwQ0NBMDtcbiAgYm94LXNoYWRvdzogI0EwQ0NBMCAwIDAgMCAwLjUzMzMzM3JlbSBpbnNldDtcbn1cblxuLndlZXgtc3dpdGNoLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cblxuLndlZXgtc3dpdGNoLWlubmVyIHtcbiAgd2lkdGg6IDAuOHJlbTtcbiAgaGVpZ2h0OiAwLjhyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMC4wMTMzMzNyZW0gMC4wNHJlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cywgbGVmdCAwLjJzO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cywgbGVmdCAwLjJzO1xufVxuXG4ud2VleC1zd2l0Y2gtY2hlY2tlZCA+IC53ZWV4LXN3aXRjaC1pbm5lciB7XG4gIGxlZnQ6IDAuNTMzMzMzcmVtO1xufVxuYFxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgY2hlY2tlZDoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0NoZWNrZWQ6ICh0aGlzLmNoZWNrZWQgIT09ICdmYWxzZScgJiYgdGhpcy5jaGVja2VkICE9PSBmYWxzZSksXG4gICAgICBpc0Rpc2FibGVkOiAodGhpcy5kaXNhYmxlZCAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmRpc2FibGVkICE9PSBmYWxzZSlcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgd3JhcHBlckNsYXNzICgpIHtcbiAgICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ3dlZXgtc3dpdGNoJ11cbiAgICAgIHRoaXMuaXNDaGVja2VkICYmIGNsYXNzQXJyYXkucHVzaCgnd2VleC1zd2l0Y2gtY2hlY2tlZCcpXG4gICAgICB0aGlzLmlzRGlzYWJsZWQgJiYgY2xhc3NBcnJheS5wdXNoKCd3ZWV4LXN3aXRjaC1kaXNhYmxlZCcpXG4gICAgICByZXR1cm4gY2xhc3NBcnJheS5qb2luKCcgJylcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGUgKCkge1xuICAgICAgLy8gVE9ETzogaGFuZGxlIHRoZSBldmVudHNcbiAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHsgdmFsdWU6IHRoaXMuaXNDaGVja2VkIH0pXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnc3dpdGNoJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnc3dpdGNoJyB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50KVxuICAgICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyxcbiAgICAgIHN0YXRpY1N0eWxlOiBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICB9LCBbY3JlYXRlRWxlbWVudCgnc21hbGwnLCB7IHN0YXRpY0NsYXNzOiAnd2VleC1zd2l0Y2gtaW5uZXInIH0pXSlcbiAgfSxcbiAgX2Nzc1xufVxuIiwiaW1wb3J0IHsgZXh0cmFjdENvbXBvbmVudFN0eWxlIH0gZnJvbSAnLi4vY29yZSdcbi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5jb25zdCBfY3NzID0gYFxuLndlZXgtYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmBcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnd2VleC1hJyxcbiAgcHJvcHM6IHtcbiAgICBocmVmOiBTdHJpbmdcbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAvLyAgIHZhbGlkYXRlU3R5bGVzKCdhJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaHRtbDphJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgJ3dlZXgtdHlwZSc6ICdhJyxcbiAgICAgICAgaHJlZjogdGhpcy5ocmVmXG4gICAgICB9LFxuICAgICAgb246IHRoaXMuX2NyZWF0ZUV2ZW50TWFwKCksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtYSB3ZWV4LWN0JyxcbiAgICAgIHN0YXRpY1N0eWxlOiBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICB9LCB0aGlzLl90cmltVGV4dE5vZGVDaGlsZHJlbih0aGlzLiRzbG90cy5kZWZhdWx0KSlcbiAgfSxcbiAgX2Nzc1xufVxuIiwiLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5pbXBvcnQgeyBleHRyYWN0Q29tcG9uZW50U3R5bGUgfSBmcm9tICcuLi9jb3JlJ1xuXG5jb25zdCBfY3NzID0gYFxuYm9keSA+IC53ZWV4LWRpdiB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5gXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3dlZXgtZGl2JyxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAvLyAgIHZhbGlkYXRlU3R5bGVzKCdkaXYnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOmRpdicsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnZGl2JyB9LFxuICAgICAgb246IHRoaXMuX2NyZWF0ZUV2ZW50TWFwKCksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtZGl2IHdlZXgtY3QnLFxuICAgICAgc3RhdGljU3R5bGU6IGV4dHJhY3RDb21wb25lbnRTdHlsZSh0aGlzKVxuICAgIH0sIHRoaXMuX3RyaW1UZXh0Tm9kZUNoaWxkcmVuKHRoaXMuJHNsb3RzLmRlZmF1bHQpKVxuICB9LFxuICBfY3NzXG59XG4iLCJpbXBvcnQgeyBleHRyYWN0Q29tcG9uZW50U3R5bGUgfSBmcm9tICcuLi9jb3JlL3N0eWxlJ1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IF9jc3MgPSBgXG4ud2VleC1pbWFnZSwgLndlZXgtaW1nIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbmBcbi8qKlxuICogZ2V0IHJlc2l6ZSAoc3RldGNofGNvdmVyfGNvbnRhaW4pIHJlbGF0ZWQgc3R5bGVzLlxuICovXG5mdW5jdGlvbiBnZXRSZXNpemVTdHlsZSAoY29udGV4dCkge1xuICBjb25zdCBzdHJldGNoID0gJzEwMCUgMTAwJSdcbiAgY29uc3QgcmVzaXplID0gY29udGV4dC5yZXNpemUgfHwgc3RyZXRjaFxuICBjb25zdCBiZ1NpemUgPSBbJ2NvdmVyJywgJ2NvbnRhaW4nLCBzdHJldGNoXS5pbmRleE9mKHJlc2l6ZSkgPiAtMSA/IHJlc2l6ZSA6IHN0cmV0Y2hcbiAgLy8gY29tcGF0aWJpbGl0eTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9YmFja2dyb3VuZC1zaXplXG4gIHJldHVybiB7ICdiYWNrZ3JvdW5kLXNpemUnOiBiZ1NpemUgfVxufVxuXG5mdW5jdGlvbiBwcmVQcm9jZXNzU3JjIChjb250ZXh0LCB1cmwsIG1lcmdlZFN0eWxlKSB7XG4gIC8vIHNvbWVob3cgdGhlIG1lcmdlZCBzdHlsZSBpbiBfcHJlcmVuZGVyIGhvb2sgaXMgZ29uZS5cbiAgLy8ganVzdCByZXR1cm4gdGhlIG9yaWdpbmFsIHNyYy5cbiAgaWYgKCFtZXJnZWRTdHlsZSB8fCAhbWVyZ2VkU3R5bGUud2lkdGggfHwgIW1lcmdlZFN0eWxlLmhlaWdodCkge1xuICAgIHJldHVybiB1cmxcbiAgfVxuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG1lcmdlZFN0eWxlXG4gIHJldHVybiBjb250ZXh0LnByb2Nlc3NJbWdTcmMgJiYgY29udGV4dC5wcm9jZXNzSW1nU3JjKHVybCwge1xuICAgIHdpZHRoOiBwYXJzZUZsb2F0KHdpZHRoKSxcbiAgICBoZWlnaHQ6IHBhcnNlRmxvYXQoaGVpZ2h0KSxcbiAgICBxdWFsaXR5OiBjb250ZXh0LnF1YWxpdHksXG4gICAgc2hhcnBlbjogY29udGV4dC5zaGFycGVuLFxuICAgIG9yaWdpbmFsOiBjb250ZXh0Lm9yaWdpbmFsXG4gIH0pIHx8IHVybFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc3JjOiBTdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICByZXNpemU6IFN0cmluZyxcbiAgICBxdWFsaXR5OiBTdHJpbmcsXG4gICAgc2hhcnBlbjogU3RyaW5nLFxuICAgIG9yaWdpbmFsOiBbU3RyaW5nLCBCb29sZWFuXVxuICB9LFxuXG4gIHVwZGF0ZWQgKCkge1xuICAgIHRoaXMuX2ZpcmVMYXp5bG9hZCgpXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5fZmlyZUxhenlsb2FkKClcbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2ltYWdlJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICAvLyBjb25zdCBzdHlsZSA9IHRoaXMuX25vcm1hbGl6ZUlubGluZVN0eWxlcyh0aGlzLiR2bm9kZS5kYXRhKVxuICAgIGNvbnN0IHJlc2l6ZVN0eWxlID0gZ2V0UmVzaXplU3R5bGUodGhpcylcbiAgICBjb25zdCBzdHlsZSA9IGV4dHJhY3RDb21wb25lbnRTdHlsZSh0aGlzKVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdmaWd1cmUnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ2ltYWdlJyxcbiAgICAgICAgJ2ltZy1zcmMnOiBwcmVQcm9jZXNzU3JjKHRoaXMsIHRoaXMuc3JjLCBzdHlsZSksXG4gICAgICAgICdpbWctcGxhY2Vob2xkZXInOiBwcmVQcm9jZXNzU3JjKHRoaXMsIHRoaXMucGxhY2Vob2xkZXIsIHN0eWxlKVxuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLl9jcmVhdGVFdmVudE1hcChbJ2xvYWQnLCAnZXJyb3InXSksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtaW1hZ2Ugd2VleC1lbCcsXG4gICAgICBzdGF0aWNTdHlsZTogZXh0ZW5kKHN0eWxlLCByZXNpemVTdHlsZSlcbiAgICB9KVxuICB9LFxuICBfY3NzXG59XG4iLCJpbXBvcnQgeyBnZXRUaHJvdHRsZUxhenlsb2FkLCB3YXRjaEFwcGVhciB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgdGFnQmVmb3JlQ3JlYXRlLCB0YWdNb3VudGVkLCB0YWdCZWZvcmVVcGRhdGUsIHRhZ1VwZGF0ZWQsIHRhZ0JlZ2luLCB0YWdFbmQgfSBmcm9tICcuLi91dGlscy9wZXJmJ1xuXG5jb25zdCBzdXBwb3J0ZWRFdmVudHMgPSBbXG4gICdjbGljaycsICdsb25ncHJlc3MnLCAnYXBwZWFyJywgJ2Rpc2FwcGVhcidcbiAgLy8gJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJ1xuXVxuXG5jb25zdCBzY3JvbGxhYmxlVHlwZXMgPSBbJ3Njcm9sbGVyJywgJ2xpc3QnXVxuXG5sZXQgbGF6eWxvYWRXYXRjaGVkID0gZmFsc2VcbmZ1bmN0aW9uIHdhdGNoTGF6eWxvYWQgKCkge1xuICBsYXp5bG9hZFdhdGNoZWQgPSB0cnVlXG4gIDsgW1xuICAgICdzY3JvbGwnXG4gICAgLy8gJ3RyYW5zaXRpb25lbmQnLFxuICAgIC8vICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAvLyAnYW5pbWF0aW9uZW5kJyxcbiAgICAvLyAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAvLyAncmVzaXplJ1xuICBdLmZvckVhY2goZXZ0ID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGdldFRocm90dGxlTGF6eWxvYWQoMjUsIGRvY3VtZW50LmJvZHkpKVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgaWYgKCFsYXp5bG9hZFdhdGNoZWQpIHtcbiAgICAgIHdhdGNoTGF6eWxvYWQoKVxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHRhZ0JlZm9yZUNyZWF0ZSgpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIGlmICghd2VleC5fcm9vdCkge1xuICAgICAgd2VleC5fcm9vdCA9IHRoaXMuJHJvb3QuJGVsXG4gICAgICB3ZWV4Ll9yb290LmNsYXNzTGlzdC5hZGQoJ3dlZXgtcm9vdCcpXG4gICAgfVxuICAgIHdhdGNoQXBwZWFyKHRoaXMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB0YWdNb3VudGVkKClcbiAgICB9XG4gIH0sXG5cbiAgYmVmb3JlVXBkYXRlICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHRhZ0JlZm9yZVVwZGF0ZSgpXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZWQgKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdGFnVXBkYXRlZCgpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBfZ2V0U2NvcGVJZHMgKCkge1xuICAgICAgY29uc3QgYXJyID0gW11cbiAgICAgIGxldCBjdHggPSB0aGlzXG4gICAgICBsZXQgc2NvcGVJZFxuICAgICAgd2hpbGUgKGN0eCkge1xuICAgICAgICBzY29wZUlkID0gY3R4LiRvcHRpb25zLl9zY29wZUlkXG4gICAgICAgIHNjb3BlSWQgJiYgYXJyLnB1c2goc2NvcGVJZClcbiAgICAgICAgY3R4ID0gY3R4LiRvcHRpb25zLnBhcmVudFxuICAgICAgfVxuICAgICAgcmV0dXJuIGFyclxuICAgIH0sXG5cbiAgICBfZ2V0UGFyZW50U2Nyb2xsZXIgKCkge1xuICAgICAgbGV0IHBhcmVudCA9IHRoaXNcbiAgICAgIHdoaWxlIChwYXJlbnQgJiYgc2Nyb2xsYWJsZVR5cGVzLmluZGV4T2YocGFyZW50LiRvcHRpb25zLl9jb21wb25lbnRUYWcpIDw9IC0xKSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC4kb3B0aW9ucy5wYXJlbnRcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJlbnRcbiAgICB9LFxuXG4gICAgX2NyZWF0ZUV2ZW50TWFwIChleHRyYXMgPSBbXSkge1xuICAgICAgY29uc3QgZXZlbnRNYXAgPSB7fVxuICAgICAgc3VwcG9ydGVkRXZlbnRzLmNvbmNhdChleHRyYXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGV2ZW50TWFwW25hbWVdID0gZXZlbnQgPT4gdGhpcy4kZW1pdChuYW1lLCBldmVudClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gZXZlbnRNYXBcbiAgICB9LFxuXG4gICAgX2ZpcmVMYXp5bG9hZCAoZWwpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0YWdCZWdpbignYmFzZS5fZmlyZUxhenlsb2FkJylcbiAgICAgIH1cbiAgICAgIGdldFRocm90dGxlTGF6eWxvYWQoMTYpKClcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0YWdFbmQoJ2Jhc2UuX2ZpcmVMYXp5bG9hZCcpXG4gICAgICB9XG4gICAgfSxcblxuICAgIF90cmltVGV4dE5vZGVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW4uZmlsdGVyKHZub2RlID0+ICEhdm5vZGUudGFnKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBnZXRIZWFkU3R5bGVNYXAsXG4gIGdldENvbXBvbmVudFN0eWxlLFxuICBleHRyYWN0Q29tcG9uZW50U3R5bGVcbn0gZnJvbSAnLi4vY29yZSdcblxubGV0IHdhcm5lZCA9IGZhbHNlXG5jb25zdCB3YXJuSW5mbyA9IGBbdnVlLXJlbmRlcl0gYWZ0ZXIgdjAuMTEuMyB0aGVyZSdzIG5vIG5lZWQgdG8gYWRkICRwcm9jZXNzU3R5bGUgaW4gdnVlLWxvYWRlciBjb25maWcgYW55bW9yZS5gXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAvLyBnZXQgc3RhdGljIGNsYXNzIHN0eWxlIG1hcCBmcm9tIGRvY3VtZW50J3Mgc3R5bGVTaGVldHMuXG4gICAgaWYgKCF3ZWV4LnN0eWxlTWFwKSB7XG4gICAgICB3ZWV4LnN0eWxlTWFwID0gZ2V0SGVhZFN0eWxlTWFwKClcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgICRwcm9jZXNzU3R5bGUgKHN0eWxlKSB7XG4gICAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgICB3YXJuZWQgPSB0cnVlXG4gICAgICAgIGNvbnNvbGUud2Fybih3YXJuSW5mbylcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHlsZVxuICAgIH0sXG5cbiAgICBfZXh0cmFjdENvbXBvbmVudFN0eWxlICgpIHtcbiAgICAgIHJldHVybiBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZ2V0IHN0eWxlIGZyb20gY2xhc3MsIHN0YXRpY0NsYXNzLCBzdHlsZSBhbmQgc3RhdGljU3R5bGUuXG4gICAgICogbWVyZ2Ugc3R5bGVzIHByaW9yaXR5OiBoaWdoIC0+IGxvd1xuICAgICAqICAxLiBkYXRhLnN0eWxlIChib3VuZCBzdHlsZSkuXG4gICAgICogIDIuIGRhdGEuc3RhdGljU3R5bGUgKGlubGluZSBzdHlsZXMpLlxuICAgICAqICAzLiBkYXRhLmNsYXNzIHN0eWxlIChib3VuZCBjbGFzcyBuYW1lcykuXG4gICAgICogIDQuIGRhdGEuc3RhdGljQ2xhc3Mgc3R5bGUgKHNjb3BlZCBzdHlsZXMgb3Igc3RhdGljIGNsYXNzZXMpLlxuICAgICAqL1xuICAgIF9nZXRDb21wb25lbnRTdHlsZSAoZGF0YSkge1xuICAgICAgcmV0dXJuIGdldENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgfSxcblxuICAgIF9nZXRQYXJlbnRSZWN0ICgpIHtcbiAgICAgIGNvbnN0IHBhcmVudEVsbSA9IHRoaXMuJG9wdGlvbnMuX3BhcmVudEVsbVxuICAgICAgcmV0dXJuIHBhcmVudEVsbSAmJiBwYXJlbnRFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFRocm90dGxlTGF6eWxvYWQsIHRocm90dGxlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmxldCB0aHJvdHRsZVNjcm9sbFxuZnVuY3Rpb24gZ2V0VGhyb3R0bGVkU2Nyb2xsIChjb250ZXh0KSB7XG4gIGlmICghdGhyb3R0bGVTY3JvbGwpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gY29udGV4dC4kcmVmcy53cmFwcGVyXG4gICAgY29uc3QgaW5uZXIgPSBjb250ZXh0LiRyZWZzLmlubmVyXG4gICAgbGV0IHByZU9mZnNldCA9IChjb250ZXh0LnNjcm9sbERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnXG4gICAgICAgID8gd3JhcHBlci5zY3JvbGxMZWZ0XG4gICAgICAgIDogd3JhcHBlci5zY3JvbGxUb3ApXG4gICAgICB8fCAwXG4gICAgdGhyb3R0bGVTY3JvbGwgPSB0aHJvdHRsZShmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBjb250ZXh0LnNjcm9sbERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnXG4gICAgICAgID8gd3JhcHBlci5zY3JvbGxMZWZ0XG4gICAgICAgIDogd3JhcHBlci5zY3JvbGxUb3BcbiAgICAgIGNvbnN0IGluZGVudCA9IHBhcnNlSW50KGNvbnRleHQub2Zmc2V0QWNjdXJhY3kpXG4gICAgICBmdW5jdGlvbiB0cmlnZ2VyU2Nyb2xsICgpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGV2dC5jb250ZW50U2l6ZSA9IHsgd2lkdGg6IHJlY3Qud2lkdGgsIGhlaWdodDogcmVjdC5oZWlnaHQgfVxuICAgICAgICBldnQuY29udGVudE9mZnNldCA9IHtcbiAgICAgICAgICB4OiB3cmFwcGVyLnNjcm9sbExlZnQsXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogcG9zaXRpdmUgZGlyZWNpdG9uIGZvciB5LWF4aXMgaXMgZG93bi5cbiAgICAgICAgICAgKiBzbyBzaG91bGQgdXNlIG5lZ2F0aXZlIG9wZXJhdGlvbiBvbiBzY3JvbGxUb3AuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiAgKDAsMCktLS0tLS0tLS0tLS0tLS0+IHhcbiAgICAgICAgICAgKiAgICAgICB8XG4gICAgICAgICAgICogICAgICAgfFxuICAgICAgICAgICAqICAgICAgIHxcbiAgICAgICAgICAgKiAgICAgICB8XG4gICAgICAgICAgICogICAgICAgdiB5XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKi9cbiAgICAgICAgICB5OiAtd3JhcHBlci5zY3JvbGxUb3BcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LiRlbWl0KCdzY3JvbGwnLCBldnQpXG4gICAgICB9XG4gICAgICBpZiAoaW5kZW50XG4gICAgICAgICYmICFpc05hTihpbmRlbnQpXG4gICAgICAgICYmIGluZGVudCA+IDBcbiAgICAgICAgJiYgTWF0aC5hYnMob2Zmc2V0IC0gcHJlT2Zmc2V0KSA+PSBpbmRlbnQpIHtcbiAgICAgICAgdHJpZ2dlclNjcm9sbCgpXG4gICAgICAgIHByZU9mZnNldCA9IG9mZnNldFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWluZGVudCB8fCBpc05hTihpbmRlbnQpIHx8IGluZGVudCA8PSAwKSB7XG4gICAgICAgIHRyaWdnZXJTY3JvbGwoKVxuICAgICAgfVxuICAgIH0sIDE2LCB0cnVlKVxuICB9XG4gIHJldHVybiB0aHJvdHRsZVNjcm9sbFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgb2Zmc2V0QWNjdXJhY3k6IFtOdW1iZXIsIFN0cmluZ11cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZUxheW91dCAoKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy4kcmVmcy53cmFwcGVyXG4gICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICBjb25zdCByZWN0ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICB0aGlzLndyYXBwZXJXaWR0aCA9IHJlY3Qud2lkdGhcbiAgICAgICAgdGhpcy53cmFwcGVySGVpZ2h0ID0gcmVjdC5oZWlnaHRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlU2Nyb2xsIChldmVudCkge1xuICAgICAgZ2V0VGhyb3R0bGVMYXp5bG9hZCgyNSwgdGhpcy4kZWwsICdzY3JvbGwnKSgpXG4gICAgICBnZXRUaHJvdHRsZWRTY3JvbGwodGhpcykoZXZlbnQpXG4gICAgICBpZiAodGhpcy5yZWFjaEJvdHRvbSgpKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2xvYWRtb3JlJywgZXZlbnQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlYWNoVG9wICgpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLiRyZWZzLndyYXBwZXJcbiAgICAgIHJldHVybiAoISF3cmFwcGVyKSAmJiAod3JhcHBlci5zY3JvbGxUb3AgPD0gMClcbiAgICB9LFxuXG4gICAgcmVhY2hCb3R0b20gKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICBjb25zdCBvZmZzZXQgPSBOdW1iZXIodGhpcy5sb2FkbW9yZW9mZnNldCkgfHwgMFxuXG4gICAgICBpZiAod3JhcHBlciAmJiBpbm5lcikge1xuICAgICAgICBjb25zdCBpbm5lckhlaWdodCA9IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICBjb25zdCB3cmFwcGVySGVpZ2h0ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgICAgcmV0dXJuIHdyYXBwZXIuc2Nyb2xsVG9wID49IGlubmVySGVpZ2h0IC0gd3JhcHBlckhlaWdodCAtIG9mZnNldFxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoU3RhcnQgKGV2ZW50KSB7XG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaWYgKHRoaXMuX2xvYWRpbmcgfHwgdGhpcy5fcmVmcmVzaCkge1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdXG4gICAgICAgIHRoaXMuX3RvdWNoUGFyYW1zID0ge1xuICAgICAgICAgIHJlYWNoVG9wOiB0aGlzLnJlYWNoVG9wKCksXG4gICAgICAgICAgcmVhY2hCb3R0b206IHRoaXMucmVhY2hCb3R0b20oKSxcbiAgICAgICAgICBzdGFydFRvdWNoRXZlbnQ6IHRvdWNoLFxuICAgICAgICAgIHN0YXJ0WDogdG91Y2gucGFnZVgsXG4gICAgICAgICAgc3RhcnRZOiB0b3VjaC5wYWdlWSxcbiAgICAgICAgICB0aW1lU3RhbXA6IGV2ZW50LnRpbWVTdGFtcFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoTW92ZSAoZXZlbnQpIHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAodGhpcy5fdG91Y2hQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICAgIGNvbnN0IHsgc3RhcnRZLCByZWFjaFRvcCwgcmVhY2hCb3R0b20gfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgICBjb25zdCBvZmZzZXRZID0gdG91Y2gucGFnZVkgLSBzdGFydFlcbiAgICAgICAgICB0aGlzLl90b3VjaFBhcmFtcy5vZmZzZXRZID0gb2Zmc2V0WVxuICAgICAgICAgIGlmIChyZWFjaFRvcCAmJiB0aGlzLl9yZWZyZXNoKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoLnB1bGxpbmdEb3duKG9mZnNldFkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHJlYWNoQm90dG9tICYmIHRoaXMuX2xvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmcucHVsbGluZ1VwKC1vZmZzZXRZKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVUb3VjaEVuZCAoZXZlbnQpIHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAodGhpcy5fdG91Y2hQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICAgIGNvbnN0IHsgcmVhY2hUb3AsIHJlYWNoQm90dG9tIH0gPSB0aGlzLl90b3VjaFBhcmFtc1xuICAgICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgICBpZiAocmVhY2hUb3AgJiYgdGhpcy5fcmVmcmVzaCkge1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaC5wdWxsaW5nRW5kKClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAocmVhY2hCb3R0b20gJiYgdGhpcy5fbG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZy5wdWxsaW5nRW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLl90b3VjaFBhcmFtc1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuLy8gaW5wdXQgYW5kIHRleHRhcmUgaGFzIHNvbWUgY29tbW9uIGFwaSBhbmQgZXZlbnRcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBmaW5kRW50ZXJLZXlUeXBlID0gZnVuY3Rpb24gKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qga2V5cyA9IFsnZGVmYXVsdCcsICdnbycsICduZXh0JywgJ3NlYXJjaCcsICdzZW5kJ11cbiAgaWYgKGtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICByZXR1cm4ga2V5XG4gIH1cbiAgcmV0dXJuICdkb25lJ1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICBmb2N1cyAoKSB7XG4gICAgICB0aGlzLiRlbCAmJiB0aGlzLiRlbC5mb2N1cygpXG4gICAgfSxcbiAgICBibHVyICgpIHtcbiAgICAgIHRoaXMuJGVsICYmIHRoaXMuJGVsLmJsdXIoKVxuICAgIH0sXG4gICAgLy8gc3VwcG9ydCBlbnRlciBrZXkgZXZlbnRcbiAgICBjcmVhdGVLZXlib2FyZEV2ZW50IChldmVudHM6IHt9KSB7XG4gICAgICBjb25zdCBjdXN0b21LZXlUeXBlID0gdGhpcy5yZXR1cm5LZXlUeXBlXG4gICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHRoaXMuX2V2ZW50c1sncmV0dXJuJ10pIHtcbiAgICAgICAgY29uc3Qga2V5Ym9hcmRFdmVudHMgPSB7XG4gICAgICAgICAgJ2tleXVwJzogZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gZXYua2V5Q29kZVxuICAgICAgICAgICAgbGV0IGtleSA9IGV2LmtleVxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ3RhYicpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSAnbmV4dCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCByaWdodEtleVR5cGUgPSBmaW5kRW50ZXJLZXlUeXBlKGN1c3RvbUtleVR5cGUpXG4gICAgICAgICAgICAgIGV2LnJldHVybktleVR5cGUgPSByaWdodEtleVR5cGVcbiAgICAgICAgICAgICAgZXYudmFsdWUgPSBldi50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgc2VsZi4kZW1pdCgncmV0dXJuJywgZXYpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50cyA9IGV4dGVuZChldmVudHMsIGtleWJvYXJkRXZlbnRzKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGV2ZW50c1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IElucHV0IGNvbXBvbmVudC5cbiAqIFN1cHBvcnQgdi1tb2RlbCBvbmx5IGlmIHZ1ZSB2ZXJzaW9uIGlzIGxhcmdlIHRoYW4gMi4yLjBcbiAqL1xuaW1wb3J0IHsgZXh0cmFjdENvbXBvbmVudFN0eWxlIH0gZnJvbSAnLi4vY29yZSdcbmltcG9ydCB7IGlucHV0Q29tbW9uIH0gZnJvbSAnLi4vbWl4aW5zJ1xuaW1wb3J0IHsgZXh0ZW5kLCBtYXBGb3JtRXZlbnRzIH0gZnJvbSAnLi4vdXRpbHMnXG4vLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuY29uc3QgX2NzcyA9IGBcbi53ZWV4LWlucHV0LCAud2VleC10ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMC40MjY2NjdyZW07XG59XG4ud2VleC1pbnB1dDpmb2N1cywgLndlZXgtdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuYFxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2lucHV0Q29tbW9uXSxcbiAgcHJvcHM6IHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgICB2YWxpZGF0b3IgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgJ2VtYWlsJywgJ251bWJlcicsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGVsJywgJ3RleHQnLCAndXJsJ1xuICAgICAgICAgIC8vIHVuc3VwcG9ydGVkIHR5cGU6XG4gICAgICAgICAgLy8gYnV0dG9uLCBjaGVja2JveCwgY29sb3IsIGRhdGUsIGRhdGV0aW1lLCBmaWxlLCBoaWRkZW4sIGltYWdlLFxuICAgICAgICAgIC8vIG1vbnRoLCByYWRpbywgcmFuZ2UsIHJlc2V0LCBzdWJtaXQsIHRpbWUsIHdlZWssXG4gICAgICAgIF0uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfSxcbiAgICB2YWx1ZTogU3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF1dG9mb2N1czoge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgbWF4bGVuZ3RoOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgIHJldHVybktleVR5cGU6IFN0cmluZ1xuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnaW5wdXQnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuICAgIGNvbnN0IGV2ZW50cyA9IGV4dGVuZCh0aGlzLl9jcmVhdGVFdmVudE1hcCgpLCBtYXBGb3JtRXZlbnRzKHRoaXMpKVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOmlucHV0Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgJ3dlZXgtdHlwZSc6ICdpbnB1dCcsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIGRpc2FibGVkOiAodGhpcy5kaXNhYmxlZCAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmRpc2FibGVkICE9PSBmYWxzZSksXG4gICAgICAgIGF1dG9mb2N1czogKHRoaXMuYXV0b2ZvY3VzICE9PSAnZmFsc2UnICYmIHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSksXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICBtYXhsZW5ndGg6IHRoaXMubWF4bGVuZ3RoLFxuICAgICAgICAncmV0dXJuS2V5VHlwZSc6IHRoaXMucmV0dXJuS2V5VHlwZVxuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICB9LFxuICAgICAgb246IHRoaXMuY3JlYXRlS2V5Ym9hcmRFdmVudChldmVudHMpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWlucHV0IHdlZXgtZWwnLFxuICAgICAgc3RhdGljU3R5bGU6IGV4dHJhY3RDb21wb25lbnRTdHlsZSh0aGlzKVxuICAgIH0pXG4gIH0sXG4gIF9jc3Ncbn1cbiIsIi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJ1xuaW1wb3J0IHsgc3VwcG9ydFN0aWNreSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0eWxlJ1xuaW1wb3J0IHsgZXh0cmFjdENvbXBvbmVudFN0eWxlIH0gZnJvbSAnLi4vLi4vY29yZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RpY2t5OiBmYWxzZSxcbiAgICAgIGluaXRUb3A6IDAsXG4gICAgICBwbGFjZWhvbGRlcjogbnVsbCxcbiAgICAgIHN1cHBvcnRTdGlja3k6IHN1cHBvcnRTdGlja3koKVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmluaXRUb3AgPSB0aGlzLiRlbC5vZmZzZXRUb3BcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH0sXG5cbiAgdXBkYXRlZCAoKSB7XG4gICAgaWYgKCF0aGlzLnN0aWNreSkge1xuICAgICAgdGhpcy5pbml0VG9wID0gdGhpcy4kZWwub2Zmc2V0VG9wXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhZGRTdGlja3kgKCkge1xuICAgICAgdGhpcy5zdGlja3kgPSB0cnVlXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLnN0eWxlLndpZHRoID0gdGhpcy4kZWwub2Zmc2V0V2lkdGggKyAncHgnXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLnN0eWxlLmhlaWdodCA9IHRoaXMuJGVsLm9mZnNldEhlaWdodCArICdweCdcbiAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMucGxhY2Vob2xkZXIsIHRoaXMuJGVsKVxuICAgIH0sXG5cbiAgICByZW1vdmVTdGlja3kgKCkge1xuICAgICAgdGhpcy5zdGlja3kgPSBmYWxzZVxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy4kZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBsYWNlaG9sZGVyKVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAvLyAgIHZhbGlkYXRlU3R5bGVzKCdoZWFkZXInLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOmhlYWRlcicsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnaGVhZGVyJyB9LFxuICAgICAgb246IHRoaXMuX2NyZWF0ZUV2ZW50TWFwKCksXG4gICAgICByZWY6ICdoZWFkZXInLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWhlYWRlciB3ZWV4LWN0JyxcbiAgICAgIGNsYXNzOiB7IHN0aWNreTogdGhpcy5zdGlja3ksIGlvc3N0aWNreTogdGhpcy5zdXBwb3J0U3RpY2t5IH0sXG4gICAgICBzdGF0aWNTdHlsZTogZXh0cmFjdENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3VwcG9ydFN0aWNreSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVMaXN0U2Nyb2xsIChldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoZXZlbnQpXG5cbiAgICAgIGlmIChzdXBwb3J0U3RpY2t5KCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuJGVsLnNjcm9sbFRvcFxuICAgICAgY29uc3QgaCA9IHRoaXMuJGNoaWxkcmVuLmZpbHRlcih2bSA9PiB2bS4kcmVmcy5oZWFkZXIpXG5cbiAgICAgIGlmIChoLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGhbaV0uaW5pdFRvcCA8IHNjcm9sbFRvcCkge1xuICAgICAgICAgIGhbaV0uYWRkU3RpY2t5KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBoW2ldLnJlbW92ZVN0aWNreSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGV4dHJhY3RDb21wb25lbnRTdHlsZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUnXG5pbXBvcnQgeyBzY3JvbGxhYmxlIH0gZnJvbSAnLi4vLi4vLi4vbWl4aW5zJ1xuLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi8uLi8uLi92YWxpZGF0b3InXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscydcbmltcG9ydCBsaXN0TWl4aW4gZnJvbSAnLi9saXN0TWl4aW4nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2xpc3QnLFxuICBtaXhpbnM6IFtzY3JvbGxhYmxlLCBsaXN0TWl4aW5dLFxuICBwcm9wczoge1xuICAgIGxvYWRtb3Jlb2Zmc2V0OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHdyYXBwZXJDbGFzcyAoKSB7XG4gICAgICBjb25zdCBjbGFzc0FycmF5ID0gWyd3ZWV4LWxpc3QnLCAnd2VleC1saXN0LXdyYXBwZXInLCAnd2VleC1jdCddXG4gICAgICB0aGlzLl9yZWZyZXNoICYmIGNsYXNzQXJyYXkucHVzaCgnd2l0aC1yZWZyZXNoJylcbiAgICAgIHRoaXMuX2xvYWRpbmcgJiYgY2xhc3NBcnJheS5wdXNoKCd3aXRoLWxvYWRpbmcnKVxuICAgICAgcmV0dXJuIGNsYXNzQXJyYXkuam9pbignICcpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICByZXNldExvYWRtb3JlICgpIHtcbiAgICAgIHRoaXMuX2F2YWlsYWJsZVRvRmlyZUxvYWRtb3JlID0gdHJ1ZVxuICAgIH0sXG4gICAgY3JlYXRlQ2hpbGRyZW4gKGgpIHtcbiAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgdGhpcy5fY2VsbHMgPSBzbG90cy5maWx0ZXIodm5vZGUgPT4ge1xuICAgICAgICBpZiAoIXZub2RlLnRhZyB8fCAhdm5vZGUuY29tcG9uZW50T3B0aW9ucykgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaCgnaHRtbDpkaXYnLCB7XG4gICAgICAgICAgcmVmOiAnaW5uZXInLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1saXN0LWlubmVyIHdlZXgtY3QnXG4gICAgICAgIH0sIHRoaXMuX2NlbGxzKVxuICAgICAgXVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLndlZXhUeXBlID0gJ2xpc3QnXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2xpc3QnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlTGF5b3V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ21haW4nLCB7XG4gICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnbGlzdCcgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyxcbiAgICAgIG9uOiBleHRlbmQodGhpcy5fY3JlYXRlRXZlbnRNYXAoKSwge1xuICAgICAgICBzY3JvbGw6IHRoaXMuaGFuZGxlTGlzdFNjcm9sbCxcbiAgICAgICAgdG91Y2hzdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICB0b3VjaG1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuICAgICAgICB0b3VjaGVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgICAgfSksXG4gICAgICBzdGF0aWNTdHlsZTogZXh0cmFjdENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgfSwgdGhpcy5jcmVhdGVDaGlsZHJlbihjcmVhdGVFbGVtZW50KSlcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi8uLi8uLi92YWxpZGF0b3InXG5pbXBvcnQgeyBleHRyYWN0Q29tcG9uZW50U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnY2VsbCcsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2NlbGwnIH0sXG4gICAgICBvbjogdGhpcy5fY3JlYXRlRXZlbnRNYXAoKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1jZWxsIHdlZXgtY3QnLFxuICAgICAgc3RhdGljU3R5bGU6IGV4dHJhY3RDb21wb25lbnRTdHlsZSh0aGlzKVxuICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn1cbiIsImltcG9ydCB7IGV4dHJhY3RDb21wb25lbnRTdHlsZSB9IGZyb20gJy4uLy4uL2NvcmUnXG5pbXBvcnQgeyBzY3JvbGxhYmxlIH0gZnJvbSAnLi4vLi4vbWl4aW5zJ1xuLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi8uLi92YWxpZGF0b3InXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBsaXN0TWl4aW4gZnJvbSAnLi9saXN0L2xpc3RNaXhpbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtzY3JvbGxhYmxlLCBsaXN0TWl4aW5dLFxuICBwcm9wczoge1xuICAgIHNjcm9sbERpcmVjdGlvbjoge1xuICAgICAgdHlwZTogW1N0cmluZ10sXG4gICAgICBkZWZhdWx0OiAndmVydGljYWwnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkbW9yZW9mZnNldDoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIC8vIFRPRE86IHN1cHBvcnQgbG9hZG1vcmUgcmV0cnlcbiAgICBsb2FkbW9yZXJldHJ5OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHdyYXBwZXJDbGFzcyAoKSB7XG4gICAgICBjb25zdCBjbGFzc0FycmF5ID0gWyd3ZWV4LXNjcm9sbGVyJywgJ3dlZXgtc2Nyb2xsZXItd3JhcHBlcicsICd3ZWV4LWN0J11cbiAgICAgIGlmICh0aGlzLnNjcm9sbERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGNsYXNzQXJyYXkucHVzaCgnd2VleC1zY3JvbGxlci1ob3Jpem9udGFsJylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbGFzc0FycmF5LnB1c2goJ3dlZXgtc2Nyb2xsZXItdmVydGljYWwnKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNsYXNzQXJyYXkuam9pbignICcpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjcmVhdGVDaGlsZHJlbiAoaCkge1xuICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICB0aGlzLl9jZWxscyA9IHNsb3RzLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIGlmICghdm5vZGUudGFnIHx8ICF2bm9kZS5jb21wb25lbnRPcHRpb25zKSByZXR1cm4gZmFsc2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKCdodG1sOmRpdicsIHtcbiAgICAgICAgICByZWY6ICdpbm5lcicsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNjcm9sbGVyLWlubmVyIHdlZXgtY3QnXG4gICAgICAgIH0sIHRoaXMuX2NlbGxzKVxuICAgICAgXVxuICAgIH0sXG4gICAgc2Nyb2xsVG8gKHZub2RlKSB7XG4gICAgICBpZiAodm5vZGUgJiYgdm5vZGUuJGVsKSB7XG4gICAgICAgIC8vIFRPRE86IGFkZCBhbmltYXRpb25cbiAgICAgICAgdGhpcy4kZWwuc2Nyb2xsVG9wID0gdm5vZGUuJGVsLm9mZnNldFRvcFxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLndlZXhUeXBlID0gJ3Njcm9sbGVyJ1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAvLyAgIHZhbGlkYXRlU3R5bGVzKCdzY3JvbGxlcicsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG5cbiAgICB0aGlzLl9jZWxscyA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUxheW91dCgpXG4gICAgfSlcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYWluJywge1xuICAgICAgcmVmOiAnd3JhcHBlcicsXG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3Njcm9sbGVyJyB9LFxuICAgICAgb246IGV4dGVuZCh0aGlzLl9jcmVhdGVFdmVudE1hcCgpLCB7XG4gICAgICAgIHNjcm9sbDogdGhpcy5oYW5kbGVTY3JvbGwsXG4gICAgICAgIHRvdWNoc3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgdG91Y2htb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcbiAgICAgICAgdG91Y2hlbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgIH0pLFxuICAgICAgc3RhdGljQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzLFxuICAgICAgc3RhdGljU3R5bGU6IGV4dHJhY3RDb21wb25lbnRTdHlsZSh0aGlzKVxuICAgIH0sIHRoaXMuY3JlYXRlQ2hpbGRyZW4oY3JlYXRlRWxlbWVudCkpXG4gIH1cbn1cbiIsImltcG9ydCB7IGV4dHJhY3RDb21wb25lbnRTdHlsZSB9IGZyb20gJy4uLy4uL2NvcmUnXG5pbXBvcnQgeyBleHRlbmQsIGV4dGVuZEtleXMgfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgX2NzcyA9IGBcbi53ZWV4LWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ud2VleC1pbmRpY2F0b3ItaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAwLjI2NjY2N3JlbTtcbiAgaGVpZ2h0OiAwLjI2NjY2N3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCQkJCQjtcbn1cbi53ZWV4LWluZGljYXRvci1pdGVtICsgLndlZXgtaW5kaWNhdG9yLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMC4xMzMzMzNyZW07XG59XG5cbi53ZWV4LWluZGljYXRvci1pdGVtLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5gXG5cbmZ1bmN0aW9uIGdldEluZGljYXRvckl0ZW1TdHlsZSAoc3BlYywgaXNBY3RpdmUpIHtcbiAgY29uc3Qgc3R5bGUgPSB7fVxuICBzdHlsZVsnYmFja2dyb3VuZC1jb2xvciddID0gc3BlY1tpc0FjdGl2ZSA/ICdpdGVtU2VsZWN0ZWRDb2xvcicgOiAnaXRlbUNvbG9yJ11cbiAgc3R5bGVbJ3dpZHRoJ10gPSBzdHlsZVsnaGVpZ2h0J10gPSBzcGVjWydpdGVtU2l6ZSddXG4gIHJldHVybiBzdHlsZVxufVxuXG5mdW5jdGlvbiBfcmVuZGVyIChjb250ZXh0LCBoKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gW11cbiAgY29uc3QgbWVyZ2VkU3R5bGUgPSBleHRyYWN0Q29tcG9uZW50U3R5bGUoY29udGV4dClcbiAgLy8gY29uc3QgbWVyZ2VkU3R5bGUgPSBjb250ZXh0Ll9nZXRDb21wb25lbnRTdHlsZShjb250ZXh0LiR2bm9kZS5kYXRhKVxuICAvLyBjb250ZXh0LiR2bm9kZS5kYXRhLmNhY2hlZCA9IHt9XG4gIC8vIGV4dGVuZEtleXMoY29udGV4dC4kdm5vZGUuZGF0YS5jYWNoZWQsIG1lcmdlZFN0eWxlLCBbJ3dpZHRoJywgJ2hlaWdodCddKVxuICBjb25zdCBpbmRpY2F0b3JTcGVjU3R5bGUgPSBleHRlbmRLZXlzKFxuICAgICAge30sXG4gICAgICBtZXJnZWRTdHlsZSxcbiAgICAgIFsnaXRlbUNvbG9yJywgJ2l0ZW1TZWxlY3RlZENvbG9yJywgJ2l0ZW1TaXplJ11cbiAgICApXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtYmVyKGNvbnRleHQuY291bnQpOyArK2kpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWyd3ZWV4LWluZGljYXRvci1pdGVtIHdlZXgtZWwnXVxuICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlXG4gICAgaWYgKGkgPT09IE51bWJlcihjb250ZXh0LmFjdGl2ZSkpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnd2VleC1pbmRpY2F0b3ItaXRlbS1hY3RpdmUnKVxuICAgICAgaXNBY3RpdmUgPSB0cnVlXG4gICAgfVxuICAgIGNoaWxkcmVuLnB1c2goaCgnbWFyaycsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBjbGFzc05hbWVzLmpvaW4oJyAnKSxcbiAgICAgIHN0YXRpY1N0eWxlOiBnZXRJbmRpY2F0b3JJdGVtU3R5bGUoaW5kaWNhdG9yU3BlY1N0eWxlLCBpc0FjdGl2ZSlcbiAgICB9KSlcbiAgfVxuICBjb250ZXh0LiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgX3JlTGF5b3V0KHRoaXMsIF9nZXRWaXJ0dWFsUmVjdCh0aGlzLCBtZXJnZWRTdHlsZSksIF9nZXRMdGJyKHRoaXMsIG1lcmdlZFN0eWxlKSlcbiAgfSlcbiAgcmV0dXJuIGgoJ25hdicsIHtcbiAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2luZGljYXRvcicgfSxcbiAgICBzdGF0aWNDbGFzczogJ3dlZXgtaW5kaWNhdG9yIHdlZXgtY3QnLFxuICAgIHN0YXRpY1N0eWxlOiBtZXJnZWRTdHlsZVxuICB9LCBjaGlsZHJlbilcbn1cblxuLyoqXG4gKiBnZXQgaW5kaWNhdG9yJ3MgdmlydHVhbCByZWN0ICh3aWR0aCwgaGVpZ2h0KSwgd2hpY2ggaXMgdGhlIC5cbiAqL1xuZnVuY3Rpb24gX2dldFZpcnR1YWxSZWN0IChjb250ZXh0LCBtZXJnZWRTdHlsZSkge1xuICBjb25zdCBjdCA9IGNvbnRleHQuX2dldFBhcmVudFJlY3QoKVxuICBjb25zdCByZWN0ID0gWyd3aWR0aCcsICdoZWlnaHQnXS5yZWR1Y2UoKHByZSwga2V5KSA9PiB7XG4gICAgY29uc3QgbXN2ID0gbWVyZ2VkU3R5bGUgJiYgbWVyZ2VkU3R5bGVba2V5XVxuICAgIHByZVtrZXldID0gbXN2ID8gcGFyc2VGbG9hdChtc3YpIDogY3Rba2V5XVxuICAgIHJldHVybiBwcmVcbiAgfSwge30pXG4gIHJldHVybiByZWN0XG59XG5cbi8qKlxuICogZ2V0IGluZGljYXRvcidzIGx0YnIgdmFsdWVzICh3aXRob3V0IHVuaXRzKS5cbiAqL1xuZnVuY3Rpb24gX2dldEx0YnIgKGNvbnRleHQsIG1lcmdlZFN0eWxlKSB7XG4gIHJldHVybiBbJ2xlZnQnLCAndG9wJywgJ2JvdHRvbScsICdyaWdodCddLnJlZHVjZSgocHJlLCBrZXkpID0+IHtcbiAgICBjb25zdCBtc3YgPSBtZXJnZWRTdHlsZSAmJiBtZXJnZWRTdHlsZVtrZXldXG4gICAgLy8gdW5kZWZpbmVkLCBudWxsLCBvciAnMHB4JyAtPiBvXG4gICAgcHJlW2tleV0gPSBtc3YgJiYgcGFyc2VGbG9hdChtc3YpIHx8IDBcbiAgICByZXR1cm4gcHJlXG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIGdldCBpbmRpY2F0b3IncyByZWN0ICh3aWR0aCwgaGVpZ2h0KS5cbiAqL1xuZnVuY3Rpb24gX2dldEluZGljYXRvclJlY3QgKGVsKSB7XG4gIGxldCB3aWR0aCwgaGVpZ2h0XG4gIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICB3aWR0aCA9IGhlaWdodCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLmNoaWxkcmVuWzBdKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGl0ZW1Db21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwuY2hpbGRyZW5bMV0pXG4gICAgY29uc3QgcGFkZGluZyA9IHBhcnNlRmxvYXQoaXRlbUNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdClcbiAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KGl0ZW1Db21wdXRlZFN0eWxlLmhlaWdodClcbiAgICB3aWR0aCA9IGVsLmNoaWxkcmVuLmxlbmd0aCAqIChoZWlnaHQgKyBwYWRkaW5nKSAtIHBhZGRpbmdcbiAgfVxuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH1cbn1cblxuLyoqXG4gKiBjYWxjdWxhdGUgYW5kIHJlc2V0IGluZGljYXRvcidzIHdpZHRoLCBoZWlnaHQsIGFuZCBsdGJyLlxuICogQHBhcmFtIHtvYmplY3R9IHZpcnR1YWxSZWN0LiB3aWR0aCBhbmQgaGVpZ2h0IG9mIGluZGljYXRvcidzIHZpcnR1YWwgcmVjdCBib3guXG4gKiBAcGFyYW0ge29iamVjdH0gbHRici4gdGhlIHVzZXIgc3BlY2lmaWVkIGxlZnQsIHRvcCwgYm90dG9tLCByaWdodCBwaXhlbHMgKHdpdGhvdXQgdW5pdHMpLlxuICovXG5mdW5jdGlvbiBfcmVMYXlvdXQgKGNvbnRleHQsIHZpcnR1YWxSZWN0LCBsdGJyKSB7XG4gIGNvbnN0IGVsID0gY29udGV4dC4kZWxcbiAgY29uc3QgcmVjdCA9IF9nZXRJbmRpY2F0b3JSZWN0KGVsKVxuICBjb25zdCByZWN0V2l0aFB4ID0gT2JqZWN0LmtleXMocmVjdCkucmVkdWNlKChwcmUsIGtleSkgPT4ge1xuICAgIHByZVtrZXldID0gcmVjdFtrZXldICsgJ3B4J1xuICAgIHJldHVybiBwcmVcbiAgfSwge30pXG4gIGV4dGVuZChlbC5zdHlsZSwgcmVjdFdpdGhQeClcbiAgY29uc3QgYXhpc01hcCA9IFtcbiAgICB7IGRpcjogbHRici5sZWZ0ID8gJ2xlZnQnIDogbHRici5yaWdodCA/ICdyaWdodCcgOiAnbGVmdCcsIHNjYWxlOiAnd2lkdGgnIH0sXG4gICAgeyBkaXI6IGx0YnIudG9wID8gJ3RvcCcgOiBsdGJyLmJvdHRvbSA/ICdib3R0b20nIDogJ3RvcCcsIHNjYWxlOiAnaGVpZ2h0JyB9XG4gIF1cbiAgT2JqZWN0LmtleXMoYXhpc01hcCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IHsgZGlyLCBzY2FsZSB9ID0gYXhpc01hcFtrZXldXG4gICAgZWwuc3R5bGVbZGlyXSA9IGx0YnJbZGlyXSArIHZpcnR1YWxSZWN0W3NjYWxlXSAvIDIgLSByZWN0W3NjYWxlXSAvIDIgKyAncHgnXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2luZGljYXRvcicsXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgfVxuICB9LFxuICBwcm9wczoge1xuICAgIGNvdW50OiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIGFjdGl2ZTogW051bWJlciwgU3RyaW5nXVxuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gX3JlbmRlcih0aGlzLCBjcmVhdGVFbGVtZW50KVxuICB9LFxuICBfY3NzXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFdmVudC8qLCBuZXh0RnJhbWUqLywgZmlyZUxhenlsb2FkIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IFRSQU5TSVRJT05fVElNRSA9IDIwMFxuXG4vLyB0cmlnZ2VyIHNjcm9sbCBldmVudCBmcmVxdWVuY3kuXG4vLyBjb25zdCBzY3JvbGxEYW0gPSAxNlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICAvLyBnZXQgc3RhbmRhcmQgaW5kZXhcbiAgICBub3JtYWxpemVJbmRleCAoaW5kZXgpIHtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gKGluZGV4ICsgdGhpcy5mcmFtZUNvdW50KSAlIHRoaXMuZnJhbWVDb3VudFxuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG5ld0luZGV4LCAwKSwgdGhpcy5mcmFtZUNvdW50IC0gMSlcbiAgICB9LFxuXG4gICAgc2xpZGVUbyAoaW5kZXgpIHtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5ub3JtYWxpemVJbmRleChpbmRleClcbiAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuX2NlbGxzLmxlbmd0aCA8PSAxID8gMCA6IHRoaXMuY3VycmVudEluZGV4IC0gaW5kZXhcbiAgICAgIHRoaXMuaW5uZXJPZmZzZXQgKz0gTWF0aC5zaWduKHN0ZXApICogdGhpcy53cmFwcGVyV2lkdGhcbiAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAvLyBjb25zdCBtYXRjaCA9IChpbm5lci5zdHlsZS50cmFuc2Zvcm0gfHwgaW5uZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtKS5tYXRjaCgvKFxcZCspcHgvKVxuICAgICAgICAvLyBjb25zdCBjdXJyZW50T2Zmc2V0ID0gcGFyc2VGbG9hdChtYXRjaFsxXSlcbiAgICAgICAgLy8gVE9ETzogd2lsbC1jaGFuZ2UgfCBzZXQgc3R5bGVzIHRvZ2V0aGVyXG4gICAgICAgIGlubmVyLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSBgLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0YFxuICAgICAgICBpbm5lci5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXRgXG4gICAgICAgIGlubmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3RoaXMuaW5uZXJPZmZzZXR9cHgsIDAsIDApYFxuICAgICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0aGlzLmlubmVyT2Zmc2V0fXB4LCAwLCAwKWBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaW5uZXIuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9ICcnXG4gICAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnXG4gICAgICAgIH0sIFRSQU5TSVRJT05fVElNRSlcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IGVtaXQgc2Nyb2xsIGV2ZW50LlxuICAgICAgLy8gbmV4dEZyYW1lKClcblxuICAgICAgaWYgKG5ld0luZGV4ICE9PSB0aGlzLmN1cnJlbnRJbmRleCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IG5ld0luZGV4XG4gICAgICAgIC8vIHJlcGxhY2UgJGVsIHdpdGggeyBhdHRyLCBzdHlsZSB9IGlzIGEgbGVnYWN5IHVzYWdlLiBJcyBpdCBuZWNlc3NhcnkgdG9cbiAgICAgICAgLy8gZG8gdGhpcyA/IE9yIGp1c3QgdGVsbCBkZXZlcnMgdG8gdXNlIGlubGluZSBmdW5jdGlvbnMgdG8gYWNjZXNzIGF0dHJzID9cbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgY3JlYXRlRXZlbnQodGhpcy4kZWwsICdjaGFuZ2UnLCB7XG4gICAgICAgICAgaW5kZXg6IHRoaXMuY3VycmVudEluZGV4XG4gICAgICAgIH0pKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5yZW9yZGVyKCkgfSwgVFJBTlNJVElPTl9USU1FKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW9yZGVyICgpIHtcbiAgICAgIGNvbnN0IHJlbW92ZUNsb25lID0gKGNsb25lLCBwcmV2RWxtKSA9PiB7XG4gICAgICAgIC8vIHN3aXRjaCBjdXJyZW50IHBhZ2UuXG4gICAgICAgIGNvbnN0IGN1clRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkey10aGlzLmlubmVyT2Zmc2V0fXB4LCAwLCAwKWBcbiAgICAgICAgcHJldkVsbS5zdHlsZS50cmFuc2Zvcm0gPSBjdXJUcmFuc2Zvcm1cbiAgICAgICAgcHJldkVsbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBjdXJUcmFuc2Zvcm1cbiAgICAgICAgLy8gcmVtb3ZlIGNsb25lIG5vZGUuXG4gICAgICAgIGNsb25lICYmIGNsb25lLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2xvbmUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NlbGxzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0UHJldiA9IHRoaXMuX3ByZXZFbG1cbiAgICAgICAgY29uc3QgcHJldkluZGV4ID0gdGhpcy5ub3JtYWxpemVJbmRleCh0aGlzLmN1cnJlbnRJbmRleCAtIDEpXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMubm9ybWFsaXplSW5kZXgodGhpcy5jdXJyZW50SW5kZXggKyAxKVxuICAgICAgICBsZXQgcHJldkVsbSA9IHRoaXMuX3ByZXZFbG0gPSB0aGlzLl9jZWxsc1twcmV2SW5kZXhdLmVsbVxuICAgICAgICBjb25zdCBuZXh0RWxtID0gdGhpcy5fY2VsbHNbbmV4dEluZGV4XS5lbG1cbiAgICAgICAgY29uc3QgY3VycmVudEVsbSA9IHRoaXMuX2NlbGxzW3RoaXMuY3VycmVudEluZGV4XS5lbG1cblxuICAgICAgICAvLyBwdXQgY3VycmVudCBzbGlkZSBvbiB0aGUgdG9wLlxuICAgICAgICBjdXJyZW50RWxtLnN0eWxlLnpJbmRleCA9IDFcblxuICAgICAgICAvLyBjbG9uZSBwcmV2Q2VsbCBpZiB0aGVyZSBhcmUgb25seSB0b3cgc2xpZGVzLlxuICAgICAgICBpZiAodGhpcy5fY2VsbHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgdGhpcy5fY2xvbmVQcmV2ICYmIHJlbW92ZUNsb25lKHRoaXMuX2Nsb25lUHJldiwgbGFzdFByZXYpXG4gICAgICAgICAgdGhpcy5fY2xvbmVQcmV2ID0gcHJldkVsbS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICB0aGlzLl9jbG9uZVByZXYuY2xhc3NMaXN0LmFkZCgnd2VleC1zbGlkZS1jbG9uZS1wcmV2JylcbiAgICAgICAgICBwcmV2RWxtLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuX2Nsb25lUHJldiwgY3VycmVudEVsbSlcbiAgICAgICAgICBpZiAoIXRoaXMuX3ByZXZGaXJlZCkge1xuICAgICAgICAgICAgZmlyZUxhenlsb2FkKHRoaXMuX2Nsb25lUHJldiwgdHJ1ZSlcbiAgICAgICAgICAgIHRoaXMuX3ByZXZGaXJlZCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJldkVsbSA9IHRoaXMuX2Nsb25lUHJldlxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldk9mZnNldCA9IC10aGlzLndyYXBwZXJXaWR0aCAtIHRoaXMuaW5uZXJPZmZzZXRcbiAgICAgICAgcHJldkVsbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtwcmV2T2Zmc2V0fXB4LCAwLCAwKWBcbiAgICAgICAgcHJldkVsbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtwcmV2T2Zmc2V0fXB4LCAwLCAwKWBcbiAgICAgICAgY29uc3QgbmV4dE9mZnNldCA9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5pbm5lck9mZnNldFxuICAgICAgICBuZXh0RWxtLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke25leHRPZmZzZXR9cHgsIDAsIDApYFxuICAgICAgICBuZXh0RWxtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke25leHRPZmZzZXR9cHgsIDAsIDApYFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgbmV4dCAoKSB7XG4gICAgICB0aGlzLnNsaWRlVG8odGhpcy5jdXJyZW50SW5kZXggKyAxKVxuICAgIH0sXG5cbiAgICBwcmV2ICgpIHtcbiAgICAgIHRoaXMuc2xpZGVUbyh0aGlzLmN1cnJlbnRJbmRleCAtIDEpXG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoU3RhcnQgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgdGhpcy5fdG91Y2hQYXJhbXMgPSB7XG4gICAgICAgIG9yaWdpbmFsVHJhbnNmb3JtOiB0aGlzLiRyZWZzLmlubmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCB0aGlzLiRyZWZzLmlubmVyLnN0eWxlLnRyYW5zZm9ybSxcbiAgICAgICAgc3RhcnRUb3VjaEV2ZW50OiB0b3VjaCxcbiAgICAgICAgc3RhcnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgICAgc3RhcnRZOiB0b3VjaC5wYWdlWSxcbiAgICAgICAgdGltZVN0YW1wOiBldmVudC50aW1lU3RhbXBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hNb3ZlIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGNvbnN0IHRwID0gdGhpcy5fdG91Y2hQYXJhbXNcbiAgICAgIGlmICghdHApIHsgcmV0dXJuIH1cbiAgICAgIGNvbnN0IHsgc3RhcnRYLCBzdGFydFkgfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdXG4gICAgICBjb25zdCBvZmZzZXRYID0gdG91Y2gucGFnZVggLSBzdGFydFhcbiAgICAgIGNvbnN0IG9mZnNldFkgPSB0b3VjaC5wYWdlWSAtIHN0YXJ0WVxuICAgICAgdHAub2Zmc2V0WCA9IG9mZnNldFhcbiAgICAgIHRwLm9mZnNldFkgPSBvZmZzZXRZXG4gICAgICBsZXQgaXNWID0gdHAuaXNWZXJ0aWNhbFxuICAgICAgaWYgKHR5cGVvZiBpc1YgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlzViA9IHRwLmlzVmVydGljYWwgPSBNYXRoLmFicyhvZmZzZXRYKSA8IE1hdGguYWJzKG9mZnNldFkpXG4gICAgICAgIGlmICghaXNWKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsc3RhcnQnLCBjcmVhdGVFdmVudCh0aGlzLiRlbCwgJ3Njcm9sbHN0YXJ0Jywge30pKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB2ZXJ0aWNhbCBzY3JvbGwuIGp1c3QgaWdub3JlIGl0LlxuICAgICAgaWYgKGlzVikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIGhvcml6b250YWwgc2Nyb2xsLiB0cmlnZ2VyIHNjcm9sbCBldmVudC5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgaWYgKGlubmVyICYmIG9mZnNldFgpIHtcbiAgICAgICAgLy8gVE9ETzogYWRkIHRocm90dGxlLlxuICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGwnLCBjcmVhdGVFdmVudCh0aGlzLiRlbCwgJ3Njcm9sbCcsIHtcbiAgICAgICAgICBvZmZzZXRYUmF0aW86IG9mZnNldFggLyB0aGlzLndyYXBwZXJXaWR0aFxuICAgICAgICB9KSlcbiAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5pbm5lck9mZnNldCArIG9mZnNldFh9cHgsIDAsIDApYFxuICAgICAgICBpbm5lci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0aGlzLmlubmVyT2Zmc2V0ICsgb2Zmc2V0WH1weCwgMCwgMClgXG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoRW5kIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGNvbnN0IHRwID0gdGhpcy5fdG91Y2hQYXJhbXNcbiAgICAgIGlmICghdHApIHsgcmV0dXJuIH1cbiAgICAgIGNvbnN0IGlzViA9IHRwLmlzVmVydGljYWxcbiAgICAgIGlmICh0eXBlb2YgaXNWID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgY29uc3QgeyBvZmZzZXRYIH0gPSB0cFxuICAgICAgaWYgKGlubmVyKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3Njcm9sbGVuZCcsIGNyZWF0ZUV2ZW50KHRoaXMuJGVsLCAnc2Nyb2xsZW5kJykpXG4gICAgICAgIC8vIFRPRE86IHRlc3QgdGhlIHZlbG9jaXR5IGlmIGl0J3MgbGVzcyB0aGFuIDAuMi5cbiAgICAgICAgY29uc3QgcmVzZXQgPSBNYXRoLmFicyhvZmZzZXRYIC8gdGhpcy53cmFwcGVyV2lkdGgpIDwgMC4yXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IG9mZnNldFggPiAwID8gMSA6IC0xXG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcmVzZXQgPyB0aGlzLmN1cnJlbnRJbmRleCA6ICh0aGlzLmN1cnJlbnRJbmRleCAtIGRpcmVjdGlvbilcbiAgICAgICAgdGhpcy5zbGlkZVRvKG5ld0luZGV4KVxuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgfVxuICB9XG59XG4iLCIvLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcidcbmltcG9ydCB7IGV4dHJhY3RDb21wb25lbnRTdHlsZSB9IGZyb20gJy4uLy4uL2NvcmUnXG5pbXBvcnQgeyB0aHJvdHRsZSwgYmluZCwgZXh0ZW5kLCBmaXJlTGF6eWxvYWQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBpbmRpY2F0b3IgZnJvbSAnLi9pbmRpY2F0b3InXG5pbXBvcnQgc2xpZGVNaXhpbiBmcm9tICcuL3NsaWRlTWl4aW4nXG5cbmNvbnN0IF9jc3MgPSBgXG4ud2VleC1zbGlkZXItd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53ZWV4LXNsaWRlci1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi53ZWV4LXNsaWRlci1jZWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmBcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtzbGlkZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICAnYXV0by1wbGF5Jzoge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaW50ZXJ2YWw6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAzMDAwXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICBmcmFtZUNvdW50OiAwXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjb21wdXRlV3JhcHBlclNpemUgKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgdGhpcy53cmFwcGVyV2lkdGggPSByZWN0LndpZHRoXG4gICAgICAgIHRoaXMud3JhcHBlckhlaWdodCA9IHJlY3QuaGVpZ2h0XG4gICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZUxheW91dCAoKSB7XG4gICAgICB0aGlzLmNvbXB1dGVXcmFwcGVyU2l6ZSgpXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGlmIChpbm5lcikge1xuICAgICAgICBpbm5lci5zdHlsZS53aWR0aCA9IHRoaXMud3JhcHBlcldpZHRoICogdGhpcy5mcmFtZUNvdW50ICsgJ3B4J1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmb3JtYXRDaGlsZHJlbiAoY3JlYXRlRWxlbWVudCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICBsZXQgaW5kaWNhdG9yVm5vZGVcbiAgICAgIGNvbnN0IGNlbGxzID0gY2hpbGRyZW4uZmlsdGVyKHZub2RlID0+IHtcbiAgICAgICAgaWYgKCF2bm9kZS50YWcpIHJldHVybiBmYWxzZVxuICAgICAgICBpZiAodm5vZGUuY29tcG9uZW50T3B0aW9ucyAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zLnRhZyA9PT0gJ2luZGljYXRvcicpIHtcbiAgICAgICAgICBpbmRpY2F0b3JWbm9kZSA9IHZub2RlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pLm1hcCh2bm9kZSA9PiB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICByZWY6ICdjZWxscycsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNsaWRlci1jZWxsJ1xuICAgICAgICB9LCBbdm5vZGVdKVxuICAgICAgfSlcbiAgICAgIGlmIChpbmRpY2F0b3JWbm9kZSkge1xuICAgICAgICBpbmRpY2F0b3JWbm9kZS5kYXRhLmF0dHJzID0gaW5kaWNhdG9yVm5vZGUuZGF0YS5hdHRycyB8fCB7fVxuICAgICAgICBpbmRpY2F0b3JWbm9kZS5kYXRhLmF0dHJzLmNvdW50ID0gY2VsbHMubGVuZ3RoXG4gICAgICAgIGluZGljYXRvclZub2RlLmRhdGEuYXR0cnMuYWN0aXZlID0gdGhpcy5jdXJyZW50SW5kZXhcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yID0gY3JlYXRlRWxlbWVudChpbmRpY2F0b3IsIGluZGljYXRvclZub2RlLmRhdGEpXG4gICAgICB9XG4gICAgICByZXR1cm4gY2VsbHNcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy53ZWV4VHlwZSA9ICdzbGlkZXInXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwXG4gICAgdGhpcy5pbm5lck9mZnNldCA9IDBcbiAgICB0aGlzLl9pbmRpY2F0b3IgPSBudWxsXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXlvdXQoKVxuICAgIH0pXG4gIH0sXG5cbiAgYmVmb3JlVXBkYXRlICgpIHtcbiAgICB0aGlzLnVwZGF0ZUxheW91dCgpXG4gICAgdGhpcy5yZW9yZGVyKClcbiAgfSxcblxuICB1cGRhdGVkICgpIHtcbiAgICBmaXJlTGF6eWxvYWQodGhpcy4kZWwsIHRydWUpXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgaWYgKHRoaXMuYXV0b1BsYXkgJiYgdGhpcy5hdXRvUGxheSAhPT0gJ2ZhbHNlJykge1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBOdW1iZXIodGhpcy5pbnRlcnZhbClcbiAgICAgIHRoaXMuX2xhc3RTbGlkZVRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAgIGNvbnN0IGF1dG9QbGF5Rm4gPSBiaW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2F1dG9QbGF5VGltZXIpXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgbGV0IG5leHRUaWNrID0gaW50ZXJ2YWwgLSBub3cgKyB0aGlzLl9sYXN0U2xpZGVUaW1lXG4gICAgICAgIG5leHRUaWNrID0gbmV4dFRpY2sgPiAxMDAgPyBuZXh0VGljayA6IGludGVydmFsXG5cbiAgICAgICAgdGhpcy5uZXh0KClcbiAgICAgICAgdGhpcy5fbGFzdFNsaWRlVGltZSA9IG5vd1xuICAgICAgICB0aGlzLl9hdXRvUGxheVRpbWVyID0gc2V0VGltZW91dChhdXRvUGxheUZuLCBuZXh0VGljaylcbiAgICAgIH0sIHRoaXMpXG5cbiAgICAgIHRoaXMuX2F1dG9QbGF5VGltZXIgPSBzZXRUaW1lb3V0KGF1dG9QbGF5Rm4sIGludGVydmFsKVxuICAgIH1cblxuICAgIHRoaXMucmVvcmRlcigpXG4gICAgZmlyZUxhenlsb2FkKHRoaXMuJGVsLCB0cnVlKVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnc2xpZGVyJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICB0aGlzLl9jZWxscyA9IHRoaXMuZm9ybWF0Q2hpbGRyZW4oY3JlYXRlRWxlbWVudClcbiAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl9jZWxscy5sZW5ndGhcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgICAgJ25hdicsXG4gICAgICB7XG4gICAgICAgIHJlZjogJ3dyYXBwZXInLFxuICAgICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3NsaWRlcicgfSxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNsaWRlciB3ZWV4LXNsaWRlci13cmFwcGVyIHdlZXgtY3QnLFxuICAgICAgICBvbjogZXh0ZW5kKHRoaXMuX2NyZWF0ZUV2ZW50TWFwKFsnc2Nyb2xsJywgJ3Njcm9sbHN0YXJ0JywgJ3Njcm9sbGVuZCddKSwge1xuICAgICAgICAgIHRvdWNoc3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgICB0b3VjaG1vdmU6IHRocm90dGxlKGJpbmQodGhpcy5oYW5kbGVUb3VjaE1vdmUsIHRoaXMpLCAyNSksXG4gICAgICAgICAgdG91Y2hlbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgICAgfSksXG4gICAgICAgIHN0YXRpY1N0eWxlOiBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3VsJywge1xuICAgICAgICAgIHJlZjogJ2lubmVyJyxcbiAgICAgICAgICBzdGF0aWNDbGFzczogJ3dlZXgtc2xpZGVyLWlubmVyIHdlZXgtY3QnXG4gICAgICAgIH0sIHRoaXMuX2NlbGxzKSxcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yXG4gICAgICBdXG4gICAgKVxuICB9LFxuICAvLyBleHBvcnQgZGVmYXVsdCBjc3Mgc3R5bGVzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgX2Nzc1xufVxuIiwiaW1wb3J0IHsgZXh0cmFjdENvbXBvbmVudFN0eWxlIH0gZnJvbSAnLi4vLi4vY29yZSdcblxuY29uc3QgX2NzcyA9IGBcbi53ZWV4LXJlZnJlc2gtaW5kaWNhdG9yLFxuLndlZXgtbG9hZGluZy1pbmRpY2F0b3Ige1xuICB3aWR0aDogMS4wcmVtO1xuICBoZWlnaHQ6IDEuMHJlbTtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndlZXgtcmVmcmVzaC1pbmRpY2F0b3I6YmVmb3JlLFxuLndlZXgtbG9hZGluZy1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6ICcnO1xuICBmb250LXNpemU6IDAuMTZyZW07XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBsZWZ0OiAtNjAlO1xuICB0b3A6IDQwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2VleC1zcGlubmVyIDEuMXMgaW5maW5pdGUgZWFzZTtcbiAgICAgICAgICBhbmltYXRpb246IHdlZXgtc3Bpbm5lciAxLjFzIGluZmluaXRlIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxLjByZW0sIDAsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMS4wcmVtLCAwLCAwKTtcbn1cbmBcblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLndlZXhUeXBlID0gJ2xvYWRpbmctaW5kaWNhdG9yJ1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYXJrJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdsb2FkaW5nLWluZGljYXRvcicgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1sb2FkaW5nLWluZGljYXRvciB3ZWV4LWN0JyxcbiAgICAgIHN0YXRpY1N0eWxlOiBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICB9KVxuICB9LFxuICBfY3NzXG59XG4iLCJpbXBvcnQgeyBleHRyYWN0Q29tcG9uZW50U3R5bGUgfSBmcm9tICcuLi8uLi9jb3JlJ1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSAnLi9sb2FkaW5nLWluZGljYXRvcidcbmltcG9ydCB7IGNyZWF0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBMb2FkaW5nSW5kaWNhdG9yIH0sXG4gIHByb3BzOiB7XG4gICAgZGlzcGxheToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3Nob3cnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydzaG93JywgJ2hpZGUnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0RHk6IDAsXG4gICAgICB2aWV3SGVpZ2h0OiAwLFxuICAgICAgaGVpZ2h0OiAtMVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy52aWV3SGVpZ2h0ID0gdGhpcy4kZWwub2Zmc2V0SGVpZ2h0XG4gICAgaWYgKHRoaXMuZGlzcGxheSA9PT0gJ2hpZGUnKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IDBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlld0hlaWdodFxuICAgIH1cbiAgfSxcbiAgdXBkYXRlZCAoKSB7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaGVpZ2h0ICh2YWwpIHtcbiAgICAgIHRoaXMuJGVsLnN0eWxlLmhlaWdodCA9IHZhbCAqIHdlZXguY29uZmlnLmVudi5zY2FsZSArICdweCdcbiAgICB9LFxuICAgIGRpc3BsYXkgKHZhbCkge1xuICAgICAgaWYgKHZhbCA9PT0gJ2hpZGUnKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy52aWV3SGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcHVsbGluZyAob2Zmc2V0WSA9IDApIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gb2Zmc2V0WVxuICAgICAgdGhpcy4kZW1pdCgncHVsbGluZ2Rvd24nLCBjcmVhdGVFdmVudCh0aGlzLCAncHVsbGluZ2Rvd24nLCB7XG4gICAgICAgIGR5OiBvZmZzZXRZIC0gdGhpcy5sYXN0RHksXG4gICAgICAgIHB1bGxpbmdEaXN0YW5jZTogb2Zmc2V0WSxcbiAgICAgICAgdmlld0hlaWdodDogdGhpcy52aWV3SGVpZ2h0XG4gICAgICB9KSlcbiAgICAgIHRoaXMubGFzdER5ID0gb2Zmc2V0WVxuICAgIH0sXG4gICAgcHVsbGluZ0Rvd24gKG9mZnNldFkpIHtcbiAgICAgIHRoaXMuJGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0IDBzYFxuICAgICAgdGhpcy5wdWxsaW5nKG9mZnNldFkpXG4gICAgfSxcbiAgICBwdWxsaW5nRW5kICgpIHtcbiAgICAgIHRoaXMuJGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0IC4yc2BcbiAgICAgIGlmICh0aGlzLmhlaWdodCA+PSB0aGlzLnZpZXdIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5wdWxsaW5nKHRoaXMudmlld0hlaWdodClcbiAgICAgICAgdGhpcy4kZW1pdCgncmVmcmVzaCcpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wdWxsaW5nKDApXG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRDaGlsZHJlbiAoKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdzaG93Jykge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZHJlbi5maWx0ZXIodm5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gdm5vZGUuY29tcG9uZW50T3B0aW9uc1xuICAgICAgICAgICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnICE9PSAnbG9hZGluZy1pbmRpY2F0b3InXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgdGhpcy4kcGFyZW50Ll9yZWZyZXNoID0gdGhpc1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdhc2lkZScsIHtcbiAgICAgIHJlZjogJ3JlZnJlc2gnLFxuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdyZWZyZXNoJyB9LFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXJlZnJlc2ggd2VleC1jdCcsXG4gICAgICBzdGF0aWNTdHlsZTogZXh0cmFjdENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgfSwgdGhpcy5nZXRDaGlsZHJlbigpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRyYWN0Q29tcG9uZW50U3R5bGUgfSBmcm9tICcuLi8uLi9jb3JlJ1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSAnLi9sb2FkaW5nLWluZGljYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7IExvYWRpbmdJbmRpY2F0b3IgfSxcbiAgcHJvcHM6IHtcbiAgICBkaXNwbGF5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc2hvdycsXG4gICAgICB2YWxpZGF0b3IgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbJ3Nob3cnLCAnaGlkZSddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogLTEsXG4gICAgICB2aWV3SGVpZ2h0OiAwXG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLnZpZXdIZWlnaHQgPSB0aGlzLiRlbC5vZmZzZXRIZWlnaHRcbiAgICBpZiAodGhpcy5kaXNwbGF5ID09PSAnaGlkZScpIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gMFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy52aWV3SGVpZ2h0XG4gICAgfVxuICB9LFxuICB1cGRhdGVkICgpIHtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBoZWlnaHQgKHZhbCkge1xuICAgICAgdGhpcy4kZWwuc3R5bGUuaGVpZ2h0ID0gdmFsICogd2VleC5jb25maWcuZW52LnNjYWxlICsgJ3B4J1xuICAgIH0sXG4gICAgZGlzcGxheSAodmFsKSB7XG4gICAgICBpZiAodmFsID09PSAnaGlkZScpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHRcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBwdWxsaW5nIChvZmZzZXRZID0gMCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSBvZmZzZXRZXG4gICAgfSxcbiAgICBwdWxsaW5nVXAgKG9mZnNldFkpIHtcbiAgICAgIHRoaXMuJGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0IDBzYFxuICAgICAgdGhpcy5wdWxsaW5nKG9mZnNldFkpXG4gICAgfSxcbiAgICBwdWxsaW5nRW5kICgpIHtcbiAgICAgIHRoaXMuJGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0IC4yc2BcbiAgICAgIGlmICh0aGlzLmhlaWdodCA+PSB0aGlzLnZpZXdIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5wdWxsaW5nKHRoaXMudmlld0hlaWdodClcbiAgICAgICAgdGhpcy4kZW1pdCgnbG9hZGluZycpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wdWxsaW5nKDApXG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRDaGlsZHJlbiAoKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdzaG93Jykge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZHJlbi5maWx0ZXIodm5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gdm5vZGUuY29tcG9uZW50T3B0aW9uc1xuICAgICAgICAgICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnICE9PSAnbG9hZGluZy1pbmRpY2F0b3InXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgdGhpcy4kcGFyZW50Ll9sb2FkaW5nID0gdGhpc1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdhc2lkZScsIHtcbiAgICAgIHJlZjogJ2xvYWRpbmcnLFxuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdsb2FkaW5nJyB9LFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWxvYWRpbmcgd2VleC1jdCcsXG4gICAgICBzdGF0aWNTdHlsZTogZXh0cmFjdENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgfSwgdGhpcy5nZXRDaGlsZHJlbigpKVxuICB9XG59XG4iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgSW1wbCBvZiB0ZXh0IGNvbXBvbmVudC5cbiAqXG4gKiBOb3RlcyBhYm91dCB0aGUgc3R5bGUgJ2hlaWdodCcgYW5kICdsaW5lcyc6XG4gKiBpZiB0aGUgY29tcHV0ZWQgdmFsdWUgb2YgJ2hlaWdodCcgaXMgYmlnZ2VyIHRoYW4gJ2xpbmVzJywgdGhhbiB0aGUgdGV4dCB3aWxsXG4gKiBiZSBjbGlwcGVkIGFjY29yZGluZyB0byB0aGUgJ2xpbmVzJy4gT3RoZXJ3aXNlLCBpdCdsbCBiZSB0aGUgJ2hlaWdodCcuXG4gKi9cblxuaW1wb3J0IHsgZXh0cmFjdENvbXBvbmVudFN0eWxlIH0gZnJvbSAnLi4vY29yZSdcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBfY3NzID0gYFxuLndlZXgtdGV4dCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgIC8qIG5vdCB1c2luZyAncHJlJzogc3VwcG9ydCBhdXRvIGxpbmUgZmVlZC4gKi9cbiAgZm9udC1zaXplOiAwLjQyNjY2N3JlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBpdCdsbCBiZSBjbGlwcGVkIGlmIHRoZSBoZWlnaHQgaXMgbm90IGhpZ2ggZW5vdWdoLiAqL1xufVxuYFxuXG4vKipcbiAqIEdldCB0ZXh0IHNwZWNpYWwgc3R5bGVzIChsaW5lcyBhbmQgdGV4dC1vdmVyZmxvdykuXG4gKi9cbmZ1bmN0aW9uIGdldFRleHRTcGVjU3R5bGUgKG1zID0ge30pIHtcbiAgY29uc3QgbGluZXMgPSBwYXJzZUludChtcy5saW5lcykgfHwgMFxuICBjb25zdCBvdmVyZmxvdyA9IG1zWyd0ZXh0LW92ZXJmbG93J10gfHwgJ2VsbGlwc2lzJ1xuICBpZiAobGluZXMgPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICd0ZXh0LW92ZXJmbG93Jzogb3ZlcmZsb3csXG4gICAgICAnLXdlYmtpdC1saW5lLWNsYW1wJzogbGluZXNcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGxpbmVzOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIHZhbHVlOiBbU3RyaW5nXVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygndGV4dCcsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG4gICAgY29uc3Qgc3R5bGUgPSBleHRyYWN0Q29tcG9uZW50U3R5bGUodGhpcylcbiAgICBjb25zdCB0ZXh0U3BlY1N0eWxlID0gZ2V0VGV4dFNwZWNTdHlsZShzdHlsZSlcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAndGV4dCcgfSxcbiAgICAgIG9uOiB0aGlzLl9jcmVhdGVFdmVudE1hcCgpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXRleHQgd2VleC1lbCcsXG4gICAgICBzdGF0aWNTdHlsZTogZXh0ZW5kKHN0eWxlLCB0ZXh0U3BlY1N0eWxlKVxuICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW3RoaXMudmFsdWVdKVxuICB9LFxuICBfY3NzXG59XG4iLCJpbXBvcnQgeyBleHRyYWN0Q29tcG9uZW50U3R5bGUgfSBmcm9tICcuLi9jb3JlJ1xuaW1wb3J0IHsgaW5wdXRDb21tb24gfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyBleHRlbmQsIG1hcEZvcm1FdmVudHMgfSBmcm9tICcuLi91dGlscydcblxuLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmNvbnN0IF9jc3MgPSBgXG4ud2VleC10ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMC40MjY2NjdyZW1cbn1cbi53ZWV4LXRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmBcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtpbnB1dENvbW1vbl0sXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdXRvZm9jdXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHJvd3M6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAyXG4gICAgfSxcbiAgICByZXR1cm5LZXlUeXBlOiBTdHJpbmdcbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ3RleHRhcmVhJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICBjb25zdCBldmVudHMgPSBleHRlbmQodGhpcy5fY3JlYXRlRXZlbnRNYXAoKSwgbWFwRm9ybUV2ZW50cyh0aGlzKSlcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaHRtbDp0ZXh0YXJlYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAndGV4dGFyZWEnLFxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgZGlzYWJsZWQ6ICh0aGlzLmRpc2FibGVkICE9PSAnZmFsc2UnICYmIHRoaXMuZGlzYWJsZWQgIT09IGZhbHNlKSxcbiAgICAgICAgYXV0b2ZvY3VzOiAodGhpcy5hdXRvZm9jdXMgIT09ICdmYWxzZScgJiYgdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgIHJvd3M6IHRoaXMucm93cyxcbiAgICAgICAgJ3JldHVybi1rZXktdHlwZSc6IHRoaXMucmV0dXJuS2V5VHlwZVxuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICB9LFxuICAgICAgb246IHRoaXMuY3JlYXRlS2V5Ym9hcmRFdmVudChldmVudHMpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXRleHRhcmVhIHdlZXgtZWwnLFxuICAgICAgc3RhdGljU3R5bGU6IGV4dHJhY3RDb21wb25lbnRTdHlsZSh0aGlzKVxuICAgIH0pXG4gIH0sXG4gIF9jc3Ncbn1cbiIsIi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuaW1wb3J0IHsgZXh0cmFjdENvbXBvbmVudFN0eWxlIH0gZnJvbSAnLi4vY29yZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHNyYzogU3RyaW5nLFxuICAgIHBsYXlTdGF0dXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwYXVzZScsXG4gICAgICB2YWxpZGF0b3IgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbJ3BsYXknLCAncGF1c2UnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF1dG9QbGF5OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcblxuICAgIHBsYXlzaW5saW5lOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBjb250cm9sczoge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ3ZpZGVvJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cblxuICAgIC8vIFRPRE86IHN1cHBvcnQgcGxheVN0YXR1c1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOnZpZGVvJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgJ3dlZXgtdHlwZSc6ICd2aWRlbycsXG4gICAgICAgIGF1dG9wbGF5OiAodGhpcy5hdXRvcGxheSAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmF1dG9wbGF5ICE9PSBmYWxzZSksXG4gICAgICAgIGF1dG9QbGF5OiAodGhpcy5hdXRvcGxheSAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmF1dG9wbGF5ICE9PSBmYWxzZSksXG4gICAgICAgIGNvbnRyb2xzOiB0aGlzLmNvbnRyb2xzLFxuICAgICAgICBzcmM6IHRoaXMuc3JjXG4gICAgICB9LFxuICAgICAgb246IHRoaXMuX2NyZWF0ZUV2ZW50TWFwKFsnc3RhcnQnLCAncGF1c2UnLCAnZmluaXNoJywgJ2ZhaWwnXSksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtdmlkZW8gd2VleC1lbCcsXG4gICAgICBzdGF0aWNTdHlsZTogZXh0cmFjdENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgZXh0cmFjdENvbXBvbmVudFN0eWxlIH0gZnJvbSAnLi4vY29yZSdcbmltcG9ydCB7IGNyZWF0ZUV2ZW50IH0gZnJvbSAnLi4vdXRpbHMnXG4vLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuY29uc3QgX2NzcyA9IGBcbi53ZWV4LXdlYiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYFxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc3JjOiBTdHJpbmdcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vIFRPRE86IGNoZWNrIGNyb3NzLW9yaWdpblxuICAgIGdvQmFjayAoKSB7XG4gICAgICBpZiAodGhpcy4kZWwpIHtcbiAgICAgICAgdGhpcy4kZWwuY29udGVudFdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ29Gb3J3YXJkICgpIHtcbiAgICAgIGlmICh0aGlzLiRlbCkge1xuICAgICAgICB0aGlzLiRlbC5jb250ZW50V2luZG93Lmhpc3RvcnkuZm9yd2FyZCgpXG4gICAgICB9XG4gICAgfSxcbiAgICByZWxvYWQgKCkge1xuICAgICAgaWYgKHRoaXMuJGVsKSB7XG4gICAgICAgIHRoaXMuJGVsLmNvbnRlbnRXaW5kb3cuaGlzdG9yeS5yZWxvYWQoKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAodGhpcy4kZWwpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3BhZ2VzdGFydCcsIGNyZWF0ZUV2ZW50KHRoaXMuJGVsLCAncGFnZXN0YXJ0JywgeyB1cmw6IHRoaXMuc3JjIH0pKVxuICAgICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdCgncGFnZWZpbmlzaCcsIGNyZWF0ZUV2ZW50KHRoaXMuJGVsLCAncGFnZWZpbmlzaCcsIHsgdXJsOiB0aGlzLnNyYyB9KSlcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnd2ViJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ3dlYicsXG4gICAgICAgIHNyYzogdGhpcy5zcmNcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5fY3JlYXRlRXZlbnRNYXAoWydlcnJvciddKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC13ZWIgd2VleC1lbCcsXG4gICAgICBzdGF0aWNTdHlsZTogZXh0cmFjdENvbXBvbmVudFN0eWxlKHRoaXMpXG4gICAgfSlcbiAgfSxcbiAgX2Nzc1xufVxuIiwiaW1wb3J0IF9zd2l0Y2ggZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgeyBfc3dpdGNoIGFzIHN3aXRjaCB9XG5cbmltcG9ydCBhIGZyb20gJy4vYSdcbmltcG9ydCBkaXYgZnJvbSAnLi9kaXYnXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZSdcbmltcG9ydCBpbnB1dCBmcm9tICcuL2lucHV0J1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL3Njcm9sbGFibGUvaGVhZGVyJ1xuaW1wb3J0IGxpc3QgZnJvbSAnLi9zY3JvbGxhYmxlL2xpc3QnXG5pbXBvcnQgY2VsbCBmcm9tICcuL3Njcm9sbGFibGUvbGlzdC9jZWxsJ1xuaW1wb3J0IHNjcm9sbGVyIGZyb20gJy4vc2Nyb2xsYWJsZS9zY3JvbGxlcidcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInXG4vLyBpbXBvcnQgaW5kaWNhdG9yIGZyb20gJy4vd2FybmluZydcbmltcG9ydCBpbmRpY2F0b3IgZnJvbSAnLi9zbGlkZXIvaW5kaWNhdG9yJ1xuLy8gaW1wb3J0IHJlZnJlc2ggZnJvbSAnLi93YXJuaW5nJ1xuLy8gaW1wb3J0IGxvYWRpbmcgZnJvbSAnLi93YXJuaW5nJ1xuaW1wb3J0IHJlZnJlc2ggZnJvbSAnLi9zY3JvbGxhYmxlL3JlZnJlc2gnXG5pbXBvcnQgbG9hZGluZyBmcm9tICcuL3Njcm9sbGFibGUvbG9hZGluZydcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gJy4vc2Nyb2xsYWJsZS9sb2FkaW5nLWluZGljYXRvcidcbmltcG9ydCB0ZXh0IGZyb20gJy4vdGV4dCdcbmltcG9ydCB0ZXh0YXJlYSBmcm9tICcuL3RleHRhcmVhJ1xuaW1wb3J0IHZpZGVvIGZyb20gJy4vdmlkZW8nXG5pbXBvcnQgd2ViIGZyb20gJy4vd2ViJ1xuXG5leHBvcnQge1xuICBhLFxuICBkaXYsXG4gIGRpdiBhcyBjb250YWluZXIsXG4gIGltYWdlLFxuICBpbWFnZSBhcyBpbWcsXG4gIGlucHV0LFxuICBoZWFkZXIsXG4gIGxpc3QsXG4gIGNlbGwsXG4gIHNjcm9sbGVyLFxuICBzbGlkZXIsXG4gIGluZGljYXRvcixcbiAgcmVmcmVzaCxcbiAgbG9hZGluZyxcbiAgTG9hZGluZ0luZGljYXRvcixcbiAgdGV4dCxcbiAgdGV4dGFyZWEsXG4gIHZpZGVvLFxuICB3ZWJcbn1cbiIsIi8vIGltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IHdlZXggZnJvbSAnLi9lbnYnXG5pbXBvcnQgeyBzZXRWdWUgfSBmcm9tICcuL2VudidcbmltcG9ydCAqIGFzIGNvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgYmFzZSwgc3R5bGUgfSBmcm9tICcuL21peGlucydcbi8vIGltcG9ydCBzdHlsZU1peGluIGZyb20gJy4vbWl4aW5zL3N0eWxlJ1xuXG4vKipcbiAqIGluaXQgd2VleC5cbiAqIEBwYXJhbSAge1Z1ZSQyfSBWdWU6IFZ1ZSBDb25zdHJ1Y3Rvci5cbiAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9uczogZXh0ZW5kIHdlZXggcGx1Z2lucy5cbiAqICAgICAgICAgLSBjb21wb25lbnRzLlxuICogICAgICAgICAtIG1vZHVsZXMuXG4gKi9cbmZ1bmN0aW9uIGluaXQgKFZ1ZS8qLCBvcHRpb25zID0ge30qLykge1xuICBzZXRWdWUoVnVlKVxuXG4gIFZ1ZS5wcm90b3R5cGUuJGdldENvbmZpZyA9ICgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oJ1tWdWUgUmVuZGVyXSBcInRoaXMuJGdldENvbmZpZ1wiIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgXCJ3ZWV4LmNvbmZpZ1wiIGluc3RlYWQuJylcbiAgICByZXR1cm4gd2VleC5jb25maWdcbiAgfVxuXG4gIGNvbnN0IGh0bWxSZWdleCA9IC9eaHRtbDovaVxuICBWdWUuY29uZmlnLmlzUmVzZXJ2ZWRUYWcgPSB0YWcgPT4gaHRtbFJlZ2V4LnRlc3QodGFnKVxuICBWdWUuY29uZmlnLnBhcnNlUGxhdGZvcm1UYWdOYW1lID0gdGFnID0+IHRhZy5yZXBsYWNlKGh0bWxSZWdleCwgJycpXG5cbiAgLy8gcmVnaXN0ZXIgc2RrIGNvbXBvbmVudHMuXG4gIGZvciAoY29uc3QgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgd2VleC5yZWdpc3RlckNvbXBvbmVudChuYW1lLCBjb21wb25lbnRzW25hbWVdKVxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIC8vICAgaWYgKHNlbXZlci5sdChWdWUudmVyc2lvbiwgJzIuMS41JykpIHtcbiAgLy8gICAgIGNvbnNvbGUud2FybihgW1Z1ZSBSZW5kZXJdIFRoZSB2ZXJzaW9uIG9mIFZ1ZSBzaG91bGQgYmUgYCArXG4gIC8vICAgICAgIGBncmVhdGVyIHRoYW4gMi4xLjUsIGN1cnJlbnQgaXMgJHtWdWUudmVyc2lvbn0uYClcbiAgLy8gICB9XG4gIC8vICAgY29uc29sZS5pbmZvKGBbVnVlIFJlbmRlcl0gUmVnaXN0ZXJlZCBjb21wb25lbnRzOiBgXG4gIC8vICAgICArIGBbJHtPYmplY3Qua2V5cyhjb21wb25lbnRzKS5qb2luKCcsICcpfV0uYClcbiAgVnVlLm1peGluKGJhc2UpXG4gIFZ1ZS5taXhpbihzdHlsZSlcbiAgLy8gfVxufVxuXG4vLyBhdXRvIGluaXQgaW4gZGlzdCBtb2RlLlxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgaW5pdCh3aW5kb3cuVnVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWV4XG4iXSwibmFtZXMiOlsicmVxdWlyZSQkMCIsImlzT2JqZWN0IiwicmVxdWlyZSQkMSIsImRvY3VtZW50IiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJkUCIsInJlcXVpcmUkJDQiLCJnbG9iYWwiLCIkZXhwb3J0IiwidG9TdHJpbmciLCJJT2JqZWN0IiwidG9JbnRlZ2VyIiwibWluIiwidG9JT2JqZWN0IiwiZGVmaW5lZCIsInJlcXVpcmUkJDUiLCJhcmd1bWVudHMiLCJjb2YiLCJhbk9iamVjdCIsImdldEtleXMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiUFJPVE9UWVBFIiwiaGFzIiwiVEFHIiwiY3JlYXRlIiwic2V0VG9TdHJpbmdUYWciLCJ0b09iamVjdCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQ4IiwicmVkZWZpbmUiLCJyZXF1aXJlJCQ3IiwiaGlkZSIsInJlcXVpcmUkJDYiLCJJdGVyYXRvcnMiLCJJVEVSQVRPUiIsIkFycmF5UHJvdG8iLCJjbGFzc29mIiwiYUZ1bmN0aW9uIiwiY3R4IiwicHJvY2VzcyIsIlByb21pc2UiLCJpc05vZGUiLCJTUEVDSUVTIiwiTElCUkFSWSIsInJlcXVpcmUkJDE3IiwicmVxdWlyZSQkMTYiLCJyZXF1aXJlJCQxNSIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTMiLCJyZXF1aXJlJCQxMiIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTAiLCJUeXBlRXJyb3IiLCJjb25zdCIsInRoaXMiLCJtZXRhIiwibGV0IiwiaGFzT3duUHJvcGVydHkiLCJxcyIsImV4dGVuZCIsIl91aWQiLCJpbml0IiwiY2FjaGUiLCJ2YWwiLCJnZXRQYXJlbnRTY3JvbGxlciIsInN0ZXAiLCJxdWV1ZSIsIkNPTlRFTlRfQ0xBU1MiLCJNU0dfQ0xBU1MiLCJCVVRUT05fR1JPVVBfQ0xBU1MiLCJCVVRUT05fQ0xBU1MiLCJldmVudCIsImdlb2xvY2F0aW9uIiwicGFnZUluZm8iLCJzdG9yYWdlIiwic3RyZWFtIiwiY2xpcGJvYXJkIiwibmF2aWdhdG9yIiwibW9kYWwiLCJrIiwiaW5pdFZpZXdwb3J0Iiwid2VleCIsInV0aWxzIiwidXRpbHMuYmluZCIsInV0aWxzLmFwcGVuZENzcyIsIm1vZHVsZXMiLCJjYWNoZWQiLCJfY3NzIiwiYmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxBQUVBLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCekIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUN6QixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFBO0FBQy9CLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFBO0FBQ2pDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQTtBQUNqQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUE7Ozs7Ozs7Ozs7QUFVbEIsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQ25DLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQTtFQUNaLE9BQU8sRUFBRSxFQUFFO0lBQ1QsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUU7TUFDakMsT0FBTyxFQUFFO0tBQ1Y7SUFDRCxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQTtHQUNuQjtFQUNELE9BQU8sSUFBSTtDQUNaOzs7Ozs7Ozs7QUFTRCxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFF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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsRUFBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFBLEtBQUssRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBQSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyx3SEFBd0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQUFBQzs7QUNDbDlELFdBQWMsR0FBRyxVQUFVLEdBQUcsRUFBRTtDQUMvQixPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUU7RUFDL0QsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7RUFDeEQsQ0FBQyxDQUFDO0NBQ0gsQ0FBQzs7QUNMRjs7Ozs7O0FBTUE7QUFFQSxJQUFJLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztBQUN6RCxJQUFJRSxnQkFBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO0FBQ3JELElBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFFN0QsU0FBUy9CLFVBQVEsQ0FBQyxHQUFHLEVBQUU7Q0FDdEIsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7RUFDdEMsTUFBTSxJQUFJLFNBQVMsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0VBQzdFOztDQUVELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ25COztBQUVELFNBQVMsZUFBZSxHQUFHO0NBQzFCLElBQUk7RUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtHQUNuQixPQUFPLEtBQUssQ0FBQztHQUNiOzs7OztFQUtELElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzlCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7RUFDaEIsSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0dBQ2pELE9BQU8sS0FBSyxDQUFDO0dBQ2I7OztFQUdELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztFQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7R0FDNUIsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ3hDO0VBQ0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtHQUMvRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNoQixDQUFDLENBQUM7RUFDSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxFQUFFO0dBQ3JDLE9BQU8sS0FBSyxDQUFDO0dBQ2I7OztFQUdELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztFQUNmLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxNQUFNLEVBQUU7R0FDMUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztHQUN2QixDQUFDLENBQUM7RUFDSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2hELHNCQUFzQixFQUFFO0dBQ3pCLE9BQU8sS0FBSyxDQUFDO0dBQ2I7O0VBRUQsT0FBTyxJQUFJLENBQUM7RUFDWixDQUFDLE9BQU8sR0FBRyxFQUFFOztFQUViLE9BQU8sS0FBSyxDQUFDO0VBQ2I7Q0FDRDs7QUFFRCxXQUFjLEdBQUcsZUFBZSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLE1BQU0sRUFBRSxNQUFNLEVBQUU7OztDQUM5RSxJQUFJLElBQUksQ0FBQztDQUNULElBQUksRUFBRSxHQUFHQSxVQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDMUIsSUFBSSxPQUFPLENBQUM7O0NBRVosS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7RUFDMUMsSUFBSSxHQUFHLE1BQU0sQ0FBQ1gsV0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0VBRTVCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO0dBQ3JCLElBQUkwQyxnQkFBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7SUFDbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQjtHQUNEOztFQUVELElBQUkscUJBQXFCLEVBQUU7R0FDMUIsT0FBTyxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3hDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtLQUM1QyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO0lBQ0Q7R0FDRDtFQUNEOztDQUVELE9BQU8sRUFBRSxDQUFDO0NBQ1YsQ0FBQzs7QUN4RkYsSUFBSSxlQUFlLEdBQUd6RCxPQUE0QixDQUFDO0FBQ25ELElBQUksWUFBWSxHQUFHRixPQUF3QixDQUFDOztBQUU1QyxTQUFTLHFCQUFxQixDQUFDLElBQUksRUFBRTtDQUNwQyxRQUFRLElBQUksQ0FBQyxXQUFXO0VBQ3ZCLEtBQUssT0FBTztHQUNYLE9BQU8sVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUNuQyxPQUFPLEtBQUssS0FBSyxJQUFJLEdBQUc7S0FDdkIsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7S0FDakIsR0FBRztLQUNILEtBQUs7S0FDTCxHQUFHO0tBQ0gsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUc7S0FDWixNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztLQUNqQixHQUFHO0tBQ0gsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7S0FDbkIsSUFBSTtLQUNKLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO0tBQ25CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7RUFFSCxLQUFLLFNBQVM7R0FDYixPQUFPLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtJQUM1QixPQUFPLEtBQUssS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztLQUMzQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztLQUNqQixLQUFLO0tBQ0wsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7S0FDbkIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDOztFQUVIO0dBQ0MsT0FBTyxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUU7SUFDNUIsT0FBTyxLQUFLLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7S0FDM0MsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7S0FDakIsR0FBRztLQUNILE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO0tBQ25CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztFQUNIO0NBQ0Q7O0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7Q0FDbkMsSUFBSSxNQUFNLENBQUM7O0NBRVgsUUFBUSxJQUFJLENBQUMsV0FBVztFQUN2QixLQUFLLE9BQU87R0FDWCxPQUFPLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDekMsTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBRWhDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFFbEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtLQUNaLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDekIsT0FBTztLQUNQOztJQUVELElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtLQUNuQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3RCOztJQUVELFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQzs7RUFFSCxLQUFLLFNBQVM7R0FDYixPQUFPLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDekMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBRTdCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFFL0IsSUFBSSxDQUFDLE1BQU0sSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO0tBQzlDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDekIsT0FBTztLQUNQOztJQUVELFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDOztFQUVIO0dBQ0MsT0FBTyxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0lBQ3pDLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtLQUNuQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQ3pCLE9BQU87S0FDUDs7SUFFRCxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztFQUNIO0NBQ0Q7O0FBRUQsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRTtDQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7RUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUN4RTs7Q0FFRCxPQUFPLEtBQUssQ0FBQztDQUNiOztBQUVELFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRTtDQUMxQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7RUFDekIsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7RUFDcEIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtFQUNyQyxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtHQUMxRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDN0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRTtHQUNyQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNsQixDQUFDLENBQUM7RUFDSDs7Q0FFRCxPQUFPLEtBQUssQ0FBQztDQUNiOztBQUVELGNBQWtCLFVBQVUsR0FBRyxFQUFFO0NBQ2hDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDL0IsQ0FBQzs7QUFFRixZQUFnQixVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUU7Q0FDcEMsSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7Q0FFakQsSUFBSSxTQUFTLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Q0FJM0MsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Q0FFOUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7RUFDNUIsT0FBTyxHQUFHLENBQUM7RUFDWDs7Q0FFRCxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7O0NBRTFDLElBQUksQ0FBQyxHQUFHLEVBQUU7RUFDVCxPQUFPLEdBQUcsQ0FBQztFQUNYOztDQUVELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxFQUFFO0VBQ3ZDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O0VBR2pELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztFQUN4QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7OztFQUl6RCxHQUFHLEdBQUcsR0FBRyxLQUFLLFNBQVMsR0FBRyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7O0VBRXpELFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDN0MsQ0FBQyxDQUFDOztDQUVILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxNQUFNLEVBQUUsR0FBRyxFQUFFO0VBQzVELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNuQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztHQUVuRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQzlCLE1BQU07R0FDTixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0dBQ2xCOztFQUVELE9BQU8sTUFBTSxDQUFDO0VBQ2QsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDeEIsQ0FBQzs7QUFFRixnQkFBb0IsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFO0NBQ3hDLElBQUksUUFBUSxHQUFHO0VBQ2QsTUFBTSxFQUFFLElBQUk7RUFDWixNQUFNLEVBQUUsSUFBSTtFQUNaLFdBQVcsRUFBRSxNQUFNO0VBQ25CLENBQUM7O0NBRUYsSUFBSSxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7O0NBRXBDLElBQUksU0FBUyxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDOztDQUU1QyxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRTtFQUN2RCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O0VBRW5CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtHQUN0QixPQUFPLEVBQUUsQ0FBQztHQUNWOztFQUVELElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtHQUNqQixPQUFPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDekI7O0VBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0dBQ3ZCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7R0FFaEIsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRTtJQUNuQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7S0FDdkIsT0FBTztLQUNQOztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDOztHQUVILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUN4Qjs7RUFFRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDbkQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtFQUN0QixPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0VBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0NBQ2xCLENBQUM7Ozs7Ozs7O0FDMU1GOzs7QUFHQSxBQUVBMEQsSUFBSSxLQUFLLENBQUE7O0FBRVQsQUFDQSxBQUVBQSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUE7QUFDaEJILElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFBOztBQUV0QixTQUFTLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0VBQ25EQSxJQUFNLE1BQU0sR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0VBQ3RDRyxJQUFJLEdBQUcsQ0FBQTs7RUFFUCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQTtHQUNuRjs7RUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRTtJQUM5QixPQUFPLFVBQVUsUUFBUSxFQUFFO01BQ3pCLFFBQVEsQ0FBQztRQUNQLE1BQU0sRUFBRSxHQUFHO1FBQ1gsRUFBRSxFQUFFLElBQUk7UUFDUixVQUFVLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsUUFBUTtPQUNmLENBQUMsQ0FBQTtNQUNGLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0tBQ2xCO0dBQ0YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBOztFQUVWSCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0VBQy9DLElBQUk7SUFDRixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7R0FDOUI7RUFDRCxPQUFPLEdBQUcsRUFBRTtJQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsOERBQThEO1FBQ3hFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtHQUNoQjtFQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQTtFQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFBO0VBQy9CLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFBOzs7RUFHM0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFO0lBQzlCLE9BQU8sVUFBVSxHQUFHLEVBQUU7TUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQywwREFBMEQsRUFBRSxHQUFHLENBQUMsQ0FBQTtNQUM5RSxRQUFRLENBQUM7UUFDUCxNQUFNLEVBQUUsV0FBVztRQUNuQixFQUFFLEVBQUUsS0FBSztRQUNULFVBQVUsRUFBRSxFQUFFO1FBQ2QsSUFBSSxFQUFFLEVBQUU7T0FDVCxDQUFDLENBQUE7TUFDRixPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtLQUNsQjtHQUNGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtFQUNWQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7RUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7Q0FDaEM7O0FBRUQsU0FBUyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtFQUNqREEsSUFBTSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQTtFQUNoQyxHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUE7RUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7OztFQUd6QyxJQUFJLE1BQU0sQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUFFO0lBQ25DLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO0dBQzNCOztFQUVEQSxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtFQUNwQyxLQUFLQSxJQUFNLENBQUMsSUFBSSxPQUFPLEVBQUU7SUFDdkIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtHQUNwQzs7RUFFRCxHQUFHLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxFQUFFO0lBQzFCLFFBQVEsQ0FBQztNQUNQLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtNQUNsQixFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHO01BQ3pDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtNQUMxQixJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVE7TUFDbEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDN0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLFNBQVMsRUFBRTtVQUNoQ0EsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtVQUMvQyxJQUFJLFNBQVMsRUFBRTtZQUNiLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7V0FDakM7VUFDRCxPQUFPLEdBQUc7U0FDWCxFQUFFLEVBQUUsQ0FBQztLQUNULENBQUMsQ0FBQTtHQUNILENBQUE7O0VBRUQsSUFBSSxnQkFBZ0IsRUFBRTtJQUNwQixHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFO01BQzVCLGdCQUFnQixDQUFDO1FBQ2YsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1FBQzFCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtRQUNsQixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ2QsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1FBQzFCLE9BQU8sRUFBRSxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1dBQzdDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxTQUFTLEVBQUU7WUFDaENBLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDL0MsSUFBSSxTQUFTLEVBQUU7Y0FDYixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ2pDO1lBQ0QsT0FBTyxHQUFHO1dBQ1gsRUFBRSxFQUFFLENBQUM7T0FDVCxDQUFDLENBQUE7S0FDSCxDQUFBO0dBQ0Y7O0VBRUQsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRTtJQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzVFLFFBQVEsQ0FBQztNQUNQLE1BQU0sRUFBRSxXQUFXO01BQ25CLEVBQUUsRUFBRSxLQUFLO01BQ1QsVUFBVSxFQUFFLEVBQUU7TUFDZCxJQUFJLEVBQUUsRUFBRTtLQUNULENBQUMsQ0FBQTtHQUNILENBQUE7O0VBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBO0NBQzlCOztBQUVEQSxJQUFNLE1BQU0sR0FBRzs7Ozs7Ozs7Ozs7O0VBWWIsUUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUNyQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtNQUM3QixJQUFJO1FBQ0YsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7T0FDMUI7TUFDRCxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU07T0FDUDtLQUNGO0lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO01BQzNDLE9BQU8sT0FBTyxDQUFDLEtBQUs7UUFDbEIsbUVBQW1FLENBQUM7S0FDdkU7O0lBRURBLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDMUJBLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFBO0lBQ3BDQSxJQUFNLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFBO0lBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDakMsR0FBRyxDQUFDLE1BQU0sR0FBRyxZQUFZO01BQ3ZCLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtLQUN0RCxDQUFBO0lBQ0QsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLEtBQUssRUFBRTtNQUM3QixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsOENBQThDLEVBQUUsS0FBSyxDQUFDOzs7OztLQUs1RSxDQUFBO0lBQ0QsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO0dBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRCxLQUFLLEVBQUUsVUFBVSxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFO0lBQ3hEQSxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUE7SUFDNUJBLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQTtJQUMzQkEsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFBOztJQUUzQkEsSUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3ZFQSxJQUFNLFdBQVcsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ2xFQSxJQUFNLFdBQVcsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFBOzs7SUFHNURBLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7O0lBRTFCQSxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQTs7O0lBR3hDLElBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRTtNQUN4QyxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQTtNQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLCtEQUErRDtVQUN4RSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBO0tBQy9DO1NBQ0ksSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDOUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtNQUMxQixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCO1VBQ2hELE1BQU0sQ0FBQyxNQUFNO1VBQ2Isd0NBQXdDO1VBQ3hDLGFBQWEsR0FBRyxHQUFHLENBQUM7S0FDekI7OztJQUdELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO01BQ2YsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLDBEQUEwRCxDQUFDO0tBQ2pGOzs7SUFHRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO01BQ3pDRyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFBO01BQ3RCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM3QixJQUFJLEdBQUdFLEtBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7T0FDMUI7TUFDREYsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQTtNQUNwQkEsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtNQUM5QixPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO01BQ3ZDQSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO01BQzlCLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUE7TUFDM0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO01BQy9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFBO01BQ2hFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO0tBQ2pCOzs7SUFHRCxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7TUFDdEMsTUFBTSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUE7S0FDM0I7U0FDSSxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7TUFDckUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QjtVQUM5QyxNQUFNLENBQUMsSUFBSTtVQUNYLHdDQUF3QztVQUN4QyxXQUFXLEdBQUcsR0FBRyxDQUFDO0tBQ3ZCOzs7SUFHRCxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7TUFDdEMsTUFBTSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUE7TUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyw2REFBNkQ7VUFDdEUsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQTtLQUM5QztTQUNJLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtNQUNyRSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCO1lBQzVDLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsd0NBQXdDO1lBQ3hDLFdBQVcsR0FBRyxHQUFHLENBQUM7S0FDekI7OztJQUdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUE7SUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO01BQ3hDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQztLQUM3RTs7O0lBR0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUE7O0lBRXJESCxJQUFNLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEdBQUcsRUFBRTtNQUN4QyxNQUFNLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQTtLQUN4QyxDQUFDLENBQUE7SUFDRixJQUFJLGtCQUFrQixFQUFFO01BQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7O1FBRTVCLE1BQU0sQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO09BQ3RELENBQUMsQ0FBQTtLQUNIOztJQUVELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7TUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUE7S0FDOUI7U0FDSTtNQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0tBQzVCO0dBQ0Y7O0NBRUYsQ0FBQTs7QUFFREEsSUFBTUUsTUFBSSxHQUFHO0VBQ1gsTUFBTSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsVUFBVTtJQUNoQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO0dBQzdCLEVBQUU7SUFDRCxJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO0dBQ3pDLENBQUM7Q0FDSCxDQUFBOztBQUVELGVBQWU7RUFDYixJQUFJLEVBQUUsVUFBVSxJQUFJLEVBQUU7SUFDcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUVBLE1BQUksQ0FBQyxDQUFBO0dBQy9DO0NBQ0YsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UkRGLElBQU0saUJBQWlCLEdBQUcsdUJBQXVCLENBQUE7O0FBRWpEQSxJQUFNLFNBQVMsR0FBRzs7RUFFaEIsU0FBUyxFQUFFLFVBQVUsVUFBVSxFQUFFOztJQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUE7R0FDM0Q7O0VBRUQsU0FBUyxFQUFFLFVBQVUsSUFBSSxFQUFFOztJQUV6QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUU7TUFDbkVBLElBQU0sU0FBUyxHQUFHLE9BQU8sRUFBRSxDQUFBO01BQzNCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBOztNQUV0QixTQUFTLENBQUMsTUFBTSxFQUFFLENBQUE7TUFDbEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTs7O01BRzVCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO01BQ3BCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtLQUNqQjtTQUNJO01BQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO0tBQzdDO0dBQ0Y7O0NBRUYsQ0FBQTs7QUFFRCxTQUFTLE9BQU8sSUFBSTtFQUNsQkcsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0VBQzFELElBQUksQ0FBQyxTQUFTLEVBQUU7SUFDZCxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO0lBQy9DLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLG1DQUFtQyxDQUFBOztJQUU3RCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtHQUNyQztFQUNELE9BQU8sU0FBUztDQUNqQjs7QUFFREgsSUFBTUUsTUFBSSxHQUFHO0VBQ1gsU0FBUyxFQUFFLENBQUM7SUFDVixJQUFJLEVBQUUsV0FBVztJQUNqQixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7R0FDbkIsRUFBRTtJQUNELElBQUksRUFBRSxXQUFXO0lBQ2pCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztHQUNqQixDQUFDO0NBQ0gsQ0FBQTs7QUFFRCxrQkFBZTtFQUNiLElBQUksRUFBRSxVQUFVLElBQUksRUFBRTtJQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRUEsTUFBSSxDQUFDLENBQUE7R0FDckQ7Q0FDRixDQUFBOztBQ3hFRDs7Ozs7O0FBTUEsQUFBTyxTQUFTLE1BQU0sRUFBRSxFQUFFLEVBQThCOzs7O0VBQ3RELElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRTtFQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxFQUFDO0lBQ2hCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFO0lBQ3hDLEtBQUtGLElBQU0sR0FBRyxJQUFJLElBQUksRUFBRTtNQUN0QixFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ3BCO0dBQ0YsQ0FBQyxDQUFBO0VBQ0YsT0FBTyxFQUFFO0NBQ1Y7Ozs7O0FBS0QsQUFBTyxTQUFTLFVBQVUsRUFBRSxFQUFFLEVBQU0sSUFBYSxFQUFFLElBQUksRUFBcUI7NkJBQXBDLEdBQU8sRUFBRTs7RUFDL0MsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxFQUFDO0lBQ3ZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtHQUM5QixDQUFDLENBQUE7RUFDRixPQUFPLEVBQUU7Q0FDVjs7Ozs7QUFLRCxBQUFPLFNBQVMsV0FBVyxFQUFFLEVBQUUsRUFBTSxJQUFhLEVBQUUsSUFBSSxFQUFpQjs2QkFBaEMsR0FBTyxFQUFFOztFQUNoRCxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUU7RUFDeEIsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxFQUFDO0lBQ3ZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0dBQzNCLENBQUMsQ0FBQTtFQUNGLE9BQU8sRUFBRTtDQUNWOzs7Ozs7Ozs7QUFTRCxBQUFPLFNBQVMsSUFBSSxFQUFFLEVBQUUsRUFBWSxHQUFHLEVBQVM7RUFDOUMsT0FBTyxVQUFVLENBQUMsRUFBUztJQUN6QkEsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQTtJQUMxQixPQUFPLENBQUM7UUFDSixDQUFDLEdBQUcsQ0FBQztVQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztVQUN4QixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7R0FDakI7Q0FDRjs7Ozs7QUFLRCxBQUFPLFNBQVMsUUFBUSxFQUFFLElBQUksRUFBWSxJQUFJLEVBQVU7RUFDdERHLElBQUksT0FBTyxDQUFBO0VBQ1gsU0FBUyxLQUFLLElBQUk7SUFDaEIsT0FBTyxHQUFHLElBQUksQ0FBQTtJQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7R0FDakI7RUFDRCxPQUFPLFlBQVk7SUFDakIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3JCLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO0dBQ2xDO0NBQ0Y7Ozs7O0FBS0QsQUFBTyxTQUFTLE9BQU8sRUFBRSxJQUFJLEVBQVksSUFBSSxFQUFVO0VBQ3JEQSxJQUFJLE9BQU8sQ0FBQTtFQUNYLFNBQVMsS0FBSyxJQUFJO0lBQ2hCLE9BQU8sR0FBRyxJQUFJLENBQUE7R0FDZjtFQUNELE9BQU8sWUFBWTtJQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFO01BQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0tBQ2I7SUFDRCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDckIsT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7R0FDbEM7Q0FDRjs7Ozs7QUFLRCxBQUFPLFNBQVMsUUFBUSxFQUFFLElBQUksRUFBWSxJQUFJLEVBQVUsWUFBWSxFQUFXO0VBQzdFQSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUE7RUFDWkEsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFBO0VBQ3BCSCxJQUFNLGdCQUFnQixHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFBO0VBQ3ZELE9BQU8sWUFBaUM7Ozs7SUFDdENBLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQTtJQUNwQkEsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFO01BQ3RCLElBQUksWUFBWSxFQUFFO1FBQ2hCLFNBQVMsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDcEMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxZQUFZO1VBQ2pDLFNBQVMsR0FBRyxJQUFJLENBQUE7VUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDMUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO09BQ3JCO01BQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7TUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQTtLQUNaO0dBQ0Y7Q0FDRjs7QUMvR0Q7O0FBRUEsU0FBU00sUUFBTSxFQUFFLEVBQUUsRUFBVzs7OztFQUM1QixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUU7RUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBQztJQUNoQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRTtJQUN4QyxLQUFLTixJQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7TUFDdEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNwQjtHQUNGLENBQUMsQ0FBQTtFQUNGLE9BQU8sRUFBRTtDQUNWOzs7Ozs7O0FBT0QsQUFBTyxTQUFTLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUNqREEsSUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7Ozs7RUFJakRNLFFBQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7O0VBRXBCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTtJQUNyQyxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsT0FBTyxJQUFJLElBQUk7R0FDdkIsQ0FBQyxDQUFBOztFQUVGLE9BQU8sS0FBSztDQUNiOzs7Ozs7O0FBT0QsQUFBTyxTQUFTLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7RUFHdkROLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUE7RUFDakQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTs7OztFQUk1Q00sUUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTs7O0VBR3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTtJQUNyQyxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsT0FBTyxJQUFJLElBQUk7R0FDdkIsQ0FBQyxDQUFBOztFQUVGLE9BQU8sS0FBSztDQUNiOzs7Ozs7O0FBT0QsQUFBTyxTQUFTLGFBQWEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0VBQ3pDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7Q0FDekI7O0FBRUQsQUFBTyxTQUFTLGFBQWEsRUFBRSxPQUFPLEVBQUU7RUFDdENOLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FDbEIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLEVBQUM7SUFDakQsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQUEsS0FBSyxFQUFDO01BQ3JCLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtRQUNmLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUE7T0FDaEM7TUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtLQUMzQixDQUFBO0dBQ0YsQ0FBQyxDQUFBO0VBQ0YsT0FBTyxRQUFRO0NBQ2hCLEFBRUQsQUFFQzs7QUM5RU0sU0FBUyxpQkFBaUIsRUFBRSxLQUFLLEVBQUU7RUFDeEMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFBLE9BQU8sSUFBSSxFQUFBO0VBQ3ZCLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxVQUFVLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7SUFDOUQsT0FBTyxLQUFLO0dBQ2I7RUFDRCxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7Q0FDeEM7O0FBRUQsQUFBTyxTQUFTLGVBQWUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0VBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO09BQ3hELENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUM1RDs7Ozs7OztBQU9ELEFBQU8sU0FBUyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO0VBQy9DQSxJQUFNLFFBQVEsR0FBRztJQUNmLEdBQUcsRUFBRSxDQUFDO0lBQ04sSUFBSSxFQUFFLENBQUM7SUFDUCxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVc7SUFDMUIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVO0dBQ3pCLENBQUE7RUFDREEsSUFBTSxNQUFNLEdBQUcsQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQztNQUN4QyxRQUFRLEdBQUcsU0FBUztNQUNwQixTQUFTLENBQUMscUJBQXFCLEVBQUUsR0FBRyxRQUFRLENBQUE7RUFDaEQsT0FBTyxlQUFlO0lBQ3BCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtJQUMxQixNQUFNLENBQUM7Q0FDVjs7QUFFRCxBQUFPLFNBQVMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFO0VBQzdDLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRTtJQUNqQkEsSUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDN0MsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRTtNQUM1QixPQUFPLGVBQWU7UUFDcEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTtRQUNyQyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFO09BQ3JDO0tBQ0Y7U0FDSTtNQUNILE9BQU8sZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUN2QztHQUNGO0VBQ0QsT0FBTyxLQUFLO0NBQ2I7OztBQUdELEFBQU8sU0FBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0VBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQSxPQUFPLElBQUksRUFBQTs7RUFFekIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFHO0lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7U0FDdEQsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQ3RFQSxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7TUFDaEYsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUU7UUFDN0JBLElBQU0sUUFBUSxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzNDRyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUE7UUFDcEJBLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQTtRQUN0QixJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO1VBQzVCLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFBO1NBQ3pCO2FBQ0k7VUFDSCxRQUFRLEdBQUcsSUFBSSxDQUFBO1NBQ2hCO1FBQ0RBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQTs7UUFFN0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFBO1FBQ3RGLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO1VBQ2pDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDaEIsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtXQUN6QjtVQUNELEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNuRTtRQUNESCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBQSxLQUFLLEVBQUM7VUFDN0JBLElBQU0sT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUE7VUFDbkZHLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQTtVQUNuQkEsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1VBQ2YsSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNoQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtZQUMxQixJQUFJLE9BQU8sRUFBRTtjQUNYLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFBO2NBQ3BCLElBQUksR0FBRyxRQUFRLENBQUE7YUFDaEI7aUJBQ0k7Y0FDSCxRQUFRLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQTtjQUN2QixJQUFJLEdBQUcsV0FBVyxDQUFBO2FBQ25CO1lBQ0QsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtjQUMzQixRQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQTthQUN2QjtZQUNESCxJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUE7WUFDM0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7Y0FDbEQsU0FBUyxFQUFFLFNBQVMsR0FBRyxhQUFhLEdBQUcsTUFBTTtrQkFDekMsU0FBUyxHQUFHLGFBQWEsR0FBRyxJQUFJLEdBQUcsSUFBSTthQUM1QyxDQUFDLENBQUMsQ0FBQTtZQUNILGFBQWEsR0FBRyxTQUFTLENBQUE7V0FDMUI7U0FDRixFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTs7UUFFWixTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtPQUNyRDtLQUNGO0dBQ0YsQ0FBQyxDQUFBO0NBQ0g7O0FDN0dEOzs7OztBQUtBO0FBR0FBLElBQU0sSUFBSSxHQWVOLE1BQU0sQ0FBQyxVQUFVLEdBQUc7RUFDdEIscUJBQXFCLEVBQUUsRUFBRTtFQUN6QixZQUFZLEVBQUUsRUFBRTtFQUNoQixxQkFBcUIsRUFBRSxFQUFFO0VBQ3pCLGFBQWEsRUFBRSxFQUFFO0VBQ2pCLG9CQUFvQixFQUFFLEVBQUU7RUFDeEIsVUFBVSxFQUFFLEVBQUU7RUFDZCxVQUFVLEVBQUUsRUFBRTtFQUNkLFVBQVUsRUFBRSxFQUFFO0VBQ2QsT0FBTyxFQUFFLEVBQUU7RUFDWCxJQUFJLEVBQUUsRUFBRTtFQUNSLG1CQUFtQixFQUFFLElBQUk7Q0FDMUIsQ0FBQTs7QUFFREEsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFBOztBQUVkQSxJQUFNLGNBQWMsR0FBVyxHQUFHLENBQUE7O0FBRWxDRyxJQUFJLHdCQUF3QixHQUFXLENBQUMsQ0FBQTtBQUN4Q0EsSUFBSSx3QkFBd0IsR0FBVyxDQUFDLENBQUE7O0FBRXhDLFNBQVMsTUFBTSxJQUFZO0VBQ3pCLE9BQU8sV0FBVyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Q0FDbEU7O0FBRUQsU0FBUyxVQUFVLElBQWdCO0VBQ2pDLE9BQU8sV0FBVyxDQUFDLFVBQVU7TUFDekIsV0FBVyxDQUFDLFVBQVUsRUFBRTtNQUN4QixDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxHQUFHLGNBQWMsRUFBRSxDQUFDO0NBQ2pEOzs7OztBQUtESCxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsWUFBWTtFQUMzQ0EsSUFBTSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUE7RUFDNUJBLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7RUFDMUJHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUNUQSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUE7RUFDWCxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUU7SUFDZEgsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQTtJQUMxQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFBO0lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO01BQ2hCLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtNQUNyQyxhQUFBLFdBQVc7S0FDWixDQUFDLENBQUE7SUFDRixDQUFDLEVBQUUsQ0FBQTtHQUNKO0VBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUNuQ0EsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFBO0VBQzFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ25CLE9BQUEsS0FBSztJQUNMLEtBQUEsR0FBRztJQUNILFFBQVEsRUFBRSxHQUFHLEdBQUcsS0FBSztHQUN0QixDQUFDLENBQUE7O0VBRUZBLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFBO0VBQ2xDLElBQUksQ0FBQyxDQUFBLFlBQVcsR0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtFQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUE7RUFDckMsQUFBSSxBQUFzQyxBQUFFO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQSxhQUFZLEdBQUUsR0FBRyxRQUFJLEdBQUUsR0FBRyxTQUFLLENBQUMsQ0FBQyxDQUFBO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtHQUM5QztDQUNGLEVBQUUsY0FBYyxDQUFDLENBQUE7O0FBRWxCLEFBQU8sU0FBUyxNQUFNLElBQVU7RUFDOUIsZUFBZSxFQUFFLENBQUE7Q0FDbEI7Ozs7O0FBS0RBLElBQU0sd0JBQXdCLEdBQUcsT0FBTyxDQUFDLFlBQVk7RUFDbkRBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFBO0VBQ3BCLHdCQUF3QixHQUFHLEdBQUcsQ0FBQTtFQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0NBQ3JDLEVBQUUsRUFBRSxDQUFDLENBQUE7O0FBRU4sQUFBTyxTQUFTLGVBQWUsSUFBVTtFQUN2Qyx3QkFBd0IsRUFBRSxDQUFBO0NBQzNCOzs7OztBQUtEQSxJQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxZQUFZO0VBQy9DQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtFQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQixLQUFLLEVBQUUsd0JBQXdCO0lBQy9CLEdBQUcsRUFBRSxHQUFHO0lBQ1IsUUFBUSxFQUFFLEdBQUcsR0FBRyx3QkFBd0I7R0FDekMsQ0FBQyxDQUFBOztFQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7SUFDN0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQTtJQUM5QixBQUFJLEFBQXNDLEFBQUU7TUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBLDBCQUF5QixHQUFFLEdBQUcsU0FBSyxDQUFDLENBQUMsQ0FBQTtLQUNsRDtHQUNGO0NBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQTs7QUFFTixBQUFPLFNBQVMsVUFBVSxJQUFVO0VBQ2xDLG1CQUFtQixFQUFFLENBQUE7Q0FDdEI7Ozs7O0FBS0RBLElBQU0sd0JBQXdCLEdBQUcsT0FBTyxDQUFDLFlBQVk7RUFDbkRBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFBO0VBQ3BCLHdCQUF3QixHQUFHLEdBQUcsQ0FBQTtFQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0NBQ3JDLEVBQUUsRUFBRSxDQUFDLENBQUE7O0FBRU4sQUFBTyxTQUFTLGVBQWUsSUFBVTtFQUN2Qyx3QkFBd0IsRUFBRSxDQUFBO0NBQzNCOzs7OztBQUtEQSxJQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxZQUFZO0VBQy9DQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtFQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQixLQUFLLEVBQUUsd0JBQXdCO0lBQy9CLEdBQUcsRUFBRSxHQUFHO0lBQ1IsUUFBUSxFQUFFLEdBQUcsR0FBRyx3QkFBd0I7R0FDekMsQ0FBQyxDQUFBO0NBQ0gsRUFBRSxFQUFFLENBQUMsQ0FBQTs7QUFFTixBQUFPLFNBQVMsVUFBVSxJQUFVO0VBQ2xDLG1CQUFtQixFQUFFLENBQUE7Q0FDdEI7O0FBRUQsQUFBTyxTQUFTLFFBQVEsRUFBRSxJQUFJLEVBQWdCO0VBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQTtDQUNyQjs7QUFFRCxBQUFPLFNBQVMsTUFBTSxFQUFFLElBQUksRUFBZ0I7RUFDMUNHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7RUFDekIsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUNSLEdBQUcsR0FBRyxDQUFDLENBQUE7R0FDUjtFQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtDQUM3Qzs7QUN6S0Q7O0FBRUEsQUFDQSxBQUNBLEFBQ0EsQUFFQUgsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUE7QUFDMUJHLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQTs7QUFFbkIsU0FBUyxVQUFVLEVBQUUsR0FBRztJQUNwQixZQUFZO0lBQ1osYUFBYSxFQUEwQjtFQUN6Q0gsSUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTtFQUN2QixHQUFHLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQTtFQUN6RCxHQUFHLENBQUMsT0FBTyxHQUFHLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQTtFQUM1RCxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtDQUNkOztBQUVELEFBQU8sU0FBUyxRQUFRLEVBQUUsSUFBSSxFQUFlLEdBQUcsRUFBVyxjQUFjLEVBQWlCO0VBQ3hGLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUU7RUFDcEIsU0FBUyxRQUFRLElBQUk7SUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMvQixJQUFJLFFBQVEsRUFBRTtNQUNaLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFO1FBQzFELE1BQU0sRUFBRSxDQUFBO09BQ1Q7V0FDSTtRQUNILFFBQVEsR0FBRyxLQUFLLENBQUE7T0FDakI7S0FDRjtHQUNGO0VBQ0QsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFLLElBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQSxNQUFFLENBQUE7SUFDL0MsT0FBb0QsR0FBRyxJQUFJO0lBQTVDLElBQUEsWUFBWTtJQUFVLElBQUEsYUFBYSxjQUE1QztJQUNOLGFBQWEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxjQUFBLFlBQVksRUFBRSxlQUFBLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMvRSxRQUFRLEVBQUUsQ0FBQTtHQUNYLEVBQUUsVUFBVSxHQUFHLEVBQUU7SUFDaEIsYUFBYSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDL0MsSUFBSSxjQUFjLEVBQUU7TUFDbEIsVUFBVSxDQUFDLGNBQWMsRUFBRSxZQUFZO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE1BQUssSUFBRSxjQUFjLElBQUksRUFBRSxDQUFBLE1BQUUsQ0FBQTtPQUMzRCxDQUFDLENBQUE7S0FDSDtJQUNELFFBQVEsRUFBRSxDQUFBO0dBQ1gsQ0FBQyxDQUFBO0NBQ0g7O0FBRUQsQUFBTyxTQUFTLFlBQVksRUFBRSxFQUFFLEVBQTJDLGdCQUFnQixFQUFrQjtFQUMzRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDckIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxFQUFDLFNBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFBLENBQUM7R0FDMUM7RUFDRCxFQUFFLEdBQUcsRUFBRSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUE7RUFDeEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTtFQUNuQkEsSUFBTSxJQUFJLEdBQWEsQ0FBQyxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFBO0VBQzFFLEtBQUtHLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM1Q0gsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ25CLElBQUksT0FBTyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksZ0JBQWdCLEVBQUU7TUFDN0QsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO0tBQ2hGO1NBQ0ksSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7TUFDbEMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO0tBQ2hGOzs7Ozs7O0dBT0Y7Q0FDRjs7Ozs7Ozs7Ozs7O0FBWURBLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQTtBQUNoQkcsSUFBSUksTUFBSSxHQUFXLENBQUMsQ0FBQTtBQUNwQixBQUFPLFNBQVMsbUJBQW1CLEVBQUUsSUFBaUIsRUFBRSxFQUFzQyxFQUFFOzZCQUF2RCxHQUFXLEVBQUUsQ0FBSTt5QkFBQSxHQUF1QixRQUFRLENBQUMsSUFBSTs7RUFDNUZKLElBQUksRUFBRSxHQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtFQUMvQyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO0lBQ3hCLEVBQUUsR0FBR0ksTUFBSSxFQUFFLENBQUE7SUFDWCxFQUFFLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7R0FDbkQ7O0VBRUQsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7RUFDOUJQLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUTtNQUN6QixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7TUFDM0IsVUFBVSxDQUFDLElBQUksQ0FBQzs7O01BR2hCLElBQUksQ0FBQztLQUNOLENBQUE7RUFDSCxPQUFPLFNBQVM7Q0FDakI7O0FDckdEOztBQUVBOzs7Ozs7OztBQVVBRyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUE7QUFDcEJILElBQU0sc0JBQXNCLEdBQUcsR0FBRyxDQUFBOzs7OztBQUtsQ0EsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsR0FBMEIsQ0FBQyxDQUFBO0FBQzdERyxJQUFJLEtBQUssR0FBVyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLGdCQUFnQixHQUFHLENBQUM7SUFDaEUsZ0JBQWdCO0lBQ2hCLHNCQUFzQixDQUFBOztBQUUxQkEsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pFSCxJQUFNLFNBQVMsR0FBRyxjQUFjLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtBQUNwRixJQUFJLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO0VBQ25ELEtBQUssR0FBRyxTQUFTLENBQUE7Q0FDbEI7O0FBRURHLElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQTtBQUNuQkEsSUFBSSxNQUFNLEdBQVUsSUFBSSxDQUFBO0FBQ3hCQSxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUE7QUFDM0JBLElBQUksWUFBWSxHQUFXLENBQUMsQ0FBQTs7QUFFNUJILElBQU0sSUFBSSxHQU1OO0VBQ0YsS0FBQSxHQUFHO0VBQ0gsS0FBSyxFQUFFLENBQUM7RUFDUixHQUFHLEVBQUUsQ0FBQztFQUNOLFdBQVcsRUFBRSxDQUFDO0VBQ2QsWUFBWSxFQUFFLENBQUM7Q0FDaEIsQ0FBQTs7Ozs7QUFLRCxTQUFTLFdBQVcsRUFBRSxLQUFLLEVBQWdCO0VBQ3pDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFBO0VBQzNCQSxJQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFBO0VBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFO0VBQ3BDQSxJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7RUFDdkQsSUFBSSxDQUFDLFlBQVksRUFBRTtJQUNqQixHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQTtJQUMvQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtHQUNmO0NBQ0Y7O0FBRUQsU0FBUyxlQUFlLEVBQUUsS0FBSyxFQUFnQjtFQUM3QyxJQUFJLENBQUMsY0FBYyxFQUFFO0lBQ25CLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9DLGNBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFBO0dBQ3JEO09BQ0k7SUFDSEEsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNsRSxJQUFJLFNBQVMsS0FBSyxLQUFLLEVBQUU7TUFDdkIsTUFBTTtLQUNQO0dBQ0Y7RUFDRCxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUE7Q0FDbkQ7Ozs7O0FBS0QsQUFBTyxTQUFTUSxNQUFJLEVBQUUsYUFBNkIsRUFNakQ7K0NBTmlDLEdBQVcsS0FBSzs7RUFPakQsSUFBSSxDQUFDLFFBQVEsRUFBRTtJQUNiLFFBQVEsR0FBRyxJQUFJLENBQUE7O0lBRWZSLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUE7SUFDM0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtNQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtNQUMxRCxNQUFNO0tBQ1A7SUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtNQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUE7TUFDbkUsTUFBTTtLQUNQOztJQUVELEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQTtJQUN4QyxNQUFNLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO0lBQ3BELFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQzFCLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFBOzs7SUFHNUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3hCLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQTs7Ozs7Ozs7SUFROUJBLElBQU0sS0FBSyxHQUFHLFdBQVcsR0FBRyxhQUFhLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCekMsTUFBTSxDQUFDLElBQUksRUFBRTtNQUNYLE9BQUEsS0FBSztNQUNMLFdBQVcsRUFBRSxXQUFXLEdBQUcsR0FBRztNQUM5QixZQUFZLEVBQUUsWUFBWSxHQUFHLEdBQUc7S0FDakMsQ0FBQyxDQUFBO0dBQ0g7O0VBRUQsT0FBTyxJQUFJO0NBQ1o7Ozs7OztBQU1ELEFBQU8sQUFLTjs7QUFFRCxBQUFPLFNBQVMsZUFBZSxJQU03QjtFQUNBLE9BQU8sSUFBSTtDQUNaOzs7QUN2S0QsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtFQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQztBQUNILGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztBQUNuQyxTQUFTLGdCQUFnQixDQUFDLEdBQUcsRUFBRTtFQUM3QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNuRDtBQUNELGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDOzs7O0FDVG5DLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFDSCxlQUFlLEdBQUcsY0FBYyxDQUFDOztBQUVqQyxJQUFJLGlCQUFpQixHQUFHdkQsa0JBQTZCLENBQUM7O0FBRXRELElBQUksa0JBQWtCLEdBQUcsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7QUFFbkUsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFOztBQUUvRixTQUFTLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0VBQ3pELElBQUksZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQzdDLElBQUksZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO01BQzNELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDMUY7R0FDRjtDQUNGO0FBQ0QsY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7Ozs7QUNyQm5DLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFDSCxlQUFlLEdBQUcsV0FBVyxDQUFDO0FBQzlCLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7RUFDOUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtJQUNsRCxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Ozs7SUFJbEUsSUFBSSxjQUFjLEVBQUU7TUFDbEIsT0FBTyxjQUFjLENBQUM7S0FDdkI7R0FDRjtDQUNGO0FBQ0QsY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7Ozs7QUNqQm5DLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFDSCxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7QUFDbkMsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7SUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUNsQjtDQUNGOztBQUVELFNBQVMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRTtFQUN0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtNQUNqRCxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNCO0dBQ0YsTUFBTTtJQUNMLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDeEI7Q0FDRjtBQUNELGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDOzs7O0FDckJuQyxZQUFZLENBQUM7O0FBRWIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0VBQzNDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDO0FBQ0gsZUFBZSxHQUFHLFFBQVEsQ0FBQztBQUMzQixTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7RUFDdkIsT0FBTyxLQUFLLFlBQVksTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN6RDtBQUNELGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDOzs7O0FDVG5DLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFDSCxlQUFlLEdBQUcsY0FBYyxDQUFDOztBQUVqQyxJQUFJLGVBQWUsR0FBR0ssZ0JBQWtDLENBQUM7O0FBRXpELElBQUksZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRS9ELElBQUksWUFBWSxHQUFHRCxhQUErQixDQUFDOztBQUVuRCxJQUFJLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFekQsSUFBSSxpQkFBaUIsR0FBR0Ysa0JBQW9DLENBQUM7O0FBRTdELElBQUksa0JBQWtCLEdBQUcsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7QUFFbkUsSUFBSSxTQUFTLEdBQUdGLFVBQTRCLENBQUM7O0FBRTdDLElBQUksVUFBVSxHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUVuRCxTQUFTLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7O0FBRS9GLFNBQVMsY0FBYyxDQUFDLElBQUksRUFBRTtFQUM1QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUztNQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7RUFFM0IsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0lBQ3hCLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO01BQzFCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7O01BRzVCLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtRQUNsQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOztPQUVwQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMvQixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7O1FBRXZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7VUFDaEQsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7VUFDL0YsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUU7Ozs7UUFJRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxhQUFhLENBQUM7U0FDakM7T0FDRixNQUFNO1FBQ0wsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7Ozs7UUFJN0YsSUFBSSxlQUFlLEVBQUU7VUFDbkIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGVBQWUsQ0FBQztTQUNuQzs7UUFFRCxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztPQUMzRDtLQUNGOztJQUVELE9BQU8sS0FBSyxDQUFDO0dBQ2Q7O0VBRUQsT0FBTyxTQUFTLENBQUM7Q0FDbEI7QUFDRCxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7OztBQ3BFbkMsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtFQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQztBQUNILGVBQWUsR0FBRztFQUNoQixPQUFPLEVBQUUsRUFBRTtFQUNYLFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSx5QkFBeUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLG1CQUFtQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLG1CQUFtQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLHVCQUF1QixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLHNCQUFzQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxL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LENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxPQUFPLENBQUMsRUFBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsS0FBSyxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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
