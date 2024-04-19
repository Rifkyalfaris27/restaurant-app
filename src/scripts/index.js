import 'regenerator-runtime'
import App from './view/app'
import '../styles/style.css'
import '../styles/responsive.css'
import swRegister from './utils/sw-register'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main'),
  list: document.querySelector('.list__container')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
