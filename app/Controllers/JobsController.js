import { setHTML, setText } from "../Utils/Writer.js"

export class JobsController {

  constructor() {
    console.log('Hello this is the jobs Controller')
  }


  show() {
    
    setText('add-listing-button', '😐 Dead end Job?')
    setText('listingFormLabel', '☠ Dig up a new Job')
    setHTML('listings', 'YOUR JOB STARTS HERE....')
    setHTML('the-actual-form', 'Do your job lazy students')
  }
}
