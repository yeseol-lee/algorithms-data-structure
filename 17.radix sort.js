//20.12.2020 Radix_Sort
function radixSort(arr, digit = 1) {
    let obj = {0 : [], 1 : [], 2 : [], 3 : [], 4 : [], 5 : [], 6 : [], 7 : [], 8 : [], 9 : []};
  
    //calculate 10^(i-1), put in basis;
    let i = digit;
    let basis = 1; 
        while (i > 1) {
            basis *= 10;
            i--;
        }
    
    //put elements of arr to obj
    for (let i = 0; i < arr.length; i++) {
        let num1 = digitNum(arr[i], basis);
        obj[num1].push(arr[i]);
    }
    
    //reset arr
    arr=[];
    
    //return to arr
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < obj[i].length; j++) {
            arr.push(obj[i][j]);
        }
    }

    //base case of recursion\
    if (obj[0].length === arr.length) return console.log(obj[0]);
    
    //iterate function
    digit++;
    radixSort(arr, digit);


    //returns the value of 'digit' digit.
    function digitNum(num, basis) {
        //if digit of num is less than i, return 0
        if ((num - basis) < 0) return 0;
        
        return Math.floor(num/basis) % 10;
    }

}