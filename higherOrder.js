function repeat(fn,n) { 
  for (x=0;x<n;x++){
    fn();
  }
}

function hello(){
  console.log('Hello world')
}

function goodbye() { 
  console.log('Goodbye world')
}

// repeat(hello,5);
// repeat(goodbye,5);


function filter(arr,fn) {
  let newArray = []
  for (x in arr){
    if(fn(arr[x])){
      newArray.push(arr[x])
    }
  }
  return newArray
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean
//   return name[0] === 'R';
// });

console.log(filter(myNames, function(name) { return name [0] === 'R'}));
// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

