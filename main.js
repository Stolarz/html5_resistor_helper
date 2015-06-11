/* ----------- Nawigacja --------- */
var e6 = ["10", "15", "22", "33", "47", "68"];
var e12 = ["10", "12", "15", "18", "22", "27", "33", "39", "47", "56", "68", "82"];
var e24 = ["10", "11", "12", "13", "15", "16", "18", "20", "22", "24", "27", "30", "33", "36", "39", "43", "47", "51", "56", "62", "68", "75", "82", "91"];
var e48 = ["100", "105", "110", "115", "121", "127", "133", "140", "147", "154", "162", "169", "178", "187", "196", "205", "215", "226", "237", "249", "261", "274", "287", "301", "316", "332", "348", "365", "383", "402", "422", "442", "464", "487", "511", "536", "562", "590", "619", "649", "681", "715", "750", "787", "825", "866", "909", "953"];
var e96 = ["100", "102", "105", "107", "110", "113", "115", "118", "121", "124", "127", "130", "133", "137", "140", "143", "147", "150", "154", "158", "162", "165", "169", "174", "178", "182", "187", "191", "196", "200", "205", "210", "215", "221", "226", "232", "237", "243", "249", "255", "261", "267- 274", "287", "294", "301", "309", "316", "324", "332", "340", "348", "357", "365", "374", "383", "392", "402", "412", "422", "432", "442", "453", "464", "475", "487", "499", "511", "523", "536", "549", "562", "576", "590", "604", "619", "634", "649", "665", "681", "698", "715", "732", "750", "768", "787", "806", "825", "845", "866", "887", "909", "931", "953", "976"];
var e192 = ["100", "101", "102", "104", "105", "106", "107", "109", "110", "111", "113", "114", "115", "117", "118", "120", "121", "123", "124", "126", "127", "129", "130", "132", "133", "135", "137", "138", "140", "142", "143", "145", "147", "149", "150", "152", "154", "156", "158", "162", "164", "165", "167", "169", "172", "174", "176", "178", "180", "182", "184", "187", "189", "191", "193", "196", "198", "200", "203", "205", "208", "210", "213", "215", "218", "221", "223", "226", "229", "232", "234", "237", "240", "243", "246", "249", "252", "255", "258", "261", "267", "274", "277", "280", "284", "287", "291", "294", "298", "301", "305", "309", "312", "316", "320", "324", "328", "332", "336", "340", "344", "348", "352", "357", "361", "365", "370", "374", "379", "283", "388", "392", "397", "402", "407", "412", "417", "422", "432", "437", "442", "453", "459", "464", "470", "475", "481", "487", "493", "499", "505", "511", "517", "523", "530", "536", "542", "549", "556", "562", "569", "576", "583", "590", "597", "604", "612", "619", "626", "634", "642", "649", "657", "665", "673", "681", "690", "698", "706", "715", "723", "732", "741", "750", "759", "768", "777", "787", "796", "806", "816", "825", "835", "845", "856", "866", "876", "887", "898", "909", "920", "931", "942", "953", "965", "976", "988"];
var szereg = ["E6","E12","E24","E48","E96","E192"];


function ContShow(btnName) {
  document.getElementById(btnName).className = "";
  document.getElementById('backBtn').className = "";
  document.getElementById('startMenu').className = "hidden";
}

function getBack() {
  location.reload(true);
}

