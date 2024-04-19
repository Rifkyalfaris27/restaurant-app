import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantFavoriteTemplate } from '../../templates/template-creator'

const Favorites = {
  async render () {
    return `
        <article class="favorite-restaurant">
            <h2 class="favorite-heading">Your Liked Restaurant</h2>
            <div id="favorite-container" class="favorite-container"></div>
        </article>
    `
  },

  async afterRender () {
    const restaurnts = await FavoriteRestaurantIdb.getAllRestaurant()
    const restaurantsContainer = document.querySelector('#favorite-container')
    const favoriteRestaurant = document.querySelector('.favorite-restaurant')

    if (restaurnts.length < 1) {
      const nothingRestaurantFavorite = document.createElement('h3')
      nothingRestaurantFavorite.innerText = '"Tidak Ada Restaurant Yang Disukai"'
      nothingRestaurantFavorite.classList.add('nothing-found-restaurant')
      favoriteRestaurant.appendChild(nothingRestaurantFavorite)
    }

    restaurnts.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantFavoriteTemplate(restaurant)
    })
  }
}

export default Favorites
