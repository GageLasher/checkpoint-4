import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

async function getQuote(){
    await quoteService.getQuote()
}

function _draw(){
    document.getElementById("quote").innerHTML = ProxyState.quote.Template
}

export class QuoteController {
    constructor(){
        ProxyState.on('quote', _draw)
        getQuote()
    }
}