var wynik=0;
function changeColor(pasek) {
if(pasek.style.backgroundColor =="black")
  pasek.style.backgroundColor="#880000";
else if (pasek.style.backgroundColor=="rgb(136, 0, 0)")
  pasek.style.backgroundColor="red";
else if(pasek.style.backgroundColor=="red")
  pasek.style.backgroundColor="orange";
else if(pasek.style.backgroundColor=="orange")
  pasek.style.backgroundColor="yellow";
else if(pasek.style.backgroundColor=="yellow")
  pasek.style.backgroundColor="green";
else if(pasek.style.backgroundColor=="green")
  pasek.style.backgroundColor="blue";
else if(pasek.style.backgroundColor=="blue")
  pasek.style.backgroundColor="pink";
else if(pasek.style.backgroundColor=="pink" && (pasek.id=="pasek1" || pasek.id=="pasek2" || pasek.id=="pasek3"))
  pasek.style.backgroundColor="grey";
else if(pasek.style.backgroundColor=="grey" && pasek.id!="pasek5")
  pasek.style.backgroundColor="white";
else if(pasek.style.backgroundColor=="pink" && (pasek.id=="pasek4" || pasek.id=="pasek5"))
  pasek.style.backgroundColor="silver";
else if(pasek.style.backgroundColor=="white")
  pasek.style.backgroundColor="black";
else if(pasek.style.backgroundColor=="silver")
  pasek.style.backgroundColor="gold";
else if(pasek.style.backgroundColor=="gold")
  pasek.style.backgroundColor="black";
}

function colorValue(stripe) {
  var colortab = ['gold','silver','black','rgb(136, 0, 0)','red','orange','yellow','green','blue','pink','grey','white'];

//Ustawianie wartosci paskow od 1 do 3 na podstwaie koloru
  var stripe123valuetab = ['0','1','2','3','4','5','6','7','8','9'];
  for (var i = 0; i < 10; i++) {
    if(stripe.style.backgroundColor==colortab[i+2] && stripe.id!="pasek4" && stripe.id!="pasek5")
    stripe.setAttribute("data-value",stripe123valuetab[i]);
  }

//Ustawianie wartosci paska nr 4 na podstawie koloru
  var stripe4valuetab=['0.01','0.1','1','10','100','1000','10000','100000','1000000','10000000'];
  for(var i=0;i<10;i++){
    if(stripe.style.backgroundColor==colortab[i] && stripe.id=="pasek4")
    stripe.setAttribute("data-value",stripe4valuetab[i]);
  }

  //Ustawianie wartosci paska nr 5 na podstawie koloru
  var stripe5valuetab = ['5','10','20','1','2','0','0','0.5','0.25','0.10','0.05',''];
  for (var i = 0; i < 11; i++){
    if(stripe.style.backgroundColor==colortab[i] && stripe.id=="pasek5")
    stripe.setAttribute("data-value",stripe5valuetab[i]);
  }

  var pasek1Wynik = parseFloat(document.getElementById("pasek1").getAttribute("data-value"));
  var pasek2Wynik = parseFloat(document.getElementById("pasek2").getAttribute("data-value"));
  var pasek3Wynik = parseFloat(document.getElementById("pasek3").getAttribute("data-value"));
  var pasek4Wynik = parseFloat(document.getElementById("pasek4").getAttribute("data-value"));
  var tolerancja = parseFloat(document.getElementById("pasek5").getAttribute("data-value"));
  if(pasek4Wynik!=0)
  wynik = (pasek1Wynik*100 + pasek2Wynik*10 + pasek3Wynik)*pasek4Wynik;
  else
  wynik = (pasek1Wynik*100 + pasek2Wynik*10 + pasek3Wynik);

  var wartoscpodszereg = wynik.toString().substring(0, 3);
  var dekada;

  if(tolerancja == 20){
  typszeregu = szereg[0];
  dekada = findClose(e6,wartoscpodszereg);
  }
  else if(tolerancja == 10){
  typszeregu = szereg[1];
  dekada = findClose(e12,wartoscpodszereg);
  }
  else if (tolerancja == 5){
  typszeregu = szereg[2];
  dekada = findClose(e24,wartoscpodszereg);
  }
  else if(tolerancja == 2){
  typszeregu = szereg[3];
  dekada = findClose(e48,wartoscpodszereg);
  }
  else if(tolerancja == 1){
  typszeregu = szereg[4];
  dekada = findClose(e96,wartoscpodszereg);
  }
  else if(tolerancja == 0.5){
  typszeregu = szereg[5];
  dekada = findClose(e192,wartoscpodszereg);
  }
  else{
  typszeregu = "-";
  dekada = "";
  }
  document.getElementById('wynik').innerHTML = ("Wartość rezystora: " + wynik + " &#937<br />"+"Tolerancja: "+ tolerancja +" %<br />Sugerowany typ szeregu: "+typszeregu+" "+dekada);
}


  function findClose(arr, target) {
      if (!(arr) || arr.length == 0)
          return null;
      if (arr.length == 1)
          return i[0];

      for (var i=1; i<arr.length; i++) {
          if (arr[i] > target) {
              var p = arr[i-1];
              var c = arr[i]
              return Math.abs( p-target ) < Math.abs( c-target ) ? p : c;
          }
      }
      return arr[arr.length-1];
  }



