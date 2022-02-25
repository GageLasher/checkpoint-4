import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

async function _getImage(){
    try {
       await imageService._getImage()
    } catch (error) {
        console.error(error);
    }
    
}

function getTime(){
    const d = new Date()
  
    let hour = d.getHours()
    let minute = d.getMinutes()
    if(hour > 12) {
        hour -= 12
    }
    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    let currentTime = `${hour} : ${minute}`
    console.log(currentTime);
    document.getElementById("clock").innerText = currentTime
}

setInterval(getTime, 1000)

function _draw(){
    document.body.style.backgroundImage = ProxyState.image.imgUrl
}

export class ImageController{
    constructor(){
        _getImage()
        _draw()
        getTime()
    }
}