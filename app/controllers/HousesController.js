import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";

export class HousesController {
  constructor() {
    console.log('Houses controller is loaded');

    this.drawHouses()
  }


  drawHouses() {
    const houses = AppState.houses
    console.log('houses in the appstate', houses);
    let houseHTMLContent = ''
    houses.forEach(house => houseHTMLContent += house.cardHTMLTemplate)
    const housesElm = document.getElementById('houses-listing')
    housesElm.innerHTML = houseHTMLContent

  }
}

