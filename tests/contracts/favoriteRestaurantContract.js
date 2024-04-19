const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it("harus mengembalikan restaurant yang telah ditambahkan", async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it("harus menolak penambahan restaurant jika tidak memiliki property yang benar", async () => {
    favoriteRestaurant.putRestaurant({ aProperty: "property" });

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([]);
  });

  it("dapat mengembalikan semua restaurant yang telah ditambahkan", async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it("harus bisa menghapus restaurant favorite", async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });
    
    await favoriteRestaurant.deleteRestaurant(1);
    
    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([{id: 2}, {id: 3}])
});

it("harus menangani permintaan untuk menghapus restaurant meskipun restaurant tersebut belum ditambahkan", async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });
    
    await favoriteRestaurant.deleteRestaurant(4)

    expect(await favoriteRestaurant.getAllRestaurant()).toEqual([{id: 1}, {id: 2}, {id: 3}])
  });
};

export {itActsAsFavoriteRestaurantModel}
