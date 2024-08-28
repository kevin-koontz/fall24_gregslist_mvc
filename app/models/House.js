import { generateId } from "../utils/GenerateId.js"

export class House {

  /***@param {{year: Number; name: String; bedrooms: Number; bathrooms: Number; sqft: Number; price: Number; description: String; imgUrl: String}}*/
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
}