function calculateBMI(weight, height) {
    return weight / ((height / 100) ** 2);
}

const beratRhodey = 90;
const tinggiRhodey = 170;
const bmiRhodey = calculateBMI(beratRhodey, tinggiRhodey);

var statusBeratBadan;
if (bmiRhodey < 18.5) {
    statusBeratBadan = "Kekurangan berat badan";
} else if (bmiRhodey >= 18.5 && bmiRhodey < 25) {
    statusBeratBadan = "Normal (ideal)";
} else if (bmiRhodey >= 25 && bmiRhodey < 30) {
    statusBeratBadan = "Kelebihan berat badan";
} else {
    statusBeratBadan = "Kegemukan (Obesitas)";
}

console.log("BMI Rhodey:", bmiRhodey.toFixed(2));
console.log("Status Berat Badan Rhodey:", statusBeratBadan);
