import RestaurantSource from '../data/restaurant-source'
import UrlParser from '../routes/url-parser'

const addNewReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner()
  const ussernameReview = document.querySelector('#userName')
  const userReview = document.querySelector('#userReview')
  const reviewContainer = document.querySelector('#reviews')

  const dataInput = {
    id: url.id,
    name: ussernameReview.value,
    review: userReview.value
  }

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const newReview = `
    <div class="review-item">
        <p class="reviewers-name">from : ${dataInput.name}</p>
        <p class="review">${dataInput.review}</p>
        <p class="date">${date}</p>
    </div>
    `

  await RestaurantSource.addReview(dataInput)
  reviewContainer.innerHTML += newReview
  ussernameReview.value = ''
  userReview.value = ''
}

export default addNewReview
