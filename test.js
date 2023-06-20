var fizzBuzz = function(n) {
    let result = [];

    for (let i = 0; i <= n; i++) {
        if( i % 3 == 0 && i % 5 == 0){
            result.push('FizzBuzz')
            continue;
        }else if( i % 3 == 0 && i % 5 != 0){
            result.push("Fizz")
            continue;
        }else if( i % 5 == 0 && i % 3 != 0){
            result.push("Buzz")
            continue
        }else{
            result.push(`${[i]}`)
        }
        
    }
    // result.shift()
    return result;
}

// let n = 15;
// console.log(fizzBuzz(n));

var reverseString = function(s) {
   let start = 0;
   let end = s.lenght - 1;
   while(start <= end){
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;

   }
   return s

};

// var swap = function(arr, start, end){
//     let temp = arr[start];
//     arr[start] = arr[end]
//     arr[end] = temp
//     start++
//     end--
// }

let s = ["h","e","l","l","o"]
// console.log(swap(s, 0, ))
console.log(reverseString(s))