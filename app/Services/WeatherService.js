import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./AxiosService.js"

class WeatherService {
    async _getWeather(){
        const res = await sandboxApi.get("weather")
        // console.log(res.data);
        const weather = new Weather(res.data)
        // console.log(weather);
        ProxyState.weather = weather
        console.log(ProxyState.weather);
        // document.getElementById("weather").innerHTML = ProxyState.weather.Template
    }
}



export const weatherService = new WeatherService()