import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantItemTemplate } from '../../templates/template-creator'

const Home = {
  async render () {
    return `
    <section class="content" id="content">
      <article class="explore" tabindex="0" id="skip-content">
        <h2>Explore Restarurant</h2>
      </article>
      <article class="main-item" id="main-item"></article>
    </section>
    `
  },

  async afterRender () {
    const restaurants = await RestaurantSource.restaurantHome()
    // console.log(restaurants);
    const restaurantContainer = document.querySelector('#main-item')
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Home
