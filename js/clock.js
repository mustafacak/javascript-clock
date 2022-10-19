let isimSpan = document.getElementById("myName");
//console.log(isimSpan.innerText)

let isim = prompt("İsminiz nedir?");
isimSpan.innerHTML = isim;

function showTime() {

    let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    let date = new Date();
    let gunNumber = date.getDay();
    let saat = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let dakika = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let saniye = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    document.querySelector("#myClock").innerHTML = `${saat}:${dakika}:${saniye} ${gunler[gunNumber]}`

}
setInterval(showTime, 1000);