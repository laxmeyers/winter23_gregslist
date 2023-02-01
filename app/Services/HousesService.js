import { appState } from "../AppState.js";


class HousesService {
  handleFormSubmit(formData) {
    throw new Error("Method not implemented.");
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