function binarySearch(arr, value){
  let left = 0;
  let right = arr.length -1;
  
  while (left <= right) {
      let middle = left + Math.floor((right - left)/2);
      console.log(left, right, middle)
;      if (arr[middle] === value) return middle;
      else if (middle > value) right = middle - 1;
      else left = middle + 1;
  }
  
  return -1;
}