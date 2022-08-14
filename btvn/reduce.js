const data = [5, 10, 15, 20, 25];

const res = data.reducing((total,currentValue) => {
    return total + currentValue;
  });
  
console.log(res); // 75


function reducing(data) {
    if (arr.length == 0) {
       return start;
    }
    else if (arr.length == 1) {
       return arr[0];
    }
    else {
      return func(start, arr[arr.length-1]) + reducing(arr.slice(0, arr.length -1),start,func);
   }
  }



