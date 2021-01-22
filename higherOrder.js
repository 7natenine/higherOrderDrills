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

// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
// console.log(filter(myNames, function(name) { return name [0] === 'R'}));

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0; 

  return function (location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log((warningCounter >= 2 || warningCounter == 0) ? `The ${typeOfWarning} hazard alert has triggered ${warningCounter} 
    times today!` : `The ${typeOfWarning} hazard alert has triggered ${warningCounter} 
    time today!`);
  }
}


const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
const snowWarning = hazardWarningCreator('Snow on the Road');

// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Centinela Ave and Olympic Blvd');
// iceWarning('Central Ave and 5th St');
// snowWarning('Olive St and Gold Ave');
// snowWarning('A St and 3rd Ave');
// snowWarning('H St and 6th Ave');

let turtleMove = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2], [0, 1]];

let turtleBack = turtleMove.filter( (n => n[0] >= 0 && n[1] >= 0) )

// console.log(turtleBack);

let moveCount = turtleBack.map( x => x[0] + x[1])

let index = 0;

moveCount.forEach( (x, index)  => console.log((x>1 || x==0)?`Movement #${index++}: ${x} steps`: `Movement #${index++}: ${x} step`))


// let statement = moveCount.forEach( (x, index)  => console.log(x) (index == 0||index >= 1) ? `Movement #${x}: ${index} steps`: 
//                                                                               `Movement #${x}: ${index} step`, index++)

