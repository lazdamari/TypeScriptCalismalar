/**
 * Bir banka düşünün. Tüm bankalar kredi verir. Onaylandığı takdirde. 
 * Genellikle aynı tabloya kredi verdiklerini kaydedersiniz.
 * Ama kredi hesaplarken olay farklılaşıyor. Tüketici kredisi, kuruma özel vs..
 * hesaplama içeriğinin işlemi değişiyor, fakat kayıt işlemi aynı.
 */

abstract class KrediBase {
    constructor() {

    }
    kaydet(): void {
        console.log("Kaydedildi")
    }
    abstract hesapla(): void;
}

class TuketiciKredi extends KrediBase {
    
    constructor() {
        super(); // Constructor yapılarda parametre yoksa yazılmalı.
    }

    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı")
    }
}

class MortgageKredisi extends KrediBase {
    
    constructor() {
        super(); // Constructor yapılarda parametre yoksa yazılmalı.
    }

    hesapla(): void {
        console.log("Mortgage kredisine göre hesap yapıldı")
    }
    
}


let tuketiciKredisi = new TuketiciKredi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let konutKredisi = new MortgageKredisi();
konutKredisi.hesapla();
konutKredisi.kaydet();


let kredi : KrediBase
kredi = new TuketiciKredi()
kredi = new MortgageKredisi()