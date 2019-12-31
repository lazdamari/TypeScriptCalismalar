/**
 * Class - Interface farkı
 * Eğer tüm parametreleri vermemiz gerekiyorsa Interface, gerekmiyorsa Class kullanılabilir
 */

interface Product {
    id:number;
    name:string;
    unitPrice:number;
}

function save(product:Product) {
    console.log(product.name + " kaydedildi")
}


function save2(product2:Product2) {
    console.log(product2.name + " kaydedildi")
}



class Product2 {
    id:number;
    name:string;
    unitPrice:number;
}

save({id:1, name:"Laptop", unitPrice:4})


let mouse = new Product2()
mouse.name = "Logitech"

save2(mouse)