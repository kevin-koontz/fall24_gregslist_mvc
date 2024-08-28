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

  get cardHTMLTemplate() {
    return `
    <div class="col-md-12 p-0 mb-3">
      <section class="row bg-dark shadow text-light house-border-LG">
        <div class="col-md-4 p-0">
          <img
            src="${this.imgUrl}"
            alt="${this.year} ${this.price}" class="img-fluid house-img">
        </div>
        <div class="col-md-8">
          <div class="p-2">
            <p>Year: ${this.year}</p>
            <p>SQFT: ${this.sqft}</p>
            <p>Bedrooms: ${this.bedrooms}</p>
            <p>Bathrooms: ${this.bathrooms}</p>
            <p>Price: ${this.price}</p>
            <p>Description: ${this.description}</p>
          </div>
        </div>
      </section>

    </div>`
  }
}