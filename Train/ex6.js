//Từ ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'] trả về object {'face': 2, 'zalo': 3, 'gmail':1}

const arr0 = ["face", "zalo", "face", "gmail", "zalo", "zalo"];
const result = {};
for (let i = 0; i < arr.length; ++i) {
  if (!result[arr0[i]]) result[arr0[i]] = 0;
  result[arr0[i]]++;
}
console.log(result);



