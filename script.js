let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener("click", function(){
    let item1 = document.querySelectorAll(".item1")
    document.querySelector(".slide").appendChild(item1[0])
})

prev.addEventListener("click", function(){
    let item1 = document.querySelectorAll(".item1")
    document.querySelector(".slide").prepend(item1[item1.length - 1]) // here the length of item1 = 6
})