function reversstring(input){
    return input.split('').reverse().join("");
}
const orginalstring="hello world";
const reversdstring=reversstring(orginalstring);
console.log(reversdstring);