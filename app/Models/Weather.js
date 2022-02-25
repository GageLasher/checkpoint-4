export class Weather {
    constructor(data){
        this.temp = data.main.temp
        this.city = data.name
        this.clicked = false
    }
    get Template(){
        return `
          <div class="image-text" onclick="app.weatherController.clicked()">  ${this.ConvertedTemp} <span>${this.clicked ? "C" : "F"}</span> </div>
        `
    }
    get ConvertedTemp(){
        let out = Math.round(1.8 * (this.temp - 273) + 32)
        // 1.8(this.temp - 273) + 32
        if (this.clicked) {
            out = Math.floor(this.temp - 273)
        } else {
            out =  Math.round(1.8 * (this.temp - 273) + 32)
        }

        return out
    }
}