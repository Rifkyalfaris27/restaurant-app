import Detail from '../view/pages/detail'
import Favorites from '../view/pages/favorite'
import Home from '../view/pages/home'

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorites': Favorites
}

export default routes
