function topla(x,y){ // bu kullanımda tipler belli değil. X ve Y herşey olabilir
    return x+y;
}

function topla2(x:number,y:number):number{ // sadece number değerler alır ve number değer döndürür. // TypeScript özellği
    return x+y;
}

// anonim fonksiyon
let topla3 = function(x:number,y:number):number {
    return x+y;
}

console.log(topla(2, 3))
console.log(topla("Ankara", 2))
console.log(topla2(2, 3))
console.log(topla3(2, 3))



function topla4(x:number = 0,y:number = 0):number{
    return x+y;
}
// eğer default değer varsa fonksiyona parametre göndermek zorunda değiliz.
console.log(topla4())
console.log(topla4(3)) // x değerine 3 atadık y değeri 0
console.log(topla4(0, 1)) // x değerine 0 y değerine 1 atadık


// ? >> değer atamasakta olur.
// ? > bir default özelliğidir. Sonda olması gerekir.
function topla5(x:number,y?:number):number{
    if(y){
        return x+y;
    }
    return x;
}

console.log(topla5(3))
console.log(topla5(3,50))

//rest parametreler: aynı tipte alacağınmz parametre sayısı belli değilse kullanılabilir
function davetEt(ilkDavetli:string, ...digerleri:string[]):string{
    return ilkDavetli + " " + digerleri.join(" ")
}

console.log(davetEt("Ensar","Mehmet","Emre"))