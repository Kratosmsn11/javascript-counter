//document.getElementById("count-el").innerText = 5

let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count +=  1
    countEl.innerText = count
    
}

function save(){
    let countStr = count + ' - '
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// let errorParagraph = document.getElementById("error")
// function save(){
//     errorParagraph.textContent = " Something went wrong "
// }
// console.log(count)