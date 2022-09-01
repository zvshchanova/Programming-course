import Citizen from "./citizen.js";

function buttonClick() {
  document.getElementById("funcDrop").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
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

let divHeader = document.querySelector("header");
divHeader.after(divMain);

let divMaindiv = document.createElement('div');
divMain.append(divMaindiv);

let divButton = document.createElement('button');
divButton.type = "button";
divButton.innerHTML = "Create";
divButton.addEventListener("click", clickBut);
divMaindiv.append(divButton);

function clickBut() {

  let divButton2 = document.createElement('button');
  divButton2.type = "button";
  divButton2.innerHTML = "Create citizen";
  divButton2.addEventListener("click", clickBut2);
  divMaindiv.append(divButton2);

  let form = document.createElement('form');
  divMaindiv.after(form);

  let firstName = document.createElement("input");
  firstName.setAttribute("type", "text");
  firstName.setAttribute("name", "FirstName");
  firstName.setAttribute("placeholder", "First Name");
  firstName.setAttribute("ID", "fnid");
  firstName.setAttribute("class", "person");
  form.append(firstName);

  let lastName = document.createElement("input");
  lastName.setAttribute("type", "text");
  lastName.setAttribute("name", "LastName");
  lastName.setAttribute("placeholder", "Last Name");
  lastName.setAttribute("ID", "lnid");
  lastName.setAttribute("class", "person");
  form.append(lastName);

  let age = document.createElement("input");
  age.setAttribute("type", "text");
  age.setAttribute("name", "age");
  age.setAttribute("placeholder", "Age");
  age.setAttribute("ID", "ageid");
  age.setAttribute("class", "person");
  age.style = "display:show;";
  form.append(age);

  let country = document.createElement("input");
  country.setAttribute("type", "text");
  country.setAttribute("name", "country");
  country.setAttribute("placeholder", "Country");
  country.setAttribute("class", "adr");
  // country.style = "display:none;";
  form.append(country);

  let city = document.createElement("input");
  city.setAttribute("type", "text");
  city.setAttribute("name", "city");
  city.setAttribute("placeholder", "City");
  city.setAttribute("class", "adr");
  // city.style = "display:none;";
  form.append(city);

  let street = document.createElement("input");
  street.setAttribute("type", "text");
  street.setAttribute("name", "street");
  street.setAttribute("placeholder", "Street");
  street.setAttribute("class", "adr");
  // street.style = "display:none;";
  form.append(street);

  let hn = document.createElement("input");
  hn.setAttribute("type", "text");
  hn.setAttribute("name", "hn");
  hn.setAttribute("placeholder", "House nm");
  hn.setAttribute("class", "adr");
  // hn.style = "display:none";
  form.append(hn);
};

function clickBut2() {
  const citizen1 = new Citizen(document.getElementById("fnid").value, document.getElementById("lnid").value, document.getElementById("ageid").value, false);
  citizen1.register();
  console.log(citizen1);
  console.log(citizen1.adress);
  console.log(citizen1.adress.country); //   Sweden

  // hide person class
  const nodePerson = document.querySelectorAll(".person");
  console.log(nodePerson)
  for (let i = 0; i < nodePerson.length; i++) {
    nodePerson[i].style.display = "none";
  };
  // show adr class

  const nodeadr = document.querySelectorAll(".adr");
  console.log(nodeadr)
  for (let i = 0; i < nodeadr.length; i++) {
    nodeadr[i].style.display = "show";
  };

  let divButton3 = document.createElement('button');
  divButton3.type = "button";
  divButton3.innerHTML = "Register";
  divButton3.addEventListener("click", clickBut3());
  divMaindiv.append(divButton3)
}
function clickBut3(){
  // for (let i = 0; i < nodePerson.length; i++) {
  //   nodePerson[i].style.display = "show";
  // };
  // for (let i = 0; i < nodeadr.length; i++) {
  //   nodeadr[i].style.display = "none";
  // };

  // alert(`Citizen ${citizen1.firstName} ${citizen1.lastName} registered`);
  //alert(citizen1.firstName);
}


//InsertBefore() hn
//elem.insertAdjacentElement("afterend", divButton); "beforeend", "beforbegin"
//elem.insertAdjacentHTML()

// create a submit button
// var s = document.createElement("input");
// s.setAttribute("type", "submit");
// s.setAttribute("value", "Submit");

// Append the full name input to the form
// form.appendChild(FN);
//divMaindiv.prepend(divButton); // вначале
//divMaindiv.append(divButton);
//or
//divMaindiv.insertAdjacentElement("afterend",divButton);
//document.body.append(divMain);   // В конце тега body
//document.body.prepend(divMain);  // В начале тега body