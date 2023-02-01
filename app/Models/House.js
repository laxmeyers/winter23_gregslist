import { generateId } from "../Utils/generateId.js"


export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get housesTemplate(){
        return /*html*/`
    <div class="col-md-4 my-3">
        <div class="card elevation-2 car" onclick="app.housesController.setActiveHouse('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
            <img
            src="${this.imgUrl}"
            alt="${this.name}" class="rounded">
            <p><b>${this.name} ${this.sqft}sqft - $${this.price}</b></p>
        </div>
    </div>
        `
    }

    static housesFormTemplate(){
        return /*html*/`
        <form onsubmit='app.housesController.handleFormSubmit()'>

            <div class='form-floating mb-3'>
                <input type='text' class='form-control' name='name' id='name' required>
                <label for='name'>Name</label>
            </div>
            <div class='form-floating mb-3'>
                <input type='number' class='form-control' name='year' id='year' required>
                <label for='year'>Year</label>
            </div>
            <div class='form-floating mb-3'>
                <input type='number' class='form-control' name='bedroom' id='bedroom' required>
                <label for='bedroom'>Bedrooms</label>
            </div>
            <div class='form-floating mb-3'>
                <input type='number' class='form-control' name='bathroom' id='bathroom' required>
                <label for='bathroom'>bathrooms</label>
            </div>
            <div class='form-floating mb-3'>
                <input type='number' class='form-control' name='sqft' id='sqft' required>
                <label for='sqft'>Square Feet</label>
            </div>
            <div class='form-floating mb-3'>
                <input type='url' class='form-control' name='imgUrl' id='imgUrl' required>
                <label for='imgUrl'>Image Url</label>
            </div>
            <div class="form-floating">
            <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
            <label for="description">Description</label>
            </div>
            <div class="d-flex my-4 gap-5 align-items-center">
                <button class="btn" type="reset">Cancel</button>
                <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
            </div>
        
        </form>
        `
    }

    get houseModelTemplate(){
        return /*html*/`
        <div class="col-md-8 my-3">
            <div class="card elevation-2 car" onclick="app.housesController.setActiveHouse('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
                <img
                src="${this.imgUrl}"
                alt="${this.name}" class="rounded">
                <p><b>${this.name} ${this.sqft}sqft - $${this.price}</b></p>
            </div>
        </div>
            `
    }
}
