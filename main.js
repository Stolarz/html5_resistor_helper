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
  if(stripe.style.backgroundColor=="black" && stripe.id!="pasek4" && stripe.id!="pasek5")
  stripe.setAttribute("data-value","0");
  else if (stripe.style.backgroundColor=="rgb(136, 0, 0)" && stripe.id!="pasek4" && stripe.id!="pasek5")
  stripe.setAttribute("data-value","1");
  else if (stripe.style.backgroundColor=="red" && stripe.id!="pasek4" && stripe.id!="pasek5")
  stripe.setAttribute("data-value","2");
  else if(stripe.style.backgroundColor=="orange" && stripe.id!="pasek4" && stripe.id!="pasek5")
  stripe.setAttribute("data-value","3");
  else if(stripe.style.backgroundColor=="yellow" && stripe.id!="pasek4" && stripe.id!="pasek5")
  stripe.setAttribute("data-value","4");
  else if(stripe.style.backgroundColor=="green" && stripe.id!="pasek4" && stripe.id!="pasek5")
  stripe.setAttribute("data-value","5");
  else if(stripe.style.backgroundColor=="blue" && stripe.id!="pasek4" && stripe.id!="pasek5")
  stripe.setAttribute("data-value","6");
  else if(stripe.style.backgroundColor=="pink" && stripe.id!="pasek4" && stripe.id!="pasek5")
  stripe.setAttribute("data-value","7");
  else if(stripe.style.backgroundColor=="grey" && stripe.id!="pasek4" && stripe.id!="pasek5")
  stripe.setAttribute("data-value","8");
  else if(stripe.style.backgroundColor=="white" && stripe.id!="pasek4" && stripe.id!="pasek5")
  stripe.setAttribute("data-value","9");

  var pasek1Wynik = parseInt(pasek1.getAttribute("data-value"));
  var pasek2Wynik = parseInt(pasek2.getAttribute("data-value"));
  var pasek3Wynik = parseInt(pasek3.getAttribute("data-value"));
  wynik = pasek1Wynik + pasek2Wynik + pasek3Wynik;
  console.log(wynik);
  document.getElementById('wynik').innerHTML = (wynik + " &#937");
}

function result() {

}
