import "@babel/polyfill";
import { nlpAnalysis} from "../src/client/formFiller"

describe("Testing the submit functionality", ()=>{
    
    test("Testing the nlpAnalysis function",()=>{

        expect(nlpAnalysis).toBeDefined();
        
    })
})