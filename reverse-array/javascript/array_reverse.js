var array1 = [1, 2, 3, 4, 5, 6];
var array2 = [89, 2354, 3546, 23, 10, -923, 823, -12];
var array3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

function reverse_array(arr) {
    var arrCopy = arr
    console.log(arrCopy)
    var newArray = [];

    for(var i= arrCopy.length -1; i >= 0; i--) {
        newArray.push(arrCopy[i])
    }
    console.log(newArray)
    return newArray
}

reverse_array(array1);
reverse_array(array2);
reverse_array(array3);
