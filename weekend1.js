$(document).ready(function(){
var newEmployee = [];


$('#employeeForm').submit(function(e){
	var $inputs = $('#employeeForm :input');
	 e.preventDefault();
	var employee = {};
	 newEmployee.push(employee);
	console.log(employee);
	$inputs.each(function(){
		 employee[this.name] = $(this).val();
		 console.log(employee);
		 $('form').trigger('reset')
		
		 console.log(newEmployee);
    });

	});

});