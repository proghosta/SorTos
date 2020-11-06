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
const slider = document.getElementById('slider')
const divNum = 60
const barWidth = 5
const SORTED_COLOR = "orange";
const COM_COLOR = "red"
const FINAL_COLOR = "rgba(147, 231, 12, 0.863)"
TIME_DELAY = 1;


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
slider.oninput = ()=>{
    TIME_DELAY = 101 - slider.value; 
}

mergeSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div')
    mergeSort(allDivs);
    disableBtn();
})
quickSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div')
    quickSort(allDivs);
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
    disableBtn();
})

timSortBtn.addEventListener("click", ()=>{
    const allDivs = document.querySelectorAll('#arrayBar div');
    timSort(allDivs,allDivs.length);
    disableBtn();
})


async function timSort(allDivs, n)
{
    const timArray = arrayGenerator(allDivs)
    RUN = 32; 
    for(let i = 0; i < n; i+=RUN){
        insertionSortAlgo(timArray, i, Math.min(i+31, n-1), animationArray);
    }
    for(let size = RUN; size < n; size = 2*size){
        for(let left = 0; left < n ; left += 2*size){
            let mid = left+size-1;
            if(mid > n){continue}
            let right = Math.min(left+2*size-1, n-1);
            merge(timArray, left, mid, right, animationArray)}
    }

    for(let i = 0; i < animationArray.length; i++){
        const [ELEMENT1, ELEMENT2, FLAG_SORT_TYPE, FLAG_OP] = animationArray[i];

        // InsertionSort Animation Part
        if(FLAG_SORT_TYPE == 0){
            switch(FLAG_OP){
                case 0:
                    divColor(allDivs, ELEMENT1, ELEMENT2, COM_COLOR);
                    break;
                case 1:
                    divColor(allDivs, ELEMENT1, ELEMENT2, SORTED_COLOR);
                    break;
                case 2:
                    allDivs[ELEMENT1].style.height = allDivs[ELEMENT2].style.height;
                    allDivs[ELEMENT1].setAttribute("data", `${allDivs[ELEMENT2].style.height}`);
                    break;
                case 3:
                    allDivs[ELEMENT1].style.height = `${ELEMENT2}px`;
                    allDivs[ELEMENT1].setAttribute("data", `${ELEMENT2}`);
                    break;
            }
        }
        // MergeSort Animation Part
        else if(FLAG_SORT_TYPE == 1){
            const barFirst = allDivs[ELEMENT1];
            const barSecond = allDivs[ELEMENT2];
            if(FLAG_OP == 2){
                barFirst.style.height = `${ELEMENT2}px`;
                barFirst.setAttribute("data", `${ELEMENT2}`);}
        else{
            if(FLAG_OP == 0){
                barFirst.style.backgroundColor = COM_COLOR;
                barSecond.style.backgroundColor = COM_COLOR;}
            else if(FLAG_OP == 1){
                barFirst.style.backgroundColor = SORTED_COLOR;
                barSecond.style.backgroundColor = SORTED_COLOR;}
            };
        }
        await sleep(TIME_DELAY);
    }
    divsFinalColor(allDivs);
}


async function shellSort(allDivs){
    const shellArray = arrayGenerator(allDivs);
    var size = shellArray.length
    const animations = new Array 
    var gap = Math.floor(size/2);
    for(gap; gap>=1; gap = Math.floor(gap/2)){
        for(var j = gap; j<size; j++){
            for(var i = j-gap; i >= 0; i = i - gap){
                if(shellArray[i+gap] > shellArray[i]) break;
                else{
                    animations.push([i+gap, i]);
                    temp = shellArray[i+gap];
                    shellArray[i+gap] = shellArray[i];
                    shellArray[i] = temp;
                }
            }
        }
    }
    for(var i = 0; i < animations.length; i++)
    {
        for(var j = 0; j < 2; j++){
            const [FINDEX, LINDEX] = animations[i];
            let barFirst = allDivs[FINDEX]
            let barSecond = allDivs[LINDEX]
            if(j%2==0){
                divColor(allDivs, FINDEX, LINDEX, COM_COLOR);
            }
            else{ 
                swapDivHeight(barFirst, barSecond);
                divColor(allDivs, FINDEX, LINDEX, SORTED_COLOR);
            }
            await sleep(TIME_DELAY)
        }
    }
    divsFinalColor(allDivs)
}


