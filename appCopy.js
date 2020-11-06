const barContainer = document.getElementById('arrayBar');
const randomizeBtn = document.getElementById('randomize');
const quickSortBtn = document.getElementById('quicksort');
const mergeSortBtn = document.getElementById('mergesort');
const bubbleSortBtn = document.getElementById('bubblesort');
const selectionSortBtn = document.getElementById('selectionsort')
const insertionSortBtn = document.getElementById('insertionsort')
const countingSortBtn = document.getElementById('countingsort')
const radixSortBtn = document.getElementById('radixsort')
const heapSortBtn = document.getElementById("heapsort")
const shellSortBtn = document.getElementById("shellsort")
const timSortBtn = document.getElementById("timsort")
const allButtons = document.querySelectorAll('#btnContainer button')
const divNum = 196
const barWidth = 5
const SORTED_COLOR = "orange";
const COM_COLOR = "red"
const FINAL_COLOR = "rgba(147, 231, 12, 0.863)"


const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max-min)+min);
}
const testArray = [15, 5, 20, 1, 17, 10 , 30]
randomArrayGenerator()

function randomArrayGenerator()
{
    const divsNum = Math.floor((window.innerWidth - 280)/barWidth)
    for(let i = 1; i <= divNum; i++)
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


//button handlers
randomizeBtn.addEventListener("click", ()=>{
    while(barContainer.firstChild){
        barContainer.removeChild(barContainer.firstChild)
    }
    randomArrayGenerator()
})
mergeSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div')
    mergeSort(allDivs);
    disableBtn();
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
    disableBtn();
})
bubbleSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div')
    bubbleSort(allDivs);
    disableBtn();
})
selectionSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div')
    selectionSort(allDivs);
    disableBtn();
})

insertionSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div');
    insertionSort(allDivs);
    disableBtn();
})

countingSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div');
    countingSort(allDivs);
    disableBtn();
})

radixSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div');
    radixSort(allDivs);
    disableBtn()
})

heapSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div');
    heapSort(allDivs);
    disableBtn()
})

shellSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div');
    shellSort(allDivs);
})

timSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div');
    timSort(allDivs,allDivs.length);
})

async function timSort(allDivs, n)
{
    const timArray = new Array 
    const animationArray = new Array
    for(var i = 0; i < n; i++){
        timArray.push(parseInt(allDivs[i].getAttribute("data")))
    }
    const testArray = timArray.slice()
    console.log(testArray)
    RUN = 32; 
    for(let i = 0; i < n; i+=RUN){
        insertionSortAlgo(timArray, i, Math.min(i+31, n-1), animationArray);
    }
    for(let size = RUN; size < n; size = 2*size){
        for(let left = 0; left < n ; left += 2*size){
            let mid = left+size-1;
            if(mid > n){continue}
            let right = Math.min(left+2*size-1, n-1);

            doMerge(timArray, left, mid, right, animationArray)
        }
    }
    // doMerge(timArray, 0, 31, 64, animationArray)
    // doMerge(timArray, 0, 63, timArray.length, animationArray)
    console.log(animationArray)
    console.log(timArray);
    for(let i = 0; i < animationArray.length; i++){
        // insertionSort
        if(animationArray[i][0] == 0){
            if(animationArray[i][1]==0)
            {
                allDivs[animationArray[i][2]].style.backgroundColor = "red"
                allDivs[animationArray[i][3]].style.backgroundColor = "red"
            }
            else if(animationArray[i][1]==1)
            {
                allDivs[animationArray[i][2]].style.backgroundColor = "orange"
                allDivs[animationArray[i][3]].style.backgroundColor = "orange"
            }
            else if(animationArray[i][1] == 2){
                allDivs[animationArray[i][2]].style.height = allDivs[animationArray[i][3]].style.height 
                allDivs[animationArray[i][2]].setAttribute("data", `${allDivs[animationArray[i][3]].style.height}`)
            }
            else if(animationArray[i][1] == 3){
                allDivs[animationArray[i][2]].style.height = `${animationArray[i][3]}px`
                allDivs[animationArray[i][2]].setAttribute("data", `${animationArray[i][3]}`)
            }
        }

        //for the merge sort
        else if(animationArray[i][0] == 1){
            const barFirst = allDivs[animationArray[i][2]]
            const barSecond = allDivs[animationArray[i][2]]
            if(animationArray[i][1] == 2)
            {
                barFirst.style.height = `${animationArray[i][3]}px`
                barFirst.setAttribute("data", `${animationArray[i][3]}`);
            }
        else
        {
            if(animationArray[i][1] == 0){
                console.log(i, animationArray[i])
                barFirst.style.backgroundColor = 'red'
                allDivs[animationArray[i][3]].style.backgroundColor = 'red'
            }
            else if(animationArray[i][1] == 1){
                barFirst.style.backgroundColor = 'orange'
                allDivs[animationArray[i][3]].style.backgroundColor = 'orange'
            }
        }
        }
        await sleep(1)
    }
}

