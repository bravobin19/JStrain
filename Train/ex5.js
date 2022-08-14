// Lấy ra 1 mảng mới gồm các phần tử trùng nhau trong 2 mảng, mỗi phần tử xuất hiện đúng 1 lần ở mảng mới
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
// const arr2 = [3, 5, 9, 10, 88];
// => [3,5,9]

const arr11 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr22 = [3, 5, 9, 10, 88];

const duplicate = arr11.filter((val) => {
  return arr22.indexOf(val) != -1;
});
console.log(duplicate);

const unique = Array.from(new Set(duplicate));
console.log(unique);

//Set trong JavaScript là một loại object dùng để lưu trữ dữ liệu mà không trùng lặp