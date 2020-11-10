let a = [1, 2, 4, 5, 4];

//find function

let find = (m) => { 
    for(let i=0; i<a.length; i++){ 
       if (a[i] == m){
           let c = i;
           return c; 
       }
          
    }

}

console.log(find(4));

//sum function

let sum= (arr)=>{
    let sum = 0;
    for (let i = 0; i<arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum
}
console.log(sum(a));

//filter function

let filter = (n) => { let d =[];  for(let i =0 ; i<a.length; i++){ if(a[i]>n) { d.push(a[i])  } } return d;}

console.log(filter(2));


//reduce function
let reduce= (arr) => {
    let accumulator = 0;
    let currentValue;
    for (let i = 0; i<arr.length; i++)
    {
        currentValue = arr[i];
        accumulator = accumulator + currentValue;
    }
    return accumulator;
}


console.log(reduce(a));

//lodash chunk function

let chunk = (arr, n)=>{
    let x =[];
    let y =[];
    var count = 0;
    for (let i = 0; i<arr.length; i=i++){
        y.push(arr[i]);
        count++;
        if (n ==count){
            x.push(y);
            y = [];
            count = 0;
        }

   }
   x.push(y);

   return x;

}

console.log(a, 1)
