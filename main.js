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
else if(pasek.style.backgroundColor=="pink" && (pasek.id=="pasek1" || pasek.id=="pasek2" || pasek.id=="pasek3" || pasek.id=="pasek5"))
  pasek.style.backgroundColor="grey";
else if(pasek.style.backgroundColor=="grey" && pasek.id!="pasek5")
  pasek.style.backgroundColor="white";
else if(pasek.style.backgroundColor=="grey" && pasek.id=="pasek5")
  pasek.style.backgroundColor=="silver";
else if(pasek.style.backgroundColor=="pink" && pasek.id=="pasek4")
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

  var pasek1Wynik = parseFloat(pasek1.getAttribute("data-value"));
  var pasek2Wynik = parseFloat(pasek2.getAttribute("data-value"));
  var pasek3Wynik = parseFloat(pasek3.getAttribute("data-value"));
  var pasek4Wynik = parseFloat(pasek4.getAttribute("data-value"));
  var tolerancja = parseFloat(pasek5.getAttribute("data-value"));
  if(pasek4Wynik!=0)
  wynik = (pasek1Wynik + pasek2Wynik*10 + pasek3Wynik*100)*pasek4Wynik;
  else
  wynik = (pasek1Wynik + pasek2Wynik*10 + pasek3Wynik*100);
  console.log(wynik);
  document.getElementById('wynik').innerHTML = (wynik + " &#937"+"<p>Tolerancja: "+ tolerancja*100 +" %</p>");
}

function liczRezystancje() {
  var pasek1 = document.getElementById('pasek21');
  var pasek2 = document.getElementById('pasek22');
  var pasek3 = document.getElementById('pasek23');
  var pasek4 = document.getElementById('pasek24');
  var pasek5 = document.getElementById('pasek25');

  var wartoscRezystora = document.getElementById('resValue').value;
  var tolerancja = document.getElementById('resTolerance').value;

  pasek1.style.backgroundColor = "red";
  pasek2.style.backgroundColor = "blue";
  pasek3.style.backgroundColor = "grey";
  pasek4.style.backgroundColor = "silver";
  pasek5.style.backgroundColor = "gold";
}
