/**
 * Bir banka düşünün. Tüm bankalar kredi verir. Onaylandığı takdirde.
 * Genellikle aynı tabloya kredi verdiklerini kaydedersiniz.
 * Ama kredi hesaplarken olay farklılaşıyor. Tüketici kredisi, kuruma özel vs..
 * hesaplama içeriğinin işlemi değişiyor, fakat kayıt işlemi aynı.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("Kaydedildi");
    };
    return KrediBase;
}());
var TuketiciKredi = /** @class */ (function (_super) {
    __extends(TuketiciKredi, _super);
    function TuketiciKredi() {
        return _super.call(this) || this;
    }
    TuketiciKredi.prototype.hesapla = function () {
        console.log("Tüketici kredisine göre hesap yapıldı");
    };
    return TuketiciKredi;
}(KrediBase));
var MortgageKredisi = /** @class */ (function (_super) {
    __extends(MortgageKredisi, _super);
    function MortgageKredisi() {
        return _super.call(this) || this;
    }
    MortgageKredisi.prototype.hesapla = function () {
        console.log("Mortgage kredisine göre hesap yapıldı");
    };
    return MortgageKredisi;
}(KrediBase));
var tuketiciKredisi = new TuketiciKredi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();
var konutKredisi = new MortgageKredisi();
konutKredisi.hesapla();
konutKredisi.kaydet();
var kredi;
kredi = new TuketiciKredi();
kredi = new MortgageKredisi();
