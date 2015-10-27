"use strict";

function Calendar(context, year, month){
	this.month = month;
	this.year = year;
	this.num_days = (new Date(year, month + 1, 0)).getDate();
}

Calendar.prototype.draw = function draw(jquery_element){
	
};

module.exports = Calendar;
