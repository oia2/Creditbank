const rangeInputPrice = document.querySelector(".rI1 input"),
rangeInputDate = document.querySelector(".rI2 input"), 
priceInput = document.querySelector("._sum"),
dateInput = document.querySelector("._date"),
progressPrice = document.querySelector(".s1 .p1"),
progressDate = document.querySelector(".s2 .p2");

let sumInf = document.querySelector(".sum-inf"),
dateInf = document.querySelector(".date-inf"),
calculation = document.querySelector(".сalculation");


let yearPercent = 0.04;
let montnPercent = yearPercent / 12;
let annuity = (montnPercent * (1 + montnPercent) ** 12) / ((1 + montnPercent) ** 12 - 1);
let ans = 50000 * annuity;


priceInput.addEventListener("input", e => {
    let val = parseInt(priceInput.value),
    date = parseInt(dateInput.value);

    if(val >= 50000 && val <= 5000000) {
        rangeInputPrice.value = val;
        sumInf.innerHTML = val;

        progressPrice.style.right = 100 - (val / rangeInputPrice.max) * 100 + "%";
        
        annuity = (montnPercent * (1 + montnPercent) ** date) / ((1 + montnPercent) ** date - 1);
        ans = val * annuity;

        calculation.innerHTML = ans.toFixed(2);
    }
});

rangeInputPrice.addEventListener("input", e => {
    let val = parseInt(rangeInputPrice.value),
    date = parseInt(rangeInputDate.value);

    priceInput.value = val;
    sumInf.innerHTML = val;

    progressPrice.style.right = 100 - (val / rangeInputPrice.max) * 100 + "%";

    annuity = (montnPercent * (1 + montnPercent) ** date) / ((1 + montnPercent) ** date - 1);
    ans = val * annuity;

    calculation.innerHTML = ans.toFixed(2);
});

dateInput.addEventListener("input", e => {
    let val = parseInt(dateInput.value),
    price = parseInt(priceInput.value)
    
    if(val >= 12 && val <= 120) {
        rangeInputDate.value = val;
        dateInf.innerHTML = val;

        progressDate.style.right = 105 - (val / rangeInputDate.max) * 100 + "%";

        annuity = (montnPercent * (1 + montnPercent) ** val) / ((1 + montnPercent) ** val - 1);
        ans = price * annuity;
        
        calculation.innerHTML = ans.toFixed(2);
    }
});

rangeInputDate.addEventListener("input", e => {
    let val = parseInt(rangeInputDate.value),
    price = parseInt(rangeInputPrice.value)

    dateInf.innerHTML = val;
    dateInput.value = val;

    progressDate.style.right = 105 - (val / rangeInputDate.max) * 100 + "%";

    annuity = (montnPercent * (1 + montnPercent) ** val) / ((1 + montnPercent) ** val - 1);
    ans = price * annuity;

    calculation.innerHTML = ans.toFixed(2);
});
     
     