var test1 = [2,4,6,8];
var test2 = [4,8,15,23,42];
function shiftArray(arr, number) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    let center = (arr.length/2);
    console.log(newArray);
    if( i >= center){
      newArray[i] = number[i+1];
      newArray[i] = arr[i];
    }
    if(i <= center){
      newArray[i] = number[i+1];
      newArray[i] = arr[i];
    }
  }
  return newArray;
}

shiftArray(test1, 5);
shiftArray(test2, 16);