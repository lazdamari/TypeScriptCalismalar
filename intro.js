function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer('Ensar');
console.log(mesaj);
var sayi = 12;
sayi = 10;
sayi = 10.5;
var sehir;
sehir = 'Ankara';
sehir = 'Istanbul';
// Boolean
var dogruMu;
dogruMu = false;
dogruMu = true;
// Arrays atamalı
var sayilar = [1, 2, 3];
// Arrays
var sayilar2;
// Generic Array
var sayilar3 = [1, 2, 3];
// Tuple
var dizi = [2, "Ankara"];
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
console.log(renk);
