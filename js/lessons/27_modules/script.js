/**
 * Create a pet object, populate some HTML to display its properties.
 */
 import pet from "./pet.js";

 const markup = (pet) => {
   return `
   <div>
     <h3>${pet.pet}</h3>
     <ul>
       <li>имя: ${pet.name}</li>
       <li>возраст: ${pet.age} лет</li>
       <li>окрас: ${pet.color}</li>
     </ul>
     <p>У меня есть ${pet.color} ${pet.pet}. Его зовут ${pet.name}. Он ${pet.temperament()} и ${pet.young}. </p>
   </div>
 `;
 };
 
 const main = document.createElement("main");
 main.innerHTML = markup(pet);
 document.body.appendChild(main);