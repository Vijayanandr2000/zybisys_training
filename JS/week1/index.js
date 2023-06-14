// Student Database
var studentDatabase = [];

// Function to add a student
function addStudent(name, email, phone, regId) {
  var student = {
    name: name,
    email: email,
    phone: phone,
    regId: regId
  };
  studentDatabase.push(student);
}

// Adding students
addStudent("John Doe", "john.doe@example.com", "1234567890", "REG001");
addStudent("Jane Smith", "jane.smith@example.com", "9876543210", "REG002");
addStudent("Mike Johnson", "mike.johnson@example.com", "5555555555", "REG003");
addStudent("Sarah Williams", "sarah.williams@example.com", "9999999999", "REG004");
addStudent("David Brown", "david.brown@example.com", "1111111111", "REG005");
addStudent("Emily Davis", "emily.davis@example.com", "2222222222", "REG006");
addStudent("Alex Wilson", "alex.wilson@example.com", "3333333333", "REG007");
addStudent("Olivia Taylor", "olivia.taylor@example.com", "4444444444", "REG008");
addStudent("Jacob Anderson", "jacob.anderson@example.com", "6666666666", "REG009");
addStudent("Sophia Martin", "sophia.martin@example.com", "7777777777", "REG010");

function updateStudent(mail,key,value){
  let student = studentDatabase.find(obj => obj.email === mail)
  if(student){
    student[key] = value;

    console.log(studentDatabase);
  }else{
    console.log("No Student found with this email address")
  }

}

updateStudent("sophia.martin1@example.com","name", "Krishna")
return
// Sort students based on name
var sortedStudents = studentDatabase.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});

console.log("Sorted Students (by name):");
console.log(sortedStudents);
console.log("-------------------------------------");

// Filter students based on registration ID
var filteredStudents = studentDatabase.filter(function (student) {
  return student.regId.startsWith("REG00");
});

console.log("Filtered Students (by registration ID starting with REG00):");
console.log(filteredStudents);
console.log("-------------------------------------");

// Map students' names to uppercase
var upperCaseNames = studentDatabase.map(function (student) {
  return student.name.toUpperCase();
});

console.log("Uppercase Names:");
console.log(upperCaseNames);
console.log("-------------------------------------");

// Iterate over students using forEach()
console.log("Students:");
studentDatabase.forEach(function (student) {
  console.log("Name: " + student.name + ", Email: " + student.email + ", Phone: " + student.phone);
});
console.log("-------------------------------------");

// Check if at least one student has a phone number starting with '555'
var hasPhoneNumberStartingWith555 = studentDatabase.some(function (student) {
  return student.phone.startsWith("555");
});

console.log("Does any student have a phone number starting with '555'? " + hasPhoneNumberStartingWith555);
console.log("-------------------------------------");

// Check if all students have an email address
var allStudentsHaveEmail = studentDatabase.every(function (student) {
  return student.email !== undefined;
});

console.log("Do all students have an email address? " + allStudentsHaveEmail);
console.log("-------------------------------------");

// Find a student by email
var studentByEmail = studentDatabase.find(function (student) {
  return student.email === "sarah.williams@example.com";
});

console.log("Student with email 'sarah.williams@example.com':");
console.log(studentByEmail);
console.log("-------------------------------------");

// Calculate the total number of students
var totalStudents = studentDatabase.reduce(function (accumulator) {
  return accumulator + 1;
}, 0);

console.log("Total number of students: " + totalStudents);
