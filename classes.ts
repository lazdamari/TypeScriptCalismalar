class Ev {
    _odaSayisi: number;
    _pencereSayisi: number;
    _kat: number;
    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        /** dış değişkenlere this parametresiyle erişebiliriz */
        this._odaSayisi = odaSayisi;
        this._kat = kat;
        this._pencereSayisi = pencereSayisi;
    }
    yemekYe() {
        console.log(this._kat + " katlı evde Yemek yiyildi")
    }
}

let ev = new Ev(3, 4, 5)
ev.yemekYe();


/** class nesne olarak da adlandırabilecğeimiz bir yapıdır. Encapsulation ifadeler de kullanılabilr. Gerçek hayatta herhangi bir nesneye benzetilebilir.
 * Örnek : bir ev, bir evin duvarları, çicekleri vs.
 * Hem özellikleri hem de yapılacak işleri, operasyonları belirleyebiliriz.
 */

class Kisi {
    kaydet() {
        console.log("Kişi kaydedildi")
    }
}

class Musteri extends Kisi {
    satisYap() {
        console.log("Satış yapıldı")
    }
}

class Personel extends Kisi {
    maasOde() {
        console.log("Maaş ödendi")
    }
}

let musteri = new Musteri()
musteri.kaydet();
musteri.satisYap();

let personel = new Personel()
personel.kaydet();
personel.maasOde();