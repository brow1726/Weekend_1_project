$(document).ready(function(){

//creating array to store objects
var newEmployee = [];


//using form to create object
$('#employeeForm').submit(function(e){ 
	var $inputs = $('#employeeForm :input');
	
	e.preventDefault();
	
	var employee = {};
	
	newEmployee.push(employee);
	

	//creating new employee
	$inputs.each(function(){
		 employee[this.name] = $(this).val();
    });
    

    //assigning variable for background color
    var color = revColor(employee);
	console.log(color);

	
	//appending to DOM
	var show = $('#new').append(color)
	show.append('<li> Name: '+employee.firstName+' '+employee.lastName+'</li>');
	show.append('<li>Employee Number: '+employee.employeeNum+'</li>');
	show.append('<li>Title: '+employee.title+'</li>');
	show.append('<li>Review Score: '+employee.lastRevScore+'</li>');
	show.append('<li>Salary: '+employee.Salary+'</li>');
	show.append('<button id = "remove">remove</button>');

	$(".bad li").css("background-color", "red");
	
	
	//clearing form
	$('form').trigger('reset');
	});

	
	//creating remove button functionality
	function remove(){
	$('#remove').click(function(){
		$(this).parent().remove();
		});
	}
	

	//creating function for ul designation
	function revColor(employee) {
		switch(parseInt(employee.lastRevScore)){
			case 1:
			return '<ul class = "worst">'
			break;
			case 2:
			return '<ul class = "bad">'
			break;
			case 3: 
			return '<ul class = "average">'
			break;
			case 4:
			return '<ul class = "better">'
			break;
			case 5:
			return '<ul class = "best">'
			default:
			return '<ul>'
			break;
		}
	}
	
	
});