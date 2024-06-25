// all helper function write here this function is written in js not react

 function genTicket(n){
let arr=new Array(n);
for(let i=0;i<n;i++){
    arr[i]=Math.floor(Math.random()*10);
}
return arr;
 }

 //return array sum
 function sum(arr){
return arr.reduce((sum,curr)=>sum+curr,0);
 }
 export {genTicket,sum};