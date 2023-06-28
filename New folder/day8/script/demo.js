function demoexternalAlert(){
	alert("external alert:")
}
function demoexternalConfirm(){
	if(confirm("are you sure?")){
		alert("yesss");
	}
	else
	{
		alert("no");
	}
}
function demoexternalPrompt()
		{
			var fname=prompt("enter first name here:");
			var lname=prompt("enter last name here:");
			alert(fname+" "+lname);
		}