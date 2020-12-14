/*insertion sort(using binary search): builds up the sort by
  gradually creating a larger left half which is always sorted */
function insertionSort(arr) {
    //sorted left part comes here 
    let sorted = [arr[0]];
    for(i = 1; i < arr.length; i++) {
        //1. find the index the value supposed to be
        let index = b_Search(sorted, arr[i]);
        //2. insert value to sorted left array
        insert(sorted, index, arr[i]);
    }
  
    //return the index the value supposed to be
    function b_Search(arr, value) {
        let left = 0,
            right = arr.length - 1;
        let middle;

        while (value >= arr[left] && value <= arr[right]) {
            middle = left + Math.floor((right - left) / 2);

            if (arr[middle] > value) right = middle - 1;
            else if (arr[middle] < value) left = middle + 1;
            else if (arr[middle] === value) return middle;
        }

        if (value < arr[left]) return left;
        else if(value > arr[right]) return right + 1;

    }
    
    //insert the value to the left array
    function insert(arr, index, value) {
        if(index === arr.length) arr.push(value);

        else if(index === 1) {
            let temp1 = [arr[0], value];
            let temp2 = arr.slice(1);
            sorted = temp1.concat(temp2);

        } else {
        let temp1 = arr.slice(0, index);
        temp1.push(value);
        let temp2 = arr.slice(index);
        sorted = temp1.concat(temp2);
        }
    }
    
    return sorted;
}