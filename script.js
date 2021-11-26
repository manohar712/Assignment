function person(First_Name ,Last_Name,Office_Address){
    this.First_Name=First_Name,
    this.Last_Name=Last_Name,
    this.Office_Address=Office_Address
}

var per1 = new person("Pali","Manohar","Delhi");
var per2 = new person("Mani","Kumar","Mumbai");
var per3 = new person("Krishna","Teja","Hyderabad");

console.log(per1);
console.log(per2);
console.log(per3);
