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



    // for(i=0; i<animationArray.length; i++)
    // {
    //     if(i%2==0)
    //     {
    //         allDivs[animationArray[i][0]].style.backgroundColor = "red"
    //         allDivs[animationArray[i][1]].style.backgroundColor = "red"
    //     }
    //     else{
    //         const barOne = allDivs[animationArray[i][0]]
    //         const barTwo = allDivs[animationArray[i][1]]
    //         var h1 = barOne.style.height
    //         var h2 = barTwo.style.height
    //         barOne.style.height = h2;
    //         barTwo.style.height = h1;
    //         barOne.style.backgroundColor = "white";
    //         barTwo.style.backgroundColor = "white"
    //         barOne.setAttribute("data",`${h2}`)
    //         barTwo.setAttribute("data",`${h1}`)
    //     }

    //     var greatestArrayElement = greatestArray(animationArray.slice(i))
    //     if(animationArray[i][0] == greatestArrayElement[0] && animationArray[i][1] === greatestArrayElement[1])
    //     {
    //         console.log(greatestArrayElement)
    //         allDivs[greatestArrayElement[1]].style.backgroundColor = "orange"

    //     }
    //     // console.log(greatestArrayElement)
    //     await sleep(0.001)  
    // }


    function merge(mergeArr, lb, mid, ub, animationArray)
    {
        var i = lb;
        var j = mid+1;
        var k = 0;
        var newArray = new Array;
        while(i <= mid && j <= ub){
            animationArray.push([i,j]);
            animationArray.push([i,j]);
            if(mergeArr[i] <= mergeArr[j]){
                animationArray.push([lb+k, mergeArr[i]])
                newArray[k++] = mergeArr[i++];
            }
            else{
                animationArray.push([lb+k, mergeArr[j]]);
                newArray[k++] = mergeArr[j++];
            }
        }
        while(i <= mid){
            animationArray.push([i,i])
            animationArray.push([i,i])
            animationArray.push([lb+k, mergeArr[i]])
            newArray[k++] = mergeArr[i++];
        }
        
        while(j<= ub){
            animationArray.push([j,j])
            animationArray.push([j,j])
            animationArray.push([lb+k, mergeArr[j]])
            newArray[k++] = mergeArr[j++];
        }
        for(i = 0, j = lb; i < k; i++, j++)
        {
            mergeArr[j] = newArray[i];
        }
    }

    if((i+1)%3 == 0)
    {
        allDivs[animationArray[i][0]].style.height = `${animationArray[i][1]}px`
        allDivs[animationArray[i][0]].setAttribute("data", `${animationArray[i][1]}`);
    }
    else
    {
        if(i%3 == 0){
            allDivs[animationArray[i][0]].style.backgroundColor = 'red'
            allDivs[animationArray[i][1]].style.backgroundColor = 'red'
        }
        else{
            allDivs[animationArray[i][0]].style.backgroundColor = 'orange'
            allDivs[animationArray[i][1]].style.backgroundColor = 'orange'
        }
    }

    function doMerge(mergeArr, lb, mid, ub, animationArray)
{
    var i = lb;
    var j = mid+1;
    var k = 0;
    var newArray = new Array;
    while(i <= mid && j <= ub){
        animationArray.push([1, 0, i,j]);
        animationArray.push([1, 1, i,j]);
        if(mergeArr[i] <= mergeArr[j]){
            animationArray.push([1, 2, lb+k, mergeArr[i]])
            newArray[k++] = mergeArr[i++];
        }
        else{
            animationArray.push([1, 2, lb+k, mergeArr[j]]);
            newArray[k++] = mergeArr[j++];
        }
    }
    while(i <= mid){
        animationArray.push([1, 0, i,i])
        animationArray.push([1, 1, i,i])
        animationArray.push([1, 2, lb+k, mergeArr[i]])
        newArray[k++] = mergeArr[i++];
    }
    
    while(j<= ub){
        animationArray.push([1, 0, j,j])
        animationArray.push([1, 1, j,j])
        animationArray.push([1, 2, lb+k, mergeArr[j]])
        newArray[k++] = mergeArr[j++];
    }
    for(i = 0, j = lb; i < k; i++, j++)
    {
        mergeArr[j] = newArray[i];
    }
}