var expect = require("../../../../node_modules/chai").expect;
var Calendar = require("../calendar.js");

describe("Calendar", function(){
	describe("#Calendar (constructor)", function(){
		it("Stores the year and month given as arguments and calculates total days", function(){
			var c = new Calendar(this, undefined, 2015, 9);
			expect(c.month).to.equal(9);
			expect(c.year).to.equal(2015);
			expect(c.num_days).to.equal(31);
		});
	});
});
