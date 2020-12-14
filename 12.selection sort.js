function selectionSort(arr) {

    for (i = 0; i < arr.length; i++) {
        //save the min value and index of it.
        let min = [arr[i],i];
        for (j = i+1; j < arr.length; j++) {
            if(min[0] > arr[j]) min = [arr[j],j];
        }
        //swap min value and arr[i]
        let temp = arr[i];
        arr[i] = min[0];
        arr[min[1]] = temp;

    }
    return arr;
}