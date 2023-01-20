import { Animal } from "../modules/function.js";
import { pet, petFirst, petSecond, petImg } from "../modules/animalData.js";
// context this.

// let container = document.querySelector('.container')
// const cat = {
//    name: 'Tom',
//    color: ["grey", "black", "blue"],
//    funk: function (age) {
//       console.log(age)
//       let result = `
//       <p>${this.name}: ${age}</p>
//       <p class="cat-age">${age}</p>
//       `
//       container.innerHTML = result
//    }
// }
// cat.funk(2)
// console.log(cat)

let main = document.querySelector('.main')
Animal.prototype.showPet = function () {
      let result = `
   <div class="animals">
      <div class="animals__block">
      <div class="animals__foto">${this.foto}</div>
      <p>${this.name}</p>
      <p>${this.race}</p>
      </div>
   </div>
   `
   main.innerHTML += result
}





pet.showPet()
petFirst.showPet()