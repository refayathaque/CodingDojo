function sum_even(arr){
   var sum = 0;
   for(var i = 9; i < 88; i++) {
       if(i % 2 === 0) {
           sum += i;
       }
   }
   return sum;
}
