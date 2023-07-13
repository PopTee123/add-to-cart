

// Challenge: Import 'initializeApp' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-9c24f-default-rtdb.firebaseio.com/"
}

 

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")






addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)
    
    clearInputFieldEl()

})


/*
Challenge:
Call the onValue function with
shoppingListInDB as the first argument and
function(snapshot) {} as the second argument
*/





onValue(shoppingListInDB, function(snapshot) {
    let itemsArray = Object.values(snapshot.val())
    
    clearShoppingListEl()
    
    for (let i = 0; i < itemsArray.length; i++) {
        appendItemToShoppingListEl(itemsArray[i])
    }
})



function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}


function clearInputFieldEl() {
    inputFieldEl.value = " "
}

function appendItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}



// =================================

// onValue(booksInDB, function(snapshot) {
//     let booksArray = Object.values(snapshot.val())
//           clearBooksListEl()
    
//     // Challenge: Write a for loop where you console log each book.
//     for(let i = 0; i < booksArray.length; i++){
        
//         let currentBook = booksArray[i]
//     appendBookToBooksListEl(currentBook)
   
//     }
// })