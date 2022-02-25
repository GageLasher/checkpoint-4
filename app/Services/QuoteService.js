import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js"

class QuoteService {
    async getQuote(){
        const res = await sandboxApi.get("quotes")
        // console.log(res.data);
        let quote = new Quote(res.data)
        console.log(quote);
        ProxyState.quote = quote
    }
}

export const quoteService = new QuoteService()