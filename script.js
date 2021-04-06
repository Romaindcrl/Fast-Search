
var xhttp = new XMLHttpRequest();


function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}


function clearSearch() {
    if(document.getElementById("searchForm").value == ""){
        document.getElementById("nom").innerHTML = "Chien";
        document.getElementByClassName("definition0").innerHTML = "Mammifère domestique dont de nombreuses races sont élevées ; spécialement le mâle (opposé à chienne).";
        document.getElementByClassName("definition1").innerHTML = "Avec hostilité.";
        document.getElementByClassName("definition2").innerHTML = "Rencontrer bien des difficultés.";

    }
}

function loadSearch() {
  var search = document.getElementById("searchForm").value;
  var url = "https://api.dictionaryapi.dev/api/v2/entries/fr/" + search;
  xhttp.open("GET", url, true);
  xhttp.send(); 
  var imgUrl = "https://source.unsplash.com/featured/?"+ search;
  document.getElementById("searchImage").innerHTML = "<img src='"+imgUrl+"' crossorigin='anonymous'></img>"

}





xhttp.onreadystatechange = function() {
    if(xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("definition").innerHTML = " ";
        var response = JSON.parse(xhttp.responseText);
        document.getElementById("nom").innerHTML = strUcFirst(response["0"].word);
        i = 0
        while(i != 3) {
            document.getElementById("definition").innerHTML += "<div id='definitions' class='definition"+ length +"'>"+strUcFirst(response['0']['meanings']['0']['definitions'][i].definition)+"</div>"
            i += 1;
        }
    }
}
