import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantSource {
  static async restaurantHome () {
    const response = await fetch(API_ENDPOINT.LIST)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async restaurantDetail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }

  static async addReview (datas) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datas)
    }
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, options)
    return response.json()
  }
}

export default RestaurantSource
