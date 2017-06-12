// scripts.js
//tytul pliku
//probowalam ostylowac buttony  nie widze jak nadac im jeden wspolny 
//styl np. padding - czy jest mozliwosc zadania stylu dla wszystkich elemtow 
//klasy jednoczesnie - napewno, ale nie widze jak to zrobic??
var navigation = document.getElementsByClassName('button');


navigation[0].style.background = 'red';
navigation[0].style.padding = '10px';
navigation[1].style.background = 'blue';
navigation[1].style.padding = '10px';


// to jest rozwiazanie do 9.5
var popup = document.getElementsByClassName('button')
console.log(popup[1].innerText);
for (var x=0; x<popup.length; x++) {
console.log(popup[x].innerText);
alert(popup[x].innerText);
}

  