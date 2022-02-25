import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { sandboxApi } from "./AxiosService.js"

class ImageService {
 async  _getImage(){
        const res = await sandboxApi.get("images")
        
        const image = new Image(res.data)
        console.log(image);
        ProxyState.image = image
   
        document.body.style.backgroundImage =  `url(${ProxyState.image.imgUrl})`
    }
}


export const imageService = new ImageService()