async function heapSort(allDivs)
{
    const heapArray = arrayGenerator(allDivs);
    animationArray = new Array;
    var largestNonLeafNode = Math.floor(allDivs.length/2);

    for(var i = largestNonLeafNode; i>=1;i--){
        MaxHeapify(heapArray, heapArray.length, i);
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
        const [FINDEX, LINDEX] = animationArray[i];
        const barFirst = allDivs[FINDEX];
        const barSecond = allDivs[LINDEX];
        if(i%2==0){ divColor(allDivs, FINDEX, LINDEX, COM_COLOR); }
        else{
            swapDivHeight(barFirst, barSecond);
            divColor(allDivs, FINDEX, LINDEX, SORTED_COLOR);
        }
        await sleep(TIME_DELAY)
    }
    divsFinalColor(allDivs)
}


async function radixSort(allDivs)
{
    const radixArray = arrayGenerator(allDivs)
    var max = radixArray[0]
    for(var i = 0; i < radixArray.length; i++){
        if(radixArray[i] > max){max = radixArray[i];}
    }
    const animationArray = new Array
    for(pos = 1; Math.floor(max/pos) > 0; pos*=10){
    countingRadixSort(radixArray, radixArray.length, pos, animationArray);}
    for(i = 0; i< animationArray.length; i++){
        const [FINDEX, LINDEX] = animationArray[i];
        if(i%2==0){ allDivs[FINDEX].style.backgroundColor = "red"; }
        else{
            allDivs[FINDEX].style.backgroundColor = "orange";
            allDivs[FINDEX].style.height = `${LINDEX}px`;}
        await sleep(TIME_DELAY)
    }
    divsFinalColor(allDivs);
}


async function countingSort(allDivs){
    const countingArray = arrayGenerator(allDivs);
    const animationArray = new Array
    var k = countingArray[0];
    for(var i = 0; i < countingArray.length; i++){
        if(countingArray[i]>k){
            k = countingArray[i]
        }}
    const countArr = new Array
    const finalArr = new Array
    for(i = 0; i<=k; i++)countArr.push(null);
    for(i=0; i<countingArray.length; i++)finalArr.push(null);
    for(i = 0; i < countingArray.length; i++) countArr[countingArray[i]]+=1;
    for(i = 1; i <= k; i++) countArr[i] += countArr[i-1];
    for(i = countingArray.length-1; i >= 0; i--){
        finalArr[--countArr[countingArray[i]]] = countingArray[i]
        animationArray.push([countArr[countingArray[i]], countingArray[i]])
        animationArray.push([countArr[countingArray[i]], countingArray[i]])}
    for(i = 0; i < countingArray.length; i++)countingArray[i] = finalArr[i];
    for(i = 0; i < animationArray.length; i++)
    {
        const [FINDEX, LINDEX] = animationArray[i];
        const barFirst = allDivs[FINDEX];
        if(i%2==0){ barFirst.style.backgroundColor = "red"; }
        else{
            barFirst.style.backgroundColor = "orange";
            barFirst.style.height = `${LINDEX}px`;
            barFirst.setAttribute("data", LINDEX);}
        await sleep(TIME_DELAY)
    }
    divsFinalColor(allDivs);
}

async function insertionSort(allDivs)
{
    const insertionArray = arrayGenerator(allDivs)
    const animationArray = new Array

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
        const [FLAG_OP, ELEMENT1, ELEMENT2] = animationArray[i];
        const barFirst = allDivs[ELEMENT1]
        const barSecond = allDivs[ELEMENT2]
        switch(FLAG_OP){
            case 0:
                divColor(allDivs, ELEMENT1, ELEMENT2, COM_COLOR);
                break;
            case 1:
                divColor(allDivs, ELEMENT1, ELEMENT2, SORTED_COLOR);
                break;
            case 2:
                barFirst.style.height = barSecond.style.height;
                barFirst.setAttribute("data", `${barSecond.style.height}`);
                break;
            case 3: 
                barFirst.style.height = `${ELEMENT2}px`
                barFirst.setAttribute("data", `${ELEMENT2}`)
                break;
        }
        await sleep(TIME_DELAY)
    }
    divsFinalColor(allDivs);
}


