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
//  divButton.onclick = function (){
//   console.log("creating but2");
//   let divButton2 = document.createElement('button');
//   divButton2.type = "button";
//   divButton2.innerHTML = "Create citizen";
//   divButton.after(divButton2);
// };
// OR
divButton.addEventListener("click", clickBut); 

//divMaindiv.prepend(divButton); // вначале
divMaindiv.append(divButton);
//or
//divMaindiv.insertAdjacentElement("afterend",divButton);

function clickBut(){
    console.log("creating but2");
    let divButton2 = document.createElement('button');
    divButton2.type = "button";
    divButton2.innerHTML = "Create citizen";
    //divButton2.addEventListener("click", clickBut2);
    divButton.after(divButton2);

    let form = document.createElement('form');
    divMaindiv.after(form);

    let firstName = document.createElement("input");
    firstName.setAttribute("type", "text");
    firstName.setAttribute("name", "FirstName");
    firstName.setAttribute("placeholder", "First Name");
    form.append(firstName);

    let lastName = document.createElement("input");
    lastName.setAttribute("type", "text");
    lastName.setAttribute("name", "LastName");
    lastName.setAttribute("placeholder", "Last Name");
    form.append(lastName);
    let age = document.createElement("input");
    age.setAttribute("type", "text");
    age.setAttribute("name", "age");
    age.setAttribute("placeholder", "Age");
    form.append(age);
  };



//InsertBefore()
//elem.insertAdjacentElement("afterend", divButton); "beforeend", "beforbegin"
//elem.insertAdjacentHTML()

// create a submit button
// var s = document.createElement("input");
// s.setAttribute("type", "submit");
// s.setAttribute("value", "Submit");
                 
// Append the full name input to the form
// form.appendChild(FN);
