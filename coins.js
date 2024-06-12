

input_coins = [1, 5, 10, 25, 1, 25, 1, 5, 10, 25]
//how many of each e.g.
// desired output { 1 : 3, 5 : 2, 10 : 2, 25 : 3}

output = { 1: 0, 5: 0, 10: 0, 25: 0 }; // easier?

//EASY
input_coins.forEach(coin => {
    output[coin]++;
});

console.log(output);

input_coins = [100, 1, 5, 10, 25, 1, 25, 1, 5, 10, 25, 100, 50]

output_hard = {}; // harder?
input_coins.forEach(coin => {
    if(!output_hard.hasOwnProperty(coin)){
        output_hard[coin] = 1;
    }else{
        output_hard[coin]++;
    }
});
console.log(output_hard);

//what is the total value of the output?
total = 0
for(key in output_hard){
    value_each = key
    quantity = output_hard[key]
    subtotal = value_each * quantity
    total += subtotal   
}
console.log(total)
