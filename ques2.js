const student={
    name: "john",
    age: 23,
    grade: "A"
};
function updategrade(newgrade){
    student.grade=newgrade;
}
updategrade("B");
console.log(student);