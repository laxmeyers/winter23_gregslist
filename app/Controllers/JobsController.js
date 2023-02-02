import { appState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function _drawJobs(){
  let jobs = appState.jobs
  let template = ''

  jobs.forEach(j => template += j.jobsTemplate)

  setHTML('listings', template)
}

export class JobsController {

  constructor() {
    console.log('Hello this is the jobs Controller')
  }


  show() {
    
    _drawJobs()
    // setText('add-listing-button', '😐 Dead end Job?')
    // setText('listingFormLabel', '☠ Dig up a new Job')
    // setHTML('listings', 'YOUR JOB STARTS HERE....')
    // setHTML('the-actual-form', 'Do your job lazy students')
  }

  setActiveJob(jobId){
    try {
      jobsService.setActiveJob(jobId)
    } catch (error) {
      Pop.error(error)
    }
  }
}
