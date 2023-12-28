function hasproperty(obj,propertyname){
    return obj.hasOwnproperty(propertyname);
}
const exampleobj={name:"alice",age:23};
console.log(hasproperty(exampleobj,"age"));
console.log(hasproperty(exampleobj,"gamil"));