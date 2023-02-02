import { appState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function _drawJobs(){
  let jobs = appState.jobs
  let template = ''

  jobs.forEach(j => template += j.jobsTemplate)

  setHTML('listings', template)
}

function _drawJob(){
  setText('listingModalLabel', `${appState.job.job} $${appState.job.pay}`)
  setHTML('listing-modal-body', appState.job.jobModelTemplate)
}

export class JobsController {

  constructor() {
    appState.on('job', _drawJob)
    appState.on('jobs', _drawJobs)
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

  handleFormSubmit(){
    try {
      event?.preventDefault()

      let form = event?.target
      let formData = getFormData(form)

      jobsService.handleFormSubmit(formData)
    } catch (error) {
      Pop.error(error)
    }
  }

  async deleteHouse(jobId){
    try {
      const yes = await Pop.confirm('Are you sure?')
      if (!yes){return}

      jobsService.deleteHouse(jobId)
    } catch (error) {
      Pop.error(error)
    }
  }
}
