const arr = [1, 2, 3, 4, 5, 6];
      var result = [];
      let i;

      //This function will return the square of the number
      const square = function(num){
         return num*num;
      }
      for(i=0; i< arr.length; i++){
         result.push(square(arr[i]));
      }
      console.log(result);
      //Expected output: [1, 4, 9, 16, 25, 36]