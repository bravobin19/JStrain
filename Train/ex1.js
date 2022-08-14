// Trả về 1 mảng gồm các phần tử giống nhau trong 2 mảng
// VD: array1 = [1,2,3,4,5,6];
//     array2 = [3,4,8,9,12];
//     => [3,4]

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3,4,8,9,12];

const twice = arr1.filter((val) => {
  return arr2.indexOf(val) != -1;
});

console.log("twice ", twice);