async function selectionSort(allDivs)
{
    const selectionArray = arrayGenerator(allDivs);
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
        const [FLAG_OP, FINDEX, LINDEX] = animationArray[i];
        const barFirst = allDivs[FINDEX];
        const barSecond = allDivs[LINDEX];
        switch(FLAG_OP){
            case 0:
                divColor(allDivs, FINDEX, LINDEX, COM_COLOR);
                break;
            case 1:
                divColor(allDivs, FINDEX, LINDEX, "white");
                break;
            case 2:
                swapDivHeight(barFirst, barSecond);
                break;
            case 3:
                for(let k = 0; k <= FINDEX+1; k++){
                    allDivs[k].style.backgroundColor = SORTED_COLOR;
                }
                break;
        }
        await sleep(TIME_DELAY)
    }
    divsFinalColor(allDivs);
}


async function bubbleSort(allDivs)
{
    let bubbleArray = arrayGenerator(allDivs)
    var temp = 0;
    const animationArray = new Array
    for(var i = 0; i < bubbleArray.length; i++){
        for(var j = 0; j < bubbleArray.length-1-i; j++){
            animationArray.push([0, j, j+1]);
            animationArray.push([1, j, j+1]);
            if(bubbleArray[j]>bubbleArray[j+1]){
                animationArray.push([2, j, j+1]);
                temp = bubbleArray[j];
                bubbleArray[j] = bubbleArray[j+1];
                bubbleArray[j+1] = temp;}
            }
    }

    for(i=0; i< animationArray.length; i++)
    {
        const [FLAG_OP, FINDEX, LINDEX] = animationArray[i];
        const barFirst = allDivs[FINDEX];
        const barSecond = allDivs[LINDEX];
        switch(FLAG_OP){
            case 0:
                divColor(allDivs, FINDEX, LINDEX, COM_COLOR);
                break;
            case 1:
                divColor(allDivs, FINDEX, LINDEX, "white");
                break;
            case 2:
                var h1 = barFirst.style.height
                var h2 = barSecond.style.height
                barFirst.style.height = h2;
                barSecond.style.height = h1;
                barFirst.setAttribute("data",`${h2}`)
                barSecond.setAttribute("data",`${h1}`)
                break;
        }
        var [a,b] = greatestArray(animationArray.slice(i))
        if(FINDEX == a && LINDEX === b){ allDivs[b].style.backgroundColor = SORTED_COLOR; }
        await sleep(TIME_DELAY);
    }
    divsFinalColor(allDivs);
}


async function quickSort(allDivs)
{
    let quickArray = arrayGenerator(allDivs)
    const animationArr = getQuickSortAlgoAnimation(quickArray);
    for(i=0; i<animationArr.length; i++)
    {
        const [FINDEX, LINDEX] = animationArr[i];
        const barFirst = allDivs[FINDEX];
        const barSecond = allDivs[LINDEX];
        if(i%2==0){ divColor(allDivs, FINDEX, LINDEX, COM_COLOR); }
        else{
            var h1 = barFirst.style.height
            var h2 = barSecond.style.height
            barFirst.style.height = h2;
            barSecond.style.height = h1;
            divColor(allDivs, FINDEX, LINDEX, SORTED_COLOR);
            barFirst.setAttribute("data",`${h2}`)
            barSecond.setAttribute("data",`${h1}`)
        }
        await sleep(TIME_DELAY);
    }
    divsFinalColor(allDivs);
}


async function mergeSort(allDivs)
{
    const mergeArray = arrayGenerator(allDivs)
    const animationArray = getMergeAnimationArray(mergeArray);
    console.log(animationArray)
    for(i = 0; i < animationArray.length; i++)
    {
        const [ELEMENT1, ELEMENT2] = animationArray[i]
        if((i+1)%3 == 0){
            allDivs[ELEMENT1].style.height = `${ELEMENT2}px`
            allDivs[ELEMENT1].setAttribute("data", `${ELEMENT2}`);}
        else{
            if(i%3 == 0){
                divColor(allDivs, ELEMENT1, ELEMENT2, COM_COLOR);}
            else{
                divColor(allDivs, ELEMENT1, ELEMENT2, SORTED_COLOR);}}
        await sleep(TIME_DELAY)
    }
    divsFinalColor(allDivs);
}

