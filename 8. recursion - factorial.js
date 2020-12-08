//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    if (num === 0) return 1;
   if (num === 1) return 1;
    return num * factorial(num - 1); 
}

