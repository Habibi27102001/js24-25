
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const myCart = document.getElementById("cos");
let totalPrice = 0;

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item => {
        return `<article class="menu-item">
            <img src="${item.img}" alt="${item.title}" class="photo" />
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price} RON</h4>
                </header>
                <p class="item-text">${item.desc}</p>
                <button class="button" onClick="addToCart(${item.price})">Adauga in cos</button>
            </div>
        </article>`;
    }).join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = ["all", ...new Set(menu.map(item => item.category))];
    
    const categoryBtns = categories.map((category, index) => {
        let btn_nr = 'btn' + (index + 1);
        const categoryRo = {
            all: 'Tot',
            breakfast: 'Mic Dejun',
            lunch: 'Pranz',
            dinner: 'Cina',
            shakes: 'Bauturi'
        };
        return `<button type="button" class="filter-btn" data-id="${category}" data-nr="${btn_nr}">
        ${categoryRo[category] || category}
        </button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            counterClick(e.currentTarget);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(item => item.category === category);
            category === "all" ? displayMenuItems(menu) : displayMenuItems(menuCategory);
        });
    });
}

function counterClick(btn) {
    let btnCurrent = document.getElementById(btn.dataset.nr);
    if (btnCurrent) {
        let countNumber = Number(btnCurrent.textContent) || 0;
        btnCurrent.textContent = countNumber + 1;
    }
}

function addToCart(price) {
    totalPrice += price;
    myCart.textContent = totalPrice + " RON";
}

window.addEventListener("DOMContentLoaded", function () {
    if (typeof menu !== 'undefined') {
        displayMenuItems(menu);
        displayMenuButtons();
    } else {
        console.error("Variabila 'menu' nu este definită. Asigură-te că ai inclus data.js.");
    }
});
