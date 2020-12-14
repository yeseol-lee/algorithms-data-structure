function bubble(arr) {

    //swap two values
    function swap(arr, index1, index2) {
        let temp = arr[index2];
        arr[index2] = arr[index1];
        arr[index1] = temp;
    }

    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
    }

    return arr;
}