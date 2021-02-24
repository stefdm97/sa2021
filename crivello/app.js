const express = require('express');
const app=express();

var eratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
var n= getRandomArbitrary(0,10000);
    
app.get('/',(req,res) => res.send(JSON.stringify('Primi: ' + eratosthenes(n))));


app.listen(3000, () => {
	console.log('app runna sulla porta 3000');
})