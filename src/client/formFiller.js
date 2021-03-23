
const nlpAnalysis = async ( event)=>{
    event.preventDefault()
    let  url = '/getAnalysis'
    
 await fetch(url, {

    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify({url: document.getElementById("url").value})


  }).then(response => response.json())

    .then(function(response){
       
        console.log("I was here!")
        Client.showAnalysis(response)
    })
}



function showAnalysis(response){

    document.getElementById("model").innerHTML=response.model+ "hello";
    document.getElementById("confidence").innerHTML=response.confidence;
    document.getElementById("agreement").innerHTML=response.agreement;
    document.getElementById("subjectivity").innerHTML=response.subjectivity;
    document.getElementById("irony").innerHTML=response.irony;

}
export {showAnalysis}
export {nlpAnalysis}




