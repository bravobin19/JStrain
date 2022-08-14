// Tìm các cặp phần tử có tổng bằng 1 số cho trước
// VD: [1,7,9,2,5,3,8]; sum = 10   => [1,9] ; [7,3]; [2,8]



const array = [1, 7, 9, 2, 5, 3, 8];
function Sum(arr, target) {
  const sum1 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (target == arr[i] + arr[j]) 
      sum1.push([arr[i], arr[j]]);
    }
  }
  return sum1;
}



console.log(Sum(array, 10));

