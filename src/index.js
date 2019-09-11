import  './styles/index.scss'
import './scripts/appHeight'
import EventHandler from './scripts/EventHandler'

new EventHandler((event) => scrollEvent())

const display = document.querySelector('#display')
const anchore = document.querySelector('#anchore')

const scrollEvent = () => {
  const { top } = anchore.getBoundingClientRect()
  const { innerHeight } = window

  if (top <= innerHeight) {
    const threshold = Math.floor((innerHeight - top) / innerHeight * 1000) / 1000

    const scale = 1 + threshold * 3
    display.style.transform = `scale(${scale})`
  }

  requestAnimationFrame(scrollEvent)
}