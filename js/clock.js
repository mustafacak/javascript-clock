let isimSpan = document.getElementById("myName");
//console.log(isimSpan.innerText)

let isim = prompt("İsminiz nedir?");
isimSpan.innerHTML = isim;

function showTime() {
    /* alert("TEST!");
    console.log("showTime geldi!"); */
    let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    let date = new Date();
    let gunNumber = date.getDay();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();

    document.querySelector("#myClock").innerHTML = `${saat}:${dakika}:${saniye < 10 ? "0" + saniye : saniye} ${gunler[gunNumber]}`

}
setInterval(showTime, 1000);