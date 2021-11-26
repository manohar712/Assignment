function person(First_Name ,Last_Name,Office_Address){
    this.First_Name=First_Name,
    this.Last_Name=Last_Name,
    this.Office_Address=Office_Address
}

var per1 = new person("Pali","Manohar","Delhi");
var per2 = new person("Mani","Kumar","Mumbai");
var per3 = new person("Krishna","Teja","Hyderabad");


console.log("Person1:")
console.log("FirstName: " + Per1.FirstName)
console.log("LastName: " + Per1.LastName)
console.log("OfficeAddress: " + Per1.OfficeAddress)

console.log("Person2:")
console.log("FirstName: " + Per2.FirstName)
console.log("LastName: " + Per2.LastName)
console.log("OfficeAddress: " + Per2.OfficeAddress)

console.log("Person3:")
console.log("FirstName: " + Per3.FirstName)
console.log("LastName: " + Per3.LastName)
console.log("OfficeAddress: " + Per3.OfficeAddress)
