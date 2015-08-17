$(document).ready(function(){});

//form submit

var $form = $('#employeeForm');
//make for each input being submitted
var $fName = $('#fName');


$form.on('submit' function(e){
	e.preventDefault();
	var employee = new employee(
		//enter in .val()'s here

		);
	appendemployee();
});

//constructor for employee     //make on for each input
var employee = function(firstName, LastName, etc){

this.firstName = firstName;
//etc
}

//object to store employees
function appendEmployee(emp){
	var $li = $('<li>');
	$li.text(emp.firstName + '' + emp.lastName + '' + etc);

	var $button = $('<button>');
	$button.text('delete');
	$button.attr('class', 'js-delete');
	$button.attr('id', 'emp.employeeNum');

	li.append($button);

	$employees.append($li);
}
//function to delete employees
$employees.on('click', '.js-delete', function(e){
	e.preventDefault();
	$(this).parent().remove();
});

//colors per rating
$li.attr('class', 'score'+emp.score)



});