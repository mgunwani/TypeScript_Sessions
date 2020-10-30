"use strict";
exports.__esModule = true;
var myNamespace_1 = require("./myNamespace");
var salEmp = new myNamespace_1.SalariedNamespace.Employee("Gautam", "Bhalla");
salEmp.showDetails();
var contEmp = new myNamespace_1.ContractualNamespace.Employee("Shreya", "Ghoshal");
contEmp.showDetails();
