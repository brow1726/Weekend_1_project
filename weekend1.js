$(document).ready(function(){

//creating array to store objects
var $form = $('#employeeForm');
var $fName = $('#fName');
var $lName = $('#lName');
var $empNum = $('#employeeNum');
var $title = $('#title');
var $score = $('#lRevScore');
var $salary = $('#salary');
var $clear = $('form').trigger('reset');
var $add = $('#new')




//using form to create object
$form.on('submit', function(e){ 
	e.preventDefault();
	var employees = new employee($fName.val(), $lName.val(), $empNum.val(), $title.val(), $score.val(), $salary.val());
	
	addEmployee(employees);

});

var employee = function(firstName, lastName, employeeNum, title, score, salary){
	this.firstName = firstName;
	this.lastName = lastName;
	this.employeeNum = employeeNum;
	this.title = title;
	this.score = score;
	this.salary = salary;
}

function addEmployee(employee){
	var $li = $('<li>');
	$li.attr('class', 'score'+employee.score);
	$li.text(employee.firstName+' '+employee.lastName+', '+employee.employeeNum+', '+employee.title+', '+employee.score+', '+employee.salary);


	var $button = $('<button>');
	$button.text('remove');
	$button.attr('class', 'remove');

	$li.append($button);

	$add.append($li);
}


$add.on('click', '.remove', function(e){
		e.preventDefault();
		$(this).parent().remove();
		})
});