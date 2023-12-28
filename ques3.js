function countproperty(obj){
    return Object.keys(obj).length;
}
const exampleobj={a:1,b:2,c:3,d:4};
console.log(countproperty(exampleobj));