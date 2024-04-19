import { itActsAsFavoriteRestaurantModel } from "./contracts/favoriteRestaurantContract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("Implementasi tes kontrak Idb restaurant favorite", () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(
      async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      }
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
