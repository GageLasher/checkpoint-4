export class Quote{
    constructor(data){
        this.quote = data.content
        this.author = data.author
    }
    get Template(){
        return `
        <div class="image-text"> <p> ${this.quote} </p> </div>
        <div class="image-text"> <h6> ${this.author} </h6> </div>
        `
    }
}