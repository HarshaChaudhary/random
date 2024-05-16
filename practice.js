// loop questions
// let num=18;
// do{
//     if(num%2==0){
//         console.log("even",num);
//     }else{
//         console.log("odd",num);
//     }
//     num++;
// }while(num>=20);

// for(let row=1;row<=5;row++){
//     for(let star=1;star<=row;star++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// for(let row=1;row<=5;row++){
//     for(let star=5;star>=row;star--){
//         process.stdout.write("*")
//     }
//     console.log();
// }


// let nsp=0;
// let nst=5;
// for(let i=0;i<=5;i++){

//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*");
//     }
   
//     console.log();

//     nsp=nsp+1;
//     nst=nst-1;
// }


// let nsp=2;
// let nst=1;
// for(let row=0;row<=5;row++){

//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*");
//     }
   
//     console.log();

//     if(row<3){
//         nst=nst+2;
//         nsp=nsp-1;
//     }else{
//         nst=nst-2;
//         nsp=nsp+1; 
//     }
// }


// let nsp=1;

// for(let row=0;row<=5;row++){

//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }
//         process.stdout.write("*");
    
   
//     console.log();

//    nsp=nsp+1;
// }


// for(let row=1;row<=5;row++){
//     for(let col=1;col<=5;col++){
//         if((row+col==6)||(row==col)){
//             process.stdout.write("*");
//         }else{
//             process.stdout.write(" ");  
//         }
//     }

//     console.log();
// }


// let ans="";
// let val=1;
// for(let row=1;row<=5;row++){
//     for(let col=1;col<=row;col++){
//         ans=ans+val+"\n";
//         val++;
//         process.stdout.write(ans);  
//     }
//     console.log();
// }
// console.log(ans);

// let ans="";
// for(let row=1;row<=5;row++){
//     for(let col=1;col<=row;col++){
//         ans=ans+col;  
//     }
//     console.log(ans);
// }


// let nst=1;
// let nsp=2;
// for(let row=1;row<=5;row++){
//     for(let sp=1;sp<=nsp;sp++){
//         if(row==3){
//             process.stdout.write("*");
//         }
//         process.stdout.write("\t "); 
//     }

//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*\t");
//     }

//     console.log();

//     if(row<3){
//         nst=nst+1;
//     }else{
//         nst=nst-1;
//     }
// }


// let nsp=0
// let nst=4`
// for(let row=1;row<=5;row++){
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ");
//     }
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*");
//     }
//     console.log();

//     nsp=nsp+1;
// }


// for(let row=1;row<=5;row++){
//     for(let col=1;col<=5;col++){
//         if((row>1 && row<5) && (col>1 && col<5)){
//             process.stdout.write(" ");
//         }else{
//             process.stdout.write("*");
//         }
//     }
//     console.log();
// }



// let nsp=0;
// let nst=5;
// for(let row=1;row<=5;row++){
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ");
//     }
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("* ");
//     }
//     console.log();

//     nsp=nsp+1;
//     nst=nst-1;
// }

// let ans="";
// let fn=0;
// let sn=1;
// for(let row=1;row<=5;row++){
//     for(let col=1;col<=row;col++){
//         ans=ans+fn;
//         let nn=fn+sn;

//         fn=sn;
//         sn=nn;
//     }
//     console.log(ans);
// }


// function question

// function statement/expression
// function First(){
// console.log("hello");
// }
// // First();


// first class function
// let second=function First(){
//     console.log("hello");
//     }
//     second();
//     First();


// function with parameters
// function printage(age){
// console.log(age);
// }
// printage(24);


// anonmyous function =>  function ka naam nhi hota h isme
// let fake=function(){
//     console.log("welcome");
// }
// fake();

// fat arrow function
// let desire=()=>{
//     console.log("super power");
// }
// desire();

// fat arrow function with multi-parameter

// let dice=(name,id,fees)=>{
// console.log(name,id,fees);
// }
// dice("Harsha",3137,"paid");


// fat arrow function with single parameter
// let myname= fname=>console.log(fname);
// myname("Harsha");


// function with loop question
// question 1
// function pattern(n){
//     for(let row=1;row<=n;row++){
//         for(let col=1;col<=row;col++){
//             process.stdout.write("*")
//         }
//         console.log();
//     }
// }

// pattern(8);



// question 2 PRIME RANGE WITHE THE HELP OF FAT ARROW FUNCTION
// let prime = (start,end) =>{
   
