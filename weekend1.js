
var array = ["Matt", "Brown", "1234", "Team Lead", 4, "$75000"]

// var fName = array[0];
// var lName = array[1];
// var employeeNum = array[2];
// var title = array[3];
// var lRevScore = array[4];
// var salary = array[5];

var newEmployee = new employee(array);

function employee(array) {
	this.firstName = array[0];
	this.lastName = array[1];
	this.employeeNumber = array[2];
	this.title = array[3];
	this.lastReviewScore = array[4];
	this.salary = array[5];
}
console.log(newEmployee);