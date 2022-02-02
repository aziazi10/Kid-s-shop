const menuBtn = findElement(".header__menu-btn")
const closeBtn = findElement(".menu__close-btn")
const menu = findElement(".menu")

const addBtn = findElement(".intro__btn--black")
const likeBtn = findElement(".intro__btn-heart")

const plusBtn = findElement(".intro__btn-plus")
const minusBtn = findElement(".intro__btn-minus")
const btnNmb = findElement(".intro__number")


// Меню
menuBtn.addEventListener("click", function () {
    menu.classList.add("menu-open")
})

closeBtn.addEventListener("click", function () {
    menu.classList.remove("menu-open")
})


// Alert
addBtn.addEventListener("click", function () {
    alert("Korzinaga qo'shildi")
})

likeBtn.addEventListener("click", function () {
    alert("Sevimliga qo'shildi")
})


// Кийимлар сонини кошиш ва айириш
let numb = 1
plusBtn.addEventListener("click", function (evt) {
    let addedCloses = btnNmb.textContent = ++numb
})

minusBtn.addEventListener("click", function remove() {
        if (numb <= 0) {
            return
        } else {
            let removedCloses = --numb
    
            btnNmb.textContent = removedCloses;
        }
})


//Расмни озгартириш