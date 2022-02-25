import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

async function _getWeather(){
    await weatherService._getWeather()
}
function _draw(){
    document.getElementById("weather").innerHTML = ProxyState.weather.Template

}

export class WeatherController {
    constructor(){
        ProxyState.on("weather", _draw)
        _getWeather()
       
    }

    clicked(){
        if (!ProxyState.weather.clicked) {
            ProxyState.weather.clicked = true
        } else {
            ProxyState.weather.clicked = false
        }
        ProxyState.weather = ProxyState.weather
    }
}