let arr = [4,2,5,1,8,3];

const partition = (arr, low, high)=>{
    if(low >= high) return;

    let pivot = quickSort(arr, low, high);
    partition(arr, low, pivot-1);
    partition(arr, pivot+1, high);
}

const quickSort = (arr, low, high)=>{
    let pivot = arr[high];
    let pIndex = low;
    for(let index = low; index < high; index++){
        if(arr[index] <= pivot){
            swap(arr, pIndex, index);
            pIndex++;
        }
    }
    swap(arr, pIndex, high);
    return pIndex;
}

const swap = (arr, x, y)=>{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

partition(arr, 0, arr.length-1);

console.log(arr);