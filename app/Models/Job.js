import { generateId } from "../Utils/generateId.js"


export class Job {
    
    constructor(data) {
        this.id = data.id || generateId()
        this.job = data.job
        this.pay = data.pay
        this.contact = data.contact
        this.imgUrl = data.imgUrl
    }
    
    get jobsTemplate(){
        return /*html*/`
        <div class="col-md-4 my-3">
        <div class="card elevation-2 car" onclick="app.jobsController.setActiveJob('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
        <img
        src="${this.imgUrl}"
        alt="${this.job}" class="rounded">
            <p><b>${this.job}$${this.pay}hr</b></p>
        </div>
    </div>
        `
    }

    get jobModelTemplate() {
        return `<div class="col-md-4 my-3">
        <div class="card elevation-2 car" onclick="app.jobsController.setActiveJob('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
            <img
            src="${this.imgUrl}"
            alt="${this.job}" class="rounded">
            <p><b>${this.job}$${this.pay}hr</b></p>
        </div>
    </div>`
    } 

    static jobsFormTemplate(){
        return /*html*/`
        <form onsubmit='app.jobsController.handleFormSubmit()'>

            <div class='form-floating mb-3'>
                <input type='text' class='form-control' name='job' id='job' required>
                <label for='job'>Job</label>
            </div>
            <div class='form-floating mb-3'>
                <input type='number' class='form-control' name='pay' id='pay' required>
                <label for='pay'>Pay</label>
            </div>
            <div class='form-floating mb-3'>
                <input type='tel' class='form-control' name='contact' id='contact' required>
                <label for='contact'>Contact</label>
            </div>
            <div class='form-floating mb-3'>
                <input type='url' class='form-control' name='imgUrl' id='imgUrl' required>
                <label for='imgUrl'>Image Url</label>
            </div>
            <div class="d-flex my-4 gap-5 align-items-center">
                <button class="btn" type="reset">Cancel</button>
                <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
            </div>
        
        </form>
        `
    }
}
