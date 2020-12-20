function mergeSort(arr) {
    //create function merge two sorted arrays
    function merge(arr1, arr2) {
        let index1 = 0, index2 = 0;
        let merged = [];

        while (index1 < arr1.length && index2 < arr2.length) {
            if (arr1[index1] < arr2[index2]) {
                merged.push(arr1[index1]);
                index1++;
            } else {
                merged.push(arr2[index2]);
                index2++;
            }
        }

        if (index1 === arr1.length) {
            let temp = arr2.slice(index2);
            merged = merged.concat(temp);
        } else {
            let temp = arr1.slice(index1);
            merged = merged.concat(temp);
        }
        return merged;
    }
    
    let sorted = [];
    //array, which has 1-length array as element
    for (i = 0; i < arr.length; i++) {
        sorted.push([arr[i]]);
    }
    
    //keep merge two sorted arrays
    while (sorted.length > 1) {
        
        let temp = [];
        for (i = 0; i < sorted.length - 1; i = i+2) {
            temp.push(merge(sorted[i], sorted[i+1]));
        }
        
        if(sorted.length % 2 === 1) temp.push(sorted[sorted.length - 1]);
        
        sorted = temp;
    }
    return sorted[0];
}

var data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
mergeSort(data);
