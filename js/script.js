let doc = document
let btn1 = doc.querySelector(".btn1")
let firstBtn = doc.querySelector(".firstBtn")
let btn2 = doc.querySelector(".btn2")
let secondBtn = doc.querySelector(".secondBtn")
let color = doc.querySelector(".color")
let silver = doc.querySelector(".silver")
let spacegray = doc.querySelector(".spacegray")
let memorie1 = doc.querySelector("#memorie1")
let memorie2 = doc.querySelector("#memorie2")
let memorie3 = doc.querySelector("#memorie3")
let memorie4 = doc.querySelector("#memorie4")
let price1 = doc.querySelector("#memorie-1-price")
let price2 = doc.querySelector("#memorie-2-price")
let price3 = doc.querySelector("#memorie-3-price")
let price4 = doc.querySelector("#memorie-4-price")
let price_num = doc.querySelector(".price_num")
let popUpWrap = doc.querySelector(".pop-up-wrap")
let popUpClose = doc.querySelector(".pop-up-close")


function active(a, b, c, d) {
    a.classList.remove(c)
    a.classList.add(d)
    b.classList.add(c)
    b.classList.remove(d)
}

btn1.onclick = () => {
    active(btn1, btn2, "btn1", "btn2")
    color.innerHTML = "Silver"
    active(spacegray, silver, "active", "non-active")
}
btn2.onclick = () => {
    active(btn2, btn1, "btn1", "btn2")
    color.innerHTML = "Space Gray"
    active(silver, spacegray, "active", "non-active")
}
function memorieActivate(a, b, c, d) {
    a.classList.add("memorie-active")
    b.classList.remove("memorie-active")
    c.classList.remove("memorie-active")
    d.classList.remove("memorie-active")
}
function memoriePrice(a, b, c, d) {
    price1.innerHTML = a
    price2.innerHTML = b
    price3.innerHTML = c
    price4.innerHTML = d
}
memorie1.onclick = () => {
    memorieActivate(memorie1, memorie2, memorie3, memorie4)
    memoriePrice("", "+$200", "+$600", "+$1,200")
    price_num.innerHTML = "$1,999"
}
memorie2.onclick = () => {
    memorieActivate(memorie2, memorie1, memorie3, memorie4)
    memoriePrice("-$200", "", "+$400", "+$1,000")
    price_num.innerHTML = "$2,199"
}
memorie3.onclick = () => {
    memorieActivate(memorie3, memorie2, memorie1, memorie4)
    memoriePrice("-$600", "-$400", "", "+$600")
    price_num.innerHTML = "$2,599"
}
memorie4.onclick = () => {
    memorieActivate(memorie4, memorie2, memorie3, memorie1)
    memoriePrice("-$1,200", "-$1,000", "-$600", "")
    price_num.innerHTML = "$3,199"
}

function doubleClickFunction(a) {
    a.ondblclick = () => {
        popUpWrap.classList.add("pop-up-wrap-active")
        popUpWrap.style.top = window.pageYOffset + "px"
        doc.body.style.overflow = "hidden"
    }
}
doubleClickFunction(firstBtn)
doubleClickFunction(secondBtn)

popUpClose.onclick = () => {
    popUpWrap.classList.remove("pop-up-wrap-active")
    doc.body.style.overflow = ""
}