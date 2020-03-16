let request = new XMLHttpRequest();

request.open('GET', 'https://storage.googleapis.com/dito-questions/events.json', true);
request.onload = function () {
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        
       
        let events = data.events;
        
        extrato(events);
      
        
        
    }else{
        alert('Não foi possível conectar a API.');
    }
}



function extrato(array){
    let evento = array[0];
    let revenue = 0;

    if(evento['event'] == 'comprou'){
        revenue = evento['revenue'];
    }    

}

request.send();
