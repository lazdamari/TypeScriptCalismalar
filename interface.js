function save(product) {
    console.log(product.name + " kaydedildi");
}
function save2(product2) {
    console.log(product2.name + " kaydedildi");
}
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
save({ id: 1, name: "Laptop", unitPrice: 4 });
var mouse = new Product2();
mouse.name = "Logitech";
save2(mouse);
