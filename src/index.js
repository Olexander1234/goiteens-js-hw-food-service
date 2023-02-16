import galleryItemTpl from "../src/templates/gallery-item";
import food from './js/food.json';
import  '../src/style.css'

// import '../src'
// // const user = {
// //     name: 'Poly',
// //     age: 15 , 
// // }

// // const userToSumbit = JSON.stringify(user);
// // console.log(userToSumbit);

// // const getedUser = JSON.parse( userToSumbit)
// // console.log(getedUser );

// const formRef = document.querySelector('.js-feedback-form')
// const textarearef = document.querySelector(".js-feedback-form textarea")

// getBalueLocal()

// formRef.addEventListener('submit',handelFormsSumbit )
// textarearef.addEventListener('input', handleTexttareaInput)

// function handelFormsSumbit(event) {
//     event.preventDefault()

//     event.currentTarget.reset()
//     localStorage.removeItem('comment')
// }

// function handleTexttareaInput (event) {
// const value = event.currentTarget.value
// localStorage.setItem('comment', value)
// }

// function getBalueLocal () {
//     const value = localStorage.getItem('comment')
//     textarearef.textContent = value;

// }



// const galleryRef = document.querySelector('.js-gallery');

// console.log(galleryItemTpl(countries));
// const markup = galleryItemTpl(countries)

// galleryRef.insertAdjacentHTML('beforeend', markup)



const foodRef = document.querySelector(".js-gallery")

const markup = galleryItemTpl(food)

foodRef.insertAdjacentHTML('beforeend', markup)

const switcher = document.querySelector(".theme-switch__toggle")

switcher.addEventListener('click',switcherCheced )


function switcherCheced () {
    if (switcher.checked === true) {
    document.body.classList.add("dark-theme");
    const value = document.body.classList
        localStorage.setItem('comment', value)
    }
    else{
        document.body.classList.remove("dark-theme");
        localStorage.removeItem('comment')
    }
}

