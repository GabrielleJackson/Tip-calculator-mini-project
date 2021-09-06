function split(billAmount, tipPercentage, people){
    const tip = tipPercentage / 100;
    const tipAmount = billAmount * tip;
    const total = (billAmount + tipAmount) / people;
    return total

}

const bill = split(25, 10, 3)
console.log(bill)
