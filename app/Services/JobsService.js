import { appState } from "../AppState.js";

class JobsService {
  setActiveJob(jobId) {
    throw new Error("Method not implemented.");
  }

  setActiveHouse(jobId) {
    let house =  appState.houses.findIndex(h => h.id == houseId )

    if(house == -1){
        throw new Error('Invalid House Id')
    }

    // @ts-ignore
    appState.house = appState.houses[house]
    appState.emit('house')
  }
}
export const jobsService = new JobsService()