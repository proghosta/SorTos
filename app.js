const barContainer = document.getElementById('arrayBar');
const randomizeBtn = document.getElementById('randomize');
const quickSortBtn = document.getElementById('quicksort');
const mergeSortBtn = document.getElementById('mergesort');
const allButtons = document.querySelectorAll('#btnContainer button')

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max-min)+min);
}

randomArrayGenerator()

function randomArrayGenerator()
{
    for(let i = 1; i <= 430; i++)
    {
    const newDiv = document.createElement("DIV");
    let randomNum = getRandom(5, 700);
    newDiv.setAttribute("style", `height: ${randomNum}px`);
    newDiv.setAttribute("data", `${randomNum}`);
    newDiv.classList.add('white');
    barContainer.appendChild(newDiv);
    }
}




animationArray = new Array
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
// sortBtn.addEventListener("click", clickHandler)
randomizeBtn.addEventListener("click", ()=>{
    while(barContainer.firstChild){
        barContainer.removeChild(barContainer.firstChild)
    }
    randomArrayGenerator()
    
})
mergeSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div')
    mergeSort(allDivs);
    allButtons.forEach((button)=>{
    button.disabled = true;
    button.className = "btnDisabledClass"
    })
})
quickSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div')
    console.log(allDivs)
    let quickArray = new Array
    for(i = 0; i<allDivs.length; i++)
    {
        quickArray.push(parseInt(allDivs[i].getAttribute('data')));
    }
    mainQuickSort(allDivs, quickArray);

    allButtons.forEach((button)=>{
    button.disabled = true;
    button.className = "btnDisabledClass"
    })
})


async function bubbleSort(allDivs)
{
    let bubbleArray = new Array
    for(i = 0; i<allDivs.length; i++)
    {
        bubbleArray.push(parseInt(allDivs[i].getAttribute('data')));
    }
    var temp = 0;

    for(let i = 0; i < bubbleArray.length; i++)
    {
        for(let j = 0; j < bubbleArray.length-1-i; j++)
        {
            if(bubbleArray[j]>bubbleArray[j+1])
            {
                temp = bubbleArray[j];
                bubbleArray[j] = bubbleArray[j+1];
                bubbleArray[j+1] = temp;
                allDivs[j].setAttribute("style", `height:${bubbleArray[j]}px`);
                allDivs[j].classList.add("black");
                allDivs[j+1].setAttribute("style", `height:${bubbleArray[j+1]}px`);
                allDivs[j+1].classList.add("black");
                await sleep(0.01);
            }
        }
    }
}


async function mainQuickSort(allDivs, quickArray)
{
    const animationArr = getQuickSortAlgoAnimation(quickArray);
    
    for(i=0; i<animationArr.length; i++)
    {
        if(i%2==0)
        {
            allDivs[animationArr[i][0]].style.backgroundColor = "red"
            allDivs[animationArr[i][1]].style.backgroundColor = "red"
        }
        else{
            const barOne = allDivs[animationArr[i][0]]
            const barTwo = allDivs[animationArr[i][1]]
            var h1 = barOne.style.height
            var h2 = barTwo.style.height
            barOne.style.height = h2;
            barTwo.style.height = h1;
            barOne.style.backgroundColor = "orange";
            barTwo.style.backgroundColor = "orange"
            barOne.setAttribute("data",`${h2}`)
            barTwo.setAttribute("data",`${h1}`)
        }

        await sleep(1)  
    }
    for(i=0; i<allDivs.length;i++)
    {
        allDivs[i].style.backgroundColor = "rgba(147, 231, 12, 0.863)";
        await sleep(1);
    }
    allButtons.forEach((button)=>{
        button.disabled = false;
        button.className = "btnClass"
    })
    
}

function getQuickSortAlgoAnimation(quickArray)
{
    const animationArray = []
    quickSort(quickArray, 0, quickArray.length-1, animationArray);
    return animationArray;
}

function quickSort(quickArray, lb, ub, animationArray)
{
    if(lb < ub) {
        var loc = partition(quickArray, lb, ub, animationArray);
        quickSort(quickArray, lb, loc-1, animationArray);
        quickSort(quickArray, loc+1, ub, animationArray);
    }
}

function partition(quickArray, lb, ub, animationArray)
{
    var start = lb
    var end = ub
    var pivot = quickArray[lb];

    while(start < end)
    {
        while(quickArray[start] <= pivot && start < ub){
            start++;
        }
        while(quickArray[end] > pivot && end > lb){
            end--;
        }
        if(start <= end){
            animationArray.push([start, end])
            animationArray.push([start, end])
            var temp = quickArray[start];
            quickArray[start] = quickArray[end];
            quickArray[end] = temp;
        }
    }
    animationArray.push([lb, end])
    animationArray.push([lb, end])
    quickArray[lb] = quickArray[end]
    quickArray[end] = pivot;
    return end;
}





function getAnimationArr(mergeArr)
{
    const animationArray = []; 
    console.log(mergeArr)
    actualMergeSort(mergeArr, 0, mergeArr.length-1, animationArray);
    return animationArray;
}

function actualMergeSort(mergeArr, lb, ub, animationArray)
{
    if(lb < ub)
    {
      var mid = Math.floor((ub+lb)/2);
        actualMergeSort(mergeArr, lb, mid, animationArray);
        actualMergeSort(mergeArr, mid+1, ub, animationArray);
        merge(mergeArr, lb, mid, ub, animationArray);
    }
}

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


async function mergeSort(allDivs)
{
    const mergeArray = new Array 
    for(i = 0; i<allDivs.length; i++)
    {
        mergeArray.push(parseInt(allDivs[i].getAttribute('data')));
    }
    const animationArray = getAnimationArr(mergeArray);
    for(i = 0; i < animationArray.length; i++)
    {
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
        await sleep(0.01)
    }
    for(i=0; i < allDivs.length; i++)
    {
        allDivs[i].style.backgroundColor = "rgba(147, 231, 12, 0.863)";
    }
    allButtons.forEach((button)=>{
        button.disabled = false;
        button.className = "btnClass"
    })
}



