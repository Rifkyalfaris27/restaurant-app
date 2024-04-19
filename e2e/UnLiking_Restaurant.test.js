Feature('Unliking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorites')

  I.see('"Tidak Ada Restaurant Yang Disukai"', '.nothing-found-restaurant')

  I.amOnPage('/')

  I.seeElement('.post-item__title a')
  I.click(locate('.post-item__title a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorites')
  I.seeElement('.favorite-item')
})

Scenario('unliking one restaurant from home page', async ({ I }) => {
  I.amOnPage('/')
  I.seeElement('.post-item__title a')
  I.click(locate('.post-item__title a').first())

  I.seeElement('[aria-label="unlike this restaurant"]')
  I.click('[aria-label="unlike this restaurant"]')

  I.amOnPage('/#/favorites')
  I.see('"Tidak Ada Restaurant Yang Disukai"', '.nothing-found-restaurant')
})

Scenario('unliking one restaurant from favorite page', async ({ I }) => {
  I.click(locate('.favorite-title a').first())

  I.seeElement('[aria-label="unlike this restaurant"]')
  I.click('[aria-label="unlike this restaurant"]')

  I.amOnPage('/#/favorites')
  I.see('"Tidak Ada Restaurant Yang Disukai"', '.nothing-found-restaurant')
})
