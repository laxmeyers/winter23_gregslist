import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";


class HousesService {
  deleteHouse(houseId) {
    let houseIndex = appState.houses.findIndex(h => h.id == houseId)

    if (houseIndex == -1){
        throw new Error('Not a good id.')
    }

    appState.houses.splice(houseIndex, 1)
    saveState('houses', appState.houses)
    appState.emit('houses')
  }

  handleFormSubmit(formData) {
    let house = new House(formData)

    appState.houses.push(house)
    appState.emit('houses')
    saveState('houses', appState.houses)
  }
  
  setActiveHouse(houseId) {
    let house =  appState.houses.findIndex(h => h.id == houseId )

    if(house == -1){
        throw new Error('Invalid House Id')
    }

    // @ts-ignore
    appState.house = appState.houses[house]
    appState.emit('house')
  }
}

// singleton pattern more on this later
export const housesService = new HousesService()