//auxiliary functions 
async function divsFinalColor(allDivs)
{
    for(div of allDivs){
        div.style.backgroundColor = FINAL_COLOR
        await sleep(1)
    }
    enableBtn()
}
function divColor(divs, a, b, color){
    divs[a].style.backgroundColor = color;
    divs[b].style.backgroundColor = color;
}
function arrayGenerator(divs){
    const array = new Array
    for(let i = 0; i<divs.length; i++){
        array.push(parseInt(divs[i].getAttribute('data')));}
    return array;
}
function greatestArray(array)
{
    var largest = [array[0][1], array[0][2]]
    for(i = 1; i < array.length; i++){
        if(array[i][1] > largest[0] && array[i][2] > largest[1]){
            largest = [array[i][1], array[i][2]]
        }
    }
    return largest
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
function swapDivHeight(first, second){
    var h1 = first.style.height;
    var h2 = second.style.height;
    first.style.height = h2;
    second.style.height = h1;
    first.setAttribute("data",`${h2}`);
    second.setAttribute("data",`${h1}`);
}

//all SORTOS DEPENDENCIES
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
function getQuickSortAlgoAnimation(quickArray)
{
    const animationArray = []
    quickRecursiveLoop(quickArray, 0, quickArray.length-1, animationArray);
    return animationArray;
}
function quickRecursiveLoop(quickArray, lb, ub, animationArray)
{
    if(lb < ub) {
        var loc = partition(quickArray, lb, ub, animationArray);
        quickRecursiveLoop(quickArray, lb, loc-1, animationArray);
        quickRecursiveLoop(quickArray, loc+1, ub, animationArray);
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
function countingRadixSort(radixArray, n, pos, animationArray){
    const count = new Array
    const finalArr = new Array
    for(var i = 0; i < n; i++)finalArr.push(null);
    for(var i = 0; i < 10; i++) count.push(null);
    for(i = 0; i<n; i++) ++count[(Math.floor(radixArray[i]/pos))%10];
    for(i = 1; i<=10; i++) count[i] += count[i-1];
    for(i = n -1; i>=0; i--){
        finalArr[--count[(Math.floor(radixArray[i]/pos))%10]] = radixArray[i]
        animationArray.push([count[(Math.floor(radixArray[i]/pos))%10], radixArray[i]])
        animationArray.push([count[(Math.floor(radixArray[i]/pos))%10], radixArray[i]])
    }
    for(i = 0; i<n; i++){ radixArray[i] = finalArr[i];}
}
function getMergeAnimationArray(mergeArr)
{
    const animationArray = []; 
    mergeRecursiveLoop(mergeArr, 0, mergeArr.length-1, animationArray);
    return animationArray;
}
function mergeRecursiveLoop(mergeArr, lb, ub, animationArray)
{
    if(lb < ub){
        var mid = Math.floor((ub+lb)/2);
        mergeRecursiveLoop(mergeArr, lb, mid, animationArray);
        mergeRecursiveLoop(mergeArr, mid+1, ub, animationArray);
        merge(mergeArr, lb, mid, ub, animationArray);}
}
function insertionSortAlgo(timArray, left, right, animationArray){
    for(let i = left+1; i<=right; i++){
        let temp = timArray[i];
        let j = i -1;
        while(j >= left && timArray[j] > temp){
            animationArray.push([i, j, 0, 0])
            animationArray.push([i, j, 0, 1])
            animationArray.push([j+1, j, 0, 2])
            timArray[j+1] = timArray[j];
            j--;
        }
        animationArray.push([j+1, temp, 0, 3])
        timArray[j+1] = temp;
    }
}
function merge(mergeArr, lb, mid, ub, animationArray)
{
    var i = lb;
    var j = mid+1;
    var k = 0;
    var newArray = new Array;
    while(i <= mid && j <= ub){
        animationArray.push([i,j, 1, 0]);
        animationArray.push([i,j, 1, 1]);
        if(mergeArr[i] <= mergeArr[j]){
            animationArray.push([lb+k, mergeArr[i], 1, 2])
            newArray[k++] = mergeArr[i++];
        }
        else{
            animationArray.push([lb+k, mergeArr[j], 1, 2]);
            newArray[k++] = mergeArr[j++];
        }
    }
    while(i <= mid){
        animationArray.push([i,i, 1, 0])
        animationArray.push([i,i, 1, 0])
        animationArray.push([lb+k, mergeArr[i], 1, 2])
        newArray[k++] = mergeArr[i++];
    }
    
    while(j <= ub){
        animationArray.push([j,j, 1, 0])
        animationArray.push([j,j, 1, 1])
        animationArray.push([lb+k, mergeArr[j], 1, 2])
        newArray[k++] = mergeArr[j++];
    }
    for(i = 0, j = lb; i < k; i++, j++)
    {
        mergeArr[j] = newArray[i];
    }
}