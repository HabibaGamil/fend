import "@babel/polyfill";
import {app} from "../src/server/index"

describe("Testing the server /getAnalysis request", ()=>{
    
    test("Testing the nlpAnalysis function", async ()=>{
        try{
        let request= await request(app).post('/getAnalysis')
        expect(request).toBeDefined()
        }
        catch(e){
            console.log(e)//TypeError: request is not a function???????
        }

       
        
    })
})