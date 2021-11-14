const arr = [4,1,3,8,0,6,9]
const partition = (arr, low, high)=>{
    if(low >= high-1) return;
    
    let mid = Math.round((low+high)/2);
    partition(arr, low, mid);
    partition(arr, mid+1, high);
    merge(arr, low, mid, high);
}

const merge = (arr, low, mid, high)=>{
    let i = 0, j = 0, k = low;
    let leftArray =  arr.slice(low, mid);
    let rightArray = arr.slice(mid, high);

    if(mid === 3 && high === 7){
        let a = 10;
    }

    while(i < leftArray.length && j < rightArray.length){
        if(leftArray[i] < rightArray[j]){
            arr[k] = leftArray[i];
            i++;
        }else{
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while(i < leftArray.length){
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    while(j < rightArray.length){
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

partition(arr, 0, arr.length);
console.log(arr);