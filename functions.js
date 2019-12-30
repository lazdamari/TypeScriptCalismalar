function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
// anonim fonksiyon
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla("Ankara", 2));
console.log(topla2(2, 3));
console.log(topla3(2, 3));
function topla4(x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return x + y;
}
// eğer default değer varsa fonksiyona parametre göndermek zorunda değiliz.
console.log(topla4());
console.log(topla4(3)); // x değerine 3 atadık y değeri 0
console.log(topla4(0, 1)); // x değerine 0 y değerine 1 atadık
// ? >> değer atamasakta olur.
// ? > bir default özelliğidir. Sonda olması gerekir.
function topla5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla5(3));
console.log(topla5(3, 50));
//rest parametreler: 
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Ensar", "Mehmet", "Emre"));
