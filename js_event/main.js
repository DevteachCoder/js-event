function getColor() {
    const colors = [
        "#34213f", "#48896c",
        "#484e89", "#9095d0",
        "#3F213f", "#18896c",
        "#4B4e89", "#E095d0",
    ]

    return colors[Math.floor(Math.random() * colors.length)]
}


function changeColor() {
    this.style = `background-color: ${getColor()}`
}
items = document.getElementsByClassName("item")
const firstItem = items[0]
const childItem = document.getElementById("item2")
const inputItem = document.getElementById("email")

const wrap = document.querySelector(".wrapper")
wrap.addEventListener('click', ()=> console.log("wrapper bosildi"))

firstItem.addEventListener('click', (e) => {
    console.log(e.target) // -> bosilgan joyini chiqaradi
    console.log(e.currentTarget) // -> har doim elementni uzini umumiy chiqaradi
    console.log(e.preventDefault())
    e.stopPropagation()
    console.log("item bosildi")
})
childItem.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("child item bosildi")
})


function handleClick(){
    console.log("click")

    window.removeEventListener("click", handleClick)
    childItem.style.removeProperty("border-radius")
}

childItem.addEventListener("click", handleClick, {once:true})
for (let i =0; i<items.length; i++) {
    let item = items[i]
    item.addEventListener('click', changeColor)
    // item.onclick = changeColor
}
console.log(childItem.style.getPropertyValue("border-radius"))