import { range } from 'lodash'

export default class Anchore {
    
  constructor(selector, callback, threshold = .1) {
    this.observer = null
    this.element = null
    this.callback = callback
    this.selector = selector
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: [...range(0, 1, threshold), 1],
      test: true
    }

    this.init()
  }

  init() {
    window.addEventListener('load', (event) => {
      this.selectElement()
      this.createObserver()
      this.startObserver()
    }, false)
  }

  selectElement() {
    this.element = document.querySelector(this.selector)
  }
  
  createObserver() {
    this.observer = new IntersectionObserver(this.callback, this.options)
  }

  startObserver() {
    if (this.element) {
      this.observer.observe(this.element)
    }
  }
}

// Example Code
// ------------
//
// new Anchore('#anchore', (changes, observer) => {

//   changes.forEach((change) => {
//     const { top } = change.boundingClientRect
//     const { innerHeight } = window
//     const display = document.querySelector('#display')

//     if (top >= 0) {
//       const threshold = Math.floor((innerHeight - top) / innerHeight * 1000) / 1000
//       const scale = 1 + threshold * 3

//       display.style.transform = `scale(${scale})`
//     }
//   })
// }, .005)