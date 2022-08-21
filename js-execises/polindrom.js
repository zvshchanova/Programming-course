// ------------------------polindrom--------------------------------
// 1 вариант
function polindrom1(str) {
    str = str.toLowerCase(); //  or str.toUpperCase();
    let str2 = str.split(""); // or let str2 = [str];   в массив ['a', 'b', 'b', 'a', 't'] 
    let str3 = str2.reverse(); //  ['t', 'a', 'b', 'b', 'a']
    let str4 = str3.join("") // tabba
    return str == str4 ? true : false;
}
//console.log(`1 вариант ${polindrom1("Abba")}`)

// 2 вариант
const polindrom2 = (str) => { // стрелочная ф.ция или без скобок, так как один параметр  const polindrom2 = str =>{ 
    str = str.toLowerCase(); //  or str.toUpperCase();
    let str2 = str.split("").reverse().join("");
    //console.log(`2 вариант ${str==str2 ? true : false}`)
    return str==str2 ? true : false;
}

// 3  вариант
//let str = "кукb"
//const res = str.split("").reverse().join("");
//console.log(`3 вариант ${res ==str ? true : false}`)

function polindrom(){
    let str = document.getElementById("inpPolindrom").value;
    document.getElementById("pPolindrom").innerHTML= polindrom2(str);
}