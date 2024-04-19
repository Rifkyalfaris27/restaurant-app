import { itActsAsFavoriteRestaurantModel } from "./contracts/favoriteRestaurantContract";

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    return favoriteRestaurant.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurant() {
    return favoriteRestaurant;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty("id")) {
      return;
    }

    // memastikan id belum ada dalam daftar favoriteRestaurant
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurant = favoriteRestaurant.filter(
      (restaurant) => restaurant.id !== id
    );
  },
};

describe("Implementasi tes kontrak Array restaurant favorite", () => {
  afterEach(() => {
    favoriteRestaurant = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
