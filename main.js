/* ----------- Nawigacja --------- */
function ContShow(btnName) {
  document.getElementById(btnName).className = "";
  document.getElementById('backBtn').className = "";
  document.getElementById('startMenu').className = "hidden";
}

function getBack() {
  document.getElementById('pasekCont').className = "hidden";
  document.getElementById('licznikCont').className = "hidden";
  document.getElementById('backBtn').className = "hidden";
  document.getElementById('startMenu').className = "";
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
  var stripe5valuetab = ['0.05','0.1','0.2','0.1','0.2','0.3','0.001','0.005','0.0025','0.001','0.0001'];
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
  console.log(wynik);
  document.getElementById('wynik').innerHTML = (wynik + " &#937"+"<p>Tolerancja: "+ tolerancja*100 +" %</p>");
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
    pasek.style.backgroundColor = "transparent";
  }

  var wartosc = wartoscRezystora*mnoznik;
  document.getElementById('wynik2').innerHTML = ("Rezystancja: "+wartosc+" &#937<br />Tolerancja: "+tolerancja+" %");

}
}