function insertionSortAlgo(timArray, left, right, animationArray){
    for(let i = left+1; i<=right; i++){
        let temp = timArray[i];
        let j = i -1;
        while(j >= left && timArray[j] > temp){
            animationArray.push([0,0, i, j])
            animationArray.push([0,1, i, j])
            animationArray.push([0,2, j+1, j])
            timArray[j+1] = timArray[j];
            j--;
        }
        animationArray.push([0, 3, j+1, temp])
        timArray[j+1] = temp;
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


async function shellSort(allDivs){
    const shellArray = new Array 
    for(var i = 0; i < allDivs.length; i++){
        shellArray.push(parseInt(allDivs[i].getAttribute('data')))
    }
    var size = shellArray.length
    const animations = new Array 
    var gap = Math.floor(size/2);
    for(gap; gap>=1; gap = Math.floor(gap/2)){
        for(var j = gap; j<size; j++){
            for(var i = j-gap; i >= 0; i = i - gap){
                if(shellArray[i+gap] > shellArray[i]){
                    break;
                }
                else{
                    animations.push([i+gap, i])
                    temp = shellArray[i+gap]
                    shellArray[i+gap] = shellArray[i]
                    shellArray[i] = temp
                }
            }
        }
    }
    console.log(animations)
    for(var i = 0; i < animations.length; i++)
    {
        for(var j = 0; j < 2; j++){
            // console.log(j)
            let barFirst = allDivs[animations[i][0]]
            let barSecond = allDivs[animations[i][1]]
            if(j%2==0){
                barFirst.style.backgroundColor = COM_COLOR
                barSecond.style.backgroundColor = COM_COLOR
            }
            else{
                var barFirstHeight = barFirst.style.height;
                barFirst.style.height = barSecond.style.height;
                barSecond.style.height = barFirstHeight
                barFirst.style.backgroundColor = SORTED_COLOR
                barSecond.style.backgroundColor = SORTED_COLOR  
            }
            await sleep(1)
        }
    }
    divsFinalColor(allDivs)
}
async function divsFinalColor(allDivs)
{
    for(div of allDivs){
        div.style.backgroundColor = FINAL_COLOR
        await sleep(1)
    }
    enableBtn()
}


async function heapSort(allDivs)
{
    const heapArray = new Array 
    for(var i = 0; i < allDivs.length; i++){
        heapArray.push(parseInt(allDivs[i].getAttribute('data')))
    }
    var largestNonLeafNode = Math.floor(allDivs.length/2)
    animationArray = new Array
    for(var i = largestNonLeafNode; i>=1;i--){
        MaxHeapify(heapArray, heapArray.length, i)
    }
    for(var i = heapArray.length; i>=1; i--){
        animationArray.push([i-1, 0])
        animationArray.push([i-1, 0])
        var temp = heapArray[i-1];
        heapArray[i-1] = heapArray[0];
        heapArray[0] = temp;
        MaxHeapify(heapArray, i-1, 1)
    }

    for(var i = 0; i< animationArray.length; i++)
    {
        let barFirst = allDivs[animationArray[i][0]]
        let barSecond = allDivs[animationArray[i][1]]
        if(i%2==0){
            barFirst.style.backgroundColor = COM_COLOR
            barSecond.style.backgroundColor = COM_COLOR
        }
        else{
            var barFirstHeight = barFirst.style.height;
            barFirst.style.height = barSecond.style.height;
            barSecond.style.height = barFirstHeight
            barFirst.style.backgroundColor = SORTED_COLOR
            barSecond.style.backgroundColor = SORTED_COLOR  
        }
        await sleep(1)
    }
    divsFinalColor(allDivs)
}


function MaxHeapify(heapArray, n, i){
    var largest = i;
    var l = 2*i;
    var r = 2*i+1;
    if(l<=n && heapArray[l-1] > heapArray[largest-1]){
        largest = l;
    }
    if(r<=n && heapArray[r-1]>heapArray[largest-1]){
        largest = r;
    }
    if(largest != i){
        animationArray.push([largest-1, i-1])
        animationArray.push([largest-1, i-1])
        var temp = heapArray[largest-1];
        heapArray[largest-1] = heapArray[i-1]
        heapArray[i-1] = temp;
        MaxHeapify(heapArray, n , largest)
    }
}





async function radixSort(allDivs)
{
    radixArray = new Array
    for(i = 0 ; i < allDivs.length; i++){
        radixArray.push(parseInt(allDivs[i].getAttribute("data")))
    }
    var max = radixArray[0]
    for(var i = 0; i < radixArray.length; i++){
        if(radixArray[i] > max){
            max = radixArray[i]
        }
    }
    const animationArray = new Array
    for(pos = 1; Math.floor(max/pos) > 0; pos*=10)
    {
        console.log(max/pos)
        countingRadixSort(radixArray, radixArray.length, pos, animationArray);
    }
    for(i = 0; i< animationArray.length; i++){
        if(i%2==0){
            allDivs[animationArray[i][0]].style.backgroundColor = "red";
        }
        else
        {
            allDivs[animationArray[i][0]].style.backgroundColor = "orange";
            allDivs[animationArray[i][0]].style.height = `${animationArray[i][1]}px`
        }
        await sleep(1)
    }
    for(i = 0; i<allDivs.length; i++)
    {
        allDivs[i].style.backgroundColor = "rgba(147, 231, 12, 0.863)"
        await sleep(1)
    }
    enableBtn()
}
function countingRadixSort(radixArray, n, pos, animationArray){
    const count = new Array
    const finalArr = new Array
    for(var i = 0; i < n; i++){
        finalArr.push(null)
    }
    for(var i = 0; i < 10; i++)
    {
        count.push(0);
    }

    for(i = 0; i<n; i++){
        ++count[(Math.floor(radixArray[i]/pos))%10];
    }

    for(i = 1; i<=10; i++){
        count[i] += count[i-1];
    }

    for(i = n -1; i>=0; i--){
        finalArr[--count[(Math.floor(radixArray[i]/pos))%10]] = radixArray[i]
        animationArray.push([count[(Math.floor(radixArray[i]/pos))%10], radixArray[i]])
        animationArray.push([count[(Math.floor(radixArray[i]/pos))%10], radixArray[i]])
    }
    for(i = 0; i<n; i++){
        radixArray[i] = finalArr[i]
    }
}




async function countingSort(allDivs){
    const countingArray = new Array
    for(i = 0 ; i < allDivs.length; i++){
        countingArray.push(parseInt(allDivs[i].getAttribute("data")))
    }
    const animationArray = new Array
    var k = countingArray[0];

    for(var i = 0; i < countingArray.length; i++){
        if(countingArray[i]>k){
            k = countingArray[i]
        }
    }
    const countArr = new Array
    const finalArr = new Array
    for(i = 0; i<=k; i++)
    {
        countArr.push(0)
    }
    for(i=0; i<countingArray.length; i++)
    {
        finalArr.push(null)
    }
    for(i = 0; i < countingArray.length; i++){
        countArr[countingArray[i]]+=1;
    }
    for(i = 1; i <= k; i++){
        countArr[i] += countArr[i-1]
    }
    for(i = countingArray.length-1; i >= 0; i--){
        
        finalArr[--countArr[countingArray[i]]] = countingArray[i]
        animationArray.push([countArr[countingArray[i]], countingArray[i]])
        animationArray.push([countArr[countingArray[i]], countingArray[i]])
    }

    for(i = 0; i < countingArray.length; i++){
        countingArray[i] = finalArr[i]
    }
    for(i = 0; i < animationArray.length; i++)
    {
        if(i%2==0){
            allDivs[animationArray[i][0]].style.backgroundColor = "red";
        }
        else
        {
            allDivs[animationArray[i][0]].style.backgroundColor = "orange";
            allDivs[animationArray[i][0]].style.height = `${animationArray[i][1]}px`;
        }
        await sleep(1)
    }
    for(i = 0; i<allDivs.length; i++){
        allDivs[i].style.backgroundColor = 'rgba(147, 231, 12, 0.863)'
        await sleep(1)
    }
    enableBtn()
}




async function insertionSort(allDivs)
{
    const insertionArray = new Array
    for(let i = 0; i < allDivs.length; i++){
        insertionArray.push(parseInt(allDivs[i].getAttribute('data')));
    }
    let animationArray = new Array
    for(var i = 1; i < insertionArray.length; i++){
        var temp = insertionArray[i];
        var j = i - 1;

        while(j >= 0 && insertionArray[j] > temp){
            animationArray.push([0, i, j])
            animationArray.push([1, i, j])
            animationArray.push([2, j+1, j])
            insertionArray[j+1] = insertionArray[j];
            j--;
        }
        animationArray.push([3, j+1, temp])
        insertionArray[j+1] = temp;
    }
    for(i = 0; i< animationArray.length; i++)
    {
        if(animationArray[i][0]==0)
        {
            allDivs[animationArray[i][1]].style.backgroundColor = "red"
            allDivs[animationArray[i][2]].style.backgroundColor = "red"
        }
        else if(animationArray[i][0]==1)
        {
            allDivs[animationArray[i][1]].style.backgroundColor = "orange"
            allDivs[animationArray[i][2]].style.backgroundColor = "orange"
        }
        else if(animationArray[i][0] == 2){
            allDivs[animationArray[i][1]].style.height = allDivs[animationArray[i][2]].style.height 
            allDivs[animationArray[i][1]].setAttribute("data", `${allDivs[animationArray[i][2]].style.height}`)
        }
        else if(animationArray[i][0] == 3){
            allDivs[animationArray[i][1]].style.height = `${animationArray[i][2]}px`
            allDivs[animationArray[i][1]].setAttribute("data", `${animationArray[i][2]}`)
        }
        await sleep(1)
    }
    for(i = 0; i < allDivs.length; i++)
    {
        allDivs[i].style.backgroundColor = "rgba(147, 231, 12, 0.863)";
        await sleep(1)
    }
    enableBtn();

}


async function selectionSort(allDivs)
{
    const selectionArray = new Array
    for(let i = 0; i < allDivs.length; i++){
        selectionArray.push(parseInt(allDivs[i].getAttribute('data')));
    }
    let animationArray = new Array
    for(let i = 0; i < selectionArray.length-1; i++){
        var min = i;
        for(var j = i+1; j < selectionArray.length; j++){
            animationArray.push([0, j, min])
            animationArray.push([1, j, min])
            if(selectionArray[j] < selectionArray[min]){
                min=j;
            }
        }
        if(min!=i){
            animationArray.push([2, i, min])
            var temp = selectionArray[i];
            selectionArray[i]= selectionArray[min];
            selectionArray[min] = temp;
        }
        animationArray.push([3, i])
    }
    
    for(i = 0; i < animationArray.length; i++)
    {


        if(animationArray[i][0] == 0)
        {
            allDivs[animationArray[i][1]].style.backgroundColor = "red"
            allDivs[animationArray[i][2]].style.backgroundColor = "red"
        }
        else if(animationArray[i][0] == 1)
        {
            allDivs[animationArray[i][1]].style.backgroundColor = "white"
            allDivs[animationArray[i][2]].style.backgroundColor = "white"
        }
        else if(animationArray[i][0] == 2)
        {
            const temp = allDivs[animationArray[i][1]].style.height
            allDivs[animationArray[i][1]].style.height = allDivs[animationArray[i][2]].style.height
            allDivs[animationArray[i][2]].style.height = temp;
            allDivs[animationArray[i][2]].setAttribute("data", `${allDivs[animationArray[i][2]].style.height}`)
            allDivs[animationArray[i][1]].setAttribute("data", `${allDivs[animationArray[i][1]].style.height}`)
        }
        else if(animationArray[i][0] == 3)
        {
            for(let k =0; k <= animationArray[i][1]+1; k++)
            {
                allDivs[k].style.backgroundColor = 'orange';
            }
        }

        await sleep(4)
    }
    for(i = 0; i < allDivs.length; i++)
    {
        allDivs[i].style.backgroundColor = "rgba(147, 231, 12, 0.863)";
        await sleep(1)
    }
    enableBtn();
}



function disableBtn()
{
    allButtons.forEach((button)=>{
    button.disabled = true;
    button.className = "btnDisabledClass"
    })
}
function enableBtn()
{
    allButtons.forEach((button)=>{
    button.disabled = false;
    button.className = "btnClass"
    })
}


async function bubbleSort(allDivs)
{
    let bubbleArray = new Array
    for(i = 0; i<allDivs.length; i++)
    {
        bubbleArray.push(parseInt(allDivs[i].getAttribute('data')));
    }
    var temp = 0;
    const animationArray = []
    for(var i = 0; i < bubbleArray.length; i++)
    {
        for(var j = 0; j < bubbleArray.length-1-i; j++)
        {
            // animationArray.push([j, j+1]);
            animationArray.push([0, j, j+1]);
            animationArray.push([1, j, j+1]);
            if(bubbleArray[j]>bubbleArray[j+1])
            {
                animationArray.push([2, j, j+1]);
                temp = bubbleArray[j];
                bubbleArray[j] = bubbleArray[j+1];
                bubbleArray[j+1] = temp;
            }
        }
        
    }

    for(i=0; i< animationArray.length; i++)
    {
        if(animationArray[i][0] == 0)
        {
            allDivs[animationArray[i][1]].style.backgroundColor = "red"
            allDivs[animationArray[i][2]].style.backgroundColor = "red"
        }
        else if(animationArray[i][0] == 1)
        {
            allDivs[animationArray[i][1]].style.backgroundColor = "white"
            allDivs[animationArray[i][2]].style.backgroundColor = "white"
        }
        else if(animationArray[i][0] == 2)
        {
            const barOne = allDivs[animationArray[i][1]]
            const barTwo = allDivs[animationArray[i][2]]
            var h1 = barOne.style.height
            var h2 = barTwo.style.height
            barOne.style.height = h2;
            barTwo.style.height = h1;
            barOne.setAttribute("data",`${h2}`)
            barTwo.setAttribute("data",`${h1}`)
        }
        var greatestArrayElement = greatestArray(animationArray.slice(i))
        if(animationArray[i][1] == greatestArrayElement[0] && animationArray[i][2] === greatestArrayElement[1])
        {
            // console.log(greatestArrayElement)
            allDivs[greatestArrayElement[1]].style.backgroundColor = "orange"

        }
        await sleep(1)
    }
    for(i=0; i<allDivs.length; i++)
    {
        allDivs[i].style.backgroundColor ="rgba(147, 231, 12, 0.863)"
        await sleep(0.01)
    }
    enableBtn();
}
function greatestArray(array)
{
    var largest = [array[0][1], array[0][2]]
    for(i = 1; i < array.length; i++)
    {
        if(array[i][1] > largest[0] && array[i][2] > largest[1])
        {
            largest = [array[i][1], array[i][2]]
        }
    }
    return largest
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
    enableBtn();
    
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
        await sleep(1)
    }
    enableBtn();
}



