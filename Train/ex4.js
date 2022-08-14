// Lấy ra 1 mảng mới từ mảng cho trước sao cho các phần tử chỉ xuất hiện 1 lần (sử dụng Set)
// VD: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]


const arr = [1, 2, 3, 4, 5, 5, 2, 3, 1, 6, 6, 7, 5];

const newarray = Array.from(new Set(arr)); //Array.from() tạo 1 array ko trùng lặp
console.log(newarray);

