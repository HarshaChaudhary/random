

// function customer(fname,order,pick,bill){
//  this.firstname=fname;
//  this.desire=order;
//  this.pickdetail=pick;
//  this.paydetail=bill;
// }

// let customer1=new customer("viha",function(){console.log("beauty product");},"picked up","paid");
// console.log(customer1);


// let array=["vikas","puneet","sahil","tanay","ashish"]
// //mutable and immutable 

// array[1]="rohan";
// array[2]="parekh";
// console.log(array);

// let name="vikas chaudhary";
// name="vikzs cyaudhary";
// name[3]="z";
// name[7]="y";
// console.log(name);

// //STRING - INBUILT METHOD
// //LENGTH
// console.log(name.length);
// // charAt
// console.log(fname.charAt(8));
//includes - return true or false

// console.log(fname.includes("kasa"));f


// //indexof
// console.log(fname.indexOf("y"));


// //startswith
// console.log(fname.startsWith("vik"));

// //endsWith
// console.log(fname.endsWith("ary"));


//substring , substr

// console.log(fname.substring(2,9));
// console.log(fname.substring(3));
// console.log("------------------");
// console.log(fname.substring(8,4));
// console.log(fname.substring(-4,-6));
// console.log(fname.substring(-6,-1));


// substr

// console.log(name.substr(2,9));
// console.log(name.substr(4));
// console.log("-------------------------------");
// console.log(name.substr(8,4));
// console.log(name.substr(-4,-6));
// console.log(name.substr(-6,-1));


// let str="vik6as chau6d6hary di6ce acad6emy";
// console.log(str.split("6"));
// console.log(str);


// str= vikas chaudhary dice academy - revser academy dice chaudhary vikas



// let str="vikas chaudhary dice academy";
// let splittedarr= str.split(" ");
// // console.log(splittedarr);


// let start=0;
// let end=splittedarr.length-1;


// while(start<=end){
//     let temp=splittedarr[start];
//     splittedarr[start]=splittedarr[end]
//     splittedarr[end]=temp;


//     start++;
//     end--;

// }

// console.log(splittedarr);





// let str ="vikas chaudhary dice academy";
// let arr= str.split(" ");
// for(let i=0;i<arr.length;i++){
//     let word=arr[i].split("");
//     // console.log(word);
//     let start=0;
//     let end=word.length-1;
//     while(start<=end){
//         let temp=word[start];
//         word[start]=word[end];
//         word[end]=temp;
//         start++;
//         end--;

//     }
//     console.log(word.join(""));
// }





// function Employee(){
//  this.firstname="vikas",
// this.lastname="chaudhary";
// this.age=27;
// this.address="delhi";
// }

// let emp1= new Employee();
// let emp2= new Employee();
// console.log(emp1);
// console.log(emp2);


// function Testing(){
//     console.log("i am testing");
// }
// let t1= new Testing();
// let t2= new Testing();
// console.log(t1);
// console.log(t2);
// console.log(t1==t2);


// function Employee(){
//     this.fristname="vikas";
//     this.lastname="chaudhary";
//     this.age=27;
//     this.task=function(){
//         console.log(" teaching");
//     }
// }

// let emp1= new Employee();
// let emp2= new Employee();
// console.log(emp1);
// console.log(emp2);


// console.log(emp1==emp2);


// function Employee(fname,lname,age,task){
//     this.firstname=fname;
//     this.lastname=lname;
//     this.age=age;
//     this.task=task;


// return this;

// }

// let emp1= new Employee("vikas","chjaudhary",27,function(){console.log("teaching");})
// let emp2= new Employee("puneet","malik",28,function(){
//     console.log(" it");
// })
// // console.log(emp1);
// // console.log(emp2);
// emp1.task();
// console.log(emp1.firstname);
// console.log(emp1.age);




//new.target


// function testing(){
//     console.log(new.target);

// }

// let t1= new testing();
// console.log(t1);


// optional chaining  

// let object={
//     name1:{
//         firstname:"vikAS",
//     lastname:"chaudhary",

//     },
//     nums1:[10,20,30],
//     fun1:function(){
//         console.log(" hello dice ");
//         return "javascript";
//     }
    
// }
// console.log(object.name); //undefined
// console.log(object.name1?.firstname); //undefined.firstname
// console.log(object.name?.lastname);
// console.log(object.nums1?.[0]);
// console.log(object.fun1?.());
// console.log("hellow world");

// let str="harsha chaudhary";
// let arr=str.split(" ");
// // console.log(arr);
// for(let i=0;i<arr.length;i++){
//     let word=arr[i].split("");
//     let start=0;
//     let end=word.length-1;


//     while(start<=end){
//         let temp=word[start];
//         word[start]=word[end];
//         word[end]=temp;


//         start++;
//         end--;
//     }
//     console.log(word.join(""));
// }


// function Employee(fname,lname,position,salary,task){
//     this.firstname=fname;
//     this.lastname=lname;
//     this.position=position;
//     this.salary=salary;
//     this.task=task;
// }

// let emp1=new Employee("Harsha","chaudhary","student","10000",function test(){console.log("learning new skills");
//     return goodmorning;
// });
// console.log(emp1);










