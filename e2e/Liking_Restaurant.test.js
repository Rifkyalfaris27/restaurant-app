const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorites')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see('"Tidak Ada Restaurant Yang Disukai"', '.nothing-found-restaurant')

  I.amOnPage('/')

  I.seeElement('.post-item__title a')
  const firstRestaurant = locate('.post-item__title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(locate(firstRestaurant))

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorites')
  I.seeElement('.favorite-item')
  const likedRestaurant = await I.grabTextFrom('.favorite-title')

  assert.strictEqual(firstRestaurantTitle, likedRestaurant)
})
