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