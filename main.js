
let arr1 = [10, 20, 30, 40, 50]

let newArray = arr1.map(function (value, index, array) {

    return value * 2

});

document.write("Multiple value of arr1 is : " + newArray)

document.write("<br><br>")

//To find UpperCase
document.write( "To find UpperCase","<br><br>")



let arr2 = ["jeeva", "shalini", "shanumgam", "jaya"]

let newValue = arr2.map(function (e, i, a) {

    return e.toUpperCase();
});

document.write("Uppercase of arr2 : "+newValue)


