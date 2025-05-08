console.log("======== write Function with no arguments and no return value ============");
function student(){
    console.log("Student Name : Yuvraj")
}
student();
function user(){
    console.log("User Name: ABC")
}
user()
console.log("======== write Function with  arguments and no return value ============");

function personalDetails(firstName, lastName, collegeName){
console.log("FirstName is:", firstName);
console.log("LastName is:", lastName);
console.log("CollegeName is:", collegeName);
}
personalDetails("Yuvraj", "Chaudhari", "JTMCOE Jalgaon");

console.log("======== write Function with  arguments and no return value ============");
function addThreeValues(n1,n2,n3){
    var result = n1+n2+n3;
    console.log("addThreeValues ", result)
}
addThreeValues(10.23,600,40);
addThreeValues("Hello ", "Good ", "Morning");

console.log("======== write Function with  Bank Datails ============");
function bankDetails(bankName, accountNum, location, pinCode){
    console.log("Bank Name", bankName, "Account Number", accountNum, "Location",location, "Pincode", pinCode);
}
bankDetails("CITI Bank", 3456782345, 'Pune', 431202);
bankDetails("Axis Bank", 7856782345, 'Mumbai', 441202);
bankDetails("HDFC Bank", 8956782345, 'Pune', 631202);