import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

async function _getImage(){
    try {
       await imageService._getImage()
    } catch (error) {
        console.error(error);
    }
    
}

function _draw(){
    document.body.style.backgroundImage = ProxyState.image.imgUrl
}

export class ImageController{
    constructor(){
        _getImage()
        _draw()
    }
}