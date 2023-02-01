import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { housesService } from "../Services/HousesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function _drawHouses(){
  let houses = appState.houses
  let template = ''

  houses.forEach(h => template += h.housesTemplate)

  setHTML('listings', template)
}

function _drawHouse(){
  setText('listingModalLabel', `${appState.house.name} $${appState.house.price}`)
  setHTML('listing-modal-body', appState.house.houseModelTemplate)
}

export class HousesController {


  constructor() {
    console.log('Hello this is the houses Controller')

    appState.on('house', _drawHouse)
    appState.on('houses', _drawHouses)
    
  }
  
  show(){
    _drawHouses()
    setHTML('the-actual-form', House.housesFormTemplate())
    setText('add-listing-button', "🏡 New House")
    // setText('listings', 'This is the homes')
    console.log('TODO houses')
  }

  setActiveHouse(houseId){
    try {
      housesService.setActiveHouse(houseId)
    } catch (error) {
      Pop.error(error)
    }
  }

  handleFormSubmit(){
    try {
      event?.preventDefault()

      let form = event?.target
      let formData = getFormData(form)

      housesService.handleFormSubmit(formData)
    } catch (error) {
      Pop.error(error)
    }
  }

  async deleteHouse(houseId){
    try {
      const yes = await Pop.confirm('Are you sure?')
      if (!yes){return}

      housesService.deleteHouse(houseId)
    } catch (error) {
      Pop.error(error)
    }
  }

}
