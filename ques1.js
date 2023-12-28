const car={
    make:"tyota",
    Model:"Cramy",
    Year: 2022
};

function displaycarproperty(car){
    for(const property in car){
        console.log(`${property}:${car[property]}`);
    }
}
displaycarproperty(car)