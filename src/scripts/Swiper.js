export default class Swiper {

  constructor(options = null) {
    this.resetOptions(options)
    this.width = this.updateWidth()
    this.randomPosition()
    this.updateChildren()
    this.attachListener()
  }

  randomPosition() {
    const { children } = this.wrapper

    this.currentChild = Math.floor(Math.random() * children.length)
  }

  attachListener() {
    this.canvas.addEventListener('mousemove', e => {

      const { threshold } = this.options
      const { clientX, clientY } = e

      if(this.calculateDelta(clientX, clientY) > threshold) {
        this.setCurrentPosition(clientX, clientY)
        this.updateChildren()
      }

    })
    this.canvas.addEventListener('touchmove', e => {
      const { threshold } = this.options
      const { changedTouches } = e
      const { clientX } = changedTouches[0]

      if(this.calculateDelta(clientX) > threshold) {
        this.setCurrentPosition(clientX)
        this.updateChildren()
      }
    })
  }

  nextChild() {
    const { children } = this.wrapper

    return (this.currentChild + 1) % children.length
  }

  setCurrentPosition(x, y = 0) {
    this.currentPosition = { x, y }
  }

  calculateDelta(clientX, clientY = 0) {
    if (!this.currentPosition) {
      this.currentPosition = {
        x: clientX,
        y: clientY
      }
    }
    
    const { x , y } = this.currentPosition

    return Math.hypot((clientX - x), (clientY - y))
  }

  updateChildren() {
    const { children } = this.wrapper
    const { childClass } = this.options
    const nextChild = this.nextChild()

    children[this.currentChild].classList.remove(childClass)
    children[nextChild].classList.add(childClass)

    this.currentChild = nextChild
  }

  updateWidth() {
    const { offsetWidth } = this.canvas

    return this.width = offsetWidth
  }

  resetOptions(options) {
    this.options = {
      ...{
        canvasSelector: 'header',
        wrapperSelector: '.swiper-wrapper',
        childClass: '--active',
        threshold: 100
      },
      ...options
    }
  }

  get wrapper() {
    return document.querySelector(this.options.wrapperSelector)
  }

  get canvas() {
    return document.querySelector(this.options.canvasSelector)
  }

}