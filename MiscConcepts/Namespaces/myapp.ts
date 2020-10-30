import { SalariedNamespace, ContractualNamespace } from "./myNamespace";

var salEmp = new SalariedNamespace.Employee("Gautam", "Bhalla");
salEmp.showDetails();

var contEmp = new ContractualNamespace.Employee("Shreya", "Ghoshal");
contEmp.showDetails();
