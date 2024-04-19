import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import { createRestaurantDetailTemplate } from '../../templates/template-creator'
import addNewReview from '../../utils/addReview'
import LikeButtonPresenter from '../../utils/like-button-presenter'

const Detail = {
  async render () {
    return `
        <article class="detail-container">
            <div class="detail" id="detail"></div>
        </article>
        <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantSource.restaurantDetail(url.id)
    const restaurantContainer = document.querySelector('#detail')
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        image: restaurant.pictureId
      }
    })

    const formReveiw = document.querySelector('.review-wrapper')
    formReveiw.addEventListener('submit', async (event) => {
      event.preventDefault()
      addNewReview()
    })
  }
}

export default Detail
