import  './styles/index.scss'
import './scripts/appHeight'
import EventHandler from './scripts/EventHandler'


const headline = document.querySelector('#display h1')
// const anchore = document.querySelector('#anchore')

// let initShadow = null
let lastTop = null

new EventHandler((event) => scrollEvent())

const scrollEvent = () => {
  const { top } = anchore.getBoundingClientRect()
  const { innerHeight } = window
  const shouldTransform = top <= innerHeight 
    && lastTop !== top 
    && top > 0

  // if (!initShadow) {
  //   initShadow = shadowParams(getComputedStyle(headline).textShadow)
  // }
  
  if (shouldTransform) {
    const threshold = Math.floor((innerHeight - top) / innerHeight * 1000) / 1000

    const scale = 1 + threshold * 3
    // headline.style.transform = `scale(${scale})`
//     const threshold = (innerHeight - top) / innerHeight
//     const { textShadow } = getComputedStyle(headline)
//     const initShadowY = Number.parseInt(initShadow.y)
//     const delta = Math.floor(initShadowY * threshold * 1000) / 1000
//     const newShadowY = initShadowY + delta * delta * delta * (innerHeight * 0.1) + 'px'
//     const newShadow = Object.values({...initShadow, y: newShadowY}).join(' ')

//     console.log(newShadow)

//     headline.style.textShadow = newShadow

//     lastTop = top
  }

  requestAnimationFrame(scrollEvent)
}

// function shadowParams(shadow) {
//   const hasPx = (a) => a.match(/\dpx/)
//   const hasNotPx = (a) => !a.match(/\dpx/)
//   const params = shadow.split(' ')
//   const color = params
//     .filter(hasNotPx)
//     .join(' ')
//   const transform = params
//     .filter(hasPx)

//   return {
//     color,
//     x: transform[0],
//     y: transform[1],
//     blur: transform[2]
//   }
// }