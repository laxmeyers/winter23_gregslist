import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { saveState } from "../Utils/Store.js";

class JobsService {
  deleteJob(jobId) {
    let jobIndex = appState.jobs.findIndex(j => j.id == jobId)

    if (jobIndex == -1){
        throw new Error('Not a good id.')
    }

    appState.jobs.splice(jobIndex, 1)
    saveState('jobs', appState.jobs)
    appState.emit('jobs')
  }

  handleFormSubmit(formData) {
    let job = new Job(formData)

    appState.jobs.push(job)
    appState.emit('jobs')
    saveState('jobs', appState.jobs)
  }

  setActiveJob(jobId) {
    let job =  appState.jobs.findIndex(j => j.id == jobId )
    if(job == -1){
        throw new Error('Invalid Job Id')
    }

    // @ts-ignore
    appState.job = appState.jobs[job]
    appState.emit('job')
  }
}
export const jobsService = new JobsService()