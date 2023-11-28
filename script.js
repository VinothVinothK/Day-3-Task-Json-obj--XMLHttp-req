//Question 1: Comparing two json objects
let obj1 = {name: "person 1",
            age:"5",
           };
let obj2 = {age:"5",
            name: "person 1 ",
           };

const obj1keys = Object.keys(obj1);
const obj2keys = Object.keys(obj2);

if (obj1keys.length ==obj2keys.length){
    console.log("True");
}else{
    console.log("false");

}

//Question 2: Display all county flags in the console
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var data1 = request1.response;
    var result1 = JSON.parse(data1);
    console.log(result1);
    for(var i=0; i<=result1.length;i++){
        console.log(result1[i].flags.png)
    }
}


//Question 3: Print all country names, region, sub-region and population
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
    for(var i=0; i<=result.length;i++){
        console.log(result[i].names, result[i].population, result[i].region, result[i].subregion)
    }
}
