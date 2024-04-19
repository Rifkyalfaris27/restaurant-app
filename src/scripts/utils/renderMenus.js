const RenderAddition = {
  renderMenus (menus) {
    const menuItem = menus
      .map((menu) => `<li class="list" tabindex="0">${menu.name}</li>`)
      .join('')
    return `<ul class="menu">${menuItem}</ul>`
  },

  renderReview (reviews) {
    const reviewItems = reviews
      .map(
        (review) => `
              <div class="review-item">
                <p class="reviewers-name" tabindex="0"><span>from</span> : 
                ${review.name}</p>
                <p class="review" tabindex="0">${review.review}</p>
                <p class="date" tabindex="0">${review.date}</p>
              </div>
              `
      )
      .join('')
    return reviewItems
  }
}

export default RenderAddition
