export default class AppHeight {
  constructor() {
    const doc = document.documentElement
    window.addEventListener('resize', () => {
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    })
  }
}