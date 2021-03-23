
const nlpAnalysis = async (event)=>{
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

    .then(function callBack (response){
       
        console.log("I was here!")
        Client.showAnalysis(response)
    })
}



function showAnalysis(response){

    if(response.model!=undefined){//validate url

    document.getElementById("model").innerHTML= "Model: "+response.model;
    document.getElementById("confidence").innerHTML="Confidence: " +response.confidence;
    document.getElementById("agreement").innerHTML="Agreement: "+response.agreement;
    document.getElementById("subjectivity").innerHTML="Subjectivity: "+response.subjectivity;
    document.getElementById("irony").innerHTML="Irony: "+response.irony;
    }

    else{
        document.getElementById("model").innerHTML="Invalid URL";
        document.getElementById("confidence").innerHTML="";
        document.getElementById("agreement").innerHTML="";
        document.getElementById("subjectivity").innerHTML="";
        document.getElementById("irony").innerHTML="";

    }

}
export {showAnalysis}
export {nlpAnalysis}




