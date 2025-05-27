let professor = {
    profName: "Keval Mehta",
    city: "Mumbai",
    country: "India",
    gender: "male",
    isMarried: true,
    degree: {
        enginrring: "csc",
        Phd: "Adv computing",
    },
    certificate:["Hacker Rank", "Participation", "Certificate in IFE course", "Certificate in Adv Programming"],
}

console.log(professor);
console.log(professor.degree);
console.log(`==============Certifiacte=============`)
const lastElement = professor.certificate[professor.certificate.length-1];
for (const element of professor.certificate) {
    console.log(element);    
}
console.log(`==============add property totalExperience: “14 years”=============`)
professor.totalExperience = "14years";
console.log(JSON.stringify(professor, null, 2));
console.log("====== modify age  =========");
professor.city = "Pune";
console.log(professor)
console.log("====== Add  new certificate → “Oracle Certified”  =========");
professor.certificate.splice(2, 0, "Oracle Certified");
console.log(professor.certificate);
console.log(`===Log the last element of the array →certificates==`)
const lastElementArr = professor.certificate[professor.certificate.length-1];
console.log(lastElementArr)