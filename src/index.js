import  './styles/index.scss'
import EventHandler from './scripts/EventHandler'
import Swiper from './scripts/Swiper'

const headline = document.querySelector('#display h1')
let lastTop = null

const swiper = new Swiper({ 
  canvasSelector: '.first-impression',
  wrapperSelector: '.first-impression .bg',
  childClass: '--active',
  threshold: 120 
})
const scrollHandler = new EventHandler((event) => scrollEvent())

const scrollEvent = () => {
  const { top } = anchore.getBoundingClientRect()
  const { innerHeight } = window
  const shouldTransform = top <= innerHeight 
    && lastTop !== top 
    && top > 0

  if (shouldTransform) {
    const threshold = Math.floor((innerHeight - top) / innerHeight * 1000) / 1000

    const scale = 1 + threshold * 3
  }

  requestAnimationFrame(scrollEvent)
}