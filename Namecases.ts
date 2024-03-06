// lower case
let person_Name : string = "Raheel Afzal";
console.log("lower case:", person_Name.toLowerCase());

// upper case
console.log("upper case:", person_Name.toUpperCase());

// Title Case 
console.log("lower case:", person_Name.replace(/\bw/g,c => c.toUpperCase()));