prototypeObject = {
	fullName: function(){
		return this.firstName + ' ' + this.lastName		
	}
};
const person = Object.create(prototypeObject);

console.log(person); // {}

// Adding properties to the person object
person.firstName = 'Hieu';
person.lastName = 'Trinh';

person.fullName();

console.log(person.fullName()); // Hieu Trinh


// deep copy 

const a = {
	student: {
	  name: 'Hieu'
	}
  }
  let b = {student: {...a.student}}
  b.student.name = 'Quang'
  console.log(b.student.name) 
  console.log(a.student.name)   

  // array reduce 
  const data = [5, 10, 15, 20, 25];
  const res = data.reduce((total,currentValue) => {
	return total + currentValue;
  });
   
  console.log(res); // 75
 



//arrow function 1 hàm số 
const showMessage = (phrase) => phrase.split("");
console.log(showMessage("Trinh Quoc Hieu"));
// ['Trinh' , 'Quoc', 'Hieu']

//arrow nhiều tham số 

const multiVar = (a,b,c) => {
	return a + b + c ;
  };
console.log("ketqua a + b + c:", multiVar(4,5,6));
// ketqua a+b+c: 15 


//arrow không có tham số 

const alertMsg = () => {
	alert("message here");
  };
  alertMsg();


// object literal 
const studentInfo = (id, name ) => ({id :id , name :name});
console.log("Student info :", studentInfo (19, "qhieu"));



// object.seal 

const user = {
	username : "qhieu19",
	password : "123456",
}

const newUser = Object.seal(user);
newUser.username = "trinh quoc hieu";
newUser.password = "123456789";
newUser.active = true ;

console.log("new", newUser);



// this kế thừa 
const Employ = {
	name: "hieu",
	age: "21",
	setInfo : function (name,age){
		this.name = name;
		this.age = age;
	} ,
	showInfo : function (){
		console.log(this.name);
		console.log(this.age);
	},
};

Employ.showInfo();
	
//hieu
//21


//This” trong class: this chính là instance mà  tạo từ class đó

class Human {
	constructor(name){
		this.name = name; 
	}

	showName(){
		console.log(this.name);
	}
}

let human1 = new Human("hieu");
human1.showName(); //hieu


//objetkey 
const employees = {
	boss: "Michael",
	secretaty: "Pham",
	sale: "Brian",
	accoutant: "Mike",
}
const keys = Object.keys(employees);
console.log("keys: ",keys);
// keys:  
// Array(4)
// 0: "boss"
// 1: "secretaty"
// 2: "sale"D
// 3: "accoutant"
// length: 4



//object values 

const session = {
	id: 1,
	time: '03-June-2022',
	device: "laptop",
	browser: "chrome",

};
const values = Object.values(session);
console.log("values: ",values);
// (4) [1, '03-June-2022', 'laptop', 'chrome']
// 0: 1
// 1: "03-June-2022"
// 2: "laptop"
// 3: "chrome"
// length: 4
// [[Prototype]]: Array(0)

//Strickmode 
"use strict";
function foo(){
    var bar = 0;
    return bar;
}

// Uncaught ReferenceError: bar is not defined
bar = 1;


function foo(){
    "use strict";
    // Uncaught ReferenceError: bar is not defined
    bar = 0;
    return bar;
}

// This will run normally
bar = 1;


//bind method 



//aplly 
const obj = {
	firstName: "Ahihi",
	lastName : "Ihaha",
	
	mMethod: function(firstName, lastName) {
	var firstName = firstName || this.firstName
	var lastName = lastName || this.lastName
	console.log("Hello " + firstName + " " + lastName)
		}
	}
	
const obj1 = {
firstName: "xxx" ,
lastName : "yyy",
};
	
	obj.mMethod() // Hello Ahihi Ihaha
	
	obj.mMethod.call(obj1) // Hello xxx yyy
	
	obj.mMethod.apply(obj1) // Hello xxx yyy
	
	obj.mMethod.call(obj1, "xxx", "yyy") // Hello xxx yyy
	
	obj.mMethod.apply(obj1, ["xxx", "yyy"]) // Hello xxx yyy
	
	

//call , apply set this cho callback 
function print() {
	console.log(this.mVal)
  }
   
const obJ = {
	mVal: "lalala",
   
	mMethod: function(callback) {
	   // truyền đối tượng hiện tại cho hàm phản hồi callback
		callback.call(this)
	  }
  }
   
  obJ.mMethod(print) //sẽ in ra lalala

  // mượn hàm 
  function test(firstParam, secondParam, thirdParam){
	var args = Array.apply(null, arguments);
	
	console.log(args);
	
	}
	
	test(1, 2, 3); // [1, 2, 3]


//Mở rộng hàm
var users = {
    name: "XXX" ,
    showName: function (){
      console.log("My name is:" + this.name);
    }
}
users.showName() // My name is XXX

var oldShowName = user.showName.bind(users);
users.showName = function(){  // ở đây ta thay đổi hàm showName bằng hàm mới
     console.log("before show name");
     oldShowName.call(this);  // giữ nguyên hàm cũ
     console.log("after show name");

}

users.showName();
