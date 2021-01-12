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

repeat(hello,5);
repeat(goodbye,5);