//     for(let num=start;num<=end;num++){
//         let nof=0;
// for(let div=2;div*div<=num;div++){
//     if(num%div==0){
//         nof++;
//         break;
//     }
// }
// if(nof==0){
//     console.log("prime",num);
// }else{
//     console.log("not prime",num);
// }
//     }
// }
// prime(20,50);



// PRIME RANGE WITHOUT FAT ARROW FUNCTION

// function PrimeRange(start,end){
//     for(let num=start;num<=end;num++){
//         let nof=0;
//         for(let div=2;div*div<=num;div++){
//             if(num%div==0){
//                 nof++;
//                 break;
//             }
//         }
//         if(nof==0){
//             console.log("prime",num);
//         }else{
//             console.log("not prime",num);
//         }
//     }
// }

// PrimeRange(10,50);

// Prime(10,20);

// question 3 oddeven 

// function OddEven(start,end){
//     for(let num=start;num<=end;num++){
//         if(num%2==0){
//             console.log("even",num);
//         }else{
//             console.log("odd",num);
//         }
//     }
// }

// OddEven(20,30);

// question 4  fibocaii series

// function fibonacii(n){
//     let fn=0;
//     let sn=1;
//     let ans="";
//     for(let row=1;row<=n;row++){

//         for(let col=1;col<=row;col++){
//             ans=ans+fn+" ";
//             let nn=fn+sn;
    
    
//             fn=sn;
//             sn=nn;
//         }
//         console.log(ans);
//     }
    
// }

// fibonacii(8);


// function fun(){
//     console.log("harsha");
//     return "dream";
//     console.log("world");
    
    
// }

// let rv=fun();
// console.log(rv);


// function cube(n){
//     console.log("cube of the number");
//     return n*n*n;
//     console.log("hello");
// }
// let rv=cube(5);
// console.log(rv);

// function countnoofdigits(num){
//     let nod=0;
//     while(num>0){
//         num=Math.floor(num/10);
//         nod++;
//     }
//     return nod;
// }
// let rv=countnoofdigits(12345);
// console.log(rv);




// {dought question
// let num=7818;
// let temp=num;
// let nod=0;
// while(num>0){
//     temp=Math.floor(temp/10);
//     nod++;
// }
// console.log(num);
// console.log(temp);

// function count(num){
//     let nod=0;
//     let temp=num;
//     while(num>0){
//         temp=Math.floor(temp/10);
//         nod++;
//     }
//     return num,temp;
// }

// let rv=count(7818);
// console.log(rv);}

// function printfromfront(num){
//     let temp=num;
//     let nod=0;
//     while(num>0){
//         temp=Math.floor(temp/10);
//         nod++;
//     }
//     let div=Math.pow(10,nod-1);
//     console.log("------".div);
//     while(num>0){
//         let fd=Math.floor(num/div);
//         console.log(fd);
//         num=num%div;
//     }
//     div=Math.floor(div/10);
// }

// printfromfront(12345);


// function oddevencount(num){
//     let oddcount=0;
//     let evencount=0;
//     while(num>0){
//         let n=num%10;
//         if(n%2==0){
//             evencount++;
//         }else{
//             oddcount++;
//         }
//         num=Math.floor(num/10);
//     }
//     return [oddcount,evencount];
//     // return{ans1:oddcount,ans2:evencount}
// }

// let ans=oddevencount(7895324);
// console.log(ans);

// function countfrequency(num,target){
// let count=0;
// while(num>0){
//     let ld=num%10;
//   if(ld==target){
//     count++;
//   }

//     num=Math.floor(num/10);
// }
// return count;
// }

// let rv=countfrequency(786473727,7);
// console.log(rv);

// decimaltoanybase

// function decimaltoanybase(num,base){
//     let ans="";
//     let power=1;
//     while(num>0){
//         let r=num%base;
//         ans=ans+(r*power);
//         num=Math.floor(num/base);
//         power=power*10;
//     }
// return ans;
// }

// let rv=decimaltoanybase(786,8);
// console.log(rv);


function anybasetodecimal(num,base){
    let ans=0;
    let power=1;
    while(num>0){
        let r=num%10;
        ans=ans+(r*power);
        num=Math.floor(num/10);
        power=power*base;
    }
return ans;
}

let rv=anybasetodecimal(512,8);
console.log(rv);

// let str="harsha";
// let arr=str.split("");
// console.log(arr);

// let start=0;
// let end=arr.length-1;
// while(start<=end){
//     let temp=arr[start];
//     arr[start]=arr[end];
//     arr[end]=temp;


//     start++;
//     end--;
// }

// console.log(arr.join(" "));

// MY NAME IS HARSHA 

