function selamVer(isim:string){
return "Merhaba "     + isim
}

let mesaj = selamVer('Ensar')

console.log(mesaj)

let sayi:number = 12
sayi = 10
sayi = 10.5


let sehir:string 
sehir = 'Ankara'
sehir = 'Istanbul'

// Boolean
let dogruMu:boolean 
dogruMu=false
dogruMu=true

// Arrays atamalı
let sayilar :number[] = [1,2,3]

// Arrays
let sayilar2:Array<number>
    // Generic Array
let sayilar3:Array<number>= [1,2,3]

// Tuple
let dizi:[number,string] = [2,"Ankara"]

// enum tipi
enum Renk{Kirmizi=1,Siyah,Mavi}
let renk:Renk = Renk.Kirmizi

// Any: gelecek olan datanın veri tipinden emin olamadığımız zaman kullanılır.

let deger : any = "Ankara"
deger = 2
deger = true

// void: genellikle fonksiyonlarda kullanıyoruz. Void olursa return olmaz.

let deger2:void = undefined // kullnılabilir

function selamVer2():void{
    console.log("Merhaba")
}

// undefined null
let yas :number // şuan undefined
yas = 10 // şuan undefined değil

class Musteri {} // şuan Müşteri class ına ulaşıldığında direkt olarak null gelir. Yani referans oluşmamış.