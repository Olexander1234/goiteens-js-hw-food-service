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

switcher.addEventListener('change', switcherCheced )

// const value = null
// localStorage.setItem('comment',value)

// 1. Отримуємо дані з localstorage
const theme = localStorage.getItem('currentTheme'); 

// колбек функція яка тоблить класи і зберігає поточний клас в локальному сховищі
function switcherCheced () {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // const theme = localStorage.getItem('theme');
const value = document.body.classList; // це псевдомасив, тому потрібно обрати [0] індекс, 
// але в тебе там якийсь клас на боді ще є fs, тому [1] індекс
console.log(value);
localStorage.setItem('currentTheme',value[1])
}

//  якщо теми в localstorage жодної немає то зберігаємо там світлу тему
// і додаємо на body необхідний клас, в іншому випадку додаємо те що в 
// localstorage
    if(theme === null){
        localStorage.setItem('currentTheme', 'light-theme');
        document.body.classList.add('light-theme')
       
    } else
{
    document.body.classList.add(theme);
};

// якщо тема в localstorage темна то в атрибут checked записуємо true 
if (theme === 'dark-theme') {
    switcher.checked = true;
};