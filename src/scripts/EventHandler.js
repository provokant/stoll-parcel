export default class EventHandler {
  
  constructor(callback) {
    this.callback = callback

    this.init()
  }

  init() {
    window.addEventListener('DOMContentLoaded', this.callback, false)
  }
}