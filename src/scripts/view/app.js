import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'
import DrawerInitiator from '../utils/drawer-initiator'

class App {
  constructor ({ button, drawer, content, list }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._list = list

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      list: this._list
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()

    const mainContent = document.querySelector('#main')
    const skipLink = document.querySelector('#skip-link')
    skipLink.addEventListener('click', (event) => {
      event.preventDefault()
      mainContent.scrollIntoView({ behavior: 'smooth' })
      skipLink.blur()
      console.log('ditekan')
    })
  }
}

export default App
