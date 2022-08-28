function buttonClick() {
    document.getElementById("funcDrop").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    let iDropdown = document.getElementById("funcDrop");
      if (iDropdown.classList.contains('show')) {
        iDropdown.classList.remove('show');
      }
    }
  }

// create <main></main>
let divMain = document.createElement('main');
divMain.innerHTML = "MAIN section";
//document.body.append(divMain);   // В конце тега body
//document.body.prepend(divMain);  // В начале тега body

 let divHeader = document.querySelector("header");
 divHeader.after(divMain);       
// or
// let divHeader = document.querySelector("footer");
// divHeader.before(divMain);       // ++++

let divMaindiv = document.createElement('div');
divMain.append(divMaindiv);

let divButton = document.createElement('button');
 divButton.type = "button";
 divButton.innerHTML = "Create";

//divMaindiv.prepend(divButton); // вначале
divMaindiv.append(divButton);
//or
//divMaindiv.insertAdjacentElement("afterend",divButton);




let divButton2 = document.createElement('button');
 divButton2.type = "button";
 divButton2.innerHTML = "Create citizen";
 divButton.after(divButton2);

//InsertBefore()
//elem.insertAdjacentElement("afterend", divButton); "beforeend", "beforbegin"
//elem.insertAdjacentHTML()

