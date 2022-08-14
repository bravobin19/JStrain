// tìm 2 phần tử có tổng lớn nhất trong 1 mảng
// VD: [1,7,9,2,5,3,8] => [9,8]

let array1 = [1, 7, 9, 2, 5, 3, 8];
array1 = array1.sort();//sắp xếp lại các phần tử 

for (let i = 1; i < array1.length; i++) {
  sum = array1[i] + array1[i - 1]; //tổng 2 số lớn nhất 
  num = [];
  maxSum = Math.max(sum);
  firstElements = num.push(Math.max(array1[i])); //tìm 2 số lớn nhất 
  secondElements = num.push(Math.max(array1[i - 1]));// tìm 2 số lớn nhất 
}
console.log("maxSum: " + maxSum + " by " + num);

