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
        <div class="card elevation-2 car" onclick="app.housesController.setActiveJob('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
            <img
            src="${this.imgUrl}"
            alt="${this.job}" class="rounded">
            <p><b>${this.job}$${this.pay}hr</b></p>
        </div>
    </div>
        `
    }
}
