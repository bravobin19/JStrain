function Student(name, age) {
    this.name = name;
    this.age = age;
  }
Student.prototype; 
const second = new Student('Hieu', 21); 
second.__proto__ === Student.prototype;
// true
