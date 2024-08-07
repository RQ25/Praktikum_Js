// NO 1
// Pak Arman akan membeli tanah berukuran 20,5m x 30m dengan harga Rp 1.500.000 
// per meter persegi. Dalam pembelian tanah tersebut ditambahkan PPN sebesar 15%. 
// Buatlah sebuah program menggunakan Javascript untuk membantu Pak Arman 
// mengetahui nominal yang harus dibayarkan!


function calculateTotalCost(length, width, pricePerSquareMeter, taxRate) {
    var area = length * width;  // Panjang * Lebar
    var basePrice = area * pricePerSquareMeter; // Harga Dasar
    var taxAmount = basePrice * (taxRate / 100); // Pajak
    var totalPrice = basePrice + taxAmount; // Harga Total
    
    return totalPrice;
}

var length = 20.5; // Satuan Meter
var width = 30; // Satuan Meter
var pricePerSquareMeter = 1500000; // Satuan Rupiah
var taxRate = 15; // Satuan Persen

var totalCost = calculateTotalCost(length, width, pricePerSquareMeter, taxRate);
console.log("1. Total yang harus dibayarkan oleh Pak Arman: Rp " + totalCost);