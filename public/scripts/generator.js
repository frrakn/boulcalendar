"use strict";

$(document).ready(function(){
	var date;
	$.ajax({
		url: "ajax/sys_date",
		dataType: "json",
		async: false,
		success: function(data){
			date = new Date(data);
		}
	});
	console.log(date.getMonth());
});
