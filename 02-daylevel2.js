//   class Parent{
//     firstname;
//     lastname;
//     age;
//     task;

//     constructor(fname,lname,age,task){
//       this.firstname=fname;
//       this.lastname=lname;
//       this.age=age;
//       this.task=task;



//     //   console.log("i am working only one time");
//     }
//   }

// //   let p1=new Parent("aman","shekawat",20,function(){
// //     console.log("student");
// //   })

// //   let p2=new Parent("reyansh","oberoi",25,function(){
// //     console.log("monster");
// //   })

// //   console.log(p1);
// //   console.log(p2);
// //   p1.task();
// //   p2.task();


//   class Child extends Parent{
//   constructor(firstname,lastname,umar,profile){

//     super();
//    this.firstname=firstname;
//    this.lastname=lastname;
//    this.umar=umar;
//    this.profile=profile;
//   }
//   }

// //   let child1=new Child("ekansh","maheshwari",33,function(){
// //     console.log("the weapon king");
// //   })
// //   console.log(child1);

// //   console.log("=====================================");
// //   child1.task();

// let c1=new Child("ashwath","rana",28,"dreamman");
// console.log(c1);





// yeh words ko reverse kr dega but characters ko reverse nhi krega
// let str="hello dice academy";
// let newstr=str.split(" ");



// let start=0;
// let end=newstr.length-1;

// while(start<=end){
//     let hollow=newstr[start];
//     newstr[start]=newstr[end];
//     newstr[end]=hollow;




//     start++;
//     end--;
// }
// console.log(newstr);





// yeah array me output dega like  

let str="welcome back mr maheshwari";
let arr=str.split(" ");

for(let i=0;i<arr.length;i++){
    let allword=arr[i].split(" ");

    let start=0;
    let end=allword.length-1;

    while(start<=end){
        let wow=arr[start];
        arr[start]=arr[end];
        arr[end]=wow;


        start++;
        end--;
    }

    console.log(allword.join(" "));
}






















