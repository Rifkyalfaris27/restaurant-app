import CONFIG from '../globals/config'
import RenderAddition from '../utils/renderMenus'

const createRestaurantItemTemplate = (restaurant) => `
<div class="post-item">
  <div class="post-item__img">
    <img class="lazyload post-item__tumbnail" data-src="${
  CONFIG.BASE_URL_IMAGE + restaurant.pictureId
}"alt="Dicoding Fact Sheet" />
    <h2 class="post-item__city" tabindex="0">${restaurant.city}</h2>
  </div>
  <div class="post-item__content">
    <h3 class="post-item__rating" tabindex="0">Rating : ${
  restaurant.rating
}</h3>
    <h3 class="post-item__title"><a href="#/detail/${
  restaurant.id
}" tabindex="0">${restaurant.name}</a></h3>
    <p class="post-item__description" tabindex="0">${restaurant.description}</p>
  </div> 
</div>
`

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail-title">
    <h2 class="Restaurant-title" tabindex="0">${restaurant.name}</h2>
  </div>
  <div class="full-address">
    <h4 class="addresss" tabindex="0">${restaurant.address}</h4>
    <h3 class="city" tabindex="0">${restaurant.city}</h3>
  </div>
  <div class="detail-top-content">
    <div class="detail-image-container">
      <img src="${
  CONFIG.BASE_URL_IMAGE + restaurant.pictureId
}" alt="detail-image-restaurant" class="detail-image" tabindex="0">
    </div>
    <div class="detail-description">
      <div class="description">
        <p tabindex="0">${restaurant.description}</p>
      </div>      
    </div>
  </div>
  <div class="menus-container">
    <h3 tabindex="0">Menus</h3>
    <div class="menus">
      <div class="foods">
        <h3 tabindex="0">Foods</h3>
        ${RenderAddition.renderMenus(restaurant.menus.foods)}
      </div>
      <div class="drinks">
        <h3 tabindex="0">Drinks</h3>
        ${RenderAddition.renderMenus(restaurant.menus.drinks)}
      </div>
    </div>
  </div>
  <div class="customer-reviews">
    <h3 tabindex="0">Reviews</h3>
    <div class="add-review-container">
      <h4 tabindex="0">Add Review</h4>
      <form class="review-wrapper" id="review-wrapper>
        <label for="userName"></label>
        <input tabindex="0" type="text" placeholder="Name" class="add-review-name" id="userName" name="name">
        <label for=userReview"></label>
        <input tabindex="0" type="text" placeholder="Review" class="add-review" id="userReview" name="review">
        <button tabindex="0" type="submit" class="submit-button" id="submit-button">Submit</button>
      </form>
    </div>
    <div class="reviews" id="reviews" tabindex="0" aria-label="customer review">
      ${RenderAddition.renderReview(restaurant.customerReviews)}
    </div>
  </div>
`

const createRestaurantFavoriteTemplate = (restaurant) => `
<div class="favorite-item">
  <div class="favorite-top__content">
    <img class="lazyload favorite-image" data-src="${
  CONFIG.BASE_URL_IMAGE + restaurant.image
}" tabindex="0"> 
    <h3 class="favorite-city" tabindex="0">${restaurant.city}</h3>  
  </div>
  <div class="teks-container">
    <h2 class="favorite-title"><a href="#/detail/${restaurant.id}" tabindex="0">${
  restaurant.name
}</a><h2>  
  </div>
</div>
`

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantFavoriteTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
