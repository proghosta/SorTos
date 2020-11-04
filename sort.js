function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }










function mergeDriver(allDivs)
{
    const mergeArray = new Array
    for(i = 0; i<allDivs.length; i++)
    {
        mergeArray.push(parseInt(allDivs[i].getAttribute('data')));
    }
    const animationArray = getAnimationArr(mergeArray)
}


function getAnimationArr(mergeArray)
{
    const animationArray = []; 
    actualMergeSort(mergeArray, 0, mergeArray.length-1, animationArray);
    return animationArray;
}

function actualMergeSort(mergeArray, lb, ub, animationArray)
{
    if(lb < ub)
    {
        var mid = Math.floor((lb+ub)/2);
        actualMergeSort(mergeArray, lb, ub, animationArray);
        actualMergeSort(mergeArray, mid+1, ub, animationArray);
        merge(mergeArray, lb, mid, ub, animationArray);
    }
}

function merge(mergeArray, lb, mid, ub, animationArray)
{
    var i = lb;
    var j = mid+1;
    var k = 0;
    var newArray = new Array;
    while(i <= mid && j <= ub){
        animationArray.push([i,j]);
        animationArray.push([i,j]);
        if(mergeArray[i] <= mergeArray[j]){
            animationArray.push([i, mergeArray[i]])
            newArray[k++] = mergeArray[i++];
        }
        else{
            animationArray.push([j, mergeArray[j]]);
            newArray[k++] = mergeArray[j++];
        }
    }
    while(i<= mid){
        animationArray.push([i,i])
        animationArray.push([i,i])
        animationArray.push([i, mergeArray[i]])
        newArray[k++] = mergeArray[i++];
    }
    
    while(j<= ub){
        animationArray.push([j,j])
        animationArray.push([j,j])
        animationArray.push([j, mergeArray[j]])
        newArray[k++] = mergeArray[j++];
    }
    for(i = 0, j = lb; i < k;i++, j++)
    {
        mergeArray[j] = newArray[i];
    }
}


function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  const ANIMATION_SPEED_MS = 3000;   
  // This is the main color of the array bars.
  const PRIMARY_COLOR = 'turquoise';
  // This is the color of array bars that are being compared throughout the animations.
  const SECONDARY_COLOR = 'red';

async function mainSort(allDivs)
{
    var mergeArray = new Array
    for(i = 0; i<allDivs.length; i++)
    {
        mergeArray.push(parseInt(allDivs[i].getAttribute('data')));
    }
    const animations = getMergeSortAnimations(mergeArray);
    for (let i = 0; i < animations.length; i++) {
      // console.log(animations[i])
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = allDivs[barOneIdx].style;
        const barTwoStyle = allDivs[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        // console.log(i, color);
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
          await sleep(3)
      } else {
        
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = allDivs[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          await sleep(3)
      }
    }
}








