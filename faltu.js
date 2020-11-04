async function finalSortMerge(arr)
{
    for(data in animationArray)
    {
        allDivs[animationArray[data][0]].setAttribute("style", `height:${arr[animationArray[data][1]]}px`)
        await sleep(0.01)
    }
    
}

function mergeSort(mergeArr, lb, ub)
{
    if(lb<ub)
    {
        
        mergeSort(mergeArr, lb, mid);
        mergeSort(mergeArr, mid+1, ub);
        merge(mergeArr, lb, mid, ub);
    }
}

// const delayInSort = (arr, lb, mid, ub, ms) =>
// {
//     return new Promise((arr, lb, mid, ub) => setTimeout(merge(arr, lb, mid, ub), ms));
// }

function merge(arr, lb, mid, ub)
{
    var i = lb;
    var j = mid+1;
    var k = 0;
    var newArray = new Array;
    while (i <= mid && j <= ub)
    {
        if(arr[i] <= arr[j]){
            newArray[k] = arr[i];
            i++;}
        else {
            newArray[k] = arr[j];
            j++;}
        k++;
    }
    if (i > mid){
        while(j <= ub){
            newArray[k] = arr[j];
            j++; k++;}
    }
    else
    {
        while (i <= mid)
        {
            newArray[k] = arr[i];
            i++; k++;
        }
    }
    arrayUpdate(arr, lb, k, newArray);
}

function arrayUpdate(arr, lb, k, newArray)
{
    for(i = 0, j = lb; i < k; i++, j++)
    {
        arr[j] = newArray[i];
        animationArray.push([i, j]);
    }
}