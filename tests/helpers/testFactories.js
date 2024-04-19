import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";
import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    LikeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