function liczRezystancje() {
  if(document.getElementById('resValue').value>999)
  alert('Maksymalna liczba wynosi 999. Wprowadź poprawki');
  else {
  var colortab = ['gold','silver','rgb(136, 0, 0)','red','green','blue','pink','grey','white','black','orange','yellow'];
  var stripe5valuetab = ['5','10','1','2','0.5','0.25','0.1','0.05'];
  var stripe4valuetab = ['0.1','0.01','10','100','100000','1000000','10000000','','','1','1000','10000'];
  var stripe123valuetab = ['1','2','5','6','7','8','9','0','3','4']
  var pasek1 = document.getElementById('pasek21');
  var pasek2 = document.getElementById('pasek22');
  var pasek3 = document.getElementById('pasek23');
  var pasek4 = document.getElementById('pasek24');
  var pasek5 = document.getElementById('pasek25');
  var wartoscRezystora = document.getElementById('resValue').value;
  var tolerancja = document.getElementById('resTolerance').value;
  var mnoznik = document.getElementById('mnoznik').value;
  var liczba = String(wartoscRezystora);
  var typszeregu;

  for(var i=0;i<9;i++)
  {
    if(liczba.substr(0,1)==stripe123valuetab[i])
    pasek1.style.backgroundColor = colortab[i+2];
    if(liczba.substr(1,1)==stripe123valuetab[i])
    pasek2.style.backgroundColor = colortab[i+2];
    else if (liczba.substr(1,1)=='')
    pasek2.style.backgroundColor = "transparent";
    if(liczba.substr(2,2)==stripe123valuetab[i])
    pasek3.style.backgroundColor = colortab[i+2];
    else if (liczba.substr(2,2)=='')
    pasek3.style.backgroundColor = "transparent";
  }

  //Petla odpowiedzialna za wartosc koloru paska nr 4
  for(var i=0;i<12;i++)
  {
    if(mnoznik==stripe4valuetab[i])
    pasek4.style.backgroundColor = colortab[i];
  }



  //Petla odpowiedzialna za wartosc koloru paska nr 5
  for(var i=0;i<8;i++){
    if(tolerancja==stripe5valuetab[i])
    pasek5.style.backgroundColor = colortab[i];
    else if(tolerancja==0)
    pasek5.style.backgroundColor = "orange";
    else if(tolerancja==20)
    pasek5.style.backgroundColor = "transparent";
  }
  var dekada;
  var wartosc = wartoscRezystora*mnoznik;
  



    if(tolerancja == 20){
    typszeregu = szereg[0];
    dekada = findClose(e6,wartosc);
    }
    else if(tolerancja == 10){
    typszeregu = szereg[1];
    dekada = findClose(e12,wartosc);
    }
    else if (tolerancja == 5){
    typszeregu = szereg[2];
    dekada = findClose(e24,wartosc);
    }
    else if(tolerancja == 2){
    typszeregu = szereg[3];
    dekada = findClose(e48,wartosc);
    }
    else if(tolerancja == 1){
    typszeregu = szereg[4];
    dekada = findClose(e96,wartosc);
    }
    else if(tolerancja == 0.5){
    typszeregu = szereg[5];
    dekada = findClose(e192,wartosc);
    }
    else{
    typszeregu = "-";
    dekada = "";
    }





  document.getElementById('wynik2').innerHTML = ("Rezystancja: "+wartosc+" &#937<br />Tolerancja: "+tolerancja+" %<br />Typ Szeregu: "+typszeregu+" "+dekada);

}
}
