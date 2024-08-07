let barang = [
  { nama: "Beras", harga: 10000, jumlah: 5 },
  { nama: "Gula", harga: 14000, jumlah: 2 },
  { nama: "Telur", harga: 20000, jumlah: 2 },
  { nama: "Minyak Goreng", harga: 9000, jumlah: 10 }
];

// Menghitung total belanja
function calculateTotalBelanja(daftarBarang) {
  let total = 0;
  for (let i = 0; i < daftarBarang.length; i++) {
    const item = daftarBarang[i];
    total += item.harga * item.jumlah;
  }
  return total;
}

const totalBelanja = calculateTotalBelanja(barang);
console.log("Total belanja yang harus dibayar oleh Bu Astuti: Rp " + totalBelanja);
