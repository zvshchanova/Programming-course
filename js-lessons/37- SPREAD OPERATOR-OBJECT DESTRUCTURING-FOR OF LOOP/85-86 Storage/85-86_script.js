import {checkLs, showMessage} from './85-86_cookie.js';

const setInput = new Set();
const keyLocalstore = 'set'
let res = document.getElementById("result");
let infoStor = document.getElementById("storage");

function result(mess) {
    res.innerHTML += mess + "<br>";
    document.getElementById('input').value = ''
}

document.querySelector('#setClick').onclick = () => {
    let inp = document.getElementById("input").value;
    if (inp !=""){
    setInput.add(inp);
    result(`${inp} was add in Set`);
    infoStor.innerHTML = "";
} else {
    infoStor.innerHTML = "Please input something.";
}
}

document.querySelector('#checkClick').onclick = () => {
    let inp = document.getElementById("input").value;
    let res = setInput.has(inp);
    if (res) {
        result(`${inp} is in Set`)
    } else {
        result(`${inp} is not in Set`)
    }
    infoStor.innerHTML = "";
}

document.querySelector('#delClick').onclick = () => {
    let inp = document.getElementById("input").value;
    let res = setInput.delete(inp);
    if (res) {
        result(`${inp} has just been removed`)
    } else {
        result(`${inp} has not111 been removed`)
    }
    infoStor.innerHTML = "";
}

const resultGet = (mess) => infoStor.innerHTML = mess + "<br>";

// add in storage
document.querySelector('#instorage').onclick = () => {
    console.log(setInput.values)
    const arr = [];
    for (let v of setInput.values()) {
        arr.push(v)
    }

    let valArr = JSON.stringify(arr);
    console.log(arr.length);
    console.log(valArr);
    localStorage.setItem(keyLocalstore, valArr)
    sessionStorage.setItem(keyLocalstore, valArr)
    document.cookie = "myname=Zhanna; max-age=604800; path=/ "

    if (arr.length==0) {
        resultGet(showMessage("Please input something and click on Set"));
    } else {
    if (!checkLs(keyLocalstore) )
        resultGet(showMessage("Problem"));
    resultGet(`Set was add or update in local and session storages`);
}
}
// get info from localstorage
document.querySelector('#fromstorage').onclick = () => {
    const store1 = JSON.parse(localStorage.getItem(keyLocalstore))
    const store2 = JSON.parse(sessionStorage.getItem(keyLocalstore))
    resultGet(`Inform set from local storage: ${store1}. <br> 
    Inform set from session storage: ${store2}.`)
}
// clear info from localstorage
document.querySelector('#delstorage').onclick = () => {
    if (localStorage.getItem(keyLocalstore) != null || sessionStorage.getItem(keyLocalstore) != null) {
        localStorage.clear(keyLocalstore);
        sessionStorage.clear(keyLocalstore)
        resultGet(`Set has been removed from set storage.`)
    } else {
        resultGet(`Set from set storage was null.`)
    }

}