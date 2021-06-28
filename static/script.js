function getLunch(){
    console.log("Getting Lunch....");
    fetch("https://foodish-api.herokuapp.com/api")
        .then( banana => banana.json() )
        .then( data => {
            console.log(data);
            var lunch = document.getElementById('lunch');
            lunch.innerHTML = null;
        
            var img = document.createElement('img');
            img.src = data.image;
            img.alt = "lunch";
            img.className = "col-4 rounded"
            lunch.appendChild(img);
        } )
}


function queryLunch( event ){
    event.preventDefault();
    console.log(event);
    var query = document.getElementById('query').value;
    console.log(query);
    fetch(`https://foodish-api.herokuapp.com/api/images/${query}`)
        .then( banana => banana.json() )
        .then( data => {
            console.log(data);
            var lunch = document.getElementById('lunch');
            lunch.innerHTML = null;
            document.getElementById('query').value = "";
            var img = document.createElement('img');
            img.src = data.image;
            img.alt = "lunch";
            img.className = "col-4 rounded"
            lunch.appendChild(img);
        })
}
