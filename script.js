
var xhttp = new XMLHttpRequest();


function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}


function clearSearch() {
    if(document.getElementById("searchForm").value == ""){
        var search ="color";
        loadSearch(search);

    }
}

function loadSearch(search) {
  if(search == "search"){
      var search = document.getElementById("searchForm").value;
  }
  var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
  xhttp.open("GET", url, true);
  xhttp.send(); 
  var imgUrl = "https://source.unsplash.com/featured/?"+ search;
  document.getElementById("searchImage").innerHTML = "<img src='"+imgUrl+"' crossorigin='anonymous'></img>"

}





xhttp.onreadystatechange = function() {
    if(xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("definition").innerHTML = " ";
        var response = JSON.parse(xhttp.responseText);
        document.getElementById("name").innerHTML = strUcFirst(response["0"].word);
        i = 0;
        while(i != response[0].meanings[0].definitions.length) {
            document.getElementById("definition").innerHTML += "<div id='definitions' class='definition"+ i +"'>"+strUcFirst(response['0']['meanings']['0']['definitions'][i].definition)+"</div>"
            i += 1;
        }
    }
}
