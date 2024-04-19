Feature('Add Customer Reviews')

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

Scenario('add review from home page', ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.post-item__title a')

  I.click(locate('.post-item__title a').first())

  const reviewerName = 'tester1'
  const reviews = 'harganya sangat terjangkau'

  // customer name
  I.seeElement('#userName')
  I.appendField('#userName', reviewerName)

  I.seeInField('#userName', reviewerName)
  I.seeElement('#userName')

  // customer reviews
  I.seeElement('#userReview')
  I.appendField('#userReview', reviews)

  I.seeInField('#userReview', reviews)
  I.seeElement('#userReview')

  I.seeElement('#submit-button')
  I.click('#submit-button')
})

Scenario('add review from favorites page', ({ I }) => {
  I.seeElement('.favorite-title a')

  I.click(locate('.favorite-title a').first())

  const reviewerName = 'tester2'
  const reviews = 'tempatnya sangat nyaman'

  // customer name
  I.seeElement('#userName')
  I.appendField('#userName', reviewerName)

  I.seeInField('#userName', reviewerName)
  I.seeElement('#userName')

  // customer reviews
  I.seeElement('#userReview')
  I.appendField('#userReview', reviews)

  I.seeInField('#userReview', reviews)
  I.seeElement('#userReview')

  I.seeElement('#submit-button')
  I.click('#submit-button')